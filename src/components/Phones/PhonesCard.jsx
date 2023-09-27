import React from "react";
import { Link } from "react-router-dom";

const PhonesCard = ({ phone }) => {
  const { id, phone_name, brand_name, rating, price, image } = phone || {};

  return (
    <div>
      <Link to={`/phones/${id}`} state={phone_name}>
      <div className="relative flex w-50 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-50 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {brand_name}
          </p>
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default PhonesCard;
