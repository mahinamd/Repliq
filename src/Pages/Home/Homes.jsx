import React from "react";
import Headers from "../../Components/Header/Headers";
import Products from "../../Components/Products/Products";
import { CiSearch } from "react-icons/ci";
import productData from "../../Components/Products/productitem.json";
import Carts from "../../Components/Carts/Carts";
import CategoryBtn from "../../Components/CategoryButton/CategoryBtn";

const Homes = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <div>
          <Headers />
        </div>
        <div>
          <Carts />
        </div>
      </div>
      <div className="w-1/2">
        <div className="relative bg-gray-300 mt-2">
          <input
            type="search"
            className="px-8 py-2 w-full h-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Product"
          />
          <CiSearch className="absolute ml-1 top-1/2 transform -translate-y-1/2" />
        </div>
        <div className="my-4 mx-6">
          <CategoryBtn/>
        </div>
        <div>
          <Products products={productData.products} />
        </div>
      </div>
    </div>
  );
};

export default Homes;
