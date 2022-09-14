import React from "react";
import "./page1.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Page3=()=>{
    let navigate=useNavigate();
  let name2,value2;
    const [data, setData] = useState({
      name: "",
      mobile: "",
      poster:"",
      sale: "",
      fp: "",
      Pp: ""
      });
      const handleInput22 = (e) =>{
        name2 = e.target.name;
      value2 = e.target.value;
        setData({...data, [name2]:value2})
        
    }

  const saveInput2=async (e)=>{
    const {
          name,
          mobile,
          poster,
          sale,
          fp,
          Pp
        } = data;
    localStorage.setItem("name", name)
    localStorage.setItem("mobile", mobile)
    localStorage.setItem("poster", poster)
    localStorage.setItem("sale", sale)
    localStorage.setItem("fp", fp)
    localStorage.setItem("Pp", Pp)
        navigate("/p4");
  }
    return(
        <>
        <div className="pg1cont">
        <h2 className="all">Add New Property</h2>

        <div className="comA">
          <span className="com" >
            1.Basic Info
          </span>
          <span className="com">2.Property Details</span>
          <span className="com" id="clr">3.General info</span>
          <span className="com">4.Location Info</span>
        </div>
        <div className="page1inside">
        <div className="type">
            <div className="two">
              <h3>Name</h3>
              <input
                id="name"
                placeholder="  Owner Name"
                className="opt1"
                name="name"
                onChange={handleInput22}
              ></input>
            </div>

            
            <div className="two">
              <h3>Mobile</h3>

              <input
                id="mobile"
                placeholder="  Enter Mobile Number "
                className="opt1 "
                name="mobile"
                onChange={handleInput22}
              ></input>
            </div>
            </div>
        <div className="type">
            <div className="two">
              <h3>Posted By</h3>
              <select
                id="poster"
                className="opt"
                onChange={handleInput22}
              >
                <option value="yes">Posted By</option>
                <option value="Owner">Owner</option>
                <option value="Broker">Broker</option>
              </select>
            </div>
          
         
              <div className="two">
              <h3>Sale Type</h3>
              <select
                id="sale"
                className="opt"
                onChange={handleInput22}
              >
                <option value="Pleaseselect">Please Select</option>
                <option value="Sold">Sold</option>
                <option value="Unsold">Unsold</option>
              </select>
            </div>
            </div>
           
            <div className="type">
            <div className="two">
              <h3>Featured Package</h3>
              <select
                id="fp"
                className="opt"
                name="fp"
                onChange={handleInput22}
              >
                <option value="Pleaseselect">Please Select</option>
                <option value="100000">100000</option>
                <option value="200000">200000</option>
              </select>
            </div>
          
            <div className="two">
              <h3>PPD Package</h3>
              <select
                id="Pp"
                className="opt"
                name="Pp"
                onChange={handleInput22}
              >
                <option value="Pleaseselect">Please Select</option>
                <option value="100000">100000</option>
                <option value="200000">200000</option>
              </select>
            </div>
            </div>

            <div className="imagecon">
            <img src="cmg.png" className="img2" alt=""></img>
            </div>
            <div className="imgpos">
            <input type='file' id="imgfile"/>
            <label for='imgfile'>Add Photo</label>
            </div>
            
          <div className="btn">
            <a href="/p2">
              <button className="btn15">Previous</button>
            </a>
            {/* <a href="/p2"> */}
            <button className="btn15" onClick={saveInput2}>
              Save & Continue
            </button>
            {/* </a> */}
          </div>
        </div>
      </div>
     
        </>
    )
}
export default Page3;