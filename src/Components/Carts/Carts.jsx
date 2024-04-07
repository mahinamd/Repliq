import React from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaCirclePlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import { FaMinusCircle } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../Redux/Slice";
import FooterBtn from "../FooterButton/FooterBtn";

const Carts = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // Function to handle increment quantity
  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  // Function to handle decrement quantity
  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  // Function to handle remove product from cart
  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  // Calculate subtotal for each product
  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateGrandTotal = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const taxRate = 0.1; // Example tax rate
    const shippingCost = 5; // Example shipping cost

    const tax = subtotal * taxRate;
    const discount = subtotal * tax * 0.01;
    const grandTotal = subtotal + tax + shippingCost - discount;

    return { subtotal, tax, shippingCost, discount, grandTotal };
  };
  const { subtotal, tax, shippingCost, discount, grandTotal } =
    calculateGrandTotal();

  return (
    <div className="container mx-auto">
     
      <div className="bg-gray-100 p-4 flex items-center justify-between mt-3">
        <div className="flex items-center text-blue-500 ">
          <CgProfile
            className="mr-2 text-blue-500"
            style={{ fontSize: "1.2rem" }}
          />
          <p className="text-blue-500" style={{ fontSize: "1.2rem" }}>
            Steve Jobs
          </p>
        </div>
        <div>
          <CiCirclePlus
            className="text-blue-500"
            style={{ fontSize: "1.8rem" }}
          />
        </div>
      </div>

      <div className="overflow-x-auto mt-3">
        <table className="table-auto w-full">
          <tbody>
            {cartItems.map((product, index) => (
              <tr key={index} className="border-b">
                <span className="px-4 py-2">
                  <HiOutlinePencilAlt />
                </span>
                <td className="px-4 py-2 border-l">{product.name}</td>
                <td className="px-4 py-2">${product.price}</td>
                <td className="px-4 py-2">
                  <button onClick={() => handleDecrement(product.id)}>
                    {" "}
                    <span className="text-gray-500 ">
                      <FaMinusCircle />
                    </span>{" "}
                  </button>
                  <span className="mx-2">{product.quantity}</span>
                  <button onClick={() => handleIncrement(product.id)}>
                    {" "}
                    <span className="text-gray-500">
                      <FaCirclePlus />
                    </span>{" "}
                  </button>
                </td>
                <td className="px-4 py-2 ">
                  ${calculateSubtotal(product.price, product.quantity)}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="text-red-500   font-bold py-2 px-4 rounded"
                  >
                    <span style={{ color: "inherit" }}>
                      <RiDeleteBin6Line size={24} />
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <Table
          sx={{ width: 350 }}
          aria-label="spanning table"
          className="table-auto"
        >
          <TableRow>
            <TableCell colSpan={4} className="pr-2">
              Subtotal:{" "}
            </TableCell>
            <TableCell align="right">${subtotal}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}>Tax: </TableCell>
            <TableCell align="right">${tax}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}>Shipping: </TableCell>
            <TableCell align="right">${shippingCost}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4} className="font-bold text-blue-500">
              Discount on Cart:
            </TableCell>

            <TableCell align="right">${discount}</TableCell>
          </TableRow>
        </Table>
      </div>
      <div className="flex justify-between mt-10 bg-blue-100 p-3">
        <div>
          <p className="text-left text-blue-500">Product Count(3) </p>
        </div>
        <div className="mr-20">
          <span className="text-xl font-bold text-blue-500 mr-10">Total</span>
          <span className="text-xl font-bold text-blue-500">${grandTotal}</span>
        </div>
      </div>
      <div>
        <FooterBtn/>
      </div>
    </div>
  );
};

export default Carts;
