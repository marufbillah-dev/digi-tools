import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

const CartItem = ({ product, cart, setCart }) => {
  const handleRemoveCartItem = () => {
    toast.info("Removed successful!");
    const newCart = cart.filter((p) => p.id !== product.id);
    setCart(newCart);
  };

  return (
    <div className="p-4 md:p-5 rounded-2xl bg-[#F9FAFC] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="p-3 rounded-xl border border-gray-100 bg-white shadow-sm shrink-0">
          <img src={product.icon} alt={product.name} className="w-8 h-8" />
        </div>

        {/* Details */}
        <div>
          <h4 className="text-base md:text-lg font-semibold leading-tight">
            {product.name}
          </h4>
          <p className="text-gray-500 font-medium text-sm md:text-base">
            ${product.price}
          </p>
        </div>
      </div>

      {/* Remove Button */}
      <button
        className="text-[#FF3980] hover:text-[#D41E60] font-bold text-sm transition-colors flex items-center gap-1 self-end sm:self-auto"
        onClick={handleRemoveCartItem}
      >
        <Trash2 size={16} />
        <span>Remove</span>
      </button>
    </div>
  );
};

export default CartItem;
