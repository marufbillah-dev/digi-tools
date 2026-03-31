import { toast } from "react-toastify";
import Button from "../../Button";
import CartItem from "./CartItem";

const Cart = ({ cart, setCart, setToggle }) => {
  // Sum of total price of carted item or items
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  const handleCheckOut = () => {
    toast.success("Order placed successful!");
    setCart([]);
  };

  return (
    <section className="text-primary p-6 md:p-10 rounded-2xl border-2 border-gray-100 bg-white shadow-sm space-y-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center border-b pb-4 border-gray-100">
        <h3 className="text-xl md:text-2xl font-bold">Your Cart</h3>
        <span className="bg-[#4F39F6]/10 text-[#4F39F6] text-xs font-bold px-3 py-1 rounded-full">
          {cart.length} Item
        </span>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>

      {/* Footer Area */}
      <div className="pt-4 space-y-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 font-medium">Order Total:</p>
          <span className="text-2xl font-extrabold text-primary">
            ${totalPrice}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            text="Proceed to Checkout"
            width="w-full"
            onClick={handleCheckOut}
          />
          <Button
            text="Continue Shopping"
            variant="noStyle"
            color="text-gray-400 hover:text-primary transition-colors text-sm font-semibold"
            width="w-full"
            onClick={() => setToggle(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default Cart;
