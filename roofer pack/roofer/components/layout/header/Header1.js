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
                <li style={{ fontSize: '13px' }}><span className="icon-30"></span> &nbsp;Based in  MA & RI
                </li>
                <li style={{ fontSize: '13px' }}>
                  <span className="icon-29"> <Link href="mailto:E_broofing@yahoo.com">E_broofing@yahoo.com &nbsp;&nbsp;</Link></span> <span className="icon-36"> <Link href="tel:+774-300-1932">(774) 300-1932</Link> </span>

                </li>


              </ul>
            </div>
            <div className="header_top_right">
              <div className="header_right_info">
                <ul className="top_right">
                  <li className="login__border" style={{ fontSize: '13px' }}>
                    <Link href="/login">     🛡️ Licensed &amp; Insured · MA HIC #212610 · RI Reg. #GC-47693
                    </Link>


                  </li>
                  <li>
                    <ul className="top_smedia">
                      <li>
                        <Link href="https://www.facebook.com/ebroofingusa">
                          <span className="icon-2" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.instagram.com/e_broofing">
                          <span className="icon-23" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://nextdoor.com/page/eb-roofing-pawtucket-ri">
                          <span className="icon-8" />
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
                  {/*   <button type="button" className="search-toggler" onClick={handlePopup}>
                    <i className="icon-50" />
                  </button> */}
                </div>
                {/*   <div className="shopping-cart-box">
                  <Link href="/shop">
                    <i className="icon-19" />
                  </Link>
                </div> */}
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
