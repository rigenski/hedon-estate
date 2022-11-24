import Footer from "@/components/layouts/Footer/Footer";
import Nav from "@/components/layouts/Nav/Nav";

export default function OurMenu() {
  return (
    <>
      <Nav />
      <main className="menu">
        <div className="banner">
          <div className="container h-100 py-5">
            <div className="h-100 d-flex flex-column justify-content-end align-items-center">
              <h1 className="banner-title mb-0 text-light text-center">
                Estate Cafe
              </h1>
              <p className="mb-0 text-body-4 text-light fw-light text-center">
                Authentic Cuisine
              </p>
              <div className="my-2 py-2"></div>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="container py-4 py-md-5">
            <div className="mb-3 d-flex flex-column justify-content-center align-items-center mb-md-4">
              <div className="position-relative mb-2">
                <h2 className="text-heading-3 text-dark">Event & Promo</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="event-item mb-3 mb-lg-4 position-relative">
                  <div className="event-image mb-2">
                    <img
                      src="/assets/img/menu/content/menu-1.png"
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
                      src="/assets/img/menu/content/menu-2.png"
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
                      src="/assets/img/menu/content/menu-3.png"
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
        <Footer />
      </main>
    </>
  );
}
