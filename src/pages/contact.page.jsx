import React, { useEffect, useRef, useState } from "react";
import Background from "../assets/background.jpg";
import logoTransparent from "../assets/logoTransparent.png";
import { FaArrowLeft, FaPhone, FaSnapchat } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RiTwitterXFill } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { notification } from "antd";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import PageTransitionLayout from "@/components/pageTransitionLayout.component";

const Contact = () => {
  const navigate = useNavigate();

  const [subject, setSubject] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const form = useRef();
  const key = "updatable";

  // const { toast } = useToast();

  // const openNotification = () => {
  //   // api.open({
  //   //   key,
  //   //   message: "Notification Title",
  //   //   description: "description.",
  //   // });
  //   setTimeout(() => {
  //     api.success({
  //       key,
  //       message: "إشعار",
  //       description: "تم إرسال الرسالة بنجاح",
  //       // className: "text-right",
  //     });
  //   }, 1000);
  // };

  const clearInputs = () => {
    setSubject("");
    setEmail("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("لقد تم ارسال رسالتك بنجاح");
          clearInputs();
        },
        (error) => {
          toast.error("Error:" + { error });
        }
      );
  };
  return (
    <PageTransitionLayout>
      <div className="relative w-scree h-screen">
        <img
          src={Background}
          alt="kuwait-university-collage-of-law"
          className="w-full md:h-full h-[1000px] object-fit"
        />
        <div
          onClick={() => navigate(-1)}
          className="absolute top-3 left-3 z-10 p-2 text-[#3384c3] rounded-full bg-white/50 border border-[#3384c3] hover:text-white hover:bg-[#3384c3]  cursor-pointer"
        >
          <FaArrowLeft size={20} />
        </div>
        <div className="absolute top-0 w-full h-auto bg-gray-00/30  flex flex-col items-center justify-center md:my-10 mt-20">
          <div className="flex flex-col items-center justify-center shadow-xl pb-4 px-6 shadow-black/30 bg-white/50 rounded-md md:w-[550px] w-[380px] h-auto">
            <img
              src={logoTransparent}
              alt="LSA_KU Logo"
              className="w-52 h-52"
            />
            <div className="flex flex-col w-full">
              <div className="w-full flex flex-col items-center justify-center font-TrikaRegular">
                <p className="text-[#3384c3]  w-fit mx-auto h-4 md:text-5xl font-vexa text-[25px] bg-[#f2cc3f]  md:text-right text-center leading-relaxed mb-6 bg-opacity-70">
                  <span className="relative -top-5">تواصل معنا </span>
                </p>
                <p className="tracking-wide text-gray-400 p-2 text-center text-xs rounded-md">
                  أي سؤال أو ملاحظة؟ فقط قم بكتابة رسالة لنا
                </p>
              </div>
              <div className="font-TrikaRegular">
                <div className="flex flex-col border-b border-gray-00">
                  <div className="w-full flex my-4 gap-6 justify-center">
                    <Link
                      to="https://twitter.com/lsa_ku?lang=en"
                      className="p-3 border border-[#3384c3]/80 bg-gray-300/10 text-[#3384c3] rounded-lg"
                    >
                      <RiTwitterXFill size={24} />
                    </Link>
                    <Link
                      to="https://www.instagram.com/lsa_ku/?hl=en"
                      className="p-3 border border-[#3384c3]/80 bg-gray-300/10 text-[#3384c3] rounded-lg"
                    >
                      <LuInstagram size={24} />
                    </Link>
                    <Link
                      to="https://www.snapchat.com/add/lsa_ku"
                      className="p-3 border border-[#3384c3]/80 bg-gray-300/10 text-[#3384c3] rounded-lg"
                    >
                      <FaSnapchat size={24} />
                    </Link>
                  </div>{" "}
                </div>
                <div className="flex w-full justify-center text-[#3384c3] md:text-xs text-[11px] flex-row-reverse gap-4  mt-4 mb-6 ml-2">
                  <p className="flex  flex-col-reverse justify-end gap-2 pr-4 mr-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <Link
                          to="https://wa.me/96560607424"
                          className="underline"
                        >
                          +965 60607424
                        </Link>
                      </div>
                    </div>
                    <span className="text-center text-[15px]">طلبة</span>
                  </p>
                  <p className="flex  flex-col-reverse gap-2 border-r border-[#3384c3]/70 pr-8 mr-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <Link
                          to="https://wa.me/96590014755"
                          className="underline"
                        >
                          +965 90014755
                        </Link>
                      </div>
                      <div className="flex gap-2">
                        <Link
                          to="https://wa.me/96565748890"
                          className="underline"
                        >
                          +965 65748890
                        </Link>
                      </div>
                    </div>
                    <span className="text-center text-[15px]">طالبات</span>
                  </p>
                </div>
                <div class="relative mt-2 flex items-center">
                  <div class="flex-grow border-t border-gray-400/30"></div>
                  <span class="flex-shrink mx-4 text-gray-400/80">أو</span>
                  <div class="flex-grow border-t border-gray-400/30"></div>
                </div>
                <form
                  ref={form}
                  action=""
                  className="w-full h-full "
                  onSubmit={sendEmail}
                >
                  <div className="flex flex-col gap-2 my-6 text-[#3384c3] text-[12px]">
                    <label
                      htmlFor="subject"
                      className=" tracking-wide text-right"
                    >
                      الموضوع
                    </label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      name="subject"
                      id="subject"
                      className="border-b border-[#3384c3]/40 rounded-none font-sm ml-12 outline-none text-right bg-transparent text-[#3384c3]/70 tracking-wide"
                    />
                  </div>
                  <div className="flex flex-col gap-2 my-6 text-[#3384c3] text-[12px]">
                    <label
                      htmlFor="email"
                      className="tracking-wide text-right "
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      id="email"
                      className="border-b border-[#3384c3]/40 rounded-none font-sm ml-12 outline-none text-right bg-transparent text-[#3384c3]/70 tracking-wide"
                    />
                  </div>
                  <div className="flex flex-col gap-2 my-6 text-[#3384c3] text-[12px]">
                    <label
                      htmlFor="message"
                      className="tracking-wide text-right"
                    >
                      الرسالة
                    </label>
                    <textarea
                      type="text"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      name="message"
                      id="message"
                      className="border-b border-[#3384c3]/40 rounded-none font-sm ml-12 outline-none text-right bg-transparent text-[#3384c3]/70 tracking-wide h-8"
                    />
                  </div>
                  <div className="w-full text-center mt-16">
                    <button
                      type="submit"
                      className="px-16 w-full py-3 text-xl bg-[#3384c3] text-white cursor-pointer hover:bg-[#3384c3]/70 rounded-md"
                    >
                      إرسال
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </PageTransitionLayout>
  );
};

export default Contact;
