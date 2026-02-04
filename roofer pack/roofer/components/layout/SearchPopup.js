import Link from "next/link"

export default function SearchPopup({ isPopup, handlePopup }) {
    return (
        <>
        {/* search-popup */}
        <div id="search-popup" className={`search-popup ${isPopup ? "popup-visible" : ""}`}>
          <div className="close-search" onClick={handlePopup}>
            <i className="icon-close" />
          </div>
          <div className="popup-inner">
            <div className="overlay-layer" />
            <div className="search-form">
              <form method="post" action="/">
                <div className="form-group">
                  <fieldset>
                    <input
                      type="search"
                      className="form-control"
                      name="search-input"
                      defaultValue=""
                      placeholder="Search Here"
                      required=""
                    />
                    <input
                      type="submit"
                      defaultValue="Search Now!"
                      className="theme-btn style-four"
                    />
                  </fieldset>
                </div>
              </form>
              <h3>Recent Search Keywords</h3>
              <ul className="recent-searches">
                <li>
                  <Link href="/">Safety Tips</Link>
                </li>
                <li>
                  <Link href="/">Filteration</Link>
                </li>
                <li>
                  <Link href="/">Accessories</Link>
                </li>
                <li>
                  <Link href="/">Tools</Link>
                </li>
                <li>
                  <Link href="/">Design</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* search-popup end */}
      </>
      
    )
}
