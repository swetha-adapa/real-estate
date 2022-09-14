import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./page1.css";
// import arr from "./page1";
// let arr2=[...arr];
const Page2 = () => {
  let navigate = useNavigate();
  let name1, value1;
  const [data, setData] = useState({
    length1: "",
    Breath: "",
    Area: "",
    AreaUnit: "",
    bhk: "",
    floor: "",
    Furnished: "",
    car: "",
    Lift: "",
    Electricity: "",
    Facing: "",
    // name:localStorage.getItem("name")
  });
  const handelInput1 = (e) => {
    name1 = e.target.name;
    value1 = e.target.value;
    setData({ ...data, [name1]: value1 });
  };

  const sendData1 = async (e) => {
    const {
      length1,
      Breath,
      Area,
      AreaUnit,
      bhk,
      floor,
      Furnished,
      car,
      Lift,
      Electricity,
      Facing,
    } = data;
    localStorage.setItem("length1", length1);
    localStorage.setItem("Breath", Breath);
    localStorage.setItem("Area", Area);
    localStorage.setItem("AreaUnit", AreaUnit);
    localStorage.setItem("bhk", bhk);
    localStorage.setItem("floor", floor);
    localStorage.setItem("Furnished", Furnished);
    localStorage.setItem("car", car);
    localStorage.setItem("Lift", Lift);
    localStorage.setItem("Electricity", Electricity);
    localStorage.setItem("Facing", Facing);
    navigate("/p3");
  };
  return (
    <>
      <div className="pg1cont">
        <h2 className="all">Add New Property</h2>

        <div className="comA">
          <span className="com">1.Basic Info</span>
          <span className="com" id="clr">
            2.Property Details
          </span>
          <span className="com">3.General info</span>
          <span className="com">4.Location Info</span>
        </div>
        <div className="page1inside">
          <div className="type">
            <div className="two">
              <h3>Length</h3>

              <input
                id="length1"
                className="opt"
                placeholder=" Example:1000"
                onChange={handelInput1}
              ></input>
            </div>

            <div className="two">
              <h3>Breath</h3>

              <input
                id="Breath"
                className="opt"
                placeholder=" Example:1000"
                onChange={handelInput1}
              ></input>
            </div>
          </div>
          <div className="type">
            <div className="two">
              <h3>Total Area</h3>

              <input
                id="Area"
                placeholder="  Example:7500"
                className="opt"
                name="Area"
                onChange={handelInput1}
              ></input>
            </div>

            <div className="two">
              <h3>Area Unit</h3>

              <select id="AreaUnit" className="opt" onChange={handelInput1}>
                <option value="Select Area Unit">Select Area Unit</option>
                <option value="sq.feet">sq.feet</option>
                <option value="sq.yards">sq.yards</option>
                
              </select>
            </div>
          </div>
          <div className="type">
            <div className="two">
              <h3>No of BHK</h3>

              <select id="bhk" className="opt" onChange={handelInput1}>
                <option value="Select No of Bhk">Select No of BHK</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div className="two">
              <h3>No of Floor</h3>

              <select id="floor" className="opt" onChange={handelInput1}>
                <option value="Select No of Floor">Select No of Floor</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="type">
            <div className="two">
              <h3>Attached</h3>

              <select id="Attached" className="opt" onChange={handelInput1}>
                <option>Select Attached</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="two">
              <h3>Western Toilet</h3>

              <select
                id="Westerntoilet"
                className="opt"
                onChange={handelInput1}
              >
                <option value="Westerntoilet">select Westerntoilet</option>
                <option value="yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="type">
            <div className="two">
              <h3>Furnished</h3>

              <select id="Furnished" className="opt" onChange={handelInput1}>
                <option value="SelectFurnished">Select Furnished</option>
                <option value="yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="two">
              <h3>Car Parking</h3>

              <select id="car" className="opt" onChange={handelInput1}>
                <option value="selectcarparking">Select Car Parking</option>
                <option value="yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="type">
            <div className="two">
              <h3>Lift</h3>

              <select id="Lift" className="opt" onChange={handelInput1}>
                <option value="selectLift">select Lift</option>
                <option value="yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="two">
              <h3>Electricity</h3>

              <input
                id="Electricity"
                className="opt"
                placeholder=" Example:3 phase"
                onChange={handelInput1}
              ></input>
            </div>
          </div>
          <div className="type">
            <div className="two">
              <h3>Facing</h3>

              <select id="Facing" className="opt" onChange={handelInput1}>
                <option value="selectFacing">Select Facing</option>
                <option value="East">East</option>
                <option value="West">West</option>
                <option value="North">North</option>
                <option value="South">south</option>
              </select>
            </div>
          </div>
        </div>

        <div className="btn">
          <a href="/p1">
            <button className="btn15">Previous</button>
          </a>
          {/* <a href="/p2"> */}
          <button className="btn15" onClick={sendData1}>
            Save & Continue
          </button>
          {/* </a> */}
        </div>
      </div>
    </>
  );
};
export default Page2;
