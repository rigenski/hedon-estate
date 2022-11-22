import Nav from "@/components/layouts/Nav/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
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
                href="/"
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
                    src="/assets/img/about/about-side.png"
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
        <div className="facilities" style={{ background: "#211510" }}>
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
              <div className="col-12 col-md-6 col-lg-4">
                <div className="facilities-item mb-3 mb-lg-4 position-relative">
                  <div className="facilities-bg">
                    <img
                      src="/assets/img/facilities/facilities-1.png"
                      alt=""
                      className="w-100 object-cover rounded-4"
                    />
                  </div>
                  <h5 className="text-heading-5 fw-semibold text-light position-absolute">
                    Multifunction Hall
                  </h5>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="facilities-item mb-3 mb-lg-4 position-relative">
                  <div className="facilities-bg">
                    <img
                      src="/assets/img/facilities/facilities-2.png"
                      alt=""
                      className="w-100 object-cover rounded-4"
                    />
                  </div>
                  <h5 className="text-heading-5 fw-semibold text-light position-absolute">
                    Class Room
                  </h5>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="facilities-item mb-3 mb-lg-4 position-relative">
                  <div className="facilities-bg">
                    <img
                      src="/assets/img/facilities/facilities-3.png"
                      alt=""
                      className="w-100 object-cover rounded-4"
                    />
                  </div>
                  <h5 className="text-heading-5 fw-semibold text-light position-absolute">
                    Studio Room
                  </h5>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-8">
                <div className="facilities-item mb-3 mb-lg-4 position-relative">
                  <div className="facilities-bg">
                    <img
                      src="/assets/img/facilities/facilities-4.png"
                      alt=""
                      className="w-100 object-cover rounded-4"
                    />
                  </div>
                  <h5 className="text-heading-5 fw-semibold text-light position-absolute">
                    Estate Cafe
                  </h5>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="facilities-item mb-3 mb-lg-4 position-relative">
                  <div className="facilities-bg">
                    <img
                      src="/assets/img/facilities/facilities-5.png"
                      alt=""
                      className="w-100 object-cover rounded-4"
                    />
                  </div>
                  <h5 className="text-heading-5 fw-semibold text-light position-absolute">
                    Lounge Room
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event">
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
                      src="/assets/img/event/event-1.png"
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
                      src="/assets/img/event/event-1.png"
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
                      src="/assets/img/event/event-1.png"
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
        <div className="contact">
          <div className="h-100 w-100 container py-4 py-md-5">
            <div class="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
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
        <div className="footer" style={{ background: "#202020" }}>
          <div class="container py-4 py-md-5">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="mx-auto my-3 d-flex flex-column justify-content-center align-items-center mx-md-3">
                <div className="logo-icon mb-2">
                  <img src="/assets/img/logo-icon.png" alt="" />
                </div>
                <div className="logo-text mb-2">
                  <img src="/assets/img/logo-text.png" alt="" />
                </div>
                <h5 className="text-heading-6 font-secondary text-light">
                  Collaboration Space for <br /> Creativity and Innovation
                </h5>
              </div>
              <div className="mx-3 my-3">
                <h2 className="mb-4 text-heading-2 font-secondary text-light">
                  Contact Us
                </h2>
                <div className="mb-2 d-flex align-items-center">
                  <div className="social-icon">
                    <img src="/assets/img/social/social-instagram.svg" alt="" />
                  </div>
                  <p className="ms-2 mb-0 text-paragraph-1 text-white">
                    @hedonestate
                  </p>
                </div>
                <div className="mb-2 d-flex align-items-center">
                  <div className="social-icon">
                    <img src="/assets/img/social/social-phone.svg" alt="" />
                  </div>
                  <p className="ms-2 mb-0 text-paragraph-1 text-white">
                    +62 822-7783-8396
                  </p>
                </div>
                <div className="mb-2 d-flex align-items-center">
                  <div className="social-icon">
                    <img src="/assets/img/social/social-mail.svg" alt="" />
                  </div>
                  <p className="ms-2 mb-0 text-paragraph-1 text-white">
                    hedonestate@gmail.com
                  </p>
                </div>
              </div>
              <div className="mx-3 my-3">
                <p className="mb-3 text-paragraph-1 fw-bold text-white">
                  HEDON ESTATE SURABAYA
                </p>
                <p
                  className="mb-0 text-paragraph-1 text-white"
                  style={{ maxWidth: "328px" }}
                >
                  Jl. Ngagel Timur. No.23, Pucang Sewu, Kec. Gubeng, Kota SBY,
                  Jawa Timur 60283
                </p>
              </div>
              <div className="mx-3 my-3" style={{ maxWidth: "400px" }}>
                <div class="row">
                  <div class="col-6 col-md-4 mb-2">
                    <Link
                      href="/"
                      className="mb-3 text-paragraph-1 fw-bold text-white"
                    >
                      Tentang Hedon
                    </Link>
                  </div>
                  <div class="col-6 col-md-4 mb-2">
                    <Link
                      href="/"
                      className="mb-3 text-paragraph-1 fw-bold text-white"
                    >
                      Event Hedon
                    </Link>
                  </div>
                  <div class="col-6 col-md-4 mb-2">
                    <Link
                      href="/"
                      className="mb-3 text-paragraph-1 fw-bold text-white"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div class="col-6 col-md-4 mb-2">
                    <Link
                      href="/"
                      className="mb-3 text-paragraph-1 fw-bold text-white"
                    >
                      Program Hedon
                    </Link>
                  </div>
                  <div class="col-6 col-md-4 mb-2">
                    <Link
                      href="/"
                      className="mb-3 text-paragraph-1 fw-bold text-white"
                    >
                      Hedon Company
                    </Link>
                  </div>
                  <div class="col-6 col-md-4 mb-2">
                    <Link
                      href="/"
                      className="mb-3 text-paragraph-1 fw-bold text-white"
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
