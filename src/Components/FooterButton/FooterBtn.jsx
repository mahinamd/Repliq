import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegHandRock } from "react-icons/fa";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { FaHandHoldingMedical } from "react-icons/fa6";

const FooterBtn = () => {
  return (
    <div className="flex mt-4 justify-between">
      <div className="flex items-center text-red-500 bg-red-200 p-3 text-xl ">
        <MdOutlineCancel className="mr-2" />
        <span className="mr-1">Cancel</span>
      </div>
      <div className="flex items-center text-violet-500 bg-violet-200 p-3 text-xl">
        <FaRegHandRock className="mr-2" />
        <span className="mr-1">Hold</span>
      </div>
      <div className="flex items-center text-violet-500 bg-violet-200 p-3 text-xl">
        <TbShoppingCartDiscount className="mr-2" />
        <span className="mr-1"> Discount</span>
      </div>
      <div className="flex items-center text-blue-500 bg-blue-200 p-3 text-xl">
        <FaHandHoldingMedical className="mr-2" />
        <span className="mr-1">Pay Now</span>
      </div>
    </div>
  );
};

export default FooterBtn;
