import { ShoppingBag } from "lucide-react";
import Button from "../../Button";

const EmptyCart = () => {
  return (
    <section className="text-primary p-8 md:p-16 rounded-2xl border-2 border-dashed border-gray-200 bg-[#F9FAFC]/50 flex flex-col items-center text-center space-y-6">
      {/* Icon */}
      <div className="p-6 rounded-full bg-white shadow-sm border border-gray-100">
        <ShoppingBag size={48} className="text-gray-300" />
      </div>

      {/* Text Content */}
      <div className="space-y-2 max-w-xs">
        <h3 className="text-2xl font-extrabold">Your cart is empty</h3>
        <p className="text-gray-500 text-sm md:text-base">
          Looks like you haven't added any digital tools to your collection yet.
        </p>
      </div>

      {/* Action Button */}
      <div className="pt-2 w-full sm:w-auto">
        <a href="/products">
          <Button text="Browse All Products" width="w-full sm:w-auto" />
        </a>
      </div>

      {/* Helpful Tip */}
      <p className="text-xs text-gray-400 font-medium">
        Free shipping on all digital downloads! 😉
      </p>
    </section>
  );
};

export default EmptyCart;
