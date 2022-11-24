import Footer from "@/components/layouts/Footer/Footer";
import Nav from "@/components/layouts/Nav/Nav";

export default function Reservation() {
  return (
    <>
      <Nav />
      <main className="reservation">
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
            <div class="row">
              <div class="col-12 col-lg-6">
                <h2 className="mb-4 text-heading-2 font-secondary text-dark">
                  Reservasi
                </h2>
                <h5 className="mb-3 text-heading-6 fw-light">
                  Anda dapat melakukan secara online dengan mengisi form yang
                  tersedia.
                </h5>
                <h5 className="mb-4 text-heading-6 fw-light mb-md-5">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Proin sodales ultrices nulla
                  blandit volutpat. Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices posuere cubilia curae; Proin sodales
                  ultrices nulla blandit... readmore.
                </h5>
                <div className="row">
                  <div class="col-12 col-md-6">
                    <div className="mb-4 d-flex">
                      <img
                        src="/assets/img/reservation/content/address-icon.svg"
                        alt=""
                        height="60"
                      />
                      <div className="ms-2">
                        <h5 className="text-heading-5 font-secondary text-dark">
                          Alamat
                        </h5>
                        <p className="mb-0 text-paragraph-2">
                          Jl. Ngagel Timur. No.23, Pucang Sewu, Kec. Gubeng,
                          Kota SBY, Jawa Timur 60283
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div className="mb-4 d-flex">
                      <img
                        src="/assets/img/reservation/content/mail-icon.svg"
                        alt=""
                        height="60"
                      />
                      <div className="ms-2">
                        <h5 className="text-heading-5 font-secondary text-dark">
                          Email
                        </h5>
                        <p className="mb-0 text-paragraph-2">
                          hedonestate@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div className="mb-4 d-flex">
                      <img
                        src="/assets/img/reservation/content/phone-icon.svg"
                        alt=""
                        height="60"
                      />
                      <div className="ms-2">
                        <h5 className="text-heading-5 font-secondary text-dark">
                          Cust Service
                        </h5>
                        <p className="mb-0 text-paragraph-2">
                          +62-8125-5562-323
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="p-3 border border-grey rounded-4 p-lg-5">
                  <input
                    type="text"
                    className="form-control mb-3 px-4 text-heading-5 font-secondary text-dark border-grey"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    className="form-control mb-3 px-4 text-heading-5 font-secondary text-dark border-grey"
                    placeholder="No. HP"
                  />
                  <input
                    type="text"
                    className="form-control mb-3 px-4 text-heading-5 font-secondary text-dark border-grey"
                    placeholder="Layanan"
                  />
                  <input
                    type="date"
                    className="form-control mb-3 px-4 text-heading-5 font-secondary text-dark border-grey"
                    placeholder="Date"
                  />
                  <textarea
                    className="form-control mb-3 px-4 text-heading-5 font-secondary text-dark border-grey"
                    rows="3"
                    placeholder="Catatan"
                  ></textarea>
                  <button className="btn px-3 py-2 w-100 bg-app text-heading-6 text-light shadow">
                    Add To Order
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
