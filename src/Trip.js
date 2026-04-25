import { set } from "date-fns";
import { useEffect, useState } from "react";
import {
  FaPlane,
  FaDollarSign,
  FaBullseye,
  FaGlobe,
  FaHandshake,
  FaSadCry,
  FaSadTear,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { useCheckNetwork } from "./useCheckNetwork.js";
// const flightsList = [
//   {
//     origin: "Herat",
//     destination: "Mazar",
//     departureTime: "8:00",
//     landing: "9:50",
//     price: 115,
//     remaindingSeats: 10,
//   },
//   {
//     origin: "Herat",
//     destination: "Mazar",
//     departureTime: "9:00",
//     landing: "10:50",
//     price: 110,
//     remaindingSeats: 5,
//   },
//   {
//     origin: "Herat",
//     destination: "Kabul",
//     departureTime: "10:00",
//     landing: "11:30",
//     price: 95,
//     remaindingSeats: 0,
//   },
//   {
//     origin: "Herat",
//     destination: "Mashhad",
//     departureTime: "10:00",
//     landing: "11:00",
//     price: 180,
//     remaindingSeats: 3,
//   },
//   {
//     origin: "Herat",
//     destination: "Mazar",
//     departureTime: "13:30",
//     landing: "14:45",
//     price: 131,
//     remaindingSeats: 31,
//   },
//   {
//     origin: "Herat",
//     destination: "Kabul",
//     departureTime: "14:00",
//     landing: "15:30",
//     price: 93,
//     remaindingSeats: 10,
//   },
//   {
//     origin: "Herat",
//     destination: "Mashhad",
//     departureTime: "14:00",
//     landing: "14:50",
//     price: 176,
//     remaindingSeats: 7,
//   },
//   {
//     origin: "Herat",
//     destination: "Kabul",
//     departureTime: "22:00",
//     landing: "23:30",
//     price: 89,
//     remaindingSeats: 0,
//   },
//   {
//     origin: "Herat",
//     destination: "Kabul",
//     departureTime: "18:30",
//     landing: "19:45",
//     price: 90,
//     remaindingSeats: 8,
//   },
//   {
//     origin: "Herat",
//     destination: "Mashhad",
//     departureTime: "18:30",
//     landing: "16:45",
//     price: 182,
//     remaindingSeats: 18,
//   },
//   {
//     origin: "Herat",
//     destination: "Mazar",
//     departureTime: "21:00",
//     landing: "23:00",
//     price: 122,
//     remaindingSeats: 30,
//   },
//   {
//     origin: "Herat",
//     destination: "Mashhad",
//     departureTime: "22:00",
//     landing: "22:50",
//     price: 168,
//     remaindingSeats: 20,
//   },
// ];

export default function Trip() {
  const [List, setList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  const [isOffline, setIsOffline] = useState(false);

  const { isOnline, setIsOnline } = useCheckNetwork();

  useEffect(() => {
    async function loadFlights() {
      try {
        const res = await fetch(
          "https://69e282ab3327837a15527356.mockapi.io/flights",
        );
        const data = await res.json();
        console.log(data);

        if (!res.ok) throw new Error("NETWORK ERROR");

        setList(data);
      } catch (error) {
        setErrorMessage(true);
      }
    }

    loadFlights();
  }, []);

  return (
    <>
      <HeroSection />
      <Flights
        List={List}
        errorMessage={errorMessage}
        onSetIsOffline={setIsOffline}
        onSetIsOline={setIsOnline}
      />
      {!isOnline && isOffline && <NetworkStatus isOnline={isOnline} />}
      {!isOnline && !isOffline && <NetworkStartus2 />}
      <CityImages />
      <Contact />
      <Footer />
     
    </>
  );
}

function Header() {
  return (
    <div className="fixed w-full z-50 bg-black/25 top-0 backdrop-blur-sm flex justify-between pr-5 ">
      <h1 className="text-4xl  text-white font-bold font-serif p-3 flex top-0">
        <FaPlane className="w-10 h-10 bg-blue-100 rounded-full text-violet-900 text-xl p-1 transition-transform duration-500 hover:-translate-y-1 mr-2 animate-float" />
        SKY AIR
      </h1>
      <div className="p-2 my-auto text-white font-medium  cursor-pointer md:flex">
        <a className="ml-4 ">Home</a>
        <a className="ml-4">About</a>
        <a className="ml-4">Flights</a>
        <a className="ml-4">Contact</a>
      </div>
      <div className="my-auto">
        <button className="bg-purple-800 text-white font-semibold rounded-md   text-sm p-2 ">
          Your Reservations
        </button>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center "
      id="heroSection"
    >
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

function Flights({ List, errorMessage, onSetIsOffline, onSetIsOline }) {
  const [showMore, setShowMore] = useState(false);
  const [filterFlights, setFilterFlights] = useState("All");
  const [alert, setAlert] = useState(false);

  const filterByCity =
    filterFlights === "All"
      ? List
      : List.filter((v) => v.destination === filterFlights);

  return (
    <>
      <div className="bg-gradient-to-b from-violet-100 to-violet-300 pb-20">
        <div className="flex flex-wrap justify-center  gap-6 pt-12 pb-10">
          <h2 className="w-full text-violet-950 text-5xl font-bold text-center uppercase mb-6">
            Flights
          </h2>
          <CitiesFlightsOptions
            onSetList={List}
            onSetFilterFlights={setFilterFlights}
          />
          {errorMessage && <ErrorMessage />}
          <FlightsCities
            showMore={showMore}
            filterByCity={filterByCity}
            setAlert={setAlert}
            List={List}
            onSetIsOffline={onSetIsOffline}
            onSetIsOline={onSetIsOline}
          />
          {alert && <NoSeatAlert setAlert={setAlert} />}
        </div>
        <button
          className="bg-white  font-bold rounded-md  p-2 w-[200px]  transition-colors duration-300  hover:scale-105 block mx-auto"
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
    <section className="bg-gradient-to-b from-gray-100 to-gray-300 rounded-lg shadow-md ">
      <About />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10  mx-auto w-[80vw] h-[80vh] ">
        {cities.map((city, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl shadow-lg  group ${index === 2 && "lg:row-span-2 "} ${index === 3 && "lg:col-span-2 "}`}
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
    </section>
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
    <div className="w-full flex justify-center mb-12  gap-3 font-semibold">
      <button
        className="p-1 rounded-lg  bg-gradient-to-b from-violet-300 to-violet-500 text-white w-[50px] "
        onClick={() => onSetFilterFlights("All")}
      >
        All
      </button>
      <button
        className=" pt-1 pb-1 rounded-lg  bg-gradient-to-b from-violet-300 to-violet-500 text-white w-[100px]"
        onClick={() => onSetFilterFlights("Kabul")}
      >
        kabul
      </button>
      <button
        className="pt-1 pb-1 rounded-lg  bg-gradient-to-b from-violet-300 to-violet-500 text-white w-[100px]"
        onClick={() => onSetFilterFlights("Mazar")}
      >
        MazarSharif
      </button>
      <button
        className="pt-1 pb-1 rounded-lg  bg-gradient-to-b from-violet-300 to-violet-500 text-white w-[100px]"
        onClick={() => onSetFilterFlights("Mashhad")}
      >
        Mashhad
      </button>
    </div>
  );
}

function FlightsCities({
  filterByCity,
  showMore,
  setAlert,
  List,
  onSetIsOline,
  onSetIsOffline,
}) {
  const [selectedId, setSelectedId] = useState(null);
  const [bookFlight, setBookFlights] = useState(false);
  const flights = showMore ? filterByCity : filterByCity.slice(0, 3);

  function handdleBookFlight(index, id) {
    setSelectedId(id);
    const remaindingSeat = flights[index].remaindingSeats;
    if (remaindingSeat >= 1) {
      setAlert(false);
      setBookFlights(true);
      onSetIsOffline(true);
    } else {
      setBookFlights(false);
      setAlert(true);
      onSetIsOffline(false);
    }
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center relative">
      {flights.map((items, index) => {
        return (
          <div key={index} className=" w-[380px] bg-slate-100 rounded-lg">
            <div className="flex justify-around mt-4 pt-2">
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
                  className="bg-purple-300 text-zinc-700 font-bold rounded-md m-3   p-2 w-1/2 hover:bg-purple-800 hover:text-white transition-colors duration-300  hover:scale-105"
                  onClick={() => handdleBookFlight(index, items.id)}
                >
                  Buy Ticket
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {bookFlight && (
        <BookForm
          onSetBookFlights={setBookFlights}
          List={List}
          selectedId={selectedId}
          onSetIsOline={onSetIsOline}
          onSetIsOffline={onSetIsOffline}
        />
      )}
    </div>
  );
}

function BookForm({
  onSetBookFlights,
  List,
  selectedId,
  onSetIsOline,
  onSetIsOffline,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [adults, setAdults] = useState(1);
  const [infants, setInfants] = useState(0);
  const [total, setTotal] = useState(0);
  const [booked, setBooked] = useState([]);
  const [isActive, setIsAcrive] = useState(false);

  useCheckNetwork();
  function handleBooked(e) {
    e.preventDefault();
    onSetIsOffline(true);
    if (name.length < 3) {
      setIsAcrive(true);
    } else if (phone.length !== 10) {
      setIsAcrive(true);
    } else {
      setBooked([
        ...booked,
        {
          name: name,
          phone: phone,
          adults: adults,
          infants: infants,
          totalPrice: total,
        },
      ]);
    }
  }
  console.log(booked);

  return (
    <div className="fixed inset-0 bg-black/25 backdrop-blur-sm flex items-center justify-center z-10">
      <div className="w-[400px] bg-purple-300 m-5 p-4 mx-auto rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <form>
          <FormHeadline
            onSetBookFlights={onSetBookFlights}
            onSetIsOffline={onSetIsOffline}
          />

          <FormFields
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            isActive={isActive}
          />
          <NumberOfPeople
            adults={adults}
            setAdults={setAdults}
            infants={infants}
            setInfants={setInfants}
          />
          <TotalPrice
            selectedId={selectedId}
            List={List}
            adults={adults}
            infants={infants}
            total={total}
            onSetTotal={setTotal}
          />
          <button
            className="bg-white text-sm font-semibold rounded-xl p-2 w-full mt-8  "
            onClick={(e) => handleBooked(e)}
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
}

function FormHeadline({ onSetBookFlights, onSetIsOffline }) {
  function handleClose() {
    onSetBookFlights(false);
    onSetIsOffline(false);
  }
  return (
    <div className="flex  justify-between">
      <h3 className="font-medium  text-2xl mt-2 mb-4">
        Please Fill Out The Form
      </h3>
      <button
        className="text-2xl font-bold  rounded-sm p-1"
        onClick={handleClose}
      >
        ✕
      </button>
    </div>
  );
}

function FormFields({ name, setName, phone, setPhone, isActive }) {
  return (
    <>
      <label className="block text-sm font-semibold">Name:</label>
      <input
        className="w-full p-1  bg-black/10 rounded-md focus:outline-none  focus:ring-0"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          border: isActive && name.length < 3 && "1px solid red",
        }}
      ></input>
      <small
        className="text-red-500 mb-1 "
        style={{
          visibility: isActive && name.length < 3 ? "visible" : "hidden",
        }}
      >
        Name must be at least 3 characters long
      </small>
      <label className="block text-sm font-semibold mt-1">Phone:</label>
      <input
        className="w-full p-1  bg-black/10 rounded-md focus:outline-none focus:ring-0 "
        style={{
          border: isActive && phone.length !== 10 && "1px solid red",
        }}
        value={phone}
        type="number"
        onChange={(e) => setPhone(e.target.value)}
      ></input>
      <small
        className="text-red-500 "
        style={{
          visibility: isActive && phone.length !== 10 ? "visible" : "hidden",
        }}
      >
        Phone must be avialable and must be 10 number{" "}
      </small>
    </>
  );
}
function NumberOfPeople({ adults, setAdults, infants, setInfants }) {
  const numberOptions = Array.from({ length: 4 }, (_, i) => i);
  return (
    <>
      <label className="block text-sm font-semibold mb-5 mt-2">
        Number of Person:
      </label>
      <div className="flex space-x-5  text-sm font-semibold">
        <div>
          <span>Adults: </span>
          <select
            className="p-1 bg-black/10 rounded-md w-20"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          >
            {numberOptions.map((number) => (
              <option>{number}</option>
            ))}
          </select>
        </div>

        <div className="ml-3">
          <span>Infants: </span>
          <select
            className="p-1 bg-black/10 rounded-md w-20"
            value={infants}
            onChange={(e) => setInfants(e.target.value)}
          >
            {numberOptions.map((number) => (
              <option>{number}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

function TotalPrice({ selectedId, List, adults, infants, onSetTotal }) {
  const TargetItem = List.filter((items) => items.id === selectedId).map(
    (v) => v.price,
  );
  console.log(TargetItem);
  const totalAdultPrice = adults * TargetItem;
  const totalInfants = infants > 0 && (infants * TargetItem) / 2;
  const total = totalAdultPrice + totalInfants;
  onSetTotal(total);
  return (
    <p className="mt-8 text-lg font-semibold">
      Total: <span>${total}</span>
    </p>
  );
}

function NoSeatAlert({ setAlert }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="flex justify-between bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <p className="text-red-500 font-medium text-lg">
          Sorry, No Seats Available For This Flight !
        </p>
        <button
          className="text-2xl font-semibold"
          onClick={() => setAlert(false)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

function ErrorMessage() {
  return (
    <div className=" text-center bg-purple-600  w-1/2 h-[20vh] p-5 rounded-md text-white flex flex-col justify-items-center  ">
      <h2 className="mx-auto text-3xl mb-2">
        <FaSadTear />
      </h2>
      <p className=" text-3xl font-semibold ">NETWORK ERROR!</p>
      <small>Please Check Your Network</small>
    </div>
  );
}

function Contact() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">CONTACT US</h2>
          <p className="text-slate-500">
            We answer your questions about flights.
          </p>
        </div>

        <div className=" grid grid-cols-1  md:grid-cols-2 gap-10 ">
          <div className="  bg-slate-50 p-8 rounded-2xl shadow-sm grid grid-cols-1 gap-3 sm:grid-cols-2 ">
            <div className="flex items-center gap-4 bg-violet-100 p-2 rounded-lg h-full ">
              <div className="bg-white p-3 rounded-lg text-purple-700">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="font-medium text-slate-800">Center Address</p>
                <p className="text-slate-600 text-sm" dir="ltr">
                  Afghanistan, Herat, Main Road, Asia Air Building
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-violet-100 p-2 rounded-lg h-full ">
              <div className="bg-white p-3 rounded-lg text-purple-700">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <p className="font-medium text-slate-800">Contact Number</p>
                <p className="text-slate-600 text-sm" dir="ltr">
                  +93 700 000 000
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-violet-100 p-2 rounded-lg h-full ">
              <div className="bg-white p-3 rounded-lg text-purple-700">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="font-medium text-slate-800">Support Email</p>
                <p className="text-slate-600 text-sm">info@asiasair.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-violet-100 p-2 rounded-lg h-full ">
              <div className="bg-white p-3 rounded-lg text-purple-700">
                <FaClock size={20} />
              </div>
              <div>
                <p className="font-medium text-slate-800">Working Hours</p>
                <p className="text-slate-600 text-sm">
                  Every Day : 8:00AM To 8:00PM
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-[400px] rounded-2xl  shadow-md border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573.605992798156!2d62.20790490181604!3d34.347892703863046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce7001e9446d3%3A0x7180fb40c126c69c!2z2LTYsdqp2Kog2KrZiNix2LPYqtuMINiz24zYp9it2KrbjCDZiNiv2LHZhdin2YbbjCDYrNiy24zYsdmHINiz2YTYp9mF2Ko!5e0!3m2!1sfa!2s!4v1776580643805!5m2!1sfa!2s"
              className="w-full"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <div className=" flex justify-between items-center bg-gradient-to-b from-violet-200 to-violet-500">
      <p className="text-white font-bold text-2xl p-5 flex items-center gap-2">
        <a className="cursor-pointer" href="heroSection">
          {" "}
          <FaPlane className="w-10 h-10 bg-blue-100 rounded-full text-violet-900 text-xl p-1 my-auto inline-block mr-2 cursor-pointer" />
          SKY AIR
        </a>
      </p>

      <div className="text-white flex w-1/2 justify-end gap-4 p-5">
        <p>
          <FaInstagram size={25} />
        </p>
        <p>
          <FaTelegram size={25} />
        </p>
        <p>
          <FaLinkedinIn size={25} />
        </p>
        <p>
          <FaWhatsapp size={25} />
        </p>
      </div>
    </div>
  );
}
function NetworkStatus({ isOnline }) {
  return (
    <div className="relative min-h-screen bg-slate-50 p-8 font-sans">
      {!isOnline && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-900/70 backdrop-blur-lg transition-all duration-500">
          <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-sm mx-4 border border-slate-100">
            <div className="text-6xl mb-6 animate-bounce">📡</div>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">
              Connection Lost
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Oops! It seems you are offline. Please check your internet
              connection to continue.
            </p>

            <div className="flex items-center justify-center gap-3 py-3 px-6 bg-blue-50 rounded-full text-blue-600 font-semibold text-sm">
              <div className="w-5 h-5 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              Retrying connection...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function NetworkStartus2() {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="bg-white/80 backdrop-blur-md border border-red-100 shadow-lg shadow-red-200/50 px-5 py-3 rounded-2xl flex items-center gap-3">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </div>

        <div className="flex flex-col">
          <p className="text-sm font-bold text-slate-800 leading-none mb-1">
            Offline Mode
          </p>
          <p className="text-[11px] text-slate-500 leading-none">
            Browsing limited. Check your connection.
          </p>
        </div>

        <div className="h-8 w-[1px] bg-slate-200 mx-1"></div>

        <button
          onClick={() => window.location.reload()}
          className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

