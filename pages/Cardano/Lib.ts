//@ts-nocheck
import Loader from "./Loader.js";
import { addressBech32, fromHex, getSelfUTXOs, initTx, toHex } from "./Utils";
import { getParams } from "../api/server.js";
import CoinSelection from "./CoinSelection";



export async function sendLovelaces( lovelaces: string): Promise<void> {
    await Loader.load();
  const address = process.env.NEXT_PUBLIC_TAMAHAGANE_ADDRESS
  const reciverAddress = Loader.Cardano.Address.from_bech32(address);
  const selfaddressBech32 = await addressBech32();
  const selfaddress = Loader.Cardano.Address.from_bech32(selfaddressBech32);
  const utxos = await getSelfUTXOs();
  const value = Loader.Cardano.Value.new(
    Loader.Cardano.BigNum.from_str(lovelaces)
  );
  const protocolParameters = await getParams();
  CoinSelection.setProtocolParameters(
    protocolParameters.minUtxo,
    protocolParameters.linearFee.minFeeA,
    protocolParameters.linearFee.minFeeB,
    protocolParameters.maxTxSize
  );
  const output = Loader.Cardano.TransactionOutput.new(reciverAddress, value);
  const outputs = Loader.Cardano.TransactionOutputs.new();
  outputs.add(output);
  const inputs = await CoinSelection.randomImprove(utxos, outputs, 20);

  const txBuilder = await initTx(protocolParameters);

  console.log(inputs);

  inputs.input.forEach((input) =>
    txBuilder.add_input(selfaddress, input.input(), input.output().amount())
  );
  txBuilder.add_output(output);
  txBuilder.add_change_if_needed(selfaddress)
  const txBody = txBuilder.build()
  const witnesesSet = Loader.Cardano.TransactionWitnessSet.new()
  const tx = Loader.Cardano.Transaction.new(txBody , witnesesSet )
  const txBech32 = toHex(   tx.to_bytes() )
  const VkeyHex = await window.cardano.signTx( txBech32)
  const txVkeyWitnesses = Loader.Cardano.TransactionWitnessSet.from_bytes(
    fromHex(VkeyHex)
  );
  witnesesSet.set_vkeys(txVkeyWitnesses.vkeys());
  const signedTx = Loader.Cardano.Transaction.new(
    tx.body(),
    witnesesSet,
    tx.auxiliary_data()
  );
   
  try {
    const txHash = await window.cardano.submitTx(toHex(signedTx.to_bytes()));
    console.log(`Transaction submited, with TxHash ${txHash}`);
  return txHash;
  } catch (e) {
    console.log( e);
  }

  
}

