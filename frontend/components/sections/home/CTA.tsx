const CTA = () => {
  return (
    <section className="section-tight bg-gradient-to-r from-amber-500 to-amber-600">
      <div className="section-container text-center">
        <h2 className="text-h2 text-white mb-3 sm:mb-4">
          Start Your Property Journey Today
        </h2>
        <p className="text-body-sm text-white/90 mb-5 sm:mb-7 max-w-2xl mx-auto">
          Join thousands of satisfied homeowners who found their dream home with us
        </p>
        <div className="flex flex-col xs:flex-row gap-2.5 sm:gap-3 justify-center max-w-md sm:max-w-none mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 sm:px-5 py-3 rounded-lg w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-white text-body-sm"
          />
          <button className="btn-primary w-full xs:w-auto bg-white text-amber-600 hover:shadow-lg active:scale-95">
            Get Started
          </button>
        </div>
        <p className="text-caption text-white/80 mt-3 sm:mt-4">
          No spam, unsubscribe anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
