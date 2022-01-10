import { sendLovelaces } from "./Cardano/Lib";
import { Footer } from "../Components/footer";
export default function Home() {
  return (
    <>
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Buy Cards
          </h2>
          <ul className="hero-breadcrumb font-body text-blueGray-600 flex flex-wrap items-center">
            <li className="flex items-center mr-2">
              <a
                className="transition duration-500  hover:text-indigo-500 underline-hover"
                href="index.html"
              >
                {" "}
                Home
              </a>
            </li>
            <li className="flex items-center mr-2">
              <img
                className="w-3 h-3 inline-block mr-2"
                src="assets/images/right-arrow.svg"
                alt="title"
              />
              <a
                className="transition duration-500  hover:text-indigo-500 underline-hover"
                href="buycards.html"
              >
                Buy Cards
              </a>
            </li>
            <li className="flex items-center text-indigo-500 mr-2">
              <img
                className="w-3 h-3 inline-block mr-2"
                src="assets/images/right-arrow.svg"
                alt="title"
              />
              Explore
            </li>
          </ul>
        </div>
      </section>
      <section className="product-section relative mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="product-infinite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="flex justify-center items-center product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-90 rounded object-cover"
                    src="/Metahagane Packet.png"
                    alt="title"
                  />
                </div>
                <button
                  onClick={() => sendLovelaces("7000000")}
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    src="assets/images/bid-icon2.svg"
                    alt="title"
                  />{" "}
                  Buy Now!
                </button>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <a
                        href="creator-published.html"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </a>
                      <a
                        href="creator-published.html"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </a>
                      <a
                        href="creator-published.html"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <a href="item-single.html">
                      Metahagane - Series One 1 x Packet
                    </a>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Price
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    7 ADA
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$9.99</p>
                </div>
              </div>
            </div>
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="flex justify-center items-center product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-90 rounded object-cover"
                    src="/Metahagane Packet.png"
                    alt="title"
                  />
                </div>
                <button
                  onClick={() => sendLovelaces("14000000")}
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    alt="title"
                    src="assets/images/bid-icon2.svg"
                  />{" "}
                  Buy Now!
                </button>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <a
                        href="creator-published.html"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </a>
                      <a
                        href="creator-published.html"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </a>
                      <a
                        href="creator-published.html"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <a href="item-single.html">
                      Metahagane - Series One 2 x Packet
                    </a>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Price
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    14 ADA
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$19.98</p>
                </div>
              </div>
            </div>
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="flex justify-center items-center product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-90 rounded object-cover"
                    src="/Metahagane Packet.png"
                    alt="title"
                  />
                </div>
                <button
                  onClick={() => sendLovelaces("21000000")}
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    src="assets/images/bid-icon2.svg"
                    alt="title"
                  />{" "}
                  Buy Now !
                </button>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <a
                        href="creator-published.html"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </a>
                      <a
                        href="creator-published.html"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </a>
                      <a
                        href="creator-published.html"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <a href="item-single.html">
                      Metahagane - Series One 3 x Packets
                    </a>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    21 ADA
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$29.97</p>
                </div>
              </div>
            </div>
            <div
              className="product-box gradient-box flex justify-between flex-col bg-white shadow rounded transition hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="product-top relative bg-white">
                <div className="flex justify-center items-center product-image relative rounded overflow-hidden m-6 mb-8">
                  <img
                    className="w-full sm:h-90 rounded object-cover"
                    src="/Metahagane Packet.png"
                    alt="title"
                  />
                </div>
                <button
                  onClick={() => sendLovelaces("35000000")}
                  className="product-meta absolute left-0 right-0 m-auto bottom-24 w-36 block text-white text-center font-body font-medium rounded py-2 px-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  <img
                    className="w-4 h-4 inline-block mb-1"
                    src="assets/images/bid-icon2.svg"
                    alt="title"
                  />{" "}
                  Buy Now !
                </button>
                <div className="product-content px-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <a
                        href="creator-published.html"
                        className="relative"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/1.jpg"
                          alt="title"
                        />
                      </a>
                      <a
                        href="creator-published.html"
                        className="relative -left-2"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                      </a>
                      <a
                        href="creator-published.html"
                        className="relative -left-4"
                        data-tooltip="Steven Robart"
                      >
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />{" "}
                        <span className="absolute bottom-0 right-1">
                          <img
                            className="w-3 h-3"
                            src="assets/images/verified-icon.svg"
                            alt="title"
                          />
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                        <img src="assets/images/heart-icon2.svg" alt="title" />
                      </span>
                      <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                        90 Likes
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <a href="item-single.html">
                      Metahagane - Series One 5 x Packets
                    </a>
                  </h3>
                </div>
              </div>
              <div className="product-bottom bg-white flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                <div>
                  <p className="font-body text-sm text-blueGray-600">
                    Current Bid
                  </p>
                </div>
                <div className="text-center">
                  <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                    <img
                      className="w-5 h-5 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    35 ADA
                  </p>
                  <p className="font-body text-sm text-blueGray-600">≈$49.95</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 lg:mt-14">
            <button className="btn load-more-btn flex items-center text-white font-body font-bold rounded px-6 py-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
              Load More{" "}
              <img
                className="w-4 h-4 flex-shrink-0 animate-spin ml-2"
                src="assets/images/spinner-icon.svg"
                alt="title"
              />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
