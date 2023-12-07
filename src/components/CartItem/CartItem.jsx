import React, {useContext} from 'react';
import propTypes from 'prop-types';
import { BsCartXFill } from 'react-icons/bs';
import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function CartItem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const {id, thumbnail, title, price} = data;
  
  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };

  return ( 
    <section className="cart-item">
      <img src={thumbnail} alt="Imagem do produto" className="image-item-cart" />

      <div className="content-item-cart">
        <h3 className="title-item-cart">{title}</h3>
        <h3 className="price-item-cart">{formatCurrency(price) }</h3>
        <button type="button" className="button-remove-item" onClick={handleRemoveItem}>
          <BsCartXFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;