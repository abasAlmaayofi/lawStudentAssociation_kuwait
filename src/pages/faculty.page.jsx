import React from "react";
import Background from "../assets/background.jpg";
import File from "@/components/file.component";
import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import { LuDiamond } from "react-icons/lu";
import PageTransitionLayout from "@/components/pageTransitionLayout.component";
import { RiNumber4 } from "react-icons/ri";
import Collage from "@/components/collage.component";
import PrivateImg from "../assets/private.jpg";
import InternationalImg from "../assets/international.jpg";
import JzaaeeImg from "../assets/jzaaee.jpg";
import PublicImg from "../assets/public.jpg";
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
              <Collage
                img={PrivateImg}
                title={"قسم القانون الخاص"}
                accounts={[
                  {
                    name: "أ. د. فايز الكندري",
                    account: "dr.fayezkandri",
                  },
                  {
                    name: "د.موسي رزيق",
                    account: "moussa dr_",
                  },
                  {
                    name: "د.فاطمة الشريعان",

                    account: "dralshf",
                  },
                  {
                    name: "د.محمد الوسمي",
                    account: "drmalwasmi",
                  },
                  {
                    name: "د.انس النورة",
                    account: "dranasaltourah",
                  },
                  {
                    name: "د.ابراهيم الرشود",
                    account: "Dr_IbrahimAlrushoud",
                  },
                  {
                    name: "د. علي الحصينان",
                    account: "Hussinan AL_",
                  },
                  {
                    name: "د. خالد الهندباني",
                    account: "khaledalhendyani",
                  },
                  {
                    name: "د. محمد المطيري",
                    account: "Drmohammed_almutairi",
                  },
                  {
                    name: "د. رزان ال بن علي",
                    account: "raibenali",
                  },
                  {
                    name: "د. هند العبيدي",
                    account: "drHendalobaidi",
                  },
                  {
                    name: "د. فهد الشمري",
                    account: "alshammariFN",
                  },
                  {
                    name: "د.خالد الظفيري",
                    account: "Aldhafirikhaled",
                  },
                  {
                    name: "د. يوسف الياقوت",
                    account: "alyaqout Yousef_",
                  },
                  {
                    name: "د. نجاة الحوطي",
                    account: "Dr_Najat_Alhouti",
                  },
                  {
                    name: "د. فهد الزميع",
                    account: "alzumai.f",
                  },
                  {
                    name: "د. مشعل جوهر",
                    account: "Drmeshalhayat",
                  },
                  {
                    name: "د. منئ جمال",
                    account: "Dr_Monajamal",
                  },
                  {
                    name: "د. علي بو عباس",
                    account: "alibuabbas",
                  },
                  {
                    name: "د. بشايرالماجد",
                    account: "Al_majed",
                  },
                  { name: "د . مريم الصباح " },
                  {
                    name: "د . عبيد الوسمي ",
                  },
                  {
                    name: "د . شيخة الطراد ",
                  },
                  {
                    name: "د . زهراء العندليب",
                  },
                  {
                    name: "د . مها البشارة",
                  },
                  {
                    name: "د . ايمان الحمود",
                    account: "Emanalhamoud",
                  },
                  {
                    name: "أ . د . عبدالفضيل محمد",
                  },
                  {
                    name: "د . مرضي العياش ",
                  },
                  {
                    name: "د . اياد سعد الله ",
                  },
                  {
                    name: "د . عبدالرحمن الرضوان",
                  },
                  {
                    name: "د . احمد الرشود ",
                  },
                  {
                    name: "د . علي بوعباس",
                    account: "alibuabbas",
                  },
                  {
                    name: "د . مساعد العنزي ",
                  },
                  {
                    name: "د . سامي الدريعي",
                  },
                  {
                    name: "د . هيثم الاثري",
                    account: " haithamalathri",
                  },
                  {
                    name: "د . خالد الهندياني ",
                  },
                  {
                    name: "د . حسين الرشيدي ",
                  },
                  {
                    name: "د . هند العبيدي ",
                  },
                  {
                    name: "أ . هيا السابج",
                  },
                ]}
              />
              <Collage
                img={InternationalImg}
                title={"قسم القانون الدولي"}
                accounts={[
                  { name: "د. ديمة الوقيان", account: "Dalwugyan" },
                  {
                    name: "د. حسن الرشيد",
                    account: "hassan_alrasheed",
                  },
                  {
                    name: "د. علي الدوسري",
                    account: "alihussin",
                  },
                  {
                    name: " د. عيسى العنزي",
                    account: "methqai",
                  },
                  {
                    name: "د. فاطمة الظبيري",
                    account: "Flaw",
                  },
                  {
                    name: "د. بشاير الغانم",
                    account: "DrbashayerAlghanim",
                  },
                  {
                    name: "د. علي النامي",
                  },
                  {
                    name: "د. عيسى العنزي",
                  },
                  {
                    name: "د. ثقل العجمي",
                  },
                  {
                    name: "د. ندى الدعيج",
                  },
                  {
                    name: "د. شاهين الشاهين",
                  },
                  {
                    name: "د. صباح اليوسف ",
                  },
                  {
                    name: "د. عبدالسلام العنزي",
                  },
                  {
                    name: "د. محمد الجارالله",
                  },
                  {
                    name: ". أبراهيم السهلي",
                  },
                  {
                    name: "د. علي الدوسري",
                    account: "alihussin",
                  },
                  {
                    name: "د. فاطمة الحويل",
                  },
                  {
                    name: "د. ديمة الوقيان",
                  },
                  {
                    name: "د. بشاير الغانم",
                  },
                  {
                    name: "د. فاطمة الظبيري",
                    account: "Flaw",
                  },
                  {
                    name: "د. سارة الوهيبي",
                    account: "SarahAlwahaibi",
                  },
                  {
                    name: "د. حسن الرشيد",
                    account: "hassan_alrasheed",
                  },
                  {
                    name: "د. مريم بن غيث",
                  },
                  {
                    name: "د. ناصر الشمري",
                  },
                  {
                    name: "د. شرف الشرف",
                  },
                  {
                    name: "أ. عنود عبدالسلام",
                  },
                ]}
              />
              <Collage
                img={PublicImg}
                title={"قسم القانون العام"}
                accounts={[
                  { name: "د. خالد الحربي", account: "alharbi_khaled" },
                  {
                    name: "د. عبدالمنعم نعيم",
                    account: "drabdelmonemaeem",
                  },
                  { name: "د. بدر الفغم", account: "drbadralfogum" },
                  {
                    name: "د. منى الهاجري",
                    account: "Dralhajri",
                  },
                  {
                    name: "د. احمد عبدالكريم",
                    account: "DrAhmadAbdulkarem",
                  },
                  {
                    name: "د. منيرة النمش",
                    account: "muneeraAlNemsh",
                  },
                  {
                    name: "د. فاطمة دشتي",
                    account: "FinancesEconomie",
                  },
                  {
                    name: "د. خليفة الحميدة",
                    account: "alhamidah",
                  },
                  {
                    name: "د. فاطمة المحسن",
                    account: "dralmohsen",
                  },
                  {
                    name: "د. فواز الجدعي",
                    account: "drfawazAljidie",
                  },
                  {
                    name: "د. محمد الفيلي",
                    account: "droitconstitutionnel",
                  },
                  {
                    name: "د. ايمان الحمود",
                    account: "emanalhamoud",
                  },
                  {
                    name: "د. ارشيد الحوري",
                    account: "drarshid",
                  },
                  {
                    name: "د. سارة السلطان",
                    account: "sarakhalsultan",
                  },
                  {
                    name: "أ. د. أبراهيم الحمود",
                  },
                  {
                    name: "د. خليفة الحميدة",
                  },
                  {
                    name: "د. عبدالله الرميضي",
                  },
                  {
                    name: "د. فواز الجدعي",
                  },
                  {
                    name: "أ. د. زينب عوض الله",
                  },
                  {
                    name: "د. محمد الفيلي",
                  },
                  {
                    name: "د. فاطمة دشتي",
                  },
                  {
                    name: "د. محمد العتيبي",
                    account: "dralnaif",
                  },
                  {
                    name: "د. بدر الفغم",
                  },
                  {
                    name: "د. عبدالمنعم عبدالغني",
                  },
                  {
                    name: "د. فاطمة المحسن ",
                    account: "dralmohsen",
                  },
                  {
                    name: "د. جورجي ساري",
                  },
                  {
                    name: "د. احمد عبدالكريم",
                    account: " DrAhmadAbdulkarem",
                  },
                  {
                    name: "د. خالد الحربي",
                  },
                  {
                    name: "د. منيره النمش",
                  },
                  {
                    name: "د. منى الهاجري",
                    account: "Dralhajri",
                  },
                  {
                    name: "د. عبدالعزيز الشبيب",
                  },
                  {
                    name: "د. سارة السلطان",
                  },
                  {
                    name: "أ. جمانه الميعان",
                  },
                  {
                    name: "أ. حنان بورسلي",
                  },
                ]}
              />
              <Collage
                img={JzaaeeImg}
                title={"قسم القانون الجزائي"}
                accounts={[
                  {
                    name: "د. نورة العومي",
                    account: "nouraaloumi",
                  },
                  {
                    name: "د. حسين بوعركي",
                    account: "Drhusainburaki",
                  },
                  {
                    name: "د. خالد الرشيدي",
                    account: "khaledalrashidi",
                  },
                  {
                    name: "د. علي الرشيدي",
                    account: "dralimalrashedi",
                  },
                  {
                    name: "د. عمر المسعود",
                    account: "dromar",
                  },
                  {
                    name: "د. دلال السيف",
                    account: "Dalsaif",
                  },
                  {
                    name: "د. محمد التميمي",
                    account: "mohammad_altamimi",
                  },
                  {
                    name: "د. إيمات القطان",
                    account: "DrElmanAlqattan",
                  },
                  {
                    name: "د. هالة الصالح",
                    account: "DrHalaAlsaleh",
                  },
                  {
                    name: "د. بدر الراجحي",
                    account: "DrVaderAlrajhi",
                  },
                  {
                    name: "د. أحمد القحطاني",
                    account: "ahmad_alqahtani",
                  },
                  {
                    name: "أ. د. فايز الظفيري",
                  },
                  {
                    name: "أ. د. مشاري العيفان",
                  },
                  {
                    name: "أ. د. نجاتي سند",
                  },
                  {
                    name: "د. عادل المانع ",
                  },
                  {
                    name: "د. حسين بوعركي",
                  },
                  {
                    name: "د. عبدالعزيز العنزي",
                  },
                  {
                    name: "د. منصور العتيبي",
                  },
                  {
                    name: "د. نورة العومي",
                  },
                  {
                    name: "د. بدر الراجحي",
                  },
                  {
                    name: "د. هالة الصالح",
                  },
                  {
                    name: "د. أيمان القطان",
                    account: "aaa466",
                  },
                  {
                    name: "د. محمد التميمي ",
                  },
                  {
                    name: "د. دلال السيف",
                    account: "Dalsaif",
                  },
                  {
                    name: "د. أحمد القحطاني",
                    account: " Ahmad_alqahtni",
                  },
                  {
                    name: "د. علي الرشيدي",
                    account: "dralimalrashedi",
                  },
                  {
                    name: "د. خالد الرشيدي",
                    account: "KhaledAlRashidi",
                  },
                  {
                    name: "د. حمود الدويسان",
                  },
                  {
                    name: "د. أسماء الصيرفي",
                  },
                ]}
              />
            </div>
            <Footer />
          </div>
        </div>
      </PageTransitionLayout>
    </>
  );
};

export default Faculty;
