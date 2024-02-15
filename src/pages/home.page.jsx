import React from "react";
import LogoTransparent from "../assets/logoTransparent.png";
import { Link } from "react-router-dom";
import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import { Button } from "@/components/ui/button";
import { RiGuideLine } from "react-icons/ri";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

const Home = () => {
  return (
    <div className="w-screen h-auto">
      <Header />
      <div className="w-screen flex md:flex-row flex-col md:justify-center items-center border-b border pb-8">
        <img
          src={LogoTransparent}
          alt="LSA_KU"
          className="md:w-[300px] md:h-[300px] w-[200px] h-[200px]"
        />
        <div className="w-full p-2">
          <p className="text-[#3384c3]  w-fit mx-auto h-4 md:text-5xl font-vexa text-[25px] bg-[#f2cc3f]  md:text-right text-center leading-relaxed mb-6 bg-opacity-70">
            <span className="relative -top-5">
              تقدم لكم جمعية طلبة كلية الحقوق
            </span>
          </p>
          <p className="text-[#3384c3]  w-fit mx-auto h-4 md:text-5xl font-vexa text-[25px] bg-[#f2cc3f]  md:text-right text-center leading-relaxed mb-2 bg-opacity-70">
            <span className="relative -top-5">
              {" "}
              كل ما يخص دراستكم في الكلية
            </span>{" "}
          </p>
        </div>
      </div>

      <div className="mt-8 w-screen h-auto flex flex-col items-center gap-8 font-TrikaRegular">
        {/* <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}
        <Button variant="link">
          <Link className="relative w-60 tracking-wide text-center px-4 py-2  bg-gradient-to-r from-[#3384c3] via-[#76bce4] to-[#3384c3]  text-white text-md">
            <p> نظام كلية الحقوق</p>{" "}
            {/* <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-[35px] h-[35px] rounded-full bg-[#3384c3]/90 flex items-center justify-center text-white text-md">
            1
          </span> */}
          </Link>
        </Button>
        <Button variant="link">
          <Link
            to="https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/student_manual-35-36.pdf?t=2024-02-15T20%3A10%3A28.529Z"
            className="relative w-60 tracking-wide text-center px-4 py-2  bg-gradient-to-r from-[#3384c3] via-[#76bce4] to-[#3384c3]  text-white text-md"
          >
            <p> صحيفة التخرج </p>{" "}
            {/* <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-[35px] h-[35px] rounded-full bg-[#3384c3]/90 flex items-center justify-center text-white text-md">
            2
          </span> */}
          </Link>
        </Button>
        <Button variant="link">
          {" "}
          <Link
            to="https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/associationMovement.pdf?t=2024-02-15T17%3A30%3A53.868Z"
            className="relative w-60 tracking-wide text-center px-4 py-2  bg-gradient-to-r from-[#3384c3] via-[#76bce4] to-[#3384c3]  text-white text-md"
          >
            <p> شروط التحويل </p>{" "}
            {/* <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-[35px] h-[35px] rounded-full bg-[#3384c3]/90 flex items-center justify-center text-white text-md">
            3
          </span> */}
          </Link>
        </Button>
        <Button variant="link">
          <Link
            to="/first-year"
            className="relative w-60 outline outline-offset-4 outline tracking-wide text-center px-4 py-2  bg-gradient-to-r from-[#3384c3] via-[#76bce4] to-[#3384c3]  text-white text-md"
          >
            <p> الفرقة الدراسية الأولئ </p>
            {/* <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-[35px] h-[35px] rounded-full bg-[#3384c3]/90 flex items-center justify-center text-white text-md">
            4
          </span> */}
          </Link>
        </Button>
        <Button variant="link">
          {" "}
          <Link
            to="/second-year"
            className="relative w-60 tracking-wide text-center px-4 py-2  bg-gradient-to-r from-[#3384c3] via-[#76bce4] to-[#3384c3]  text-white text-md"
          >
            <p> الفرقة الدراسية الثانية </p>{" "}
            {/* <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-[35px] h-[35px] rounded-full bg-[#3384c3]/90 flex items-center justify-center text-white text-md">
            5
          </span> */}
          </Link>
        </Button>
        <Button variant="link">
          <Link
            to="third-year"
            className="relative w-60 tracking-wide text-center px-4 py-2  bg-gradient-to-r from-[#3384c3] via-[#76bce4] to-[#3384c3]  text-white text-md"
          >
            <p> الفرقة الدراسية الثالثة </p>{" "}
            {/* <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-[35px] h-[35px] rounded-full bg-[#3384c3]/90 flex items-center justify-center text-white text-md">
            6
          </span> */}
          </Link>
        </Button>
        <Button variant="link">
          {" "}
          <Link
            to="fourth-year"
            className="relative w-60 tracking-wide text-center px-4 py-2  bg-gradient-to-r from-[#3384c3] via-[#76bce4] to-[#3384c3]  text-white text-md"
          >
            <p> الفرقة الدراسية الرابعة </p>{" "}
            {/* <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-[35px] h-[35px] rounded-full bg-[#3384c3]/90 flex items-center justify-center text-white text-md">
            7
          </span> */}
          </Link>
        </Button>
        <Button variant="link">
          {" "}
          <Link
            to="https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/associationMovement.pdf?t=2024-02-15T17%3A30%3A53.868Z"
            className="relative w-60 tracking-wide text-center px-4 py-2  bg-gradient-to-r from-[#3384c3] via-[#76bce4] to-[#3384c3]  text-white text-md"
          >
            <p> تحركات الجمعية </p>{" "}
            {/* <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-[35px] h-[35px] rounded-full bg-[#3384c3]/90 flex items-center justify-center text-white text-md">
            8
          </span> */}
          </Link>
        </Button>
        <Button variant="link">
          <Link
            to="https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/jobs.pdf?t=2024-02-15T20%3A04%3A44.866Z"
            className="relative w-60 tracking-wide text-center px-4 py-2  bg-gradient-to-r from-[#3384c3] via-[#76bce4] to-[#3384c3]  text-white text-md"
          >
            <p> الفرص الوظيفية ورواتبها </p>{" "}
            {/* <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-[35px] h-[35px] rounded-full bg-[#3384c3]/90 flex items-center justify-center text-white text-md">
            9
          </span> */}
          </Link>
        </Button>
        <Button variant="link">
          <Link
            to="https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/medicalSheet.pdf?t=2024-02-15T17%3A37%3A34.012Z"
            className="relative w-60 tracking-wide text-center px-4 py-2  bg-gradient-to-r from-[#3384c3] via-[#76bce4] to-[#3384c3]  text-white text-md"
          >
            <p> نموذج العذر الطبي</p>{" "}
            {/* <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-[35px] h-[35px] rounded-full bg-[#3384c3]/90 flex items-center justify-center text-white text-md">
            10
          </span> */}
          </Link>
        </Button>
        <Button variant="link">
          <Link
            to="https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/medicalExemptionTerms.jpeg?t=2024-02-15T17%3A37%3A08.728Z"
            className="relative w-60 tracking-wide text-center px-4 py-2  bg-gradient-to-r from-[#3384c3] via-[#76bce4] to-[#3384c3]  text-white text-md"
          >
            <p>شروط العذر الطبي</p>
            {/* <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-[35px] h-[35px] rounded-full bg-[#3384c3]/90 flex items-center justify-center text-white text-md">
            11
          </span> */}
          </Link>
        </Button>
        <Button variant="link">
          <Link
            to="https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/complaints.jpeg?t=2024-02-15T20%3A04%3A29.656Z"
            className="relative w-60 tracking-wide text-center px-4 py-2  bg-gradient-to-r from-[#3384c3] via-[#76bce4] to-[#3384c3]  text-white text-md"
          >
            <p>للإقتراحات والشكواي</p>
            {/* <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-[35px] h-[35px] rounded-full bg-[#3384c3]/90 flex items-center justify-center text-white text-md">
            11
          </span> */}
          </Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
