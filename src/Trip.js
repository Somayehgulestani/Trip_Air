import { useState } from "react";
import {
  FaPlane,
  FaDollarSign,
  FaBullseye,
  FaGlobe,
  FaHandshake,
} from "react-icons/fa";
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
      <BookForm />
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
            backgroundImage: `url('/airplane/airplane-1.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            objectPosition: "center",
          }}
        >
          <div className=" p-12  w-1/2  flex flex-col gap-4  h-full">
            <h2 className="text-white  text-6xl font-bold  ">
              Where Do You Want To Go?
            </h2>
            <h3
              className="text-lg  text-white bg-black/30 rounded-md font-semibold p-2
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
  const [List, setList] = useState(flightsList);
  const [showMore, setShowMore] = useState(false);
  const [filterFlights, setFilterFlights] = useState("All");

  const filterByCity =
    filterFlights === "All"
      ? List
      : List.filter((v) => v.destination === filterFlights);

  return (
    <>
      <div className="bg-gradient-to-b from-blue-100 to-blue-300 pb-20">
        <div className="flex flex-wrap justify-center  gap-6 pt-12 pb-10">
          <h2 className="w-full text-gray-700 text-5xl font-bold text-center uppercase mb-6">
            Flights
          </h2>
          <CitiesFlightsOptions
            onSetList={List}
            onSetFilterFlights={setFilterFlights}
          />
          <FlightsCities showMore={showMore} filterByCity={filterByCity} />
        </div>
        <button
          className="bg-white  font-bold rounded-md  p-2 w-[200px] hover:bg-white transition-colors duration-300  hover:scale-105 block mx-auto"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
          <span className="text-xl font-extrabold"> →</span>
        </button>
      </div>
    </>
  );
}

function CityImages() {
  const cities = [
    // { name: "Balkh", images: "/cities/balkh-1.jpg" },
    { name: "Mashhad", images: "/cities/mashhad.jpg" },
    { name: "Herat", images: "/cities/herat.jpg" },
    { name: "MazarSharif", images: "/cities/balkh-2.jpg" },
    { name: "Kabul", images: "/cities/kabul-2.jpg" },
    // { name: "Kabul", images: "/cities/kabul-1.jpg" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 rounded-lg shadow-md ">
      <About />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10  mx-auto w-[80vw] h-[80vh] ">
        {cities.map((city, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl shadow-lg  group ${index === 2 && "lg:row-span-2 "} ${index == 3 && "lg:col-span-2 "}`}
          >
            <img
              src={city.images}
              alt={city.name}
              className={`w-full   object-cover transition-transform h-full duration-500 group-hover:scale-110 ${index === 2 && " lg:h-full"} ${index === 3 && "lg:h-full"}`}
            />

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-300">
              {city.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="w-[80vw] mx-auto p-10 ">
      <h2 className="text-center text-4xl font-bold mb-10 uppercase">
        About Us
      </h2>
      <p>
        We are a fictional airline ticket booking platform focused on making
        travel simple and accessible. Our services cover popular routes
        including Herat, Mazar-e-Sharif, Kabul, and Mashhad. Our goal is to
        provide a fast, reliable, and user-friendly experience where customers
        can easily search, compare, and book flights at competitive prices. We
        are committed to delivering convenience, trust, and quality service for
        every journey.
      </p>
      <div className="flex justify-around mt-10 gap-6">
        <div>
          <p>
            <FaBullseye className="text-red-500 w-[30px] h-[30px]" />
            <span>
              Our mission is to make flight booking booking simple, fast, and
              accessible for everyone
            </span>
          </p>
        </div>
        <div>
          <p>
            <FaGlobe className="text-blue-500 w-[30px] h-[30px] " />
            <span>
              We aim to become a trusted platform connecting major cities
              like,Kabul, MazarSharif, Mashhand
            </span>
          </p>
        </div>
        <div>
          <p>
            <FaHandshake className="text-green-500 w-[30px] h-[30px]  " />
            <span>
              We believe in building long-term relationships with our customers
              based on trust and satisfaction
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function CitiesFlightsOptions({ onSetFilterFlights }) {
  return (
    <div className="w-full flex justify-center  gap-3 font-semibold">
      <button
        className="p-1 rounded-lg  bg-blue-900 text-white w-[50px]"
        onClick={() => onSetFilterFlights("All")}
      >
        All
      </button>
      <button
        className="p-2 rounded-lg  bg-blue-900 text-white"
        onClick={() => onSetFilterFlights("Kabul")}
      >
        kabul
      </button>
      <button
        className="p-2 rounded-lg  bg-blue-900 text-white"
        onClick={() => onSetFilterFlights("Mazar")}
      >
        MazarSharif
      </button>
      <button
        className="p-2 rounded-lg  bg-blue-900 text-white"
        onClick={() => onSetFilterFlights("Mashhad")}
      >
        Mashhad
      </button>
    </div>
  );
}

function FlightsCities({ filterByCity, showMore }) {
  const [bookFlight, setBookFlights] = useState(false);
  const flights = showMore ? filterByCity : filterByCity.slice(0, 3);
  return (
    <>
      {flights.map((items, index) => {
        return (
          <div key={index} className=" w-[380px] bg-slate-100 rounded-lg">
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
                className="flex justify-between p-3 ml-2 mr-2"
                style={{
                  marginRight: items.remaindingSeats <= 9 && "10px",
                }}
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
                  <span className="font-medium"> {items.remaindingSeats}</span>
                </h3>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-slate-400 text-zinc-700 font-extrabold rounded-md m-3   p-2 w-1/2 hover:bg-blue-500 hover:text-white transition-colors duration-300  hover:scale-105"
                  onClick={() => setBookFlights(true)}
                >
                  Buy Ticket
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

function BookForm() {
  const numberOptions = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="w-2/3 bg-purple-200 m-5 p-4">
      <div className="flex  justify-between">
        <h3 className="font-medium  text-2xl mt-2 mb-4">Fill Out The Form</h3>
        <button className="text-2xl font-bold  rounded-sm p-1">✕</button>
      </div>
      <form>
        <label className="block text-sm font-semibold">Name:</label>
        <input className="w-full p-1 mb-3"></input>
        <label className="block text-sm font-semibold">Email</label>
        <input className="w-full p-1 mb-3"></input>
        <label className="block text-sm font-semibold">Phone:</label>
        <input className="w-full p-1 mb-3"></input>
        <label className="block text-sm font-semibold mb-3">Person:</label>
        <div className="flex justify-between w-3/4 text-sm font-semibold">
          <div>
            <span>Adults: </span>
            <select className="p-1 bg-black/10 rounded-md">
              {numberOptions.map((number) => (
                <option>{number}</option>
              ))}
            </select>
          </div>
          <div>
            <span>Children: </span>
            <select className="p-1 bg-black/10 rounded-md">
              {numberOptions.map((number) => (
                <option>{number}</option>
              ))}
            </select>
          </div>
          <div>
            <span>Infants: </span>
            <select className="p-1 bg-black/10 rounded-md">
              {numberOptions.map((number) => (
                <option>{number}</option>
              ))}
            </select>
          </div>
        </div>
        <button className="bg-white text-sm font-semibold rounded-xl p-2 w-[70px] m-5">
          Book
        </button>
      </form>
      <p>
        total: <span>$0</span>
      </p>
    </div>
  );
}
