import React from "react";

const Landing = () => {
  const bg =
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop";

  return (
    <section id="home" className="relative">
      {/* Spacer to offset fixed navbar height */}
      <div className="h-16" />

      {/* Hero */}
      <div
        className="relative min-h-[70vh] md:min-h-[85vh] flex items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-white font-extrabold leading-tight
                           text-4xl sm:text-5xl md:text-6xl">
              Trusted Seeds
              <br /> for a Better Tomorrow
            </h1>

            <div className="mt-8">
              <a
                href="#products"
                className="inline-flex items-center rounded-lg bg-emerald-700 px-5 py-3 text-white font-medium hover:bg-emerald-800 transition"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dummy next section start (to show scroll) */}
      <div id="products" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-900">
          Our Featured Seeds
        </h2>
        <p className="mt-2 text-slate-600">
          Add your product cards here…
        </p>
      </div>
    </section>
  );
};

export default Landing;
