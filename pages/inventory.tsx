import { useState, useEffect } from "react";
import axios from "axios";
import {selector} from "./constants/selector"
import {   INFURA } from "./constants/routes";
import { Footer } from "../Components/footer";
import { HextoAscii } from "./Cardano/Utils";

import { addressBech32 , toHex, fromHex } from "./Cardano/Utils";

const server = process.env.NEXT_PUBLIC_SERVER_API




function selector_(x,filterOption)  { return (selector(fromHex(x.slice(56)).toString().replace(/\d+/g, ""))
== filterOption)}

function MaterialSelector (x) {return selector_(x,"rawMaterial") || selector_(x,"materialIngot") || selector_(x,"tool")  }

function WeaponsSelector (x) {return selector_(x,"commonWeapon") || selector_(x,"uncommonWeapon") || selector_(x,"rareWeapon") || selector_(x,"epicWeapon") || selector_(x,"legendaryWeapon") ||  selector_(x,"tool")}

function generalSelector(isInventory){ return isInventory ? WeaponsSelector : MaterialSelector}




export default function Inventory({
    selectedAsset,
    setselectedAsset,
    isInventory,
    isRecipeComplete,
  }) {

const [selectedNFTs , setSelectedNFTs] = useState([])
const [NFTs, setNFTs] = useState([]);
const [loadingState, setLoadingState] = useState("not-loaded");
useEffect(() => {
  loadNFTs();
}, []);


async function loadNFTs() {
  console.log("loading NFTs")
  await window.cardano.enable();

  const address = await addressBech32();

  const getAssets = async function () {
    // This function trows an error 404 if the address has not had any tx...  FIX!!!
    try {
      const response = await axios.post(`${server}/api/assetss`, {
        address: address,
      });
      const assets = response.data.amount.map((x) => x.unit);

      return assets;
    } catch (error) {
      console.log(error.response);
      return null;
    }
  };
  const data = await getAssets();
  if (!data) {
    setLoadingState("loaded");
  } else {

    console.log(data)
   
    const data2 = await Promise.all(
      data.map(
        async (x) =>
          await axios.post(`${server}/api/assetss/info`, {
            asset: x,
          })
      )
    );
    let filteredMetadata_ = data2.filter(
      (x) =>
        x.data.onchain_metadata &&
        x.data.onchain_metadata 
       
    );
    let filteredMetadata = filteredMetadata_.map((x) => x.data);

    const assets = data2.map((x) => x.data.asset);

    console.log(filteredMetadata)
    
    setNFTs(filteredMetadata);
    setSelectedNFTs(filteredMetadata)

    setLoadingState("loaded");
  }
}


function filterNFTs (NFTs,filterOption){return  NFTs.filter(x => selector( fromHex( x.asset_name).toString().replace(/\d+/g, "")) == filterOption[0]
||  (selector( fromHex( x.asset_name).toString().replace(/\d+/g, "")).replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(" ")[1] == filterOption[0]  ) 
) 
}


const NFTWrapper = function ({nft , key}){ return(<div className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg" data-aos="fade-up">
<div className="product-top relative bg-white" key={key}>
   <div className="product-image relative rounded overflow-hidden m-6 mb-8">
      <img className="w-full sm:h-90 rounded object-cover" src= {nft.onchain_metadata.image &&
                  `${INFURA}${nft.onchain_metadata.image.replace(
                    "ipfs://",
                    "ipfs/"
                  )}`} alt="title"/>
      
   </div>
   <a href="item-single.html" className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"><img className="w-4 h-4 inline-block mb-1" src="assets/images/bid-icon2.svg" alt="title"/> Place a bid</a>
   <div className="product-content px-6">
      <div className="flex items-center justify-between mb-4"> 
         <div className="flex items-center">
            <a href="creator-published.html" className="relative" data-tooltip="Steven Robart"><img className="border-2 border-white w-10 h-10 object-cover rounded-lg" src="assets/images/author/1.jpg" alt="title"/></a>
            <a href="creator-published.html" className="relative -left-2" data-tooltip="Steven Robart"><img className="border-2 border-white w-10 h-10 object-cover rounded-lg" src="assets/images/author/3.jpg" alt="title"/></a>
            <a href="creator-published.html" className="relative -left-4" data-tooltip="Steven Robart"><img className="border-2 border-white w-10 h-10 object-cover rounded-lg" src="assets/images/author/3.jpg" alt="title"/> <span className="absolute bottom-0 right-1"><img className="w-3 h-3" src="assets/images/verified-icon.svg" alt="title"/></span></a>
         </div>
         <div className="flex items-center"><span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8"><img src="assets/images/heart-icon2.svg" alt="title"/></span><p className="font-body font-bold text-sm text-blueGray-600 ml-2">90 Likes</p></div>
      </div>
      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500"><a href="item-single.html"> {capitalizeFirstLetter( HextoAscii(nft.asset_name).split(/[0-9]/)[0])  } 
      {! Buffer.from(nft.asset_name,"hex").toString('utf-8').match(/\d/g) ?  null : ` #${Buffer.from(nft.asset_name,"hex").toString('utf-8').match(/\d/g).join("")}`  }</a></h3>
      
   </div>
</div>
<div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
   <div>
      <p className="font-body text-sm text-blueGray-600">Current Bid</p>
   </div>
   <div className="text-center">
      <p className="flex items-center font-body font-bold text-blueGray-900 my-1"><img className="w-5 h-5 inline-block mr-1" src="assets/images/cryptocurrency-icon.svg" alt="title"/> 0.008 ETH</p>
      <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
   </div>
</div>
</div>)}


    return (<>
     
    <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
            <div className="container mx-auto relative px-4 z-10">
                <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">Inventory </h2>
                <ul className="hero-breadcrumb font-body text-blueGray-600 flex flex-wrap items-center">
                    <li className="flex items-center mr-2"><a className="transition duration-500  hover:text-indigo-500 underline-hover" href="index.html"> Home</a></li>
                    <li className="flex items-center mr-2"><img className="w-3 h-3 inline-block mr-2" src="assets/images/right-arrow.svg" alt="title" /><a className="transition duration-500  hover:text-indigo-500 underline-hover" href="explore.html"> Inventory</a></li>
                    <li className="flex items-center text-indigo-500 mr-2"><img className="w-3 h-3 inline-block mr-2" src="assets/images/right-arrow.svg" alt="title" /> Explore</li>
                </ul>
            </div>
        </section> <section className="product-section relative mb-20 lg:mb-32">
         <div className="container mx-auto relative px-4 z-10">
            <div className="flex justify-between mb-8 lg:mb-14">
               <div className="flex items-center pr-6">
                  <select  className="multiple-select2 block lg:hidden text-blueGray-600">
                     <option >All </option>
                     <option>Raw Materials </option>
                     <option>Ingots </option>
                     <option>Tools </option>
                     <option>Weapons </option>
                  </select>
                  <div className="hidden lg:flex flex-wrap items-center">
                     <a onClick={() => setSelectedNFTs(NFTs)}  className="btn inline-block text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">All</a>
                     <a onClick={() => setSelectedNFTs(filterNFTs(NFTs,['rawMaterial']))} className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500">Raw Materials</a>
                     <a onClick={() => setSelectedNFTs(filterNFTs(NFTs,['materialIngot']))}  className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500">Ingots</a>
                     <a onClick={() => setSelectedNFTs(filterNFTs(NFTs,['tool']))} className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500">Tools</a>
                     <a onClick={() => setSelectedNFTs(filterNFTs(NFTs,['Weapon']))}  className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500">Weapons</a>
                     
                  </div>
               </div>
				
            </div>
            <div className="product-infinite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            {selectedNFTs.map((NFT,key ) => <NFTWrapper nft={NFT} key = {key}></NFTWrapper>)}
               
            </div>
            <div className="flex justify-center mt-8 lg:mt-14">
               <button className="btn load-more-btn flex items-center text-white font-body font-bold rounded px-6 py-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">Load More <img className="w-4 h-4 flex-shrink-0 animate-spin ml-2" src="assets/images/spinner-icon.svg" alt="title"/></button>
            </div>
         </div>
      </section>
   
   <Footer/>
      </>

) }

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}