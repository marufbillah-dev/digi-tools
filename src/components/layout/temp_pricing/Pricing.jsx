import { Suspense, use } from "react";
import PackageCard from "./PackageCard";

const fetchPricingData = async () => {
  const response = await fetch("/pricing.json");
  return response.json();
};
const pricingDataPromise = fetchPricingData();

const Pricing = () => {
  const pricingData = use(pricingDataPromise);

  return (
    <section className="px-4 py-20 md:py-30" id="pricing">
      <div className="lg:container mx-auto text-primary space-y-12">
        {/* Heading */}
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <Suspense>
            {pricingData.map((pricing) => (
              <PackageCard key={pricing.id} pricing={pricing} />
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
