import React from "react";
import ownerImg from "../../assets/image/ownerPhoto/Picsart_25-11-11_19-58-32-712.png";
import ownerImg2 from "../../assets/image/ownerPhoto/Picsart_25-11-11_19-58-32-712.png";
import ownerImg3 from "../../assets/image/ownerPhoto/Picsart_25-11-11_19-58-32-712.png";

export default function OwnerPhoto() {
  return (
    <div className="space-y-[0.2px] mx-6 sm:mx-0"> {/* ⬅️ Increased mobile margin by 50% */}
      
      {/* 🔹 Section 1 - Left Image, Right Text */}
      <section className="flex flex-col sm:flex-row items-center justify-start sm:justify-start sm:gap-[1px] p-[1px] sm:p-[1px] sm:pl-[5%]">
        <div className="w-[260px] h-[250px] overflow-hidden rounded-md">
          <img
            src={ownerImg}
            alt="Owner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-xl text-left">
          <div className="text-4xl sm:text-5xl font-serif text-black mb-[0.5px] sm:mb-[1px]">“</div>
          <p className="text-gray-800 text-lg sm:text-xl font-medium leading-tight">
            Jade helped us build a software so intuitive that it didn’t need a walkthrough.
            He solved complex problems with brilliant design thinking.
          </p>

          <div className="mt-[0.5px] sm:mt-[1px]">
            <h3 className="text-lg font-semibold text-black">John Franklin</h3>
            <p className="text-gray-600 text-sm">Founder, Double Bunch</p>
          </div>
        </div>
      </section>

      {/* 🔹 Section 2 - Right Image, Left Text but RIGHT-ALIGNED INFO */}
      <section className="flex flex-col sm:flex-row-reverse items-center justify-start sm:justify-start gap-[1px] sm:gap-[1px] p-[1px] sm:p-[1px] sm:pr-[5%]">
        <div className="w-[260px] h-[250px] overflow-hidden rounded-md">
          <img
            src={ownerImg2}
            alt="Owner 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-xl text-left sm:text-left">
          <div className="text-4xl sm:text-5xl font-serif text-black mb-[0.5px] sm:mb-[1px]">“</div>
          <p className="text-gray-800 text-lg sm:text-xl font-medium leading-tight">
            His creative insight helped transform our vision into a beautiful, usable product.
            Every detail was thoughtfully designed.
          </p>

          <div className="mt-[0.5px] sm:mt-[1px]">
            <h3 className="text-lg font-semibold text-left sm:text-right">Sarah Mitchell</h3>
            <p className="text-gray-600 text-sm text-left sm:text-right">Product Manager, Bloom Labs</p>
          </div>
        </div>
      </section>

      {/* 🔹 Section 3 - Left Image, Right Text */}
      <section className="flex flex-col sm:flex-row items-center justify-start sm:justify-start gap-[1px] sm:gap-[1px] p-[1px] sm:p-[1px] sm:pl-[5%]">
        <div className="w-[260px] h-[250px] overflow-hidden rounded-md">
          <img
            src={ownerImg3}
            alt="Owner 3"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-xl text-left">
          <div className="text-4xl sm:text-5xl font-serif text-black mb-[0.5px] sm:mb-[1px]">“</div>
          <p className="text-gray-800 text-lg sm:text-xl font-medium leading-tight">
            Jade's attention to usability and design harmony elevated our brand identity
            beyond expectations.
          </p>

          <div className="mt-[0.5px] sm:mt-[1px]">
            <h3 className="text-lg font-semibold text-black">Michael Ross</h3>
            <p className="text-gray-600 text-sm">CEO, Nova Systems</p>
          </div>
        </div>
      </section>
    </div>
  );
}
