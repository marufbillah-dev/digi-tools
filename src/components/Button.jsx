const Button = ({
  text,
  icon = "",
  variant = "primary",
  onClick,
  color = "",
  width = "",
  bg = "bg-gradient-primary",
  border = "bg-gradient-primary",
}) => {
  const variants = {
    primary: `px-4 py-3 font-semibold text-white rounded-full ${bg} transition-all duration-300 ease-in-out hover:contrast-125 hover:hue-rotate-15`,
    outline: `px-3.5 py-2.5 ${bg} font-semibold rounded-full`,
    noStyle: "px-4 py-3 font-semibold text-primary/90 rounded-full",
  };

  const borderColor = `p-0.5 rounded-full ${border} transition-all duration-300 ease-in-out hover:contrast-125 hover:hue-rotate-15 w-fit mx-auto`;
  const gradientText =
    "flex gap-2.5 items-center justify-center text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text";

  return (
    <div className={`${variant === "outline" ? borderColor : ""} ${width}`}>
      <button className={`${variants[variant]} ${width}`} onClick={onClick}>
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
