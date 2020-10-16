const Carousel = () => {
    return (
        <div className="carousel-box">
            <p className="text-l text-orange-500">Code to the Future</p>
            <h1 className="font-bold text-white text-4xl ">Welcome to Turing Ninjas!</h1>
            <button className="bg-yellow-500 text-white hover:bg-red-700  rounded-full">LEARN MORE</button>
            <div id="carouselExampleSlidesOnly" className="carousel slide w-screen" data-ride="carousel" >
                <div className="carousel-inner" >
                    <div className="carousel-item active" data-interval="3000" data-touch="true">
                        <img src="../../assets/ninja1.jpg" className="d-block w-100" alt="Little Kids" />

                    </div>
                    <div className="carousel-item" data-interval="3000" data-touch="true">
                        <img src="../../assets/ninja2.jpg" className="d-block w-100" alt="Little Kids " />

                    </div>
                    <div className="carousel-item" data-interval="3000" data-touch="true">
                        <img src="../../assets/bottom.jpg" className="d-block w-100" alt="Little Kids" />

                    </div>
                </div>
            </div>
        </div>


    );
}

export default Carousel;