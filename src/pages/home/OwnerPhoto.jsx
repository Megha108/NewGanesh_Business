import React from "react";
import ownerImg from "../../assets/image/ownerPhoto/dilipbapuji.png";
import ownerImg2 from "../../assets/image/ownerPhoto/tikukaka.png";
import ownerImg3 from "../../assets/image/ownerPhoto/chatubhai.png";
import jivanDadImg from "../../assets/image/ownerPhoto/jivandada.png";  // ✅ New image import

import "./OwnerPhoto.css";

export default function OwnerPhoto() {
  return (
    <div className="mx-6 sm:mx-0 font-poppins">

      <section className="flex flex-col items-center justify:center sm:justify-center mt-4 mb-8">
        <div className="w-[290px] h-[330px] overflow-hidden ">
          <img
            src={jivanDadImg}
            alt="Jivandad"
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-2xl font-playfair font-semibold text-black -mt-5 text-center">
          Late Shri Jivanbhai Bechardas Patel
        </h3>
        <p className="text-gray-600 text-sm italic -mt-1">Founder and Pioneer</p>
      </section>

      {/* 🔹 Section 1 */}
      <section
        className="flex flex-col sm:flex-row items-center justify-start sm:justify-start sm:gap-[1px] p-[1px] sm:p-[1px] sm:pl-[5%]"
        style={{ marginTop: "-2%" }}
      >
        <div className="w-[260px] h-[290px] overflow-hidden rounded-md scale-[1.3]">
          <img src={ownerImg} alt="Owner" className="w-full h-full object-cover mt-8 -ml-5" />
        </div>

        <div className="max-w-xl text-left">
          <div className="quote-mark fade-in">“</div>
          <p className="text-gray-800 text-lg sm:text-xl leading-snug font-normal">
            It is an honour to connect with every customer who places their trust in our company.
            Your support motivates us to uphold the highest standards in everything we do.
            I value the relationships we’ve built and remain committed to transparency and service excellence.
          </p>

          <div className="mt-2">
            <h3 className="text-lg font-playfair font-semibold text-black">
              Dilipbhai Jivanbhai Patel
            </h3>
            <p className="text-gray-600 text-sm italic">Owner</p>
          </div>
        </div>
      </section>

      {/* 🔹 Section 2 */}
      <section
        className="flex flex-col sm:flex-row-reverse items-center justify-start sm:justify-start gap-[1px] sm:gap-[1px] p-[1px] sm:p-[1px] sm:pr-[5%]"
        style={{ marginTop: "-5%" }}
      >
        <div className="w-[260px] h-[250px] overflow-hidden rounded-md scale-[1.3]">
          <img src={ownerImg2} alt="Owner 2" className="w-full h-full object-cover mt-5 sm:-mt-8" />
        </div>

        <div className="max-w-xl text-left mt-15">
          <div className="quote-mark fade-in">“</div>
          <p className="text-gray-800 text-lg sm:text-xl leading-snug font-normal">
            Our company stands on discipline, dedication, and continuous improvement.
            I am grateful for the trust our clients place in our work and long-term vision.
            Your support drives us to deliver consistent quality and pursue excellence every day.
          </p>

          <div className="mt-2">
            <h3 className="text-lg font-playfair font-semibold text-black">
              Kalpeshbhai Jivanbhai Patel
            </h3>
            <p className="text-gray-600 text-sm italic">Co-owner</p>
          </div>
        </div>
      </section>

      {/* 🔹 Section 3 */}
      <section
        className="flex flex-col sm:flex-row items-center justify-start sm:justify-start gap-[1px] sm:gap-[1px] p-[1px] sm:p-[1px] sm:pl-[5%] mb-10"
        style={{ marginTop: "-2%" }}
      >
        <div className="w-[260px] h-[250px] overflow-hidden rounded-md scale-[1.3]">
          <img src={ownerImg3} alt="Owner 3" className="w-full h-full object-cover mt-2 sm:mt-0" />
        </div>

        <div className="max-w-xl text-left mt-15">
          <div className="quote-mark fade-in">“</div>
          <p className="text-gray-800 text-lg sm:text-xl leading-snug font-normal">
            I believe strong foundations are built on transparency, responsibility, and long-term vision.
            Your trust inspires us to maintain clarity and dependability in all operations.
            It is my privilege to serve you with professionalism and sincere commitment.
          </p>

          <div className="mt-2">
            <h3 className="text-lg font-playfair font-semibold text-black">
              Chinteshbhai Dilipbhai Patel
            </h3>
            <p className="text-gray-600 text-sm italic">Co-owner</p>
          </div>
        </div>
      </section>

      {/* 🔹 NEW — Single Centered Image */}
      

    </div>
  );
}
