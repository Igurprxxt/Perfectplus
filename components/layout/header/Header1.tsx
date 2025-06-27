"use client";
import dynamic from "next/dynamic";
const ThemeSwitch = dynamic(() => import("@/components/elements/ThemeSwitch"), {
  ssr: false,
});
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  handleOffcanvas,
  isOffcanvas,
}: any) {
  return (
    <>
      <header
        className={`header header-fixed sticky-bar ${scroll ? "stick" : ""}`}
      >
        <div className="top-bar top-bar-2 top-bar-3 bg-transparent"></div>
        <div className="container-fluid">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" href="/">
                  <img
                    className="light-mode"
                    alt="Carento"
                    src="/assets/imgs/template/logo.png"
                    style={{
                      width: "200px",
                      height: "75px",
                      objectFit: "contain",
                    }}
                  />
                </Link>
              </div>

              <div className="header-nav">
                <nav className="nav-main-menu">
                  <ul className="main-menu">
                    <li className="">
                      <Link className="color-orange" href="#">
                        Home
                      </Link>
                    </li>
                    {/* has-children arrow-white */}
                    <li className="mega-li-small ">
                      <Link className="color-orange" href="#">
                        About Us
                      </Link>
                      {/* <div className="mega-menu">
                        <div className="mega-menu-inner mega-menu-inner-small">
                          <div className="row">
                            <div className="col-lg-6">
                              <h6 className="text-lg-bold neutral-1000">
                                Cars List
                              </h6>
                              <ul className="sub-menu">
                                <li>
                                  <Link href="/cars-list-1">Cars List v1</Link>
                                </li>
                                <li>
                                  <Link href="/cars-list-2">Cars List v2</Link>
                                </li>
                                <li>
                                  <Link href="/cars-list-3">Cars List v3</Link>
                                </li>
                                <li>
                                  <Link href="/cars-list-4">Cars List v4</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6">
                              <h6 className="text-lg-bold neutral-1000">
                                Car Details
                              </h6>
                              <ul className="sub-menu">
                                <li>
                                  <Link href="/cars-details-1">
                                    Car Details v1
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/cars-details-2">
                                    Car Details v2
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/cars-details-3">
                                    Car Details v3
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/cars-details-4">
                                    Car Details v4
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </li>
                    <li className="">
                      <Link className="color-orange" href="#">
                        Company
                      </Link>
                      {/* <ul className="sub-menu">
                        <li>
                          <Link href="/dealer-listing">Dealers Listing</Link>
                        </li>
                        <li>
                          <Link href="/dealer-details">Dealer Details</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="">
                      <Link className="color-orange" href="#">
                        Blogs
                      </Link>
                      {/* <ul className="sub-menu">
                        <li>
                          <Link href="/shop-list">Shop Grid</Link>
                        </li>
                        <li>
                          <Link href="/shop-details">Product Details</Link>
                        </li>
                      </ul> */}
                    </li>
                    {/* <li className="has-children arrow-white">
                      <Link className="color-orange" href="#">
                        Pages
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/about-us">About Us</Link>
                        </li>
                        <li>
                          <Link href="/services">Our Services</Link>
                        </li>
                        <li>
                          <Link href="/pricing">Pricing</Link>
                        </li>
                        <li>
                          <Link href="/calculator">Loan Calculator</Link>
                        </li>
                        <li>
                          <Link href="/faqs">FAQs</Link>
                        </li>
                        <li>
                          <Link href="/term">Term</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                          <Link href="/login">Login</Link>
                        </li>
                        <li>
                          <Link href="/register">Register</Link>
                        </li>
                        <li>
                          <Link href="/404">Error 404</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="mega-li-small has-children arrow-white">
                      <Link className="color-orange" href="#">
                        News
                      </Link>
                      <div className="mega-menu">
                        <div className="mega-menu-inner mega-menu-inner-small mega-menu-inner-destinations">
                          <div className="row">
                            <div className="col-lg-12">
                              <h6 className="text-lg-bold neutral-1000">
                                Cars Rental
                              </h6>
                              <ul className="sub-menu">
                                <li>
                                  <Link href="/blog-grid">News Grid</Link>
                                </li>
                                <li>
                                  <Link href="/blog-list">News List</Link>
                                </li>
                                <li>
                                  <Link href="/blog-details">News Details</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li> */}
                    <li>
                      <Link className="color-orange" href="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <div className="d-none d-xxl-inline-block align-middle mr-15">
                  <Link
                    className="btn btn-signin bg-orange text-light"
                    href="/pricing"
                  >
                    Enroll Here
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
                {/* <div
                  className="burger-icon-2 burger-icon-white"
                  onClick={handleOffcanvas}
                >
                  <img
                    src="/assets/imgs/template/icons/menu.svg"
                    alt="Carento"
                  />
                </div>
                <div
                  className="burger-icon burger-icon-white"
                  onClick={handleMobileMenu}
                >
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid"> </span>
                  <span className="burger-icon-bottom"> </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
