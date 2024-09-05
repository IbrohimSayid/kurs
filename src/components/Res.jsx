import React from "react";

function Amount({
  handleAmout,
  amoutValue,
  convertedValue,
  selectedCountryFrom,
}) {
  return (
    <div className="flex flex-col w-80 ">
      <label>Amount</label>
      <input
        type="text"
        value={amoutValue}
        onChange={handleAmout}
        className="border border-gray-300 rounded-md p-2 text-lg"
      />

      <div className="ressum top-40 absolute w-80 ">
        {" "}
        {convertedValue && (
          <p className="mt-2 text-gray-700">
            {parseFloat(amoutValue).toFixed(2)}{" "}
            {
              selectedCountryFrom.currencies[
                Object.keys(selectedCountryFrom.currencies)[0]
              ].name
            }{" "}
            =
            <span className="font-bold text-xl">
              {" "}
              {convertedValue}{" "}
              {
                selectedCountryFrom.currencies[
                  Object.keys(selectedCountryFrom.currencies)[0]
                ].name
              }
            </span>
          </p>
        )}{" "}
      </div>
    </div>
  );
}

export default Amount;
