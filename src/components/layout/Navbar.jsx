import { ShoppingCart, Menu } from "lucide-react";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm text-primary/90 px-4 py-1 md:py-2 z-50">
      <div className="navbar lg:container mx-auto px-0">
        {/* Start */}
        <div className="navbar-start">
          {/* Mobile Responsive Nav */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-0 mr-2"
            >
              <Menu className="h-6 w-6" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white border border-gray-100 rounded-sm z-50 mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/features">Features</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/testimonials">Testimonials</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <hr className="my-1 border-base-200 lg:hidden" />
              <li className="lg:hidden">
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>

          <a
            className="text-2xl md:text-4xl text-transparent font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text cursor-pointer whitespace-nowrap py-0.5"
            href="/"
          >
            DigiTools
          </a>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-primary font-medium text-[1rem]">
            <li className="text-primary opacity-70 border border-transparent hover:border-gray-200 rounded-xl hover:text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text transition-colors">
              <a href="/products">Products</a>
            </li>
            <li className="text-primary opacity-70 border border-transparent hover:border-gray-200 rounded-xl hover:text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text transition-colors">
              <a href="/features">Features</a>
            </li>
            <li className="text-primary opacity-70 border border-transparent hover:border-gray-200 rounded-xl hover:text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text transition-colors">
              <a href="/pricing">Pricing</a>
            </li>
            <li className="text-primary opacity-70 border border-transparent hover:border-gray-200 rounded-xl hover:text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text transition-colors">
              <a href="/testimonials">Testimonials</a>
            </li>
            <li className="text-primary opacity-70 border border-transparent hover:border-gray-200 rounded-xl hover:text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text transition-colors">
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>

        {/* End */}
        <div className="navbar-end">
          <div className="relative cursor-pointer p-2 md:p-3 rounded-full hover:bg-gray-100 transition-all">
            <ShoppingCart size={24} color="#101727" />
            <span className="absolute top-0 right-0 md:top-1 md:right-1 bg-[#4F39F6] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
              0
            </span>
          </div>

          <div className="hidden sm:block">
            <Button text={"Login"} variant="noStyle" />
          </div>

          <div className="scale-90 md:scale-100">
            <Button text={"Get Started"} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
