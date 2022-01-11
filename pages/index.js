import Head from "next/head";
import Navigation from "../Components/Navigation";

export default function Home() {
  return (
    <>
      <>
        <div className="cursor-direction bg-indigo-100"></div>
        <Navigation />
        <section className="hero-section relative hero-shape pt-40 pb-24 lg:pt-64 lg:pb-56">
          <div className="container mx-auto relative px-4 z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold font-display text-blueGray-300 mb-10">
                NFT Crafting Card Game
              </h1>
              <p className="text-xl font-body font-normal text-blueGray-600 mb-4">
                Become an NFT Blacksmith, and forge the finest weapons in the
                Metaverse.
              </p>
              <div className="flex flex-wrap items-center justify-center">
                <a
                  href="explore.html"
                  className="btn block text-white font-body font-bold rounded py-4 px-7 mx-3 mt-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  Buy Cards
                </a>
                <a
                  href="create-item.html"
                  className="btn block bg-blueGray-900 text-white font-body font-bold rounded py-4 px-7 mx-3 mt-4 transition duration-500 hover:bg-indigo-500"
                >
                  Start Crafting
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="category-section my-20 lg:my-32">
          <div className="container mx-auto relative px-4 z-10">
            <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
                  <img
                    className="w-4 h-4"
                    src="assets/images/sec-icon1.svg"
                    alt="title"
                  />
                </span>
                <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                  NFT Items
                </h3>
              </div>
              <a
                href="marketplace.html"
                className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
              >
                See All
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <div
                className="category-box relative rounded overflow-hidden"
                data-aos="fade-up" // TODO:FIX THIS GIVES WARNING ON CHROME
              >
                <img
                  className="w-full sm:h-90 object-cover"
                  src="/Card-Charcoal.png"
                  alt="title"
                />
                <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                  <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <a href="explore.html">Raw Materials</a>
                  </h4>
                  <p className="font-body text-blueGray-600"></p>
                </div>
              </div>
              <div
                className="category-box relative rounded overflow-hidden"
                data-aos="fade-up"
              >
                <img
                  className="w-full sm:h-90 object-cover"
                  src="/Card-Tamahagane.png"
                  alt="title"
                />
                <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                  <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <a href="explore.html">Ingots</a>
                  </h4>
                  <p className="font-body text-blueGray-600"></p>
                </div>
              </div>
              <div
                className="category-box relative rounded overflow-hidden"
                data-aos="fade-up"
              >
                <img
                  className="w-full sm:h-90 object-cover"
                  src="/Card-Hammer.png"
                  alt="title"
                />
                <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                  <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <a href="explore.html">Tools</a>
                  </h4>
                  <p className="font-body text-blueGray-600"></p>
                </div>
              </div>
              <div
                className="category-box relative rounded overflow-hidden"
                data-aos="fade-up"
              >
                <img
                  className="w-full sm:h-90 object-cover"
                  src="/Card-Katana.png"
                  alt="title"
                />
                <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                  <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <a href="explore.html">Weapons</a>
                  </h4>
                  <p className="font-body text-blueGray-600"></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="top-seller-section my-20 lg:my-32">
          <div className="container mx-auto relative px-4 z-10">
            <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
                  <img
                    className="w-4 h-4"
                    src="assets/images/sec-icon3.svg"
                    alt="title"
                  />
                </span>
                <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                  NFT Recipes
                </h3>
              </div>
              <a
                href="leaderboard.html"
                className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
              >
                See All
              </a>
            </div>
            <div
              className="infinite-seller-box-table seller-box-table"
              data-aos="fade-up"
            >
              <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
                <div className="flex items-center col-span-4">
                  <h2 className="flex items-center font-display text-xl text-blueGray-900 font-semibold mr-6">
                    <img
                      className="w-4 h-4 mr-2"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />
                    1
                  </h2>
                  <div className="flex-shrink-0 relative mr-6">
                    <img
                      className="w-20 h-25 rounded object-cover"
                      src="/Card-BloomIron.png"
                      alt="title"
                    />
                    <span className="absolute bottom-3 -right-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/verified-icon.svg"
                        alt="title"
                      />
                    </span>
                  </div>
                  <div className="relative block">
                    <h6 className="font-display text-xl text-blueGray-900 font-semibold transition hover:text-indigo-500">
                      <a href="creator-published.html">Bloom Iron</a>
                    </h6>
                  </div>
                </div>

                <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/level-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-900 font-bold">
                      Level 1
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/like-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-900 font-bold">
                      290 Likes
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/item-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-900 font-bold">
                      150 Items
                    </p>
                  </div>
                </div>

                <div className="thumbnail grid gap-4 items-center grid-cols-4 col-span-7 md:col-span-4">
                  <a href="item-single.html">
                    <img
                      className="w-20 h-25 rounded object-cover"
                      src="/Card-Charcoal.png"
                      alt="title"
                    />
                  </a>
                  <a href="item-single.html">
                    <img
                      className="w-20 h-25 rounded object-cover"
                      src="/Card-Charcoal.png"
                      alt="title"
                    />
                  </a>
                  <a href="item-single.html">
                    <img
                      className="w-20 h-25 rounded object-cover"
                      src="/Card-IronOre.png"
                      alt="title"
                    />
                  </a>
                  <a href="item-single.html">
                    <img
                      className="w-20 h-25 rounded object-cover"
                      src="/Card-IronOre.png"
                      alt="title"
                    />
                  </a>
                  <a href="item-single.html">
                    <img
                      className="w-20 h-25 rounded object-cover"
                      src="/Card-IronOre.png"
                      alt="title"
                    />
                  </a>
                </div>
              </div>

              <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
                <div className="flex items-center col-span-4">
                  <h2 className="flex items-center font-display text-xl text-blueGray-900 font-semibold mr-6">
                    <img
                      className="w-4 h-4 mr-2"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />
                    2
                  </h2>
                  <div className="flex-shrink-0 relative mr-6">
                    <img
                      className="w-20 h-25 rounded object-cover"
                      src="/Card-Anvil.png"
                      alt="title"
                    />
                    <span className="absolute bottom-3 -right-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/verified-icon.svg"
                        alt="title"
                      />
                    </span>
                  </div>
                  <div className="relative block">
                    <h6 className="font-display text-xl text-blueGray-900 font-semibold transition hover:text-indigo-500">
                      <a href="creator-published.html">Anvil</a>
                    </h6>
                  </div>
                </div>

                <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/level-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-900 font-bold">
                      Level 2
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/like-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-900 font-bold">
                      290 Likes
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/item-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-900 font-bold">
                      150 Items
                    </p>
                  </div>
                </div>

                <div className="thumbnail grid gap-4 items-center grid-cols-4 col-span-7 md:col-span-4">
                  <a href="item-single.html">
                    <img
                      className="w-20 h-25 rounded object-cover"
                      src="/Card-BloomIron.png"
                      alt="title"
                    />
                  </a>
                  <a href="item-single.html">
                    <img
                      className="w-20 h-25 rounded object-cover"
                      src="/Card-BloomIron.png"
                      alt="title"
                    />
                  </a>
                  <a href="item-single.html">
                    <img
                      className="w-20 h-25 rounded object-cover"
                      src="/Card-BloomIron.png"
                      alt="title"
                    />
                  </a>
                  <a href="item-single.html">
                    <img
                      className="w-20 h-25 rounded object-cover"
                      src="/Card-BloomIron.png"
                      alt="title"
                    />
                  </a>
                  <a href="item-single.html">
                    <img
                      className="w-20 h-25 rounded object-cover"
                      src="/Card-BloomIron.png"
                      alt="title"
                    />
                  </a>
                  <a href="item-single.html">
                    <img
                      className="w-20 h-25 rounded object-cover"
                      src="/Card-BloomIron.png"
                      alt="title"
                    />
                  </a>
                  <a href="item-single.html">
                    <img
                      className="w-20 h-25 rounded object-cover"
                      src="/Card-Silver.png"
                      alt="title"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================= Blog Section ========================*/}
        <section className="blog-section my-20 lg:my-32">
          <div className="container mx-auto relative px-4 z-10">
            <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
                  <img
                    className="w-4 h-4"
                    src="assets/images/sec-icon3.svg"
                    alt="title"
                  />
                </span>
                <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                  Latest Blog
                </h3>
              </div>
              <a
                href="blog.html"
                className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
              >
                See All
              </a>
            </div>
            <div className="blog-infinite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              <div
                className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
                data-aos="fade-up"
              >
                <div className="content-top">
                  <div className="blog-image md:h-64 relative rounded overflow-hidden mb-6">
                    <img
                      className="w-full md:h-64 object-cover"
                      src="assets/images/blog/1.jpg"
                      alt="title"
                    />
                  </div>
                  <div className="blog-content px-6">
                    <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                      <a href="single.html">
                        Mindfulness Activities for Kids & Toddlers with NFT
                      </a>
                    </h3>
                    <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                      <p className="flex items-center mr-4">
                        <img
                          className="w-4 h-4 inline-block mr-1"
                          src="assets/images/date-icon.svg"
                          alt="title"
                        />
                        02 Feb 2022
                      </p>
                      <p className="flex items-center">
                        <img
                          className="w-4 h-4 inline-block mr-1"
                          src="assets/images/comment-icon.svg"
                          alt="title"
                        />
                        27 Comments
                      </p>
                    </div>
                    <p className="font-body text-blueGray-600 mb-5">
                      Poverty of in the better in little. Did out held be
                      entered it small...
                    </p>
                  </div>
                </div>
                <div className="content-bottom px-6 pb-6">
                  <a
                    className="readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover"
                    href="single.html"
                  >
                    Read More
                    <img
                      className=" inline-block w-3 ml-2 mb-1"
                      src="assets/images/readmore-icon.svg"
                      alt="Post Title Here"
                    />
                  </a>
                </div>
              </div>
              <div
                className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
                data-aos="fade-up"
              >
                <div className="content-top">
                  <div className="blog-image md:h-64 relative rounded overflow-hidden mb-6">
                    <img
                      className="w-full md:h-64 object-cover"
                      src="assets/images/blog/2.jpg"
                      alt="title"
                    />
                  </div>
                  <div className="blog-content px-6">
                    <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                      <a href="single.html">
                        Save Thousands Of Lives Through This NFT
                      </a>
                    </h3>
                    <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                      <p className="flex items-center mr-4">
                        <img
                          className="w-4 h-4 inline-block mr-1"
                          src="assets/images/date-icon.svg"
                          alt="title"
                        />
                        02 Feb 2022
                      </p>
                      <p className="flex items-center">
                        <img
                          className="w-4 h-4 inline-block mr-1"
                          src="assets/images/comment-icon.svg"
                          alt="title"
                        />
                        13 Comments
                      </p>
                    </div>
                    <p className="font-body text-blueGray-600 mb-5">
                      Staple was it myself. The both writing and area century...
                    </p>
                  </div>
                </div>
                <div className="content-bottom px-6 pb-6">
                  <a
                    className="readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover"
                    href="single.html"
                  >
                    Read More
                    <img
                      className=" inline-block w-3 ml-2 mb-1"
                      src="assets/images/readmore-icon.svg"
                      alt="Post Title Here"
                    />
                  </a>
                </div>
              </div>
              <div
                className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
                data-aos="fade-up"
              >
                <div className="content-top">
                  <div className="blog-image md:h-64 relative rounded overflow-hidden mb-6">
                    <img
                      className="w-full md:h-64 object-cover"
                      src="assets/images/blog/3.jpg"
                      alt="title"
                    />
                  </div>
                  <div className="blog-content px-6">
                    <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                      <a href="single.html">
                        Honoring Black History Month with Toddlers
                      </a>
                    </h3>
                    <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                      <p className="flex items-center mr-4">
                        <img
                          className="w-4 h-4 inline-block mr-1"
                          src="assets/images/date-icon.svg"
                          alt="title"
                        />
                        02 Feb 2022
                      </p>
                      <p className="flex items-center">
                        <img
                          className="w-4 h-4 inline-block mr-1"
                          src="assets/images/comment-icon.svg"
                          alt="title"
                        />
                        17 Comments
                      </p>
                    </div>
                    <p className="font-body text-blueGray-600 mb-5">
                      At but physics sofa a explorations are trusted curiously
                      ...
                    </p>
                  </div>
                </div>
                <div className="content-bottom px-6 pb-6">
                  <a
                    className="readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover"
                    href="single.html"
                  >
                    Read More
                    <img
                      className=" inline-block w-3 ml-2 mb-1"
                      src="assets/images/readmore-icon.svg"
                      alt="Post Title Here"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 lg:mt-14">
              <button className="btn load-more-btn flex items-center text-white font-body font-bold rounded px-6 py-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
                Load More
                <img
                  className="w-4 h-4 flex-shrink-0 animate-spin ml-2"
                  src="assets/images/spinner-icon.svg"
                  alt="title"
                />
              </button>
            </div>
          </div>
        </section>
        <footer className="footer-section relative footer-shape pb-20 lg:pb-28 pt-40 lg:pt-56">
          <div className="container mx-auto relative px-4 z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-8">
              <div className="footer-widget xl:flex xl:flex-col xl:justify-center xl:col-span-2">
                <a href="index.html" className="block mb-10">
                  <img
                    className="h-10"
                    src="assets/images/header-logo.svg"
                    alt="title"
                  />
                </a>
                <div className="social-share flex items-center">
                  <a
                    className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                    href="#"
                  >
                    <img
                      className="w-4 h-4"
                      src="assets/images/facebook-icon.svg"
                      alt="title"
                    />
                  </a>
                  <a
                    className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                    href="#"
                  >
                    <img
                      className="w-4 h-4"
                      src="assets/images/twitter-icon.svg"
                      alt="title"
                    />
                  </a>
                  <a
                    className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                    href="#"
                  >
                    <img
                      className="w-4 h-4"
                      src="assets/images/instagram-icon.svg"
                      alt="title"
                    />
                  </a>
                  <a
                    className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                    href="#"
                  >
                    <img
                      className="w-4 h-4"
                      src="assets/images/linkein-icon.svg"
                      alt="title"
                    />
                  </a>
                </div>
              </div>
              <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
                <h4 className="font-display text-xl text-blueGray-900 font-semibold">
                  Navigation
                </h4>
                <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
                  <li className="mb-4 mr-4">
                    <a
                      className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                      href="index.html"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-4 mr-4">
                    <a
                      className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                      href="explore.html"
                    >
                      Explore
                    </a>
                  </li>
                  <li className="mb-4 mr-4">
                    <a
                      className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                      href="wallet.html"
                    >
                      Wallet
                    </a>
                  </li>
                  <li className="mb-4 mr-4">
                    <a
                      className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                      href="creator-published.html"
                    >
                      Author
                    </a>
                  </li>
                  <li className="mb-4 mr-4">
                    <a
                      className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                      href="term-condition.html"
                    >
                      Terms{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
                <h4 className="font-display text-xl text-blueGray-900 font-semibold">
                  Explore
                </h4>
                <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
                  <li className="mb-4 mr-4">
                    <a
                      className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                      href="explore.html"
                    >
                      Explore Artwork
                    </a>
                  </li>
                  <li className="mb-4 mr-4">
                    <a
                      className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                      href="item-single.html"
                    >
                      Single Artwork
                    </a>
                  </li>
                  <li className="mb-4 mr-4">
                    <a
                      className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                      href="leaderboard.html"
                    >
                      Explore Creators
                    </a>
                  </li>
                  <li className="mb-4 mr-4">
                    <a
                      className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                      href="creator-published.html"
                    >
                      Single Creators
                    </a>
                  </li>
                  <li className="mb-4 mr-4">
                    <a
                      className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                      href="#"
                    >
                      Community
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
                <h4 className="font-display text-xl text-blueGray-900 font-semibold">
                  Community
                </h4>
                <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
                  <li className="mb-4 mr-4">
                    <a
                      className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                      href="item-single.html"
                    >
                      Item Details
                    </a>
                  </li>
                  <li className="mb-4 mr-4">
                    <a
                      className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                      href="item-single2.html"
                    >
                      Item Details v2
                    </a>
                  </li>
                  <li className="mb-4 mr-4">
                    <a
                      className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                      href="activity.html"
                    >
                      Activity
                    </a>
                  </li>

                  <li className="mb-4 mr-4">
                    <a
                      className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                      href="contact.html"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-widget col-span-1 md:col-span-2">
                <h4 className="font-display text-xl text-blueGray-900 font-semibold">
                  Subscribe Us
                </h4>
                <form className="footer-newsletter flex items-center w-full mb-4 mt-4 xl:mt-10">
                  <input
                    className="bg-transparent border-2 border-r-0 border-indigo-500 transition duration-500 focus:outline-none hover:bg-white rounded-l w-full h-14 p-4"
                    type="text"
                    placeholder="Your e-mail address"
                  />
                  <button
                    className="flex items-center rounded-r h-14 py-4 px-8 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                    type="submit"
                  >
                    <img
                      className="w-6 h-6"
                      src="assets/images/newsletter-icon.svg"
                      alt="title"
                    />
                  </button>
                </form>
                <p className="font-body text-sm text-blueGray-600">
                  Your privacy protected! We dont disclose Email.
                </p>
              </div>
            </div>
            <div className="lg:text-center mt-8 lg:mt-14">
              <p className="font-body text-sm text-blueGray-600">
                © <span id="spanYear">2021</span> Tokenmart - All Rights
                Reserved by{" "}
                <a
                  href="https://themeix.com/"
                  className="text-indigo-500 underline-hover"
                  rel="noopener"
                  target="_blank"
                >
                  themeix
                </a>
              </p>
            </div>
          </div>

          <a
            href="#"
            className="footer-back w-10 h-10 hidden fixed bottom-8 right-8 z-50 bg-blueGray-600 rounded-lg items-center justify-center"
          >
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9L9 1L17 9"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
        </footer>
      </>
    </>
  );
}
