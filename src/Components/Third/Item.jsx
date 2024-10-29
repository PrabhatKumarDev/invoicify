import React from "react";
import "./Item.css";
const Item = ({ index, onClick, name, description, quantity, price,items,setTotal,currency}) => {
  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;
    
    // Set default values if they don't exist
    items[index] = {
      ...items[index],
      name: items[index]?.name || '',
      description: items[index]?.description || '',
      quantity: items[index]?.quantity || 1,
      price: items[index]?.price || 1.00,
      [fieldName]: fieldName === 'price' || fieldName === 'quantity' 
        ? Number(value) 
        : value
    };

    // Calculate total regardless of which field changed
    let total1=0;
    for(let i=0;i<items.length;i++){
      total1=total1+items[i].price*items[i].quantity;
    }
    const total=total1;
    setTotal(total);
    console.log(total);
  };

  return (
    <>
      <tr className="h-full" id={`tr-${index}`}>
        <td className="w-full">
          <div className="flex flex-col w-full">
            <input
              ref={name}
              onChange={handleChange}
              type="text"
              name="name"
              id="index"
              className="mb-3 item w-full"
              placeholder="Item name"
            />
            <input
              ref={description}
              onChange={handleChange}
              type="text"
              name="description"
              id="description"
              className="mb-3 desc w-full"
              placeholder="Item description"
            />
          </div>
        </td>
        <td className="min-w-[6rem] h-full ">
          <div className="flex h-full">
            <input
              ref={quantity}
              onChange={handleChange}
              className="form-control text-small"
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              defaultValue="1"
            />
          </div>
        </td>
        <td className="min-w-[13rem]">
          <div className="h-full">
            <div className="flex">
              <span className="flex items-center currency-container">
                <span className="currency flex justify-center items-center">
                  {currency}
                </span>
              </span>
              <input
                ref={price}
                onChange={handleChange}
                className="form-control text-small"
                type="number"
                id="price"
                name="price"
                min="1.00"
                step="0.01"
                defaultValue="1.00"
              />
            </div>
          </div>
        </td>
        <td className="min-w-[5rem]">
          <div className="h-full flex justify-center">
            <button
              className="delete-btn"
              onClick={(e) => {
                console.log(index);
                e.preventDefault();
                onClick(index);
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Item;
