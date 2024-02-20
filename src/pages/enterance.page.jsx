import PageTransitionLayout from "@/components/pageTransitionLayout.component";
import React from "react";
import entranceBackground from "../assets/entranceBackground.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logoTransparent.png";
import clockTower from "../assets/clockTower.png";
const Entrance = () => {
  return (
    <PageTransitionLayout>
      <div className="relative w-screen h-screen">
        <img
          src={entranceBackground}
          alt="entrance-background"
          className="absolute top-0 w-scree h-screen"
        />
        <div className="absolute top-0 z-10 flex bg-gray-200/50 flex-col items-center w-screen h-screen">
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
              duration: 1,
              stifness: 150,
            }}
          >
            <Link to="/home" className="">
              <p className="text-[#3384c3] shadow-md shadow-gray-500/20 w-fit mx-auto h-4 md:text-5xl md:mb-10 font-TrikaRegular text-[25px] bg-[#f2cc3f]  md:text-right text-center leading-relaxed mb-6 bg-opacity-70">
                <span className="relative -top-5">دخول</span>
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransitionLayout>
  );
};

export default Entrance;
