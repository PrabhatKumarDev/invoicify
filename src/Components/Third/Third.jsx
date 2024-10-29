import React from "react";
import "./Third.css";
import Item from "./Item";
import { useState, useEffect, useRef } from "react";

const Third = ({items,handleAddItem,name,description,quantity,price,handleDeleteItem,setTotal,currency}) => {
  
  const onAddItem=(e)=>{
    e.preventDefault();
    handleAddItem();
    let total1=1;
    for(let i=0;i<items.length;i++){
      total1=total1+items[i].price*items[i].quantity;
    }
    const total2=total1;
    setTotal(total2);
  }
  return (
    <>
      <table className="table w-full mb-6">
        <thead>
          <tr>
            <th className="text-left font-bold text-small">ITEM</th>
            <th className="font-bold text-small text-start">QTY</th>
            <th className="font-bold text-small text-start">PRICE/RATE</th>
            <th className="font-bold text-small text-start">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((item,index)=>(
              <Item key={index} index={index} name={name} description={description} quantity={quantity} price={price}  onClick={()=>handleDeleteItem(index)} items={items}   setTotal={setTotal} currency={currency}/>
            ))
          }
        </tbody>
      </table>
      <button className="add-btn" onClick={(e)=>onAddItem(e)}>
        Add Item
      </button>
    </>
  );
};

export default Third;
