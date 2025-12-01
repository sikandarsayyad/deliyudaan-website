import { useState } from "react";
// import { trackOrder } from "../services/trackingService";

const TrackingBox = () => {
  const [type, setType] = useState("awb");
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = async () => {
    if (!trackingId.trim()) return alert("Please enter a tracking number");

    try {
      const response = await trackOrder(trackingId);
      console.log("Tracking Response:", response);
      alert("Tracking data fetched! (See console)");
    } catch (error) {
      console.error(error);
      alert("Tracking failed. Check console.");
    }
  };

  return (
    <div className="w-full flex justify-center px-4">
      <div className="
        bg-white shadow-lg rounded-xl 
        w-full max-w-7xl 
        p-6 md:p-10 
        -mt-20 relative z-10 
        flex flex-col md:flex-row gap-10
      ">

        {/* Left Section – Track Your Order */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-3">Track Your Order</h2>

          {/* Radio Buttons */}
          <div className="flex items-center gap-6 mb-4 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={type === "awb"}
                onChange={() => setType("awb")}
                className="accent-orange-600"
              />
              AWB
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={type === "order"}
                onChange={() => setType("order")}
                className="accent-orange-600"
              />
              Order/Ref. Number
            </label>
          </div>

          {/* Input + Track Button */}
          <div className="flex bg-gray-100 rounded-md overflow-hidden border">
            <input
              type="text"
              placeholder="Enter Tracking ID here..."
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="flex-1 px-4 py-3 bg-transparent outline-none"
            />
            <button
              onClick={handleTrack}
              className="bg-black text-white px-6 hover:bg-gray-900 transition"
            >
              Track
            </button>
          </div>

          <p className="mt-4 text-sm text-orange-600 cursor-pointer text-right">
            + Multiple Tracking Numbers
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1px] bg-gray-300"></div>

        {/* Right Section — Branch Locator */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-3">Branch Locator</h2>
          <p className="text-sm text-gray-600 mb-6">
            Conveniently locate our stores by entering the pin code, city and state.
          </p>

          <button className="text-orange-600 font-medium text-lg">→</button>
        </div>
      </div>
    </div>
  );
};

export default TrackingBox;
