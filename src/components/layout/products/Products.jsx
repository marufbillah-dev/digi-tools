import { Suspense, use, useState } from "react";
import ProductCard from "./ProductCard";
import ProductsHeader from "./ProductsHeader";
import Cart from "../cart/Cart";
import EmptyCart from "../cart/EmptyCart";
import ProductSkeleton from "./ProductSkeleton";

const fetchProductsData = async () => {
  const response = await fetch("/products.json");
  return response.json();
};
const productsDataPromise = fetchProductsData();

const Products = ({ cart, setCart }) => {
  const productsData = use(productsDataPromise);

  // State: Toggle Bar for conditionally render ProductCard and Cart
  const [toggle, setToggle] = useState(false);

  // Validation: Cart Item
  const hasItems = cart.length > 0;

  return (
    <section className="px-4 py-15 md:py-20 lg:py-30" id="products">
      <div className="lg:container mx-auto space-y-10">
        <ProductsHeader toggle={toggle} setToggle={setToggle} cart={cart} />

        {/* Conditional Render for Cart and EmptyCart */}
        {toggle &&
          (hasItems ? (
            <Cart cart={cart} setCart={setCart} setToggle={setToggle} />
          ) : (
            <EmptyCart setToggle={setToggle} />
          ))}

        {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div
          className={`${toggle ? "hidden" : "grid"} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`}
        >
          <Suspense
            fallback={
              <>
                {/* Render 6 skeleton cards while loading */}
                {[...Array(6)].map((_, index) => (
                  <ProductSkeleton key={index} />
                ))}
              </>
            }
          >
            {productsData.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Products;
