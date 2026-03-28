import { FaPlane, FaDollarSign, FaChair } from "react-icons/fa";
const HeratToKabulflights = [
  {
    flight: " Herat To Kabul",
    departureTime: "10:00",
    landing: "11:30",
    price: 95,
    remaindingSeats: 5,
  },
  { departureTime: "14:00", landing: "15:30", price: 93, remaindingSeats: 11 },
  { departureTime: "22:00", landing: "23:30", price: 89, remaindingSeats: 20 },
  { departureTime: "18:30", landing: "19:45", price: 90, remaindingSeats: 21 },
];

const HeratToMazarflights = [
  { departureTime: "9:00", landing: "10:50", price: 95, remaindingSeats: 5 },
  { departureTime: "8:00", landing: "9:50", price: 93, remaindingSeats: 11 },
  { departureTime: "21:00", landing: "23:00", price: 89, remaindingSeats: 20 },
  { departureTime: "13:30", landing: "14:45", price: 90, remaindingSeats: 21 },
];
const HeratToMashhadflights = [
  { departureTime: "10:00", landing: "11:00", price: 95, remaindingSeats: 5 },
  { departureTime: "14:00", landing: "14:50", price: 93, remaindingSeats: 11 },
  { departureTime: "22:00", landing: "22:50", price: 89, remaindingSeats: 20 },
  { departureTime: "18:30", landing: "16:45", price: 90, remaindingSeats: 21 },
];

export default function Trip() {
  return (
    <>
      <HeroSection />
      <Flights />
    </>
  );
}

function Header() {
  return (
    <div className="fixed w-full z-10 ">
      <h1 className="text-4xl  text-slate-200 font-bold font-serif p-4 flex top-0">
        <FaPlane className="w-10 h-10 bg-blue-100 rounded-full text-blue-600 text-xl p-1 transition-transform duration-500 hover:-translate-y-1 mr-2 animate-float" />
        SKY AIR
      </h1>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative ">
      <Header />
      <div className="absolute  inset-0 bg-gradient-to-t from-black/30 to-black/10 "></div>
      <div
        className="h-screen  "
        style={{
          backgroundImage: `url('/airplane/airplane-4.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className=" p-14 pt-56 ">
          <h2 className="text-slate-700   text-6xl font-bold ">
            Where Do You Want To Go?
          </h2>
          <h3
            className="text-xl text-sky-50 font-semibold pl-2
            "
          >
            We'll Find The Best Route-You Just Choose{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}

function Flights() {
  return (
    <>
      <div className="flex flex-wrap justify-center bg-slate-500 gap-6 pt-32 ">
        <h2 className="w-full">Flights List</h2>
        {HeratToKabulflights.map((items, index) => {
          return (
            <div className=" w-3/5 bg-slate-100 rounded-lg">
              <div className="flex justify-around">
                <h2>Herat</h2>
                <p>⇀</p>
                <h2>Kabul</h2>
              </div>
              <div>
                <h3>
                  Departure-Time: <span>{items.departureTime}</span>{" "}
                </h3>
                <h3>
                  Landing-Time: <span>{items.landing}</span>{" "}
                </h3>
                <h3>
                  Price:{" "}
                  <span>
                    <FaDollarSign className="inline" />
                    {items.price}
                  </span>
                </h3>
                <h3>
                  Remainding-Seats:{" "}
                  <span>
                    {" "}
                    <FaChair className="inline" />
                    {items.remaindingSeats}
                  </span>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
