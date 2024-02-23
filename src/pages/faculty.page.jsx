import React from "react";
import Background from "../assets/background.jpg";
import File from "@/components/file.component";
import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import { LuDiamond } from "react-icons/lu";
import PageTransitionLayout from "@/components/pageTransitionLayout.component";
import { RiNumber4 } from "react-icons/ri";
import Collage from "@/components/collage.component";

const Faculty = () => {
  return (
    <>
      <PageTransitionLayout>
        <div className="relative w-screen h-auto">
          <img
            src={Background}
            alt="kuwait-university-collage-of-law"
            className="w-full md:h-[1000px] h-[1200px] object-fit"
          />
          <div className="absolute top-0 w-screen h-full bg-gray-200/50">
            <div className="border-b-4 border-double border-[#3384c3]/90 pb-12">
              <Header />
              <p className="text-[#3384c3] mt-12  w-fit mx-auto h-4 md:text-5xl font-vexa text-[25px] bg-[#f2cc3f]  md:text-right text-center leading-relaxed mb-6 bg-opacity-70">
                <span className="relative -top-5">
                  {" "}
                  أقسام كلية الحقوق و أعضاء
                </span>
                {/* <span className="w-full flex justify-center relative -top-2">
                <RiNumber4
                  size={40}
                  className="border-4 border-dashed border-[#f2cc3f]/70 rounded-full p-1 "
                />
              </span> */}
              </p>
              <p className="text-[#3384c3] mt-2  w-fit mx-auto h-4 md:text-5xl font-vexa text-[25px] bg-[#f2cc3f]  md:text-right text-center leading-relaxed mb-6 bg-opacity-70">
                <span className="relative -top-5"> هيئة التدريس</span>
                {/* <span className="w-full flex justify-center relative -top-2">
                <RiNumber4
                  size={40}
                  className="border-4 border-dashed border-[#f2cc3f]/70 rounded-full p-1 "
                />
              </span> */}
              </p>
            </div>
            <p className="mt-4  pr-8 font-vexa text-lg tracking-wide text-[#3384c3] flex justify-end items-center gap-2">
              <span>:إختر إحدى الكليات التالية</span> <LuDiamond />
            </p>

            <div className="grid grid-cols-1 mt-2 pt-8 md:grid-cols-4 gap-y-12 items-center justify-center">
              <Collage title={"قسم القانون الخاص"} />
              <Collage title={"قسم القانون الدولي"} />
              <Collage title={"قسم القانون العام"} />
              <Collage title={"قسم القانون الجزائي"} />
            </div>
            <Footer />
          </div>
        </div>
      </PageTransitionLayout>
    </>
  );
};

export default Faculty;
