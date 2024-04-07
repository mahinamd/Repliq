import React from "react";
import Button from "react-bootstrap/Button";
import { FaBars } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { RiTruckLine } from "react-icons/ri";
import { PiNotePencil } from "react-icons/pi";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Headers = () => {
  return (
    <div>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#" className="ml-4">
              <span >
                <FaBars />
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 ml-4"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link
                  href="#action1"
                  className="bg-gray-200 text-blue-500 px-4 py-2 text-lg mr-4"
                >
                  <span className="flex items-center">
                    <PiNotePencil className="mr-1" size={24} />
                    Note
                  </span>
                </Nav.Link>
                <Nav.Link
                  href="#action1"
                  className="bg-gray-200 text-blue-500 px-4 py-2 text-lg  mr-4"
                >
                  <span className="flex items-center">
                    <RiTruckLine className="mr-1" size={24} />
                    Shipping
                  </span>
                </Nav.Link>
                <Nav.Link
                  href="#action1"
                  className="bg-gray-200 text-blue-500 px-4 py-2 text-lg mr-4"
                >
                  <span className="flex items-center">
                    <GiRecycle className="mr-1" size={25} />
                    Hold Orders
                  </span>
                </Nav.Link>
                <Nav.Link
                  href="#action1"
                  className="bg-gray-200 text-blue-500 px-4 py-2 text-lg mr-4"
                >
                  <span className="flex items-center">
                    <BsFillPlusCircleFill className="mr-1" size={25} />
                    New Item
                  </span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Headers;
