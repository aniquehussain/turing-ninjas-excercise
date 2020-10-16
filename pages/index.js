import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from "next/link";
import { useRouter } from "next/router";
import Map from './components/Map';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';


const Home = () => {

  const router = useRouter();

  let listener = null
  const [bar, setbar] = useState("");
  const [scrollState, setScrollState] = useState("")

  useEffect(() => {

    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 280) {
        setScrollState("fixed-top bg-light");
        setbar("hidden")
      } else {
        setScrollState("")
        setbar("")
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])

  return (
    <div >
      <Head>
        <title>Turing Ninjas</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1,shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/fd87467771.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />


      </Head>
      <body>

        <div className="w-screen">
          <div id="topbar" className={`bg-yellow-500 text-white h-10 py-1 ${bar}`}>
            <div className="container ">
              <div className="row align-items-center ">
                <div className="col-sm-8 col-md-8 col-8 ">
                  <div>
                    <div className="contact">
                      <a href="tel:+6587761573" className="m-4"><i className="fa fa-phone px-2" /><span className="contact-text">Call us</span><span className="contact-details">+65 8776 1573</span></a>
                      <a href="mailto:turingninjas.com"><i className="fa fa-envelope-o px-2" /><span className="contact-text">Email us</span>
                        <span className="contact-details">turingninjas@gmail.com</span></a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4 col-4">
                  <div className="social flex sm:flex-no-wrap -mt-1">
                    <a target="_blank" className="px-3 py-2  flex-shrink bg-red-600 w-10 hover:bg-red-700" href="https://www.facebook.com/turingninjas/"><i className="fa fa-facebook" /></a>
                    <a className="px-3 py-2 hover:bg-orange-700 flex-shrink bg-orange-600" target="_blank" href="https://www.instagram.com/turingninjas"><i className="fa fa-instagram" /></a>
                    <a className="px-3 py-2 hover:bg-blue-700 flex-shrink  bg-blue-500" target="_blank" href="https://www.linkedin.com/company/turingninjas/"><i className="fa fa-linkedin" /></a>
                    <a className="px-3 py-2 hover:bg-red-800 flex-shrink bg-red-700" target="_blank" href="https://www.youtube.com/channel/UCCnUVk6Z4JfRvlEDtsr7Kcg"><i className="fa fa-youtube" /></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <Navbar scrollState={scrollState} router={router} />
        </div>
        <main>
          <div className="w-screen">
            <Carousel />
          </div>
          <Map />
        </main>
        <Footer />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </body >
    </div >
  )
}
export default Home;