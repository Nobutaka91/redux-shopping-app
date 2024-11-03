import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartContainer = () => {
  const { amount, cartItems, total } = useSelector(store => store.cart);
  
  if (amount < 1) {
    return (
      <section className="cart"> 
        <header> 
          <h2>買い物かご</h2>
          <h4 className="empty-cart">何も入ってません。。。。😢</h4>
        </header>
      </section>
    )
  };

  return (
    <section className='cart'>
      <header>
        <h2>買い物かご</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id}/>
        })}
      </div>
      <footer>
        <hr/>
        <div className='cart-total'>
          <h4>
            合計 <span>{total}円です</span>
          </h4>
        </div>
        <button className='btn clear-btn'>全削除</button>
      </footer>
    </section>
  )
}

export default CartContainer;