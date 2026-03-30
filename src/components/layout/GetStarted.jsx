import userIcon from "../../assets/user.png";
import packageIcon from "../../assets/package.png";
import rocketIcon from "../../assets/rocket.png";

const GetStarted = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: userIcon,
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: packageIcon,
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: rocketIcon,
    },
  ];

  return (
    <section className="px-4 bg-[#F9FAFC] py-16 md:py-30">
      <div className="lg:container mx-auto text-primary text-center space-y-12">
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="px-6 py-12 md:py-20 bg-white rounded-2xl border-2 border-gray-100 relative flex flex-col gap-4 items-center transition-all hover:shadow-md"
            >
              {/* Step Number Badge */}
              <div className="p-3 bg-gradient-primary rounded-full text-white text-sm font-bold w-10 h-10 flex items-center justify-center absolute top-6 right-6">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className="p-5 rounded-full bg-linear-to-r from-[#4F39F6]/10 to-[#9514FA]/10 w-fit">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-gray-500 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
