import { useCart } from "../context/Cart";

const Cart = () => {
  const cart = useCart();
  const totalPrice = cart.items.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue.price,
    0
  );
  console.log(totalPrice);

  return (
    <div className="Cart">
      <h3>Shopping Cart</h3>
      {cart &&
        cart.items.map((item) => (
          <li>
            {item.name} - ${item.price}
          </li>
        ))}
      <h5>Total Price: ${totalPrice}</h5>
    </div>
  );
};
export default Cart;
