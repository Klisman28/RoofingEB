export default function Preloader() {
    return (
        <>
            {/* preloader */}
            <div className="loader-wrap">
                <div className="preloader">
                    <div className="preloader-close">x</div>
                    <div id="handle-preloader" className="handle-preloader home-1">
                        <div className="loading">
                            <span />
                            <span />
                            <span />
                            <h2>EB&R Roofing...</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* preloader end */}
        </>

    )
}
