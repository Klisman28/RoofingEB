import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
  return (

    <>
      {/* main header */}
      <header className={`main-header style-three ${scroll ? "fixed-header" : ""}`}>
        {/* header-lower */}
        <div className="header-lower">
          <div className="header__top__content">
            <div className="auto_container">
              <div className="header_top">
                <div className="header_top_left">
                  <ul className="top_left">
                    <li>Based in Pawtucket, RI</li>
                    <li>
                      <Link href="mailto:info@example.com">E_broofing@yahoo.com</Link>
                    </li>
                    <li>
                      <Link href="tel:+774-300-1932">(774) 300-1932</Link>
                    </li>
                  </ul>
                </div>
                <div className="header_top_right">
                  <div className="header_right_info">
                    <ul className="top_right">
                      <li className="login__border">
                        <Link href="/login">Login</Link>
                      </li>
                      <li>
                        <ul className="top_smedia">
                          <li>
                            <Link href="/">
                              <span className="icon-2" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <span className="icon-1" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <span className="icon-3" />
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header__three__outer p_relative">
            <div className="image__bg" />
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <img src="assets/images/white-logo.png" alt="" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <Menu />
                  </div>
                </nav>
              </div>
              <div className="header__right">
                <div className="header__right__button">
                  <div className="header-right_buttom">
                    <div className="btns-box">
                      <Link className="btn-one" href="/">
                        <em>
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </em>
                        <span>Free Estimate</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*sticky Header*/}
        <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
          <div className="auto_container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <img src="assets/images/logo.png" alt="" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area">
                <nav className="main-menu clearfix">
                  <Menu />
                  {/*Keep This Empty / Menu will come through Javascript*/}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />
      </header>
      {/* main-header end */}
    </>
  )
}