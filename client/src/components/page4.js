import React from "react";
import "./page1.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const Page4=()=>{
    let navigate=useNavigate();
  let name4,value4;
    const [data, setData] = useState({
      PropertyType:localStorage.getItem("PropertyType"),
      Negotiable:localStorage.getItem("Negotiable"),
      Price:localStorage.getItem("Price"),
      Ownership:localStorage.getItem("Ownership"),
      PropertyAge:localStorage.getItem("PropertyAge"),
      PropertyApproved:localStorage.getItem("PropertyApproved"),
      PropertyDiscription:localStorage.getItem("PropertyDiscription"),
      BankLoan:localStorage.getItem("BankLoan"),
      length1:localStorage.getItem("length1"),
      Breath:localStorage.getItem("Breath"),
      Area:localStorage.getItem("Area"),
      AreaUnit:localStorage.getItem("AreaUnit"),
      bhk:localStorage.getItem("bhk"),
      floor:localStorage.getItem("floor"),
      Furnished:localStorage.getItem("Furnished"),
      car:localStorage.getItem("car"),
      Lift:localStorage.getItem("Lift"),
      Electricity:localStorage.getItem("Electricity"),
      Facing:localStorage.getItem("Facing"),
      name:localStorage.getItem("name"),
      mobile:localStorage.getItem("mobile"),
      poster:localStorage.getItem("poster"),
      sale:localStorage.getItem("sale"),
      fp:localStorage.getItem("fp"),
      Pp:localStorage.getItem("Pp"),
        Email: "",
      city: "",
      area:"",
      pincode: "",
      Address: "",
      landmark: "",
      lalitude: "",
      longitude: ""
      });
      const handleInput3 = (e) =>{
        name4 = e.target.name;
      value4 = e.target.value;
        setData({...data, [name4]:value4})
        
    }
  const saveInput3 = async (e) => {
    e.preventDefault();
    const {
      PropertyType,
          Negotiable,
          Price,
          Ownership,
          PropertyAge,
          PropertyApproved,
          PropertyDiscription,
          BankLoan,
          length1,
          Breath,
          Area,
          AreaUnit,
          bhk,
          name,
          mobile,
          poster,
          sale,
          fp,
          Pp,
          floor,
          Furnished,
          car,
          Lift,
          Electricity,
          Facing,
        Email,
      city,
      area,
      pincode,
      Address,
      landmark,
      lalitude,
      longitude
    } = data;
    await fetch("http://localhost:3005/adding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        PropertyType:PropertyType,
          Negotiable: Negotiable,
          Price:Price,
          Ownership:Ownership,
          PropertyAge:PropertyAge,
          PropertyApproved:PropertyApproved,
          PropertyDiscription:PropertyDiscription,
          BankLoan:BankLoan,
          length1:length1,
          Breath:Breath,
          Area:Area,
          AreaUnit:AreaUnit,
          bhk:bhk,
          floor:floor,
          Furnished:Furnished,
          car:car,
          Lift:Lift,
          Electricity:Electricity,
          Facing:Facing,
          name:name,
          mobile:mobile,
          poster:poster,
          sale:sale,
          fp:fp,
          Pp:Pp,
        Email: Email,
        city: city,
        area: area,
        pincode:pincode,
        Address: Address,
        landmark: landmark,
        lalitude:lalitude,
        longitude:longitude
      }),
    }).then(() => {
    console.log(data);
      navigate("/data");
    });
};
    return(
        <>
        <div className="pg1cont">
        <h2 className="all">Add New Property</h2>

        <div className="comA">
          <span className="com" >
            1.Basic Info
          </span>
          <span className="com">2.Property Details</span>
          <span className="com">3.General info</span>
          <span className="com" id="clr">4.Location Info</span>
        </div>
        <div className="page1inside">
          
          <div className="type">
            <div className="two">
              <h3>Email</h3>

              <input
                id="Email"
                placeholder="  Email"
                className="opt1"
                name="Email"
                onChange={handleInput3}
              ></input>
            </div>
            <div className="two">
              <h3>City</h3>

              <select
                id="City"
                className="opt"
                name="City"
                onChange={handleInput3}
              >
                <option value="Selectcity">select City</option>
                <option value="Hyderbad">Hyderbad</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
              </select>
            </div>
            </div>

          <div className="type">        
          <div className="two">
              <h3>Area</h3>

              <select
                id="AreaField"
                className="opt"
                name="AreaField"
                onChange={handleInput3}
              >
                <option value="Select Area">Select Area</option>
                <option value="White Field">White Field</option>
                <option value="Btm layout">Btm layout</option>
                
              </select>
            </div>
         
            
            <div className="two">
              <h3>Pincode</h3>

              <select
                id="Pincode"
                className="opt"
                name="Pincode"
                onChange={handleInput3}
              >
                <option value="SelectPincode">Select Pincode</option>
                <option value="500082">500082</option>
                <option value="110050">110050</option>
                <option value="400044">400044</option>
                <option value="560011">560011</option>
                <option value="600100">600100</option>
                <option value="720001">720001</option>
                
              </select>
            </div>
            </div>

            <div className="type">       
            <div className="two">
              <h3>Address</h3>

              <input
                id="Address"
                placeholder="   Address"
                className="opt1"
                name="Address"
                onChange={handleInput3}
              ></input>
            
          </div>
          
            <div className="two">
              <h3>Landmark</h3>

              <input
                placeholder="  Landmark"
                className="opt1"
                id="Landmark"
                name="Landmark"
                onChange={handleInput3}
              ></input>
            </div>
            </div>
         
            <div className="type">       
            <div className="two">
              <h3>Latitude</h3>

              <input
                placeholder="  Latitude"
                className="opt1"
                id="Latitude"
                name="Latitude"
                onChange={handleInput3}
              ></input>
            </div>

            <div className="two">
              <h3>Longitude</h3>

              <input
                placeholder="  Longitude"
                className="opt1"
                id="Longitude"
                name="Longitude"
                onChange={handleInput3}
              ></input>
            </div>
          </div>

          <div className="btn">
            <a href="/p3">
              <button className="btn15">Previous</button>
            </a>
            
            <button className="btn15" onClick={saveInput3}>Add Property</button>
           
          </div>
        </div>
      </div>
        </>
    )
}
export default Page4;