import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Table.css";
const Table = () => {
  
  const [allPost, setAllPost] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  useEffect(() => {
    fetch("http://localhost:3005/posts")
      .then((res) => {
        return res.json();
      })
      .then((postData) => {
        setAllPost(postData);
      });
  }, []);
  return (
    <>
      <div className="a2">
        <input
          placeholder="Search PPD ID"
          className="PPPID"
          onChange={(e) => {
            setsearchTerm(e.target.value);
          }}
        ></input>
        <img src="search.png" className="i1" alt=""></img>
            <a href="/p1">
        <button className="btn3" >
          + Add property
        </button>
        </a>
      </div>
      <div className="tablebody">
        <table className="Table">
          <tr className="table-header">
            <td className="cell1">PPP ID</td>
            <td className="cell1">Image</td>
            <td className="cell1">Property</td>
            <td className="cell1">Contact</td>
            <td className="cell1">Total Area</td>
            <td className="cell1">views</td>
            <td className="cell1">Status</td>
            <td className="cell1">Days left</td>
            <td className="cell1">Action</td>
          </tr>
        </table>
      </div>
      <div>
        {allPost
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else {
              return val.PropertyType.toLowerCase().includes(
                searchTerm.toLowerCase()
              );
            }
          })
          .map((ele) => {
            return (
              <div className="body">
                <table className="Table">
                  <tr className="inside table">
                    <td className="cell">{parseInt(Math.random() * 10000)}</td>
                    <td className="cell">
                      <img alt="img" className="i3" src="img.png"></img>
                    </td>
                    <td className="cell">{ele.PropertyType}</td>
                    <td className="cell">{ele.mobile}</td>
                    <td className="cell">{ele.Area}</td>
                    <td className="cell">{parseInt(Math.random() * 10)}</td>
                    <td className="cell">
                      <button className="soldstatus" >{ele.Ownership}</button>
                      </td>
                    <td className="cell">{parseInt(Math.random() * 100)}</td>
                    <td className="cell">
                      <img src="i.png" alt="img" className="i3"></img>
                      <img src="edit.png" alt="img" className="i3"></img>
                    </td>
                  </tr>
                </table>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Table;
