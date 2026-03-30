import { Check } from "lucide-react";
import Button from "../../Button";

const PackageCard = ({ pricing }) => {
  const features = pricing.features;
  const isFeatured = pricing.isFeatured;

  const featured = isFeatured
    ? "px-6 py-10 md:py-16 bg-gradient-primary rounded-2xl text-white relative transition-all hover:shadow-xl scale-100 lg:scale-105 z-10"
    : "px-6 py-10 md:py-16 bg-[#F9FAFC] rounded-2xl border-2 border-gray-100 transition-all hover:shadow-md relative text-primary";

  return (
    <div className={`${featured} flex flex-col justify-between`}>
      {/* Conditional Featured Badge */}
      {isFeatured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#FEF3C6] text-[#BB4D00] text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow-sm">
          Most Popular
        </div>
      )}

      {/* Title & Sub-Title */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-black">{pricing?.name}</h3>
          <p className={`${isFeatured ? "text-white/80" : "text-gray-500"}`}>
            {pricing?.description}
          </p>
        </div>

        {/* Price & Period */}
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold">
            ${pricing?.price}
            <span
              className={`${isFeatured ? "text-white/80" : "text-gray-400"} text-sm font-normal`}
            >
              /{pricing?.period}
            </span>
          </span>
        </div>

        {/* Featured */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${isFeatured ? "text-white" : "text-gray"} flex gap-2 items-center text-sm md:text-base`}
            >
              <Check
                className="shrink-0 w-5 h-5"
                color={`${isFeatured ? "white" : "#30B868"}`}
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-8">
        <Button
          text={pricing?.buttonText}
          width="w-full"
          bg={`${isFeatured ? "bg-white" : "bg-gradient-primary"}`}
          color={`${isFeatured && "text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text font-bold"}`}
        />
      </div>
    </div>
  );
};

export default PackageCard;
