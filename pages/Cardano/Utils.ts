//@ts-nocheck

import Loader from "./Loader.js";
import { languageViews } from "./LanguageViews.js";

export function toHex(bytes) {
  return Buffer.from(bytes, "hex").toString("hex");
}
export function fromHex(hex) {
  return Buffer.from(hex, "hex");
}

export function HextoAscii(hex){ return Buffer.from(hex,"hex").toString('utf-8')}

export const addressBech32 = async () => {
  await Loader.load();
  const address = (await window.cardano.getUsedAddresses())[0];
  return Loader.Cardano.Address.from_bytes(
    Buffer.from(address, "hex")
  ).to_bech32();
};

export const getSelfUTXOs = async () => {
  await Loader.load();
  const hexUTXOS = await window.cardano.getUtxos();
  const utxos = hexUTXOS.map((x) =>
    Loader.Cardano.TransactionUnspentOutput.from_bytes(fromHex(x))
  );
  return utxos;
};

export async function initTx(protocolParameters) {
  await Loader.load();
  const txBuilder = Loader.Cardano.TransactionBuilder.new(
    Loader.Cardano.LinearFee.new(
      Loader.Cardano.BigNum.from_str(protocolParameters.linearFee.minFeeA),
      Loader.Cardano.BigNum.from_str(protocolParameters.linearFee.minFeeB)
    ),
    Loader.Cardano.BigNum.from_str(protocolParameters.minUtxo),
    Loader.Cardano.BigNum.from_str(protocolParameters.poolDeposit),
    Loader.Cardano.BigNum.from_str(protocolParameters.keyDeposit),
    protocolParameters.maxValSize,
    protocolParameters.maxTxSize,
    protocolParameters.priceMem,
    protocolParameters.priceStep,
    Loader.Cardano.LanguageViews.new(Buffer.from(languageViews, "hex"))
  );

  return txBuilder;
}
