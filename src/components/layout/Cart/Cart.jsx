import { FileText, Trash2 } from "lucide-react";
import Button from "../../Button";

const Cart = () => {
  return (
    <section className="text-primary p-6 md:p-10 rounded-2xl border-2 border-gray-100 bg-white shadow-sm space-y-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center border-b pb-4 border-gray-100">
        <h3 className="text-xl md:text-2xl font-bold">Your Cart</h3>
        <span className="bg-[#4F39F6]/10 text-[#4F39F6] text-xs font-bold px-3 py-1 rounded-full">
          1 Item
        </span>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {/* Item Card */}
        <div className="p-4 md:p-5 rounded-2xl bg-[#F9FAFC] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className="p-3 rounded-xl border border-gray-100 bg-white shadow-sm shrink-0">
              <FileText className="w-5 h-5 text-[#4F39F6]" />
            </div>

            {/* Details */}
            <div>
              <h4 className="text-base md:text-lg font-semibold leading-tight">
                AI Writing Pro
              </h4>
              <p className="text-gray-500 font-medium text-sm md:text-base">
                $29
              </p>
            </div>
          </div>

          {/* Remove Button */}
          <button className="text-[#FF3980] hover:text-[#D41E60] font-bold text-sm transition-colors flex items-center gap-1 self-end sm:self-auto">
            <Trash2 size={16} />
            <span>Remove</span>
          </button>
        </div>
      </div>

      {/* Footer Area */}
      <div className="pt-4 space-y-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 font-medium">Order Total:</p>
          <span className="text-2xl font-extrabold text-primary">$29</span>
        </div>

        <div className="flex flex-col gap-3">
          <Button text="Proceed to Checkout" width="w-full" />
          <Button
            text="Continue Shopping"
            variant="noStyle"
            color="text-gray-400 hover:text-primary transition-colors text-sm font-semibold"
            width="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Cart;
