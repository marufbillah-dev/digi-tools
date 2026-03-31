import { Check } from "lucide-react";
import Button from "../../ui/Button";
import { toast } from "react-toastify";

const ProductCard = ({ product, cart, setCart }) => {
  const name = product?.name;
  const description = product?.description;
  const price = product?.price;
  const period = product?.period;
  const tag = product?.tag;
  const features = product?.features;
  const icon = product?.icon;

  const handleBuyNow = () => {
    toast.success("Added to cart");
    const updateCart = [...cart, product];
    setCart(updateCart);
  };

  // Validation: Is the product found in the Cart or not.
  const isCarted = cart.some((p) => p.id === product.id);

  return (
    <div className="p-6 w-full h-full flex flex-col rounded-2xl border-2 border-gray-100 space-y-4 text-primary relative bg-white transition-hover hover:border-primary/20 hover:shadow-lg">
      {/* Tag */}
      <div
        className={`absolute top-4 right-4 px-3 py-1 rounded-full flex items-center justify-center ${tag === "Best Seller" ? "bg-[#FEF3C6]" : tag === "Popular" ? "bg-[#E1E7FF]" : "bg-[#DBFCE7]"}`}
      >
        <span
          className={`text-xs font-bold uppercase tracking-wider ${tag === "Best Seller" ? "text-[#BB4D00]" : tag === "Popular" ? "text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text" : "text-[#0A883E]"}`}
        >
          {tag}
        </span>
      </div>

      {/* Icon */}
      <div className="p-3.5 rounded-xl border border-gray-100 w-fit bg-gray-50/50">
        <img src={icon} alt={name} className="w-8 h-8" />
      </div>

      {/* Product Name & Description */}
      <div className="space-y-2 grow">
        <h3 className="text-xl md:text-2xl font-bold">{name}</h3>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="pt-2">
        <span className="text-2xl md:text-3xl font-extrabold text-primary">
          ${price}
        </span>
        <span className="text-gray-400 text-sm font-normal">/{period}</span>
      </div>

      {/* Features List */}
      <div className="space-y-3 py-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-2 text-sm md:text-base font-medium text-gray-600"
          >
            <Check className="shrink-0 w-5 h-5" color="#30B868" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="pt-4">
        <Button
          text={isCarted ? "✓ Added" : "Buy Now"}
          width="w-full"
          onClick={handleBuyNow}
          variant={isCarted ? "disabled" : "primary"}
          color={isCarted ? "text-gray-200" : "text-white"}
          isDisabled={isCarted ? true : false}
        />
      </div>
    </div>
  );
};

export default ProductCard;
