import React from "react";

const CategoryBtn = () => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-2">
        <button className="border border-blue-500  text-blue-500  bg-transparent py-2 px-4 rounded">
          All Categories
        </button>
      </div>

      <div className="flex-shrink-0 mr-2">
        <button className="border border-black hover:border-blue-500 text-black hover:text-blue-500 bg-transparent py-2 px-4 rounded">
          Electronics
        </button>
      </div>

      <div className="flex-shrink-0 mr-2">
        <button className="border border-black hover:border-blue-500 text-black hover:text-blue-500 bg-transparent py-2 px-4 rounded">
          Home Style
        </button>
      </div>

      <div className="flex-shrink-0 mr-2">
        <button className="border border-black hover:border-blue-500 text-black hover:text-blue-500 bg-transparent py-2 px-4 rounded">
          Men
        </button>
      </div>

      <div className="flex-shrink-0">
        <button className="border border-black hover:border-blue-500 text-black hover:text-blue-500 bg-transparent py-2 px-4 rounded">
          Women
        </button>
      </div>
    </div>
  );
};

export default CategoryBtn;
