const Button = ({
  text,
  icon = "",
  variant = "primary",
  onClick,
  color = "",
  width = "",
  bg = "bg-gradient-primary",
  border = "bg-gradient-primary",
  isDisabled = false,
}) => {
  const variants = {
    primary: `px-6 py-3 font-semibold text-white rounded-full ${bg} transition-all duration-300 ease-in-out hover:contrast-125 hover:hue-rotate-15`,
    outline: `px-5.5 py-2.5 ${bg} font-semibold rounded-full`,
    noStyle: "px-6 py-3 font-semibold text-primary/90 rounded-full",
    disabled:
      "px-6 py-3 font-semibold bg-gray-400 rounded-full cursor-not-allowed opacity-50",
  };

  const borderColor = `p-0.5 rounded-full ${border} transition-all duration-300 ease-in-out hover:contrast-125 hover:hue-rotate-15 w-fit mx-auto`;
  const gradientText =
    "flex gap-2.5 items-center justify-center text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text";

  return (
    <div className={`${variant === "outline" ? borderColor : ""} ${width}`}>
      <button
        className={`${variants[variant]} ${width}`}
        onClick={onClick}
        disabled={isDisabled}
      >
        <span
          className={`${variant === "outline" ? gradientText : ""} ${color}`}
        >
          {variant === "outline" && icon !== "" ? <img src={icon} /> : ""}
          {variant !== "outline" ? icon : ""}
          {text}
        </span>
      </button>
    </div>
  );
};

export default Button;
