import React from "react";
import { useState } from "react";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./page1.css";
// let arr=[];
const Page1 = () => {
  let name, value;
  let navigate = useNavigate();
  const [data, setData] = useState({
    PropertyType: "",
    Negotiable: "",
    Price: "",
    Ownership: "",
    PropertyAge: "",
    PropertyApproved: "",
    PropertyDiscription: "",
    BankLoan: "",
  });
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const saveData = async (e) => {
    const {
      PropertyType,
      Negotiable,
      Price,
      Ownership,
      PropertyAge,
      PropertyApproved,
      PropertyDiscription,
      BankLoan,
    } = data;
    localStorage.setItem("PropertyType", PropertyType);
    localStorage.setItem("Negotiable", Negotiable);
    localStorage.setItem("Price", Price);
    localStorage.setItem("Ownership", Ownership);
    localStorage.setItem("PropertyAge", PropertyAge);
    localStorage.setItem("PropertyApproved", PropertyApproved);
    localStorage.setItem("PropertyDiscription", PropertyDiscription);
    localStorage.setItem("BankLoan", BankLoan);
    navigate("/p2");
    console.log(localStorage);
  };
  return (
    <>
      <div className="pg1cont">
        <h2 className="all">Add New Property</h2>

        <div className="comA">
          <span className="com" id="clr"> 1.Basic Info</span>
          <span className="com">2.Property Details</span>
          <span className="com">3.General info</span>
          <span className="com">4.Location Info</span>
        </div>
        <div className="page1inside">
          <div className="type">
            <div className="two">
              <h3>Property Type</h3>

              <select
                id="PropertyType"
                className="opt"
                name="PropertyType"
                onChange={handleInput}
              >
                <option value="PropertyType">select Property Type</option>
                <option value="House">House</option>
                <option value="flat">Flat</option>
                <option value="Plot">Plot</option>
              </select>
            </div>
            <div className="two">
              <h3>Negotiable</h3>

              <select
                id="Negotiable"
                className="opt"
                name="Negotiable"
                onChange={handleInput}
              >
                <option value="selectNegotiable">select Negotiable</option>
                <option value="yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="type">
            <div className="two">
              <h3>Price</h3>

              <input
                id="Price"
                placeholder="  ex:-100000"
                className="opt1"
                name="Price"
                onChange={handleInput}
              ></input>
            </div>
            {/* </div>
            <div className="type"> */}
            <div className="two">
              <h3>Ownership</h3>

              <select
                id="Ownership"
                className="opt"
                name="Ownership"
                onChange={handleInput}
              >
                <option value="SelectOwnership">Select Ownership</option>
                <option value="sold">Sold</option>
                <option value="Unsold">Unsold</option>
              </select>
            </div>
          </div>
          <div className="type">
            <div className="two">
              <h3>Property Age</h3>

              <select
                id="PropertyAge"
                className="opt"
                name="PropertyAge"
                onChange={handleInput}
              >
                <option value="select PropertyAge">select PropertyAge</option>
                <option value="New">New</option>
                <option value="used">Used</option>
              </select>
            </div>

            <div className="two">
            <h3>Property Approved</h3>
              <select
                id="PropertyApproved"
                className="opt"
                name="PropertyApproved"
                onChange={handleInput}
              >
                <option value="select PropertyApproved">select PropertyApproved</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            </div>
          <div className="type">
            <div className="two">
              <h3>Property Discription</h3>

              <input
                placeholder="  PropertyDiscription"
                className="opt1"
                id="PropertyDiscription"
                name="PropertyDiscription"
                onChange={handleInput}
              ></input>
            </div>
            {/* <div className="type"> */}
            <div className="two">
              <h3>Bank Loan</h3>

              <select
                id="BankLoan"
                className="opt"
                name="BankLoan"
                onChange={handleInput}
              >
                <option value="select Loan">select Loan</option>
                <option value="yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="btn">
            <a href="/data">
              <button className="btn15">Cancel</button>
            </a>
            {/* <a href="/p2"> */}
            <button className="btn15" onClick={saveData}>
              Save & Continue
            </button>
            {/* </a> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Page1;
