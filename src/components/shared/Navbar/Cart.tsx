import "./Cart.scss";

const Cart = () => {
  return (
    <a href="#" className="cart-link">
      <div className="count-container">
        <span className="count">0</span>
        <span className="cart-icon"></span>
      </div>
      <div className="label-container">
        <span className="spacer"></span>
        <span className="label">Cart</span>
      </div>
    </a>
  );
};

export default Cart;
