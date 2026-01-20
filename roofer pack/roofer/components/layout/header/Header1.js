import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
       
        <>
        {/* main header */}
        <header className={`main-header style-one ${scroll ? "fixed-header" : ""}`}>
          {/* header-lower */}
          <div className="header-lower">
            <div className="header_top">
              <div className="header_top_left">
                <ul className="top_left">
                  <li>2464 Royal Ln. Mesa, New Jersey 45463</li>
                  <li>
                    <Link href="mailto:info@example.com">info@example.com</Link>
                  </li>
                  <li>
                    <Link href="tel:+91-213-666-0027">+91-213-666-0027</Link>
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
            <div className="outer-box">
              <div
                className="logo-box"
                style={{ backgroundImage: "url(assets/images/shape/shape-01.png)" }}
              >
                <figure
                  className="logo"
                  style={{ backgroundImage: "url(assets/images/shape/shape-02.png)" }}
                >
                  <Link href="/">
                    <img src="assets/images/logo.png" alt="" />
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
                  <div className="serach-button-style1">
                    <button type="button" className="search-toggler" onClick={handlePopup}>
                      <i className="icon-50" />
                    </button>
                  </div>
                  <div className="shopping-cart-box">
                    <Link href="/shop">
                      <i className="icon-19" />
                    </Link>
                  </div>
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
