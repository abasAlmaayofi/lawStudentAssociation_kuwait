import React from "react";
import LogoTransparent from "../assets/logoTransparent.png";
const Footer = () => {
  return (
    <div className="w-screen mt-12 mb-4">
      <img
        src={LogoTransparent}
        alt="LSA_KU"
        className="md:w-[300px] md:h-[300px] w-[150px] h-[150px] mx-auto"
      />
      <p className="text-sm text-[#3384c3]/70 text-center">
        {" "}
        LSA_KU &copy; جميع الحقوق محفوظة لجمعية طلبة كلية الحقوق
      </p>
    </div>
  );
};

export default Footer;
