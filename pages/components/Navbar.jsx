const Navbar = ({ scrollState, router }) => {
    return (
        <div>
            <div className={`navbar-main ${scrollState}`} >
                <div className="w-full p-3 flex justify-center bg-orange-300 mx-auto">
                    <a className="bg-red-600 no-underline text-white rounded p-2 px-3 font-bold" href="https://turingninjas.com/contact">BOOK A FREE TRIAL CLASS TODAY!</a>
                </div>
                <div className="container">
                    <nav id="navbar-example" className="navbar smart-scroll navbar-expand-lg">
                        <a className="navbar-brand" href="/"><img className="w-11/12" src="../assets/logo.png" alt="turing-ninjas-logo" /></a>
                        <button className="navbar-toggler focus:outline-none" type="button" data-toggle="collapse" data-target="#navDropdown" aria-controls="navDropdown" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-bars text-red-600" ></i></button>
                        <div className="collapse navbar-collapse mb-2 mb-lg-0" id="navDropdown">
                            <ul className="navbar-nav ml-auto font-bold nav-list">
                                <li className={router.pathname == "/" ? "active bg-red-600 text-white hover:bg-white hover:text-red-500 font-bold py-0 px-3 rounded-full nav-item " : "nav-item px-3"} data-toggle="collapse" data-target="#navbarNavDropdown">
                                    <a className="nav-link hover:text-white" href="/">HOME</a></li>
                                <li className={router.pathname == "https://turingninjas.com/about" ? "active bg-red-600 hover:bg-red-700 text-white font-bold py-0 px-3 rounded-full nav-item " : "nav-item px-3"} data-toggle="collapse" data-target="#navbarNavDropdown">
                                    <a className="nav-link hover:text-red-600" href="#about">ABOUT US</a></li>
                                <li className={router.pathname == "/classes" ? "bg-red-600 hover:bg-red-700 text-white font-bold py-0 px-3 rounded-full nav-item " : "nav-item px-3"} data-toggle="collapse" data-target="#navbarNavDropdown">
                                    <a className="nav-link hover:text-red-600" href="https://turingninjas.com/classes">CLASSES</a></li>
                                <li className={router.pathname == "/blog" ? "bg-red-600 hover:bg-red-700 text-white font-bold py-0 px-3 rounded-full nav-item " : "nav-item px-3"} data-toggle="collapse" data-target="#navbarNavDropdown">
                                    <a target="_blank" href="https://medium.com/turing-ninjas" className="nav-link hover:text-red-600">BLOG</a></li>
                                <li className={router.pathname == "/contact" ? "bg-red-600 hover:bg-red-700 text-white font-bold py-0 px-3 rounded-full nav-item " : "nav-item px-3"} data-toggle="collapse" data-target="#navbarNavDropdown">
                                    <a className="nav-link hover:text-red-600" href="https://turingninjas.com/contact">CONTACT</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;