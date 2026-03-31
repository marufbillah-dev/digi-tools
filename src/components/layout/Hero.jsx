import Button from "../ui/Button";
import play from "../../assets/Play.png";
import bannerImg from "../../assets/banner.png";

const Hero = () => {
  return (
    <section className="min-h-screen px-4 flex items-center pt-30 lg:pt-0">
      <div className="lg:container mx-auto text-primary/90 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Content Side (Left on Desktop, Top on Mobile) */}
        <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="space-y-4 mb-8">
            {/* Badge */}
            <div className="bg-[#E1E7FF] rounded-full py-2 px-4 w-fit max-lg:mx-auto">
              <div className="text-sm md:text-base flex items-center gap-2 text-transparent font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text">
                <span className="h-4 w-4 relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-primary opacity-20"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4F39F6]/40"></span>
                </span>{" "}
                New: AI-Powered Tools Available
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Supercharge Your{" "}
              <span className="text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text">
                Digital Workflow
              </span>
            </h1>

            {/* Description */}
            <p className="max-lg:mx-auto md:text-lg lg:text-[1.125rem] text-gray-600 max-w-lg">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button text={"Explore Products"} />
            <Button
              icon={play}
              text={"Watch Demo"}
              variant="outline"
              bg="bg-white"
            />
          </div>
        </div>

        {/* Image Side (Right on Desktop, Bottom on Mobile) */}
        <div className="w-full lg:max-w-125">
          <img
            src={bannerImg}
            alt="Hero Banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
