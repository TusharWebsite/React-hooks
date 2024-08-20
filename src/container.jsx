import React, { useState } from 'react';
import './App.css';

const Container = () => {
  const [cartItems, setCartItems] = useState([]); // State to store cart items

  const shoes = [
    { id: 1, name: 'White Casual Sneakers', price: 70, image: 'https://png.pngtree.com/png-vector/20231230/ourmid/pngtree-dropshipping-men-hole-sole-jogging-shoes-png-image_11389148.png' },
    { id: 2, name: 'Blue Casual Sneakers', price: 80, image: 'https://www.campusshoes.com/cdn/shop/products/11G-677-G-AFBLU_3.jpg?v=1705644908' },
    { id: 3, name: 'Red Casual Sneakers', price: 90, image: 'https://www.pngitem.com/pimgs/m/576-5764149_boys-red-lace-up-sport-shoe-boys-red.png' },
    { id: 4, name: 'Green Casual Sneakers', price: 100, image: 'https://www.pngitem.com/pimgs/m/192-1921821_unbranded-running-shoe-png-transparent-png.png' },
    { id: 5, name: 'Black Casual Sneakers', price: 110, image: 'https://png.pngtree.com/png-vector/20201128/ourlarge/pngtree-casual-shoes-png-image_2393725.jpg' },
    { id: 6, name: 'Gray Casual Sneakers', price: 120, image: 'https://png.pngtree.com/png-vector/20240104/ourmid/pngtree-running-shoes-isolated-on-white-jogging-png-image_10887565.png' },
    { id: 7, name: 'Violet Casual Sneakers', price: 130, image: 'https://img.pikbest.com/origin/09/22/21/49qpIkbEsTzSC.png!sw800' },
    { id: 8, name: 'Multiple Casual Sneakers', price: 140, image: 'https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-red-png-image_9145210.png' }
  ];

  const addToCart = (shoe) => {
    const existingItem = cartItems.find(item => item.id === shoe.id);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === shoe.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...shoe, quantity: 1 }]);
    }
  };

  const removeFromCart = (shoeId) => {
    setCartItems(cartItems.reduce((acc, item) => {
      if (item.id === shoeId) {
        if (item.quantity > 1) {
          acc.push({ ...item, quantity: item.quantity - 1 });
        }
      } else {
        acc.push(item);
      }
      return acc;
    }, []));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <div className='allData'>
        <div className='aside'>
          {shoes.map((shoe) => (
            <div className='box' key={shoe.id}>
              <img src={shoe.image} alt={shoe.name} width={250} height={250} />
              <div className='data'><br />
                <h3>{shoe.name}</h3>
                <p style={{ textAlign: "center", marginTop: "20px" }}>${shoe.price}</p>
                <button onClick={() => addToCart(shoe)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className='cart'>
          <h1>Cart</h1>
          <div className='getting'>
            {cartItems.length === 0 ? (
              <p></p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className='cart-item'>
                  <img src={item.image} alt={item.name} width={50} height={50} /> {/* Display shoe image */}
                  <b style={{ marginTop: "-200px" }}>{item.name}</b> <br/>
                  <b style={{ marginLeft: "105px" }}>${item.price}</b>
                  
                  {/* Decrement Button */}
                  <button onClick={() => removeFromCart(item.id)} style={{ backgroundColor: "white", border: "2px solid gray", marginLeft: "100px" }}>-</button>

                  {/* Display Quantity */}
                  <span style={{ marginLeft: "10px", marginRight: "10px" }}>{item.quantity}</span>

                  {/* Increment Button */}
                  <button onClick={() => addToCart(item)} style={{ backgroundColor: "white", border: "2px solid gray", marginLeft: "10px" }}>+</button>
                </div>
              ))
            )}
          </div><br/>
          <h2>Total: ${calculateTotal()}</h2>
        </div>
      </div>
    </>
  );
}

export default Container;
