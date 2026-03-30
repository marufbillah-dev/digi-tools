import { Suspense, use } from "react";
import ProductCard from "./ProductCard";
import ProductsHeader from "./ProductsHeader";
import Cart from "./Cart";

const fetchProductsData = async () => {
  const response = await fetch("/products.json");
  return response.json();
};
const productsDataPromise = fetchProductsData();

const Products = () => {
  const productsData = use(productsDataPromise);

  return (
    <section className="px-4 py-15 md:py-20 lg:py-30">
      <div className="lg:container mx-auto space-y-10">
        <ProductsHeader />

        {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="">
          <Cart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Suspense
            fallback={
              <p className="text-center col-span-full">
                Loading amazing tools...
              </p>
            }
          >
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Products;
