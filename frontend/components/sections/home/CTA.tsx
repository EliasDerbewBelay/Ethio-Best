import React from "react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Start Your Property Journey Today
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied homeowners who found their dream home with
          us
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-6 py-3 rounded-lg w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>
        <p className="text-white/80 text-sm mt-4">
          No spam, unsubscribe anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
