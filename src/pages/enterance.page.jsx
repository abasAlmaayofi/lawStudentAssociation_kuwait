import PageTransitionLayout from "@/components/pageTransitionLayout.component";
import React from "react";
import entranceBackground from "../assets/entranceBackground.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logoTransparent.png";
import clockTower from "../assets/clockTower.png";
import { RiTwitterLine } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { FaSnapchat } from "react-icons/fa";
const Entrance = () => {
  return (
    <PageTransitionLayout>
      <div className="relative w-screen h-screen">
        <img
          src={entranceBackground}
          alt="entrance-background"
          className="absolute top-0 w-scree h-screen"
        />
        <div className="absolute top-0 z-10 flex bg-gray-200/70 flex-col items-center w-screen h-screen">
          <div>
            <img src={logo} alt="logo" className="w-60 h-60 relative -top-2" />
          </div>
          <div>
            <img
              src={clockTower}
              alt="logo"
              className="w-[300px] h-[300px] relative -top-5"
            />
          </div>
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              duration: 1.5,
              stifness: 150,
            }}
            className="relative top-10"
          >
            <Link to="/home">
              <p className="text-[#3384c3] shadow-md shadow-[#f2cc3f]/50 w-fit mx-auto h-6 md:text-5xl md:mb-10 font-TrikaRegular text-[32px] bg-[#f2cc3f]  md:text-right text-center leading-relaxed mb-6 bg-opacity-70">
                <span className="relative -top-6">دخول</span>
              </p>
            </Link>
          </motion.div>
          <div className="relative top-20">
            <div className="w-full flex my-4 gap-6 justify-center">
              <Link
                to="https://twitter.com/lsa_ku?lang=en"
                className="p-3 border border-[#3384c3]/80 shadow-md shadow-[#f2cc3f]/50 bg-gray-300/10 text-[#3384c3] rounded-lg"
              >
                <RiTwitterLine size={16} />
              </Link>
              <Link
                to="https://www.instagram.com/lsa_ku/?hl=en"
                className="p-3 border border-[#3384c3]/80 shadow-md shadow-[#f2cc3f]/50 bg-gray-300/10 text-[#3384c3] rounded-lg"
              >
                <LuInstagram size={16} />
              </Link>
              <Link
                to="https://www.snapchat.com/add/lsa_ku"
                className="p-3 border border-[#3384c3]/80 shadow-md shadow-[#f2cc3f]/50 bg-gray-300/10 text-[#3384c3] rounded-lg"
              >
                <FaSnapchat size={16} />
              </Link>
            </div>
          </div>
          <div className="relative top-32">
            <p className="text-sm text-[#3384c3]/70 text-center">
              {" "}
              LSA_KU &copy; جميع الحقوق محفوظة لجمعية طلبة كلية الحقوق
            </p>
          </div>
        </div>
      </div>
    </PageTransitionLayout>
  );
};

export default Entrance;
