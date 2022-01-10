import { Footer } from "../Components/footer";
import { assets } from "./constants/assets";
export default function craftMaterialas() {
  function Item(asset, key) {
    const asset_ = JSON.parse(asset.asset);
    console.log(asset_);

    return (
      <>
        {asset_.recipe && (
          <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
            <div className="flex items-center col-span-4">
              <h2 className="flex items-center font-display text-xl text-blueGray-900 font-semibold mr-6">
                <img
                  className="w-4 h-4 mr-2"
                  src="assets/images/up-icon.svg"
                  alt="title"
                />{" "}
                #09{" "}
              </h2>
              <div className="flex-shrink-0 relative mr-6">
                <a href={`./craft-materials/${asset_.value}`}>
                  <img
                    className=" w-20 h-25 rounded object-cover"
                    src={asset_.src}
                    alt="title"
                  />
                </a>
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
                  <a href="creator-published.html">{asset_.label}</a>
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
              {asset_.recipe.map(function (x, i) {
                return Array.from(Array(x).keys()).map((y) => (
                  <a href="item-single.html">
                    <img
                      className="transition duration-500 hover:scale-125 relative rounded overflow-hidden m-6 mb-8 w-20 h-25 rounded object-cover"
                      src={assets[i].src}
                      alt="title"
                    />
                  </a>
                ));
              })}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Craft Materials{" "}
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
                href="explore.html"
              >
                {" "}
                Craft Materials
              </a>
            </li>
            <li className="flex items-center text-indigo-500 mr-2">
              <img
                className="w-3 h-3 inline-block mr-2"
                src="assets/images/right-arrow.svg"
                alt="title"
              />{" "}
              Explore
            </li>
          </ul>
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
                Crafting Recipes
              </h3>
            </div>

            <a
              href="leaderboard.html"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </a>
          </div>

          {assets.map((asset, key) => (
            <Item asset={JSON.stringify(asset)} key={key}></Item>
          ))}
        </div>
      </section>
      <script src="assets/js/build.min.js"></script>
      <Footer />
    </>
  );
}
