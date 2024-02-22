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
