import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Button } from "./ui/button";
import { RiCloseLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "./footer.component";
import LogoTransparent from "../assets/logoTransparent.png";
import { LuArrowDownAZ } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showYears, setShowYears] = useState(false);
  const path = window.location.pathname;

  useEffect(() => {
    if (
      path === "/first-year" ||
      path === "/second-year" ||
      path === "/third-year" ||
      path === "/fourth-year"
    ) {
      setShowYears(true);
    }
  }, []);
  return (
    <>
      <div className="w-screen flex justify-end pr-2 py-2 text-[#3384c3]">
        <Button
          onClick={() => setShowSidebar(true)}
          variant=""
          className="p-2 rounded-lg hover:bg-[#35658a] text-white bg-[#3384c3]"
        >
          <HiMenuAlt3 size={28} />
        </Button>
      </div>
      <AnimatePresence>
        {showSidebar ? (
          <motion.div
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 1000, opacity: 0 }}
            transition={{ type: "spring", stiffness: 40 }}
            className="fixed inset-0 left-[30%] bg-white/20 border-white backdrop-blur-lg flex flex-col z-50 text-[#3384c3]"
          >
            <div className="mt-1 ml-1 border-b border-[#3384c3]/40">
              <Button
                className=""
                variant="ghost"
                onClick={() => setShowSidebar(false)}
              >
                <RiCloseLine size={28} />
              </Button>
            </div>
            <div className="mt-8 flex flex-col items-end gap-6 text-2xl pr-4 font-semi-bold font-TrikaRegular">
              <AnimatePresence>
                {showSidebar ? (
                  <motion.div
                    initial={{ x: 1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 1000, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 30, delay: 0.08 }}
                  >
                    <Link
                      to="/home"
                      className={path === "/home" ? "underline" : ""}
                    >
                      الصفحة الرئيسية
                    </Link>
                  </motion.div>
                ) : (
                  ""
                )}
              </AnimatePresence>
              <AnimatePresence>
                {showSidebar ? (
                  <motion.div
                    initial={{ x: 1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 1000, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 30, delay: 0.1 }}
                  >
                    <Link to="/" className={path === "/" ? "underline" : ""}>
                      بوابة الدخول
                    </Link>
                  </motion.div>
                ) : (
                  ""
                )}
              </AnimatePresence>
              <AnimatePresence>
                {showSidebar ? (
                  <motion.div
                    initial={{ x: 1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 1000, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 30, delay: 0.14 }}
                  >
                    <Link
                      to="/contact"
                      className={path === "/contact" ? "underline" : ""}
                    >
                      تواصل
                    </Link>
                  </motion.div>
                ) : (
                  ""
                )}
              </AnimatePresence>
              <AnimatePresence>
                {showSidebar ? (
                  <motion.div
                    initial={{ x: 1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 1000, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 30, delay: 0.18 }}
                  >
                    <Link
                      onClick={() => setShowYears((val) => !val)}
                      className="flex items-center gap-2"
                    >
                      <span>
                        {showYears ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </span>{" "}
                      الفرق
                    </Link>
                  </motion.div>
                ) : (
                  ""
                )}
              </AnimatePresence>
              <AnimatePresence>
                {showYears ? (
                  <motion.div
                    style={{ overflow: "hidden" }}
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.5 }}
                    exit={{ height: 0 }}
                    key={"container"}
                    className="flex flex-col items-end gap-4"
                  >
                    <AnimatePresence>
                      {showSidebar ? (
                        <motion.div
                          initial={{ x: 1000, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 1000, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 30,
                            delay: 0.16,
                          }}
                        >
                          <Link
                            to="/first-year"
                            className={`text-sm ${
                              path === "/first-year" ? "underline" : ""
                            }`}
                          >
                            الفرقة الدراسية الأولي{" "}
                          </Link>
                        </motion.div>
                      ) : (
                        ""
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {showSidebar ? (
                        <motion.div
                          initial={{ x: 1000, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 1000, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 30,
                            delay: 0.18,
                          }}
                        >
                          <Link
                            to="/second-year"
                            className={`text-sm ${
                              path === "/second-year" ? "underline" : ""
                            }`}
                          >
                            الفرقة الدراسية الثانية{" "}
                          </Link>
                        </motion.div>
                      ) : (
                        ""
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {showSidebar ? (
                        <motion.div
                          initial={{ x: 1000, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 1000, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 30,
                            delay: 0.22,
                          }}
                        >
                          <Link
                            to="/third-year"
                            className={`text-sm ${
                              path === "/third-year" ? "underline" : ""
                            }`}
                          >
                            الفرقة الدراسية الثالثة{" "}
                          </Link>
                        </motion.div>
                      ) : (
                        ""
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {showSidebar ? (
                        <motion.div
                          initial={{ x: 1000, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 1000, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 30,
                            delay: 0.24,
                          }}
                        >
                          <Link
                            to="/fourth-year"
                            className={`text-sm ${
                              path === "/fourth-year" ? "underline" : ""
                            }`}
                          >
                            الفرقة الدراسية الرابعة{" "}
                          </Link>
                        </motion.div>
                      ) : (
                        ""
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  ""
                )}
              </AnimatePresence>
            </div>
            <div className="mt-auto mb-4 flex justify-center">
              <div className="w-screen mt-12 mb-1">
                <img
                  src={LogoTransparent}
                  alt="LSA_KU"
                  className="md:w-[300px] md:h-[300px] w-[150px] h-[150px] mx-auto"
                />
                <p className="text-sm text-[#3384c3]/70 text-center mx-2 pt-2 border-t border-[#3384c3]/40">
                  {" "}
                  جميع حقوق النشر محفوظة لجمعية طلبة كلية الحقوق
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Header;
