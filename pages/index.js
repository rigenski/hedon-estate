import Footer from "@/components/layouts/Footer/Footer";
import Nav from "@/components/layouts/Nav/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="home">
        <div className="hero">
          <div className="container h-100 py-5">
            <div className="h-100 d-flex flex-column justify-content-center align-items-center">
              <h1 className="hero-title mb-0 text-heading-1 font-secondary text-light text-center">
                Hedon Estate
              </h1>
              <div
                className="w-100 mb-2 border border-white"
                style={{ maxWidth: "200px" }}
              ></div>
              <h5 className="mb-0 text-heading-5 text-light fw-light text-center">
                Home of Nation Building Mission
              </h5>
              <div className="my-4 py-4"></div>
              <Link
                href="/reservation"
                className="btn btn-lg btn-outline-light px-4 py-2 "
              >
                Come, Take a Look !
              </Link>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container py-4 py-md-5">
            <div className="d-flex justify-content-center mb-4">
              <div className="position-relative">
                <h3 className="text-heading-3 font-secondary text-dark">
                  About Hedon Estate
                </h3>
                <img
                  src="/assets/img/text-accessories.svg"
                  className="text-accessories position-absolute"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div className="logo-about me-0 me-md-5 mb-3 mb-md-0">
                  <img
                    src="/assets/img/home/about/about-side.png"
                    className="object-cover rounded-4"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <h5 className="text-heading-5 fw-light text-grey">
                  Hedon Estate merupakan cafe dan multifunction space yang
                  menjadi wadah kegiatan komunitas untuk menyalurkan
                  kreatifitasnya.
                  <br />
                  <br />
                  Tempat ini menyediakan fasilitas seperti multifunction hall,
                  class room, studio, cafe, dan lounge dengan nuansa elegant.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div
          id="facility"
          className="facilities"
          style={{ background: "#211510" }}
        >
          <div className="container py-4 py-md-5">
            <div className="mb-4 d-flex flex-column justify-content-center align-items-center mb-md-5">
              <div className="position-relative mb-4">
                <h2 className="text-heading-3 font-secondary text-light">
                  Our Facilities
                </h2>
                <img
                  src="/assets/img/text-accessories.svg"
                  className="text-accessories position-absolute"
                />
              </div>
              <h5
                className="mb-0 text-heading-5 fw-light text-light text-center"
                style={{ maxWidth: "700px" }}
              >
                Kami menyediakan tempat untuk mendukung inovasi dan kreativitas
              </h5>
            </div>
            <div className="row">
              <Link className="col-12 col-md-6 col-lg-4" href="/facility">
                <div className="facilities-item mb-3 mb-lg-4 position-relative">
                  <div className="facilities-bg">
                    <img
                      src="/assets/img/home/facilities/facilities-1.png"
                      alt=""
                      className="w-100 object-cover rounded-4"
                    />
                  </div>
                  <h5 className="text-heading-5 fw-semibold text-light position-absolute">
                    Multifunction Hall
                  </h5>
                </div>
              </Link>
              <Link className="col-12 col-md-6 col-lg-4" href="/facility">
                <div className="facilities-item mb-3 mb-lg-4 position-relative">
                  <div className="facilities-bg">
                    <img
                      src="/assets/img/home/facilities/facilities-2.png"
                      alt=""
                      className="w-100 object-cover rounded-4"
                    />
                  </div>
                  <h5 className="text-heading-5 fw-semibold text-light position-absolute">
                    Class Room
                  </h5>
                </div>
              </Link>
              <Link className="col-12 col-md-6 col-lg-4" href="/facility">
                <div className="facilities-item mb-3 mb-lg-4 position-relative">
                  <div className="facilities-bg">
                    <img
                      src="/assets/img/home/facilities/facilities-3.png"
                      alt=""
                      className="w-100 object-cover rounded-4"
                    />
                  </div>
                  <h5 className="text-heading-5 fw-semibold text-light position-absolute">
                    Studio Room
                  </h5>
                </div>
              </Link>
              <Link className="col-12 col-md-6 col-lg-8" href="/facility">
                <div className="facilities-item mb-3 mb-lg-4 position-relative">
                  <div className="facilities-bg">
                    <img
                      src="/assets/img/home/facilities/facilities-4.png"
                      alt=""
                      className="w-100 object-cover rounded-4"
                    />
                  </div>
                  <h5 className="text-heading-5 fw-semibold text-light position-absolute">
                    Estate Cafe
                  </h5>
                </div>
              </Link>
              <Link className="col-12 col-md-6 col-lg-4" href="/facility">
                <div className="facilities-item mb-3 mb-lg-4 position-relative">
                  <div className="facilities-bg">
                    <img
                      src="/assets/img/home/facilities/facilities-5.png"
                      alt=""
                      className="w-100 object-cover rounded-4"
                    />
                  </div>
                  <h5 className="text-heading-5 fw-semibold text-light position-absolute">
                    Lounge Room
                  </h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div id="event" className="event">
          <div className="container py-4 py-md-5">
            <div className="mb-4 d-flex flex-column justify-content-center align-items-center mb-md-5">
              <div className="position-relative mb-4">
                <h2 className="text-heading-3 font-secondary text-dark">
                  Event & Promo
                </h2>
                <img
                  src="/assets/img/text-accessories.svg"
                  className="text-accessories position-absolute"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="event-item mb-3 mb-lg-4 position-relative">
                  <div className="event-image mb-2">
                    <img
                      src="/assets/img/home/event/event-1.png"
                      alt=""
                      className="w-100 object-cover rounded-4"
                    />
                  </div>
                  <h4 className="mb-2 text-heading-4 font-secondary text-dark">
                    Banner Promo 1
                  </h4>
                  <p className="mb-3 text-paragraph-1 text-dark">
                    Lorem ipsum sit amet dolor convince, Lorem ipsum sit amet
                    dolor convince, Lorem ipsum sit amet dolor convince.
                  </p>
                  <button className="btn btn-outline-dark px-3 py-2 ">
                    View Details
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="event-item mb-3 mb-lg-4 position-relative">
                  <div className="event-image mb-2">
                    <img
                      src="/assets/img/home/event/event-1.png"
                      alt=""
                      className="w-100 object-cover rounded-4"
                    />
                  </div>
                  <h4 className="mb-2 text-heading-4 font-secondary text-dark">
                    Banner Promo 1
                  </h4>
                  <p className="mb-3 text-paragraph-1 text-dark">
                    Lorem ipsum sit amet dolor convince, Lorem ipsum sit amet
                    dolor convince, Lorem ipsum sit amet dolor convince.
                  </p>
                  <button className="btn btn-outline-dark px-3 py-2 ">
                    View Details
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="event-item mb-3 mb-lg-4 position-relative">
                  <div className="event-image mb-2">
                    <img
                      src="/assets/img/home/event/event-1.png"
                      alt=""
                      className="w-100 object-cover rounded-4"
                    />
                  </div>
                  <h4 className="mb-2 text-heading-4 font-secondary text-dark">
                    Banner Promo 1
                  </h4>
                  <p className="mb-3 text-paragraph-1 text-dark">
                    Lorem ipsum sit amet dolor convince, Lorem ipsum sit amet
                    dolor convince, Lorem ipsum sit amet dolor convince.
                  </p>
                  <button className="btn btn-outline-dark px-3 py-2 ">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="contact">
          <div className="h-100 w-100 container py-4 py-md-5">
            <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
              <h2 className="mb-4 text-heading-2 font-secondary text-light text-center">
                Collaboration Space for Creativity and Innovation
              </h2>
              <h5 className="mb-5 text-heading-5 fw-normal text-light text-center">
                Nikmati Pengalaman Baru dalam Satu Estate
              </h5>
              <button className="btn btn-outline-light px-3 py-2 ">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
