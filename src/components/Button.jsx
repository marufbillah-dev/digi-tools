const Button = ({
  text,
  icon = "",
  variant = "primary",
  onClick,
  color = "",
  width = "",
}) => {
  const variants = {
    primary:
      "px-4 py-3 font-semibold text-white rounded-full bg-gradient-primary transition-all duration-300 ease-in-out hover:contrast-125 hover:hue-rotate-15",
    outline: "px-3.5 py-2.5 bg-white font-semibold rounded-full",
    noStyle: "px-4 py-3 font-semibold text-primary/90 rounded-full",
  };

  const gradientBorder =
    "p-0.5 rounded-full bg-gradient-primary transition-all duration-300 ease-in-out hover:contrast-125 hover:hue-rotate-15 w-fit mx-auto";
  const gradientText =
    "flex gap-2.5 items-center text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text";

  return (
    <div className={`${variant === "outline" ? gradientBorder : ""} ${width}`}>
      <button className={`${variants[variant]} ${width}`} onClick={onClick}>
        <span
          className={`${variant === "outline" ? gradientText : ""} ${color}`}
        >
          {variant === "outline" ? <img src={icon} /> : ""}
          {variant !== "outline" ? icon : ""}
          {text}
        </span>
      </button>
    </div>
  );
};

export default Button;
