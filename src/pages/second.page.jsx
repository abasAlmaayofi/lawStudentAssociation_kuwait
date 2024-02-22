import React from "react";
import Background from "../assets/background.jpg";
import File from "@/components/file.component";
import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import { LuDiamond } from "react-icons/lu";
import PageTransitionLayout from "@/components/pageTransitionLayout.component";
import { RiNumber2 } from "react-icons/ri";

const SecondYear = () => {
  return (
    <PageTransitionLayout>
      <div className="relative w-screen h-auto">
        <img
          src={Background}
          alt="kuwait-university-collage-of-law"
          className="w-full md:h-[1200px] h-[1660px] object-fit"
        />
        <div className="absolute top-0 w-screen h-full bg-gray-200/50  ">
          <div className="border-b-4 border-double border-[#3384c3]/90 pb-12">
            <Header />
            <p className="text-[#3384c3] mt-12  w-fit mx-auto h-4 md:text-5xl font-vexa text-[25px] bg-[#f2cc3f]  md:text-right text-center leading-relaxed mb-6 bg-opacity-70">
              <span className="relative -top-5">الفرقة الدراسية الثانية</span>
              <span className="w-full flex justify-center relative -top-2">
                <RiNumber2
                  size={40}
                  className="border-4 border-dashed border-[#f2cc3f]/70 rounded-full p-1 "
                />
              </span>
            </p>
          </div>
          <p className="mt-4  pr-8 font-vexa text-lg tracking-wide text-[#3384c3] flex justify-end items-center gap-2">
            <span>:إختر إحدى المقررات التالية</span> <LuDiamond />
          </p>
          <div className="grid grid-cols-2 mt-2 pt-8 md:grid-cols-5 gap-y-12 ">
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/test/test2018.pdf?t=2024-02-22T13%3A19%3A01.661Z",
                  text: "اختبارات سابقة للفرقة الثانية ٢٠١٨ - ٢٠١٩",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/test/test2021.pdf?t=2024-02-22T13%3A19%3A13.231Z",
                  text: "اختبارات سابقة للفرقة الثانية ٢٠٢١ - ٢٠٢٢",
                },
              ]}
              title="اختبارات فاينل سابقة"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahdath/slmaAshkanani.pdf",
                  text: "أحداث - سلمى أشكناني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahdath/ahdathMqrr.pdf?t=2024-02-19T23%3A09%3A59.871Z",
                  text: "مقرر أحداث",
                },
              ]}
              title="احداث"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahwalShakhseah/divorce.pdf?t=2024-02-19T23%3A11%3A54.170Z",
                  text: "اكواد باب الزواج والطلاق",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahwalShakhseah/elzamel.pdf?t=2024-02-19T23%3A12%3A20.790Z",
                  text: "احوال الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahwalShakhseah/esam.pdf?t=2024-02-19T23%3A13%3A03.493Z",
                  text: "لخيص الجزء الاخير الزواج د.عصام غريب",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahwalShakhseah/esamFinal.pdf?t=2024-02-19T23%3A14%3A02.372Z",
                  text: "تلخيص الجزء الاخير الطلاق د.عصام الغريب",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahwalShakhseah/ahwal.pdf?t=2024-02-22T19%3A16%3A27.541Z",
                  text: "كتاب احوال",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahwalShakhseah/ahwalcode.pdf?t=2024-02-22T19%3A17%3A07.478Z",
                  text: "كود احوال",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahwalShakhseah/manarCodeDivorce.pdf?t=2024-02-22T19%3A17%3A36.562Z",
                  text: "كود الطلاق - نوت منار الفيلكاوي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahwalShakhseah/manarCodeMarriege.pdf?t=2024-02-22T19%3A18%3A05.436Z",
                  text: "كود الزواج - نوت منار الفيلكاوي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahwalShakhseah/2020-11-14%2013.46.53.pdf?t=2024-02-22T19%3A19%3A52.247Z",
                  text: "مخططات 1",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahwalShakhseah/2020-11-14%2013.47.07.pdf?t=2024-02-22T19%3A20%3A32.389Z",
                  text: "مخططات 2",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahwalShakhseah/2020-11-14%2013.47.22.pdf?t=2024-02-22T19%3A20%3A48.260Z",
                  text: "مخططات 3",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahwalShakhseah/2020-11-14%2013.47.36.pdf?t=2024-02-22T19%3A21%3A02.488Z",
                  text: "مخططات 4",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahwalShakhseah/2020-11-14%2013.47.50.pdf?t=2024-02-22T19%3A21%3A21.228Z",
                  text: "مخططات 5",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahwalShakhseah/2020-11-14%2013.48.01.pdf?t=2024-02-22T19%3A21%3A43.246Z",
                  text: "مخططات 6",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/ahwalShakhseah/2020-11-14%2013.48.21.pdf?t=2024-02-22T19%3A21%3A59.877Z",
                  text: "مخططات 7",
                },
              ]}
              title="احوال شخصية"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/edary1/firstBookAbdalazeesAlbloushi.pdf?t=2024-02-20T00%3A01%3A38.825Z",
                  text: "اداري 1 الكتاب الاول عبدالعزيز البلوشي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/edary1/leyaliFirst.pdf?t=2024-02-20T00%3A02%3A35.248Z",
                  text: "نوت ليالي الكتاب الاول",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/edary1/leyaliSecond.pdf?t=2024-02-20T00%3A03%3A24.303Z",
                  text: "نوت ليالي الكتاب الثاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/edary1/moRabah.pdf?t=2024-02-20T00%3A03%3A50.595Z",
                  text: "إداري ١ - محمد رباح",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/edary1/secondBookAbdalazeesAlbeloshi.pdf?t=2024-02-20T00%3A04%3A20.935Z",
                  text: "إداري الكتاب الثاني عبدالعزيز البلوشي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/edary1/shouqAlead.pdf?t=2024-02-20T00%3A04%3A51.680Z",
                  text: "اداري -شوق العيد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/edary1/fatima.pdf?t=2024-02-22T19%3A27%3A25.264Z",
                  text: "مراجعة إداري ١ فاطمة الهاجري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/edary1/manar.pdf?t=2024-02-22T19%3A27%3A55.639Z",
                  text: "نوت منار الشباك",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/edary1/moAlenezi.pdf?t=2024-02-22T19%3A28%3A26.589Z",
                  text: "مذكرة إداري ١ محمد العنزي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/edary1/questions.pdf?t=2024-02-22T19%3A29%3A00.267Z",
                  text: "اسالة اداري",
                },
              ]}
              title="اداري (١)"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/alzamelFirst.pdf?t=2024-02-20T00%3A06%3A44.275Z",
                  text: "التزامات - الزامل الكتاب الاول",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/elzamelSecond.pdf?t=2024-02-20T00%3A07%3A17.152Z",
                  text: "التزامات- الزامل الكتاب الثاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/badiAlmutairi.pdf?t=2024-02-20T00%3A07%3A14.835Z",
                  text: "التزامات الكتاب الاول - بادي المطيري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/dallalAlmajern.pdf?t=2024-02-20T00%3A08%3A23.916Z",
                  text: "الالتزامات - دلال المجرن",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/abdulrahman.pdf?t=2024-02-22T19%3A48%3A34.006Z",
                  text: "نوت عبدالرحمن الشمري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/alsayeg1.pdf?t=2024-02-22T19%3A49%3A44.356Z",
                  text: "التزامات الكتاب الاول الصايغ",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/badi2.pdf?t=2024-02-22T19%3A50%3A52.657Z",
                  text: "التزامات الكتاب الثاني - بادي المطيري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/bander2.pdf?t=2024-02-22T19%3A51%3A23.887Z",
                  text: "سلايدات د. بندر شرار الكتاب الثاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/dalal1.pdf?t=2024-02-22T19%3A52%3A04.234Z",
                  text: "دلال القشاط الكتاب الاول",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/dalal2.pdf?t=2024-02-22T19%3A52%3A39.562Z",
                  text: "دلال القشاط الاثبات + الكتاب الثاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/eltezamatCases.pdf?t=2024-02-22T19%3A53%3A11.488Z",
                  text: "قضايا التزامات",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/khadeja1.pdf?t=2024-02-22T19%3A53%3A44.320Z",
                  text: "التزامات الكتاب الأول - نوت خديجة الحرز",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/khadeja2.pdf?t=2024-02-22T19%3A54%3A46.336Z",
                  text: "التزامات الكتاب الثاني - نوت خديجة الحرز",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/mneera1.pdf?t=2024-02-22T19%3A55%3A37.230Z",
                  text: "الكتاب الاول - منيره البذال",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/mneera2.pdf?t=2024-02-22T19%3A56%3A36.979Z",
                  text: "الكتاب الثاني - منيره البذال",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/eltzamat/revisionSamah.pdf?t=2024-02-22T19%3A57%3A19.527Z",
                  text: "مراجعة لبعض مفاهيم التزامات - سماح",
                },
              ]}
              title="التزامات"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/enviornment/abdalazeezAlbeloushi.pdf?t=2024-02-20T00%3A09%3A49.625Z",
                  text: "مذكرة بيئة عبدالعزيز البلوشي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/enviornment/yousefAltememmi.pdf?t=2024-02-20T00%3A10%3A28.542Z",
                  text: "نوت يوسف التميمي وموسى السعيد بيئة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/enviornment/mariyam.pdf?t=2024-02-22T20%3A05%3A05.936Z",
                  text: "سلايدات د.مريم بن غيث",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/enviornment/mariyam2.pdf?t=2024-02-22T20%3A05%3A27.314Z",
                  text: "سلايدات د. مريم بن غيث ٢",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/enviornment/meshari.pdf?t=2024-02-22T20%3A05%3A50.995Z",
                  text: "بيئه لمشاعل بدر المجادي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/enviornment/nada.pdf?t=2024-02-22T20%3A06%3A28.473Z",
                  text: "القانون الدولي للبيئة للدكتورة ندى الدعيج",
                },
              ]}
              title="بيئة"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/petrol/elzamel.pdf?t=2024-02-20T00%3A11%3A42.006Z",
                  text: "الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/petrol/petrolLaw.pdf?t=2024-02-20T00%3A12%3A15.666Z",
                  text: "قانون البترول2020-2019",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/petrol/petrolLaw.pdf?t=2024-02-22T20%3A00%3A31.692Z",
                  text: "بـتـرول كمية الميدتيرم الثاني - مريم القحص",
                },
              ]}
              title="بترول"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/asmaaAlazmi.pdf?t=2024-02-20T00%3A33%3A55.461Z",
                  text: "تنويت مقرر جزاء عام اسماء العازمي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/elzamel.pdf?t=2024-02-20T00%3A34%3A51.901Z",
                  text: "الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/mohammedAlenezi.pdf?t=2024-02-20T00%3A35%3A33.182Z",
                  text: "أسئلة جزاء عام - محمد العنزي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/smaah.pdf?t=2024-02-20T00%3A36%3A02.364Z",
                  text: "تنويت سماح رضوان جزاء",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/elzameelTraining.pdf?t=2024-02-22T21%3A15%3A51.558Z",
                  text: "تدريبات جزاء عام الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/mnarAlfelkaye.docx?t=2024-02-22T21%3A16%3A39.903Z",
                  text: "جزاء عام منار الفيلكاوي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/moAlenezi.pdf?t=2024-02-22T21%3A17%3A07.227Z",
                  text: "أسئلة جزاء عام - محمد العنزي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/punishments.pdf?t=2024-02-22T21%3A17%3A34.681Z",
                  text: "العقوبات التكميلية والتعبية",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/tsneemAmendment.pdf?t=2024-02-22T21%3A18%3A02.529Z",
                  text: "تعديل قانون الاحداث - تسنيم العوضي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/tsneemCases.pdf?t=2024-02-22T21%3A18%3A34.277Z",
                  text: "قضايا مع الحل - تسنيم العوضي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/tsneemCode.pdf?t=2024-02-22T21%3A19%3A08.783Z",
                  text: "الكود - تسنيم العوضي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/tsneemContribution.pdf?t=2024-02-22T21%3A19%3A38.134Z",
                  text: "المساهمة الجزائية - تسنيم العوضي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/tsneemCorner.pdf?t=2024-02-22T21%3A20%3A12.784Z",
                  text: "الركن المعنوي - تسنيم العوضي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/tsneemCrimes.pdf?t=2024-02-22T21%3A20%3A42.582Z",
                  text: "جنح وجنايات - تسنيم العوضي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/tsneemPolynogamy.pdf?t=2024-02-22T21%3A21%3A15.453Z",
                  text: "التعدد - تسنيم العوضي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/tsneemProhibition.pdf?t=2024-02-22T21%3A21%3A46.382Z",
                  text: "موانع المسؤولية وأسباب الإباحة - تسنيم العوضي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/tsneemPunishments.pdf?t=2024-02-22T21%3A22%3A17.742Z",
                  text: "العقوبات التكميلية والتبعية - تسنيم العوضي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/tsneemPunishmentsSolved.pdf?t=2024-02-22T21%3A24%3A08.234Z",
                  text: "العقوبات التكميلية والتبعية محلول - تسنيم العوضي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/tsneemReasons.pdf?t=2024-02-22T21%3A24%3A52.774Z",
                  text: "أسباب التشديد والتخفيف - تسنيم العوضي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/jzaaAam/tsneemShroo2.pdf?t=2024-02-22T21%3A25%3A23.217Z",
                  text: "الشروع - تسنيم العوضي",
                },
              ]}
              title="جزاء عام"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/danaAlbrazi.pdf?t=2024-02-20T00%3A37%3A36.368Z",
                  text: "دانه البرازي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/elzamel.pdf?t=2024-02-20T00%3A38%3A20.116Z",
                  text: "دولي الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/kholoudAlajmi.pdf?t=2024-02-20T00%3A38%3A55.918Z",
                  text: "دولي الزامل مُعدلة - خلود العجمي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/shouqAleed.pdf?t=2024-02-20T00%3A40%3A28.017Z",
                  text: "دولي مقارنات - شوق العيد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/LayaliLaw.pdf?t=2024-02-22T21%3A53%3A33.094Z",
                  text: "Layali - القانون الدولي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/LayaliPublic.pdf?t=2024-02-22T21%3A54%3A06.008Z",
                  text: "Layali - دولي عام ",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/LayaliResponsibility.pdf?t=2024-02-22T21%3A54%3A28.425Z",
                  text: "Layali - المسؤولية الدولية",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/aliAldousery.pdf?t=2024-02-22T21%3A54%3A57.315Z",
                  text: "تنويت لمحاضرات د. علي الدوسري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/aliAmqsd.pdf?t=2024-02-22T21%3A55%3A29.056Z",
                  text: "الاقليم البحري - نوت علي المقصيد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/dalalDowaly.pdf?t=2024-02-22T21%3A55%3A59.844Z",
                  text: "قانون دولي عام - دلال القشاط",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/dowalyslides.pdf?t=2024-02-22T21%3A57%3A25.690Z",
                  text: "سلايدات دولي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/publicLawLayli.pdf?t=2024-02-22T21%3A58%3A01.428Z",
                  text: "القانون الدولي العام",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/rabah.pdf?t=2024-02-22T21%3A58%3A30.920Z",
                  text: "مذكرة محمد رباح دولي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/samah.pdf?t=2024-02-22T21%3A59%3A03.894Z",
                  text: "تنويت سماح رضوان دولي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/talal.pdf?t=2024-02-22T21%3A59%3A39.734Z",
                  text: "نوت دولي - طلال الجمهور",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/tsneem11.pdf",
                  text: "11- المسؤولية الدولية",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/tsneemAir.pdf?t=2024-02-22T22%3A00%3A50.689Z",
                  text: "6-الإقليم الهوائي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/tsneemContracts.pdf?t=2024-02-22T22%3A01%3A19.575Z",
                  text: "8- المعاهدات",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/tsneemCountry.pdf?t=2024-02-22T22%3A01%3A55.840Z",
                  text: "4- الدولة- الشعب",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/tsneemGovernemnt.pdf?t=2024-02-22T22%3A03%3A01.970Z",
                  text: "7-الحكومة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/tsneemPeople.pdf?t=2024-02-22T22%3A03%3A55.020Z",
                  text: "2- أشخاص القانون الدولي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/tsneemRelationships.pdf?t=2024-02-22T22%3A04%3A38.747Z",
                  text: "9-العلاقات الدبلوماسية",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/tsneemResources.pdf?t=2024-02-22T22%3A05%3A13.767Z",
                  text: "1- مصادر القانون الدولي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/tsneemSea.pdf?t=2024-02-22T22%3A05%3A41.926Z",
                  text: "5-الإقليم البحري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/tsneemSociaties.pdf?t=2024-02-22T22%3A06%3A15.105Z",
                  text: "3- المجتمعات الأخرى +العلاقة بين",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/dowallyAam/tsneemSolveConflicts.pdf?t=2024-02-22T22%3A06%3A45.620Z",
                  text: "10-حل المنازعات الدولية بالطرق السلمية",
                },
              ]}
              title="دولي عام"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/qaahBahth/enassAlazmi.pdf?t=2024-02-20T00%3A42%3A15.617Z",
                  text: "مبادئ البحث القانوني أ. إيناس العازمي",
                },
              ]}
              title="قاعة بحث (٢)"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/finance/aeshaAlmaatoq.pdf?t=2024-02-20T00%3A43%3A10.186Z",
                  text: "مالية - عائشة المعتوق",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/finance/closeAccounts.pdf?t=2024-02-20T01%3A15%3A21.576Z",
                  text: "اغلاق الحسابات",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/finance/hassanAlsbeai.pdf?t=2024-02-20T01%3A15%3A53.395Z",
                  text: "نوت حسن السبيعي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/finance/moShehaab.pdf?t=2024-02-20T01%3A17%3A06.912Z",
                  text: "نوت محمد شهاب",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/finance/shouqAleed.pdf?t=2024-02-20T01%3A17%3A42.092Z",
                  text: "الدومين - شوق العيد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/finance/smaah.pdf?t=2024-02-20T01%3A18%3A32.931Z",
                  text: "حل أسئلة - سماح رضوان",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/finance/drawingShouq.pdf?t=2024-02-22T22%3A09%3A36.402Z",
                  text: "الرسم - شوق العيد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/finance/elzameelMoney.pdf?t=2024-02-22T22%3A10%3A05.894Z",
                  text: "الزامل مالية عامة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/finance/shhaab.pdf?t=2024-02-22T22%3A10%3A33.921Z",
                  text: "الملغي في الميزانية - المستشار شهاب",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/second-year/finance/taxShouq.pdf?t=2024-02-22T22%3A11%3A06.417Z",
                  text: "الضريبة - شوق العيد",
                },
              ]}
              title="مالية"
            />
          </div>
          <Footer />
        </div>
      </div>
    </PageTransitionLayout>
  );
};

export default SecondYear;
