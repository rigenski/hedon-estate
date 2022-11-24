import Footer from "@/components/layouts/Footer/Footer";
import Nav from "@/components/layouts/Nav/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="facility">
        <div className="hero">
          <div className="container h-100 py-5">
            <div className="h-100 d-flex flex-column justify-content-between">
              <div className="ms-4 ps-0 ms-lg-5 ps-lg-5">
                <div className="my-2 py-0 md:my-4 md:py-2"></div>
                <h1 className="mb-2 text-heading-1 font-secondary text-light">
                  Longue Room
                </h1>
                <h2 className="ms-4 mb-0 text-heading-2 font-secondary text-light ">
                  <span className="text-heading-6 fw-light">IDR</span>{" "}
                  25.000.000++
                </h2>
              </div>
              <div className="ms-0 ps-0 ms-lg-5 ps-lg-5">
                <div className="ms-0 ps-0 md:ms-4 md:ps-4">
                  <h2 className="mb-2 text-heading-2 text-app md:mb-4">
                    Facilities
                  </h2>
                  <div className="ms-4 d-flex flex-column flex-lg-row">
                    <ul className="mb-0" style={{ maxWidth: "480px" }}>
                      <li className="text-heading-4 text-light">
                        Sofa and Table
                      </li>
                      <li className="text-heading-4 text-light">
                        Coffee Break (Coffee, Tea, Infused Water and Snacks)
                      </li>
                      <li className="text-heading-4 text-light">
                        Compatible for 50 Capacity
                      </li>
                    </ul>
                    <ul className="mb-0" style={{ maxWidth: "480px" }}>
                      <li className="text-heading-4 text-light">Sofa</li>
                      <li className="text-heading-4 text-light">Mini Stage</li>
                      <li className="text-heading-4 text-light">
                        Projector Set
                      </li>
                      <li className="text-heading-4 text-light">Karaoke Set</li>
                    </ul>
                  </div>
                </div>
                <div className="my-2 py-0 md:my-4 md:py-2"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
