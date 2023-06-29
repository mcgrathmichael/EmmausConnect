/* eslint-disable */
import React, { useState } from "react";

function PhoneList({ smartphones }) {
  const [filters, setFilters] = useState({
    android: false,
    apple: false,
    network3g: false,
    network4g: false,
    network5g: false,
    blocked: false,
    intact: false,
    commeNeuf: false,
    rayures: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const filteredSmartphones = smartphones.filter((smartphone) => {
    const isBrandMatch =
      (!filters.android &&
        !filters.apple &&
        !filters.lg &&
        !filters.sony &&
        !filters.nokia &&
        !filters.google &&
        !filters.samsung &&
        !filters.huawei &&
        !filters.motorola &&
        !filters.xiaomi) ||
      (filters.android && smartphone.brand === "Android") ||
      (filters.apple && smartphone.brand === "Apple") ||
      (filters.lg && smartphone.brand === "LG") ||
      (filters.sony && smartphone.brand === "Sony") ||
      (filters.nokia && smartphone.brand === "Nokia") ||
      (filters.google && smartphone.brand === "Google") ||
      (filters.samsung && smartphone.brand === "Samsung") ||
      (filters.huawei && smartphone.brand === "Huawei") ||
      (filters.xiaomi && smartphone.brand === "Xiaomi") ||
      (filters.android && smartphone.brand === "Motorola");

    const isNetworkMatch =
      (!filters.network3g && !filters.network4g && !filters.network5g) ||
      (filters.network3g && smartphone.network === "3G") ||
      (filters.network4g && smartphone.network === "4G") ||
      (filters.network5g && smartphone.network === "5G");

    const isBlockedMatch = !filters.blocked || !smartphone.blocked_operator;
    const isConditionMatch =
      (!filters.intact && !filters.commeNeuf && !filters.rayures) ||
      (filters.intact && smartphone.phone_condition === "intact") ||
      (filters.commeNeuf && smartphone.phone_condition === "Comme neuf") ||
      (filters.rayures && smartphone.phone_condition === "rayures");

    return isBrandMatch && isNetworkMatch && isBlockedMatch && isConditionMatch;
  });

  const totalResults = filteredSmartphones.length;

  return (
    <div className="flex justify-center py-24">
      <div className=" w-10/12">
        {/* Brands */}
        <div className="mb-6 flex-auto grid grid-cols-3 gap-4">
          <div>
            {" "}
            <h3 className="text-lg font-medium mb-2">Brands</h3>
          </div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="android"
              checked={filters.android}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-sm">Android</span>
          </label>
          <label className="">
            <input
              type="checkbox"
              name="apple"
              checked={filters.apple}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-sm">Apple</span>
          </label>
          <label className="">
            <input
              type="checkbox"
              name="lg"
              checked={filters.lg}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-sm">LG</span>
          </label>
          <label className="">
            <input
              type="checkbox"
              name="sony"
              checked={filters.sony}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-sm">Sony</span>
          </label>
          <label className="">
            <input
              type="checkbox"
              name="nokia"
              checked={filters.nokia}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-sm">Nokia</span>
          </label>
          <label className="">
            <input
              type="checkbox"
              name="google"
              checked={filters.google}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-sm">Google</span>
          </label>
          <label className="">
            <input
              type="checkbox"
              name="samsung"
              checked={filters.samsung}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-sm">Samsung</span>
          </label>
          <label className="">
            <input
              type="checkbox"
              name="huawei"
              checked={filters.huawei}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-sm">Huawei</span>
          </label>
          <label className="">
            <input
              type="checkbox"
              name="xiaomi"
              checked={filters.xiaomi}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-sm">Xiaomi</span>
          </label>
        </div>

        {/* Render checkboxes for network */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Network</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="network3g"
                checked={filters.network3g}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm">3G</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="network4g"
                checked={filters.network4g}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm">4G</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="network5g"
                checked={filters.network5g}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm">5G</span>
            </label>
          </div>
        </div>
        {/* Render checkboxes for condition */}

        {/* Blocked */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Blocked</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="blocked"
                checked={filters.blocked}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm">Blocked</span>
            </label>
            {/* Add other blocked checkboxes here */}
          </div>
        </div>

        {/* Conditions */}
        <div>
          <h3 className="text-lg font-medium mb-2">Conditions</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="intact"
                checked={filters.intact}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm">Intact</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="commeNeuf"
                checked={filters.commeNeuf}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm">Comme neuf</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rayures"
                checked={filters.rayures}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm">rayures</span>
            </label>
          </div>
          {/* Render filtered smartphones */}
          {filteredSmartphones.length > 0 ? (
            filteredSmartphones.map((smartphone) => (
              <div
                key={smartphone.product_id}
                className="bg-white  m-8 rounded-lg shadow-md  flex  "
              >
                <div className="flex justify-center items-center">
                  <img
                    src={smartphone.phone_img}
                    alt="smartphone"
                    className="w-40 h-auto object-contain m-24"
                  />
                </div>
                <div className="flex items-center flex-wrap">
                  <h3 className="text-xl font-bold mb-24">
                    {smartphone.brand} {smartphone.model}
                  </h3>
                  <h4 className="text-lg font-medium mb-24">
                    {smartphone.price}
                  </h4>
                  <p className="text-gray-500">{smartphone.phone_condition}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No smartphones found.</p>
          )}
          {/* Display total results */}
          <p>Total Results: {totalResults}</p>
          {/* Conditions */}
          <div>
            <h3 className="text-lg font-medium mb-2">Conditions</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="intact"
                  checked={filters.intact}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-sm">Intact</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneList;
