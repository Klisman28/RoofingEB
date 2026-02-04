
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                <a className="scroll-top scroll-to-target" href="#top">
                    <span className="icon-42" />
                </a>
                
                
            )}
        </>
    )
}