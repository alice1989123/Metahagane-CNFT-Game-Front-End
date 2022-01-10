import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <>
      <div className="cursor-direction bg-indigo-100"></div>
      <header className="header-area absolute w-full top-0 pt-4 pb-10">
        <div className="container mx-auto relative px-4 z-20">
          <nav className="flex items-center justify-between relative">
            <Link href="/">
              <a className="flex items-center flex-shrink-0 mr-6">
                <Image
                  className="h-10"
                  width="200"
                  height="100"
                  src="/header-logo.svg"
                  href="index.html"
                  alt="title"
                  priority
                />
              </a>
            </Link>
            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
              <ul className="mobile-menu bg-white lg:bg-transparent shadow lg:shadow-none absolute lg:relative inset-x-0 hidden lg:flex lg:flex-grow items-center text-base text-blueGray-600 font-semibold mt-7 lg:mt-0 mobile-hover">
                <li>
                  <Link href="/buycards">
                    <a className="p-4 flex items-center hover:text-indigo-500 transition duration-500">
                      Buy Cards
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/market-place">
                    <a className="p-4 flex items-center hover:text-indigo-500 transition duration-500">
                      Marketplace
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/inventory">
                    <a className="p-4 flex items-center hover:text-indigo-500 transition duration-500">
                      Inventory
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/craft-materials">
                    <a className="p-4 flex items-center hover:text-indigo-500 transition duration-500">
                      Craft Materials
                    </a>
                  </Link>
                </li>
              </ul>
              <form className="header-newsletter hidden lg:flex items-center">
                <div className="flex flex-1 items-center xl:w-80 bg-white shadow transition duration-500 hover:shadow-lg rounded h-14 p-4 mr-6">
                  <img
                    className="w-6 h-6 flex-shrink-0 p-1"
                    src="/search-icon.svg"
                    alt="title"
                  />
                  <input
                    className="appearance-none bg-transparent border-none w-full text-blueGray-600 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Search items"
                  />
                </div>
              </form>
              <a
                href="wallet.html"
                className="btn hidden xl:flex items-center text-white font-body font-semibold rounded h-14 p-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                type="submit"
              >
                <img
                  className="w-4 h-4 flex-shrink-0  mr-2"
                  src="/wallet-icon.svg"
                  title="title"
                />
                Connect Wallet
              </a>
            </div>
            <button className="bg-blueGray-50 mobile-toggle block lg:hidden">
              <span className="bg-blueGray-600"></span>
              <span className="bg-blueGray-600"></span>
              <span className="bg-blueGray-600"></span>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
