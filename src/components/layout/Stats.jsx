const Stats = () => {
  return (
    <section className="px-4 py-12 md:py-20 bg-gradient-primary">
      <div className="lg:container mx-auto text-white text-center flex flex-col md:flex-row items-center justify-around gap-12 md:gap-0">
        {/* Stat 1 */}
        <div className="space-y-2 md:space-y-4">
          <h3 className="text-5xl md:text-6xl font-extrabold">50K+</h3>
          <p className="text-xl md:text-2xl font-light text-white/80">
            Active Users
          </p>
        </div>

        {/* Separator - Hidden on mobile, visible on desktop */}
        <span className="hidden md:block h-20 w-0.5 bg-white/40"></span>
        {/* Mobile Horizontal Separator - Optional */}
        <span className="block md:hidden w-1/4 h-px bg-white/20"></span>

        {/* Stat 2 */}
        <div className="space-y-2 md:space-y-4">
          <h3 className="text-5xl md:text-6xl font-extrabold">200+</h3>
          <p className="text-xl md:text-2xl font-light text-white/80">
            Premium Tools
          </p>
        </div>

        {/* Separator - Hidden on mobile, visible on desktop */}
        <span className="hidden md:block h-20 w-0.5 bg-white/40"></span>
        {/* Mobile Horizontal Separator - Optional */}
        <span className="block md:hidden w-1/4 h-px bg-white/20"></span>

        {/* Stat 3 */}
        <div className="space-y-2 md:space-y-4">
          <h3 className="text-5xl md:text-6xl font-extrabold">4.9</h3>
          <p className="text-xl md:text-2xl font-light text-white/80">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
