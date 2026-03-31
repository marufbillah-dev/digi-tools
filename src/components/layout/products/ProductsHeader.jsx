import Button from "../../ui/Button";

const ProductsHeader = ({ toggle, setToggle }) => {
  return (
    <div className="space-y-4 md:space-y-6 text-center max-w-2xl mx-auto">
      {/* Heading */}
      <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
        Premium Digital Tools
      </h2>

      {/* Paragraph */}
      <p className="text-gray-600 text-sm md:text-lg px-4 md:px-0">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      {/* Toggle Bar */}
      <div className="p-1 mx-auto rounded-full w-fit grid grid-cols-2 border border-gray-100 bg-white shadow-sm">
        <Button
          text={"Products"}
          variant={toggle ? "noStyle" : "primary"}
          color={toggle ? "text-[#25065D]" : "text-white"}
          onClick={() => setToggle(false)}
        />
        <Button
          text={`Cart`}
          width="w-full"
          variant={toggle ? "primary" : "noStyle"}
          color={toggle ? "text-white" : "text-[#25065D]"}
          onClick={() => setToggle(true)}
        />
      </div>
    </div>
  );
};

export default ProductsHeader;
