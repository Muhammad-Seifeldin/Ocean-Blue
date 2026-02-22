import { useState, useMemo } from "react";

const TRANSFER_PRICE = 100;
const LUNCH_PRICE = 30;

function BookingEngine() {
  const [name, setName] = useState("");
  const [excursion, setExcursion] = useState(null);
  const [adults, setAdults] = useState("1");
  const [kids, setKids] = useState("0");
  const [lunch, setLunch] = useState(false);
  const [privateTransfer, setPrivateTransfer] = useState(false);

  const excursions = [
    { name: "Sunset Cruise", price: 200 },
    { name: "Sandbank Escape", price: 150 },
    { name: "Island Transfer", price: 100 },
  ];

  const total = useMemo(() => {
    if (!excursion) return 0;

    const adultTotal = Number(adults) * excursion.price;
    const kidsTotal = Number(kids) * (excursion.price * 0.5);
    const lunchTotal = lunch
      ? (Number(adults) + Number(kids)) * LUNCH_PRICE
      : 0;
    const transferTotal = privateTransfer ? TRANSFER_PRICE : 0;

    return adultTotal + kidsTotal + lunchTotal + transferTotal;
  }, [excursion, adults, kids, lunch, privateTransfer]);

  const isValid = () => {
    if (!name.trim()) return false;
    if (!excursion) return false;
    if (adults === "" || adults === null) return false;
    if (kids === "" || kids === null) return false;
    return true;
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-pearl-white text-deep-ocean rounded-xl shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-turquoise-horizon mb-4">
        Excursion & Transfer Planner
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border px-4 py-2 rounded"
      />

      <select
        value={excursion?.name || ""}
        onChange={(e) =>
          setExcursion(excursions.find((ex) => ex.name === e.target.value))
        }
        className="w-full border px-4 py-2 rounded"
      >
        <option value="">Select Excursion</option>
        {excursions.map((ex) => (
          <option key={ex.name} value={ex.name}>
            {ex.name} (${ex.price})
          </option>
        ))}
      </select>

      <div className="flex space-x-4">
        <div className="flex-1">
          <label htmlFor="adults" className="block mb-1 font-medium">
            Adults
          </label>
          <input
            id="adults"
            type="number"
            min={0}
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="kids" className="block mb-1 font-medium">
            Kids
          </label>
          <input
            id="kids"
            type="number"
            min={0}
            value={kids}
            onChange={(e) => setKids(e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={lunch}
            onChange={(e) => setLunch(e.target.checked)}
          />
          <span>Add Lunch (${LUNCH_PRICE}/person)</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={privateTransfer}
            onChange={(e) => setPrivateTransfer(e.target.checked)}
          />
          <span>Private Transfer (${TRANSFER_PRICE})</span>
        </label>
      </div>

      <div className="text-lg font-semibold">
        Total: <span className="text-turquoise-horizon">${total}</span>
      </div>
      <button
        onClick={() => {
          if (!isValid()) {
            alert("Please fill in all fields before submitting.");
            return;
          }
          // handle submission here
        }}
        className="w-full bg-turquoise-horizon text-pearl-white font-semibold py-3 rounded hover:bg-deep-ocean transition-colors duration-300"
      >
        Create My Itenerary!
      </button>
    </div>
  );
}

export default BookingEngine;
