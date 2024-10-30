import { useState, useRef } from "react";
import "./App.css";
import FirstPart from "./Components/First/FirstPart";
import Second from "./Components/Second/Second";
import Third from "./Components/Third/Third";
import Fourth from "./Components/Fourth/Fourth";
import Notes from "./Components/Notes";
import Right from "./Components/Right";
import Review from "./Components/Review"; 
function App() {
  const symbol=useRef(null);
  const [currency,setCurrency]=useState("$");
  const name = useRef(null);
  const description = useRef(null);
  const quantity = useRef(null);
  const price = useRef(null);
  const [review,setReview]=useState(false);
  const [items, setItems] = useState([
    {
      name: "",
      description: "",
      quantity: 1,
      price: 1.0,
      total: 1.0, // Default total (quantity * price)
    },
  ]);
  const [tax,setTax]=useState(0.0);
  const [discount,setDiscount]=useState(0);
  const [total, setTotal] = useState(1);

  const handleAddItem = () => {
    const newItem = {
      name: "",
      description: "",
      quantity: 1,
      price: 1.0,
      total: 1.0, // Default total (quantity * price)
    };

    // Add the new empty item to the array
    setItems((prevItems) => [...prevItems, newItem]);
    setTotal(total);
  };
  
  const isFormValid = () => {
    // Check if there are any items
    if (items.length === 0) return false;
    // Check if all items have required fields filled
    return items.every(item => 
      item.name.trim() !== '' && 
      item.description.trim() !== ''
      
    );
  };

  const handleDeleteItem = (indexToDelete) => {
    const updatedItems = items.filter((__, index) => index !== indexToDelete);
    setItems(updatedItems);
    let total1 = 0;
    for (let i = 0; i < updatedItems.length; i++) {
      total1 = total1 + updatedItems[i].price * updatedItems[i].quantity;
    }
    const total = total1;
    setTotal(total);
  };
  console.log(currency);
  const handleReview=()=>{
    setReview(true);
  }

  return (
    <>
    {review && <Review handleClose={()=>setReview(false)} />}
      <div
        className="container
      w-full h-full flex justify-center items-center"
      >
        <form className="form-container flex ">
          <div className="col1 w-3/4 h-full padding">
            <div className="bg-primary h-fit">
              <FirstPart />
              <hr className="hr" />
              <Second />
              <Third
                items={items}
                handleAddItem={handleAddItem}
                name={name}
                description={description}
                quantity={quantity}
                price={price}
                handleDeleteItem={handleDeleteItem}
                setItems={setItems}
                total={total}
                setTotal={setTotal}
                currency={currency}
              />
              <Fourth total={total} tax={tax} discount={discount} currency={currency}/>
              <hr className="hr" />
              <Notes />
            </div>
          </div>
          <div className="col2 w-1/4 h-full  padding">
            <Right tax={tax} setTax={setTax} discount={discount} setDiscount={setDiscount} total={total} currency={currency} setCurrency={setCurrency} onClick={handleReview} isFormValid={isFormValid} />
          </div>
        </form>
      </div>
      {/* <Review /> */}
    </>
  );
}

export default App;
