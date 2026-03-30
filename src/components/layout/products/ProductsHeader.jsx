import Button from "../../Button";

const ProductsHeader = () => {
  return (
    <div className="space-y-4 text-center max-w-134.5 mx-auto">
      <h2 className="text-primary text-5xl font-extrabold">
        Premium Digital Tools
      </h2>
      <p className="text-gray">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>
      <div className="p-1 mx-auto rounded-full w-fit grid grid-cols-2 border border-gray-100">
        <Button text={"Products"} />
        <Button text={`Cart`} variant="noStyle" color={"text-[#25065D]"} />
      </div>
    </div>
  );
};

export default ProductsHeader;
