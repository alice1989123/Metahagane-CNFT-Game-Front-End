import { Footer } from "../../Components/footer";
import { assets } from "../../pages/constants/assets.js";
import { useState, useEffect } from "react";
import axios from "axios";
//import {selector} from "./constants/selector"
import { INFURA } from "./../constants/routes";
import { HextoAscii } from "../Cardano/Utils";
import { addressBech32, toHex, fromHex } from "../Cardano/Utils";

const server = process.env.NEXT_PUBLIC_SERVER_API;

function getAssetsPaths() {
  const FilteredAssets = assets.filter((x) => x.recipe);
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return FilteredAssets.map((x) => {
    return {
      params: {
        id: x.value,
      },
    };
  });
}

export function getPostData(id) {
  const selectedAsset = assets.filter((x) => x.value == id);

  // Combine the data with the id
  return {
    id,
    ...{ selectedAsset: selectedAsset },
  };
}

function Element() {
  return <div> sfas </div>;
}

export default function Craft({ postData }) {
  const [selectedNFTs, setSelectedNFTs] = useState([]);
  const [assetsToBurn, setAssetstoButn] = useState([]);
  const [NFTs, setNFTs] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    console.log("loading NFTs");
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
      console.log(data);

      const data2 = await Promise.all(
        data.map(
          async (x) =>
            await axios.post(`${server}/api/assetss/info`, {
              asset: x,
            })
        )
      );
      let filteredMetadata_ = data2.filter(
        (x) => x.data.onchain_metadata && x.data.onchain_metadata
      );
      let filteredMetadata = filteredMetadata_.map((x) => x.data);

      const assets = data2.map((x) => x.data.asset);

      console.log(filteredMetadata);

      setNFTs(filteredMetadata);
      setSelectedNFTs(filteredMetadata);

      setLoadingState("loaded");
    }
  }
  const asset = postData.selectedAsset[0];
  console.log(postData);
  console.log(asset);
  const NFTWrapper = function ({ nft, key }) {
    return (
      /*  <div
        className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
        data-aos="fade-up"
      >
        <div className="product-top relative bg-white" key={key}> */
      <div className="transition duration-500 hover:scale-125 relative rounded overflow-hidden m-6 mb-8">
        <img
          className="w-20 h-25  sm:h-90 rounded object-cover"
          src={
            nft.onchain_metadata.image &&
            `${INFURA}${nft.onchain_metadata.image.replace("ipfs://", "ipfs/")}`
          }
          alt="title"
        />
      </div>
      /* </div>
      </div> */
    );
  };

  return (
    <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32 ">
      <div className=" flex flex-row px-4 z-10  min-h-[46rem]">
        <div className=" basis-1/3 transition duration-500 hover:shadow-sm rounded p-5">
          <div className="container  max-h-96	 relative px-4 z-10">
            <div>
              <h2 className="text-center font-display text-xl lg:text-4xl text-blueGray-900 font-bold mb-6 ">
                Inventory
              </h2>
            </div>
            <div className="grid  grid-cols-3 overflow-y-auto max-h-[36rem]				">
              {selectedNFTs.map((NFT, key) => (
                <NFTWrapper nft={NFT} key={key}></NFTWrapper>
              ))}
            </div>
          </div>
        </div>
        <div className="   transition duration-500 hover:shadow-sm rounded p-5">
          <div className="container flex mx-auto relative pt-6 px-4 mb-4 z-10">
            <div className="container flex justify-center	">
              <h2 className=" text-center font-display text-xl lg:text-4xl text-blueGray-900 font-bold ">
                {asset.label}
              </h2>
            </div>
            <div className="container flex justify-center	">
              <img
                className="transition duration-500 hover:scale-125 relative rounded overflow-hidden m-6 mb-8 w-60 h-75 rounded object-cover"
                src={asset.src}
                alt="title"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center mt-4"></div>
            <div className="text-center mt-4">
              <button className="flex flex-col items-stretch  bg-green-100 transition hover:bg-indigo-100 rounded-lg w-44 h-50 mx-auto mb-1">
                <img className="w-30" src="/anvil.png" alt="title" />
                <div className="font-display text-xl text-blueGray-900 font-bold">
                  Forge
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="  transition duration-500 hover:shadow-sm rounded p-5">
          <div className="container mx-auto relative px-4 z-10">
            <h2 className=" text-center font-display text-xl lg:text-4xl text-blueGray-900 font-bold mb-6">
              Recipe Ingredients
            </h2>
            <div className="grid grid-cols-4 gap-2 ">
              <div className="thumbnail grid gap-4 items-center grid-cols-2 col-span-7 md:col-span-4  h-200">
                {asset.recipe.map(function (x, i) {
                  return Array.from(Array(x).keys()).map((y) => (
                    <div className="flex justify-center	">
                      <img
                        className="transition duration-500 hover:scale-125 relative rounded overflow-hidden m-6 mb-8 w-20 h-25 rounded object-cover"
                        src={assets[i].src}
                        alt="title"
                      />
                    </div>
                  ));
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAssetsPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
