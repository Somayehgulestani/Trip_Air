import { FaPlane, FaDollarSign, FaChair } from "react-icons/fa";
const flightsList = [
  {
    origin: "Herat",
    destination: "Mazar",
    departureTime: "8:00",
    landing: "9:50",
    price: 115,
    remaindingSeats: 11,
  },
  {
    origin: "Herat",
    destination: "Mazar",
    departureTime: "9:00",
    landing: "10:50",
    price: 110,
    remaindingSeats: 5,
  },
  {
    origin: "Herat",
    destination: "Kabul",
    departureTime: "10:00",
    landing: "11:30",
    price: 95,
    remaindingSeats: 1,
  },
  {
    origin: "Herat",
    destination: "Mashhad",
    departureTime: "10:00",
    landing: "11:00",
    price: 180,
    remaindingSeats: 3,
  },
  {
    origin: "Herat",
    destination: "Mazar",
    departureTime: "13:30",
    landing: "14:45",
    price: 131,
    remaindingSeats: 31,
  },
  {
    origin: "Herat",
    destination: "Kabul",
    departureTime: "14:00",
    landing: "15:30",
    price: 93,
    remaindingSeats: 10,
  },
  {
    origin: "Herat",
    destination: "Mashhad",
    departureTime: "14:00",
    landing: "14:50",
    price: 176,
    remaindingSeats: 7,
  },
  {
    origin: "Herat",
    destination: "Kabul",
    departureTime: "22:00",
    landing: "23:30",
    price: 89,
    remaindingSeats: 9,
  },
  {
    origin: "Herat",
    destination: "Kabul",
    departureTime: "18:30",
    landing: "19:45",
    price: 90,
    remaindingSeats: 8,
  },
  {
    origin: "Herat",
    destination: "Mashhad",
    departureTime: "18:30",
    landing: "16:45",
    price: 182,
    remaindingSeats: 18,
  },
  {
    origin: "Herat",
    destination: "Mazar",
    departureTime: "21:00",
    landing: "23:00",
    price: 122,
    remaindingSeats: 6,
  },
  {
    origin: "Herat",
    destination: "Mashhad",
    departureTime: "22:00",
    landing: "22:50",
    price: 168,
    remaindingSeats: 20,
  },
];

export default function Trip() {
  return (
    <>
      <HeroSection />
      <Flights />
      <CityImages />
    </>
  );
}

function Header() {
  return (
    <div className="fixed w-full z-10 bg-black/25 top-0 backdrop-blur-sm flex justify-between pr-5 ">
      <h1 className="text-4xl  text-white font-bold font-serif p-3 flex top-0">
        <FaPlane className="w-10 h-10 bg-blue-100 rounded-full text-blue-600 text-xl p-1 transition-transform duration-500 hover:-translate-y-1 mr-2 animate-float" />
        SKY AIR
      </h1>
      <div className="p-2 my-auto text-white font-medium  cursor-pointer md:flex">
        <a className="ml-4 ">Home</a>
        <a className="ml-4">About</a>
        <a className="ml-4">Flights</a>
        <a className="ml-4">Contact</a>
      </div>
      <div className="my-auto">
        <button className="bg-blue-500 text-white font-semibold rounded-md   text-sm p-2 ">
          Your Reservations
        </button>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <Header />
      <div className="relative w-5/6   rounded-3xl h-[80vh] overflow-hidden mt-16">
        <div className="absolute  inset-0 bg-gradient-to-t from-black/30 to-black/10 "></div>
        <div
          className="h-[80vh]   "
          style={{
            backgroundImage: `url('/cities/herat.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className=" p-14 my-auto w-1/2 flex flex-col gap-4 items-center  h-full">
            <h2 className="text-white  text-6xl font-bold  ">
              Where Do You Want To Go?
            </h2>
            <h3
              className="text-xl  text-sky-50 font-semibold 
            "
            >
              We'll Find The Best Route-You Just Choose{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function Flights() {
  return (
    <>
      <div className="flex flex-wrap justify-center bg-gradient-to-b from-blue-100 to-blue-300 gap-6 pt-12 pb-10">
        <h2 className="w-full text-white text-3xl font-semibold text-center font-serif">
          Flights List
        </h2>
        <div className="w-full flex justify-center  gap-3 font-semibold">
          <button className="p-1 rounded-lg  bg-white w-[50px]">All</button>
          <button className="p-1 rounded-lg  bg-white">kabul</button>
          <button className="p-1 rounded-lg  bg-white">Mazar Sharif</button>
          <button className="p-1 rounded-lg  bg-white">Mashhad</button>
        </div>
        {flightsList.map((items, index) => {
          return (
            <div key={index} className=" w-[440px] bg-slate-100 rounded-lg">
              <div className="flex justify-around mt-3">
                <h2 className="text-lg font-bold">{items.origin}</h2>
                <p className="text-2xl font-semibold ">⇀</p>
                <h2 className="text-lg font-bold">{items.destination}</h2>
              </div>
              <div>
                <div className="flex justify-around pt-3 ">
                  <h3>
                    Departure-Time:{" "}
                    <span className="font-medium">
                      {items.departureTime}
                    </span>{" "}
                  </h3>
                  <h3>
                    Landing-Time:{" "}
                    <span className="font-medium">{items.landing}</span>{" "}
                  </h3>
                </div>
                <div
                  className="flex justify-between p-3 ml-6 mr-3"
                  style={{ marginRight: items.remaindingSeats <= 9 && "22px" }}
                >
                  <h3>
                    Price:{" "}
                    <span className="font-medium">
                      <FaDollarSign className="inline" />
                      {items.price}
                    </span>
                  </h3>
                  <h3>
                    Remainding-Seats:{" "}
                    <span className="font-medium">
                      {" "}
                      {items.remaindingSeats}
                    </span>
                  </h3>
                </div>
                <div className="flex justify-center">
                  <button className="bg-slate-400 text-zinc-700 font-extrabold rounded-md m-3   p-2 w-1/2 ">
                    Buy Ticket
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function CityImages() {
  const cities = [
    { name: "Balkh", images: "/cities/balkh-1.jpg" },
    { name: "Herat", images: "/cities/herat.jpg" },
    { name: "Balkh", images: "/cities/balkh-2.jpg" },
    { name: "Kabul", images: "/cities/kabul-2.jpg" },
    { name: "Mashhad", images: "/cities/mashhad.jpg" },
    { name: "Kabul", images: "/cities/kabul-1.jpg" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10  mx-auto xl:w-5/6">
      {cities.map((city, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl shadow-lg group  "
        >
          <img
            src={city.images}
            alt={city.name}
            className="w-full h-64  object-cover transition-transform duration-500 group-hover:scale-110  "
          />

          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>

          <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
            {city.name}
          </h2>
        </div>
      ))}
    </div>
  );
}
