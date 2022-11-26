import { useEffect } from "react";
import Footer from "@/components/layouts/Footer/Footer";
import Nav from "@/components/layouts/Nav/Nav";
import { useRouter } from "next/router";

const facilities = [
  {
    slug: "lounge-room",
    name: "Lounge Room",
    image: "/assets/img/facility/lounge-room.png",
    price: "25.000.000++",
    facilities: [
      "Sofa and Table",
      "Coffee Break (Coffee, Tea, Infused Water and Snacks)",
      "Compatible for 50 Capacity",
      "Sofa",
      "Mini Stage",
      "Projector Set",
      "Karaoke Set",
    ],
  },
  {
    slug: "class-room",
    name: "Class & Meeting Room",
    price: "600.000++",
    image: "/assets/img/facility/class-room.png",
    facilities: [
      "Seat and Table",
      "Wireless Connection",
      "Compatible for 50 Capacity",
      "Projector Set",
      "Flip Chart",
      "Notes/Paper and Pen",
      "Coffee Break (Coffee/Tea and Infused Water)",
    ],
  },
  {
    slug: "multifunction-hall",
    name: "Multifunction Hall",
    price: "21.000.000++",
    image: "/assets/img/facility/multifunction-hall.png",
    facilities: [
      "Seat and Table by Request",
      "layout",
      "Coffee Break (Coffee, Tea, Infused Water and Snacks)",
      "Compatible for 120 Capacity",
      "Soundsystem X90 Pro",
      "Mini Stage",
      "Bar Area",
      "Projector Set",
    ],
  },
];

export default function Facility(props) {
  const router = useRouter();

  useEffect(() => {
    if (!props.data) {
      router.push("/");
    }
  }, [props]);

  return (
    <>
      <Nav />
      <main className="facility">
        <div
          className="hero"
          style={{ backgroundImage: `url(${props?.data?.image})` }}
        >
          <div className="container h-100 py-5">
            <div className="h-100 d-flex flex-column justify-content-between">
              <div className="ms-4 ps-0 ms-lg-5 ps-lg-5">
                <div className="my-2 py-0 md:my-4 md:py-2"></div>
                <h1 className="mb-2 text-heading-1 font-secondary text-light">
                  {props.data?.name}
                </h1>
                <h2 className="ms-4 mb-0 text-heading-2 font-secondary text-light ">
                  <span className="text-heading-6 fw-light">IDR</span>{" "}
                  {props.data?.price}
                </h2>
              </div>
              <div className="ms-0 ps-0 ms-lg-5 ps-lg-5">
                <div className="ms-0 ps-0 md:ms-4 md:ps-4">
                  <h2 className="mb-2 text-heading-2 text-app md:mb-4">
                    Facilities
                  </h2>
                  <div className="ms-4 d-flex flex-column flex-lg-row">
                    <ul className="mb-0" style={{ maxWidth: "480px" }}>
                      {props.data?.facilities
                        .slice(0, props.data?.facilities.length / 2)
                        .map((item, index) => {
                          return (
                            <li
                              className="text-heading-4 text-light"
                              key={index}
                            >
                              {item}
                            </li>
                          );
                        })}
                    </ul>
                    <ul className="mb-0" style={{ maxWidth: "480px" }}>
                      {props.data?.facilities
                        .slice(
                          props.data?.facilities.length / 2,
                          props.data?.facilities.length
                        )
                        .map((item, index) => {
                          return (
                            <li
                              className="text-heading-4 text-light"
                              key={index}
                            >
                              {item}
                            </li>
                          );
                        })}
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

export async function getServerSideProps({ params }) {
  return {
    props: {
      slug: params.slug,
      data: facilities.find((e) => e.slug === params.slug) ?? null,
    },
  };
}
