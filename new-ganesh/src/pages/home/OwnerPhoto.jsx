import React from "react";
import ownerImg from "../../assets/image/ownerPhoto/dilipbapuji.png";
import ownerImg2 from "../../assets/image/ownerPhoto/tikukaka.png";
import ownerImg3 from "../../assets/image/ownerPhoto/chatubhai.png";
import "./OwnerPhoto.css"; // 👈 font + animation styles

export default function OwnerPhoto() {
  return (
    <div className="mx-6 sm:mx-0 font-poppins">
      {/* 🔹 Section 1 */}
      <section
        className="flex flex-col sm:flex-row items-center justify-start sm:justify-start sm:gap-[1px] p-[1px] sm:p-[1px] sm:pl-[5%]"
        style={{ marginTop: "-2%" }}
      >
        <div className="w-[260px] h-[290px] overflow-hidden rounded-md scale-[1.3] ">
          <img src={ownerImg} alt="Owner" className="w-full h-full object-cover mt-8 -ml-5 " />
        </div>

        <div className="max-w-xl text-left">
          <div className="quote-mark fade-in">“</div>
          <p className="text-gray-800 text-lg sm:text-xl leading-snug font-normal">
            He brings strategic vision and leadership, guiding the overall direction of the business while ensuring sustainable growth and innovation.
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
        style={{ marginTop: "-8%" }}
      >
        <div className="w-[260px] h-[250px] overflow-hidden rounded-md scale-[1.3]">
          <img src={ownerImg2} alt="Owner 2" className="w-full h-full object-cover mt-5 sm:-mt-8 " />
        </div>

        <div className="max-w-xl text-left mt-15">
          <div className="quote-mark fade-in">“</div>
          <p className="text-gray-800 text-lg sm:text-xl leading-snug font-normal ">
           As he specializes in operations and execution, managing day-to-day processes efficiently to ensure smooth functioning and high performance.
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
        style={{ marginTop: "-5%" }}
      >
        <div className="w-[260px] h-[250px] overflow-hidden rounded-md scale-[1.3]">
          <img src={ownerImg3} alt="Owner 3" className="w-full h-full object-cover mt-2 sm:mt-0" />
        </div>

        <div className="max-w-xl text-left mt-15">
          <div className="quote-mark fade-in">“</div>
          <p className="text-gray-800 text-lg sm:text-xl leading-snug font-normal">
            While he focuses on client relations and creative strategy, building strong partnerships and driving initiatives that enhance customer satisfaction.
          </p>

          <div className="mt-2">
            <h3 className="text-lg font-playfair font-semibold text-black">
              Chinteshbhai Dilipbhai Patel
            </h3>
            <p className="text-gray-600 text-sm italic">Co-owner</p>
          </div>
        </div>
      </section>
    </div>
  );
}
