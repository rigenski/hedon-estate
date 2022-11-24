import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer" style={{ background: "#202020" }}>
      <div className="container py-4 py-md-5">
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
                <img
                  src="/assets/img/home/social/social-instagram.svg"
                  alt=""
                />
              </div>
              <p className="ms-2 mb-0 text-paragraph-1 text-white">
                @hedonestate
              </p>
            </div>
            <div className="mb-2 d-flex align-items-center">
              <div className="social-icon">
                <img src="/assets/img/home/social/social-phone.svg" alt="" />
              </div>
              <p className="ms-2 mb-0 text-paragraph-1 text-white">
                +62 822-7783-8396
              </p>
            </div>
            <div className="mb-2 d-flex align-items-center">
              <div className="social-icon">
                <img src="/assets/img/home/social/social-mail.svg" alt="" />
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
              Jl. Ngagel Timur. No.23, Pucang Sewu, Kec. Gubeng, Kota SBY, Jawa
              Timur 60283
            </p>
          </div>
          <div className="mx-3 my-3" style={{ maxWidth: "400px" }}>
            <div className="row">
              <div className="col-6 col-md-4 mb-2">
                <Link
                  href="/"
                  className="mb-3 text-paragraph-1 fw-bold text-white"
                >
                  Tentang Hedon
                </Link>
              </div>
              <div className="col-6 col-md-4 mb-2">
                <Link
                  href="/"
                  className="mb-3 text-paragraph-1 fw-bold text-white"
                >
                  Event Hedon
                </Link>
              </div>
              <div className="col-6 col-md-4 mb-2">
                <Link
                  href="/"
                  className="mb-3 text-paragraph-1 fw-bold text-white"
                >
                  Contact Us
                </Link>
              </div>
              <div className="col-6 col-md-4 mb-2">
                <Link
                  href="/"
                  className="mb-3 text-paragraph-1 fw-bold text-white"
                >
                  Program Hedon
                </Link>
              </div>
              <div className="col-6 col-md-4 mb-2">
                <Link
                  href="/"
                  className="mb-3 text-paragraph-1 fw-bold text-white"
                >
                  Hedon Company
                </Link>
              </div>
              <div className="col-6 col-md-4 mb-2">
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
  );
}
