import React, { useRef } from 'react'

const Right = ({setTax,setDiscount,setCurrency,currency,onClick,isFormValid}) => {
  const taxref=useRef(null);
  const calculateTax=(e)=>{
    e.preventDefault();
    setTax(taxref.current.value);
  }
  const handleCurrency=(e)=>{
    e.preventDefault();
    setCurrency(e.target.value);
  }
  const handleClick=()=>{
    onClick();
  }
  return (
    <div className="sticky top-0">
      <button className='w-full bg-blue-500 h-8 review text-white text-small' onClick={handleClick} disabled={!isFormValid()}>Review Invoice</button>
      <hr className='w-full hr'/>
      <div className='flex flex-col mb-6'>
        <label className='text-small font-bold mb-3'>Currency</label>
        <select className='w-full review text-center' onChange={(e)=>handleCurrency(e)} >
            <option value="$">USD (United States Dollar)</option>
            <option value="£">GBP (British Pound Sterling)</option>
            <option value="¥">JPY (Japanese Yen)</option>
            <option value="₹">INR (Indian Rupee)</option>
            <option value="$">CAD (Canadian Dollar)</option>
            <option value="$">AUD (Australian Dollar)</option>
            <option value="$">SGD (Singapore Dollar)</option>
            <option value="¥">CNY (Chinese Yuan)</option>
        </select>
      </div>
      <div className='flex flex-col mb-6'>
        <label className='text-small font-bold mb-3'>Tax rate:</label>
        <div className='flex flex-row items-center tax-rate'>
            <input type="number" className='w-full' placeholder='0.0'  step="0.1" defaultValue="0" onChange={(e)=>calculateTax(e)} ref={taxref}/>
            <span className='flex items-center justify-center'>%</span>
        </div>
      </div>
      <div className='flex flex-col mb-6'>
        <label className='text-small font-bold mb-3'>Discount rate:</label>
        <div className='flex flex-row items-center tax-rate'>
            <input type="number" className='w-full' placeholder='0.0'  step="0.1" defaultValue="0.0" onChange={(e)=>setDiscount(e.target.value)}/>
            <span className='flex items-center justify-center'>%</span>
        </div>
      </div>
    </  div>
  )
}

export default Right
