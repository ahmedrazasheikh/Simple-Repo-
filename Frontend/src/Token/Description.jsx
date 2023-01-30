import React from "react";
import CartIcon from "./Icons/CartIcon";
import QuantityButton from "./QuantityButton";
import '../App.css'
import Avatar from '@mui/material/Avatar';
const Description = ({ onQuant, onAdd, onRemove, onSetOrderedQuant }) => {
  return (
    <section className="description">
      <p className="pre">Shirts Company </p>
      <h1>fall limited edition Shirts </h1>
      <p className="desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer
      </p>
      <div className="price">
        
        
          <p  className="text-2xl" >$125.00</p>
        <span  className="underline decoration-solid  my-4">Size Guides:</span>
        <div  className="flex flex-wrap"  >
            <div class="btnklf"    onClick={(e)=>{
              console.log(e)
              console.log(this)
            }} >
                <input type="radio" name="gender" id="Small" />
                <label for="Male">S</label>
             </div>
           <div class="btnklf">
                <input type="radio" name="gender" id="Medium" />
                <label for="Female">M</label>
            </div>
           <div class="btnklf">
                <input type="radio" name="gender" id="Large" />
                <label for="Female">L</label>
            </div>
           <div class="btnklf">
                <input type="radio" name="gender" id="Extra-Large" />
                <label for="Female">XL</label>
            </div>
        
           
        
       
        </div>
      </div>
      <div className="buttons">
        <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} />
        <button
          className="add-to-cart"
          onClick={() => {
            onSetOrderedQuant(onQuant);
          }}
        >
          <CartIcon />
          add to cart
        </button>
      </div>
    </section>
  );
};

export default Description;
