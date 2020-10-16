const Map = () => {
    return (
        <div className=" flex justify-center my-4 map">
            <div className="mapouter"><div className="gmap_canvas"><iframe width={518} height={220} id="gmap_canvas" src="https://maps.google.com/maps?q=2%20Petir%20Road%2C%20Singapore&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/" /></div><style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;height:220px;width:518px;}.gmap_canvas {overflow:hidden;background:none!important;height:220px;width:518px;}" }} /></div>

        </div>
    );
}

export default Map;