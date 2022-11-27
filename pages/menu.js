import Footer from "@/components/layouts/Footer/Footer";
import Nav from "@/components/layouts/Nav/Nav";
import { Icon } from "@iconify/react";

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
        <div className="menu">
          <div className="container py-4 py-md-5">
            <div className="mb-3 d-flex flex-column justify-content-center align-items-center mb-md-4">
              <div className="position-relative mb-2">
                <h2 className="text-heading-3 text-dark">Our Menu</h2>
              </div>
            </div>
            <div className="mb-4 d-flex justify-content-between flex-column align-items-center flex-md-row">
              <div className="mb-2 d-flex align-items-center mb-md-0">
                <button className="p-0 bg-transparent border-0">
                  <Icon
                    icon="ic:baseline-format-list-bulleted"
                    height="24px"
                    width="24px"
                    color="#1B1D1F"
                  />
                </button>
                <button className="ms-2 p-0 bg-transparent border-0">
                  <Icon
                    icon="ph:squares-four-light"
                    height="24px"
                    width="24px"
                    color="#1B1D1F"
                  />
                </button>
                <div className="ms-2 d-flex align-items-center">
                  <p className="mb-0 text-body-4 text-dark">Sort By:</p>
                  <select className="text-grey border-0">
                    <option>Default Order</option>
                  </select>
                </div>
              </div>
              <ul className="p-0 d-flex align-items-center list-unstyled">
                <li className="ms-3">
                  <button className="p-0 fw-semibold bg-transparent border-0">
                    All Menu
                  </button>
                </li>
                <li className="ms-3">
                  <button className="p-0 bg-transparent border-0">Food</button>
                </li>
                <li className="ms-3">
                  <button className="p-0 bg-transparent border-0">
                    Beverage
                  </button>
                </li>
              </ul>
            </div>
            <div className="">
              <div className="menu-item mb-3 mb-lg-4 pb-3 pb-lg-4">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div className="mb-3 d-flex justify-content-between align-items-center mb-md-4">
                      <h4 className="mb-0 text-heading-4 text-dark">
                        DADAR JAGUNG
                      </h4>
                      <div className="d-flex align-items-center">
                        <button className="ms-2 menu-icon p-1 border-0 rounded-1">
                          <Icon
                            icon="material-symbols:share-outline"
                            height="24px"
                            width="24px"
                            color="#4A60A1"
                          />
                        </button>
                        <button className="ms-2 menu-icon p-1 border-0 rounded-1">
                          <Icon
                            icon="mdi:cards-heart-outline"
                            height="24px"
                            width="24px"
                            color="#4A60A1"
                          />
                        </button>
                        <button className="ms-2 menu-icon p-1 border-0 rounded-1">
                          <Icon
                            icon="ic:baseline-plus"
                            height="24px"
                            width="24px"
                            color="#4A60A1"
                          />
                        </button>
                      </div>
                    </div>
                    <p className="mb-3 text-body-4 text-grey mb-md-4">
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia curae; Proin sodales ultrices
                      nulla blandit volutpat.
                      <br />
                      <br />
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia curae; Proin sodales ultrices
                      nulla blandit volutpat. Vestibulum ante ipsum primis in
                      faucibus orci luctus et ultrices posuere cubilia curae;
                      Proin sodales ultrices nulla blandit...{" "}
                      <span className="fw-semibold">readmore</span>
                    </p>
                    <h3 className="mb-3 text-heading-3 text-app mb-md-4">
                      Rp. 36.000.-
                    </h3>
                  </div>
                  <div class="col-12 col-md-6">
                    <div className="position-relative">
                      <div className="menu-image mb-2">
                        <img
                          src="/assets/img/menu/content/menu-1.png"
                          alt=""
                          className="w-100 object-cover rounded-4"
                        />
                      </div>
                      <button className="btn px-3 py-2 w-100 position-absolute bg-app text-heading-6 text-light shadow">
                        Add To Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-item mb-3 mb-lg-4 pb-3 pb-lg-4">
                <div class="row">
                  <div class="col-12 col-md-6 order-2 order-md-1">
                    <div className="position-relative">
                      <div className="menu-image mb-2">
                        <img
                          src="/assets/img/menu/content/menu-2.png"
                          alt=""
                          className="w-100 object-cover rounded-4"
                        />
                      </div>
                      <button className="btn px-3 py-2 w-100 position-absolute bg-app text-heading-6 text-light shadow">
                        Add To Order
                      </button>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 order-1 order-md-2">
                    <div className="mb-3 d-flex justify-content-between align-items-center mb-md-4">
                      <h4 className="mb-0 text-heading-4 text-dark">
                        HEDON SIGNATURE
                      </h4>
                      <div className="d-flex align-items-center">
                        <button className="ms-2 menu-icon p-1 border-0 rounded-1">
                          <Icon
                            icon="material-symbols:share-outline"
                            height="24px"
                            width="24px"
                            color="#4A60A1"
                          />
                        </button>
                        <button className="ms-2 menu-icon p-1 border-0 rounded-1">
                          <Icon
                            icon="mdi:cards-heart-outline"
                            height="24px"
                            width="24px"
                            color="#4A60A1"
                          />
                        </button>
                        <button className="ms-2 menu-icon p-1 border-0 rounded-1">
                          <Icon
                            icon="ic:baseline-plus"
                            height="24px"
                            width="24px"
                            color="#4A60A1"
                          />
                        </button>
                      </div>
                    </div>
                    <p className="mb-3 text-body-4 text-grey mb-md-4">
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia curae; Proin sodales ultrices
                      nulla blandit volutpat.
                      <br />
                      <br />
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia curae; Proin sodales ultrices
                      nulla blandit volutpat. Vestibulum ante ipsum primis in
                      faucibus orci luctus et ultrices posuere cubilia curae;
                      Proin sodales ultrices nulla blandit...{" "}
                      <span className="fw-semibold">readmore</span>
                    </p>
                    <h3 className="mb-3 text-heading-3 text-app mb-md-4">
                      Rp. 28.000.-
                    </h3>
                  </div>
                </div>
              </div>
              <div className="menu-item mb-3 mb-lg-4 pb-3 pb-lg-4">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div className="mb-3 d-flex justify-content-between align-items-center mb-md-4">
                      <h4 className="mb-0 text-heading-4 text-dark">
                        DADAR JAGUNG
                      </h4>
                      <div className="d-flex align-items-center">
                        <button className="ms-2 menu-icon p-1 border-0 rounded-1">
                          <Icon
                            icon="material-symbols:share-outline"
                            height="24px"
                            width="24px"
                            color="#4A60A1"
                          />
                        </button>
                        <button className="ms-2 menu-icon p-1 border-0 rounded-1">
                          <Icon
                            icon="mdi:cards-heart-outline"
                            height="24px"
                            width="24px"
                            color="#4A60A1"
                          />
                        </button>
                        <button className="ms-2 menu-icon p-1 border-0 rounded-1">
                          <Icon
                            icon="ic:baseline-plus"
                            height="24px"
                            width="24px"
                            color="#4A60A1"
                          />
                        </button>
                      </div>
                    </div>
                    <p className="mb-3 text-body-4 text-grey mb-md-4">
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia curae; Proin sodales ultrices
                      nulla blandit volutpat.
                      <br />
                      <br />
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia curae; Proin sodales ultrices
                      nulla blandit volutpat. Vestibulum ante ipsum primis in
                      faucibus orci luctus et ultrices posuere cubilia curae;
                      Proin sodales ultrices nulla blandit...{" "}
                      <span className="fw-semibold">readmore</span>
                    </p>
                    <h3 className="mb-3 text-heading-3 text-app mb-md-4">
                      Rp. 36.000.-
                    </h3>
                  </div>
                  <div class="col-12 col-md-6">
                    <div className="position-relative">
                      <div className="menu-image mb-2">
                        <img
                          src="/assets/img/menu/content/menu-3.png"
                          alt=""
                          className="w-100 object-cover rounded-4"
                        />
                      </div>
                      <button className="btn px-3 py-2 w-100 position-absolute bg-app text-heading-6 text-light shadow">
                        Add To Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="mb-5">
          <ul class="pagination justify-content-center">
            <li class="page-item mx-2">
              <a
                class="page-link h-100 p-1 rounded-1"
                href="#"
                aria-label="Previous"
              >
                <Icon
                  icon="mdi:arrow-left"
                  height="24px"
                  width="24px"
                  color="#4A60A1"
                />
              </a>
            </li>
            <li class="page-item mx-2">
              <a class="page-link text-pagination rounded-1" href="#">
                1
              </a>
            </li>
            <li class="page-item mx-2">
              <a class="page-link text-pagination rounded-1 active" href="#">
                2
              </a>
            </li>
            <li class="page-item mx-2">
              <a class="page-link text-pagination rounded-1" href="#">
                3
              </a>
            </li>
            <li class="page-item mx-2">
              <a
                class="page-link h-100 p-1 rounded-1"
                href="#"
                aria-label="Next"
              >
                <Icon
                  icon="mdi:arrow-right"
                  height="24px"
                  width="24px"
                  color="#4A60A1"
                />
              </a>
            </li>
          </ul>
        </nav>
        <Footer />
      </main>
    </>
  );
}
