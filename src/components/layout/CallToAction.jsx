import Button from "../ui/Button";

const CallToAction = () => {
  return (
    <section className="px-4 py-16 md:py-30 bg-gradient-primary">
      <div className="lg:container mx-auto text-center text-white">
        {/* Heading */}
        <div className="space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Ready To Transform Your Workflow?
          </h2>

          {/* Description */}
          <div className="text-white/90 leading-relaxed">
            <p>
              Join thousands of professionals who are already using DigiTools to
              work smarter.
            </p>
            <p>Start your free trial today.</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-fit mx-auto">
          <a href="#products">
            {/* Primary Action */}
            <Button
              text="Explore Products"
              bg="bg-white"
              color="text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text"
              width="w-full"
            />
          </a>
          <a href="#pricing">
            {/* Secondary Action */}
            <Button
              text={"View Pricing"}
              bg="bg-gradient-primary"
              border="bg-white"
              color="text-white"
              variant="outline"
              width="w-full"
            />
          </a>
        </div>

        {/* Trust Badges */}
        <div className="pt-4">
          <p className="text-sm md:text-base text-white/70 tracking-wide max-sm:max-w-80 mx-auto">
            14-day free trial <span className="mx-2 opacity-40">•</span>
            No credit card required <span className="mx-2 opacity-40">•</span>
            Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
