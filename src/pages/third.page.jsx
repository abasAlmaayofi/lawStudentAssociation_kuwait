import React from "react";
import Background from "../assets/background.jpg";
import File from "@/components/file.component";
import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import { LuDiamond } from "react-icons/lu";
import PageTransitionLayout from "@/components/pageTransitionLayout.component";
import { RiNumber2, RiNumber3 } from "react-icons/ri";

const ThirdYear = () => {
  return (
    <PageTransitionLayout>
      <div className="relative w-screen h-auto">
        <img
          src={Background}
          alt="kuwait-university-collage-of-law"
          className="w-full md:h-[1220px] h-[1860px] object-fit"
        />
        <div className="absolute top-0 w-screen h-full bg-gray-200/50  ">
          <div className="border-b-4 border-double border-[#3384c3]/90 pb-12">
            <Header />
            <p className="text-[#3384c3] mt-12  w-fit mx-auto h-4 md:text-5xl font-vexa text-[25px] bg-[#f2cc3f]  md:text-right text-center leading-relaxed mb-6 bg-opacity-70">
              <span className="relative -top-5">الفرقة الدراسية الثالثة</span>
              <span className="w-full flex justify-center relative -top-2">
                <RiNumber3
                  size={40}
                  className="border-4 border-dashed border-[#f2cc3f]/70 rounded-full p-1 "
                />
              </span>
            </p>
          </div>
          <p className="mt-4  pr-8 font-vexa text-lg tracking-wide text-[#3384c3] flex justify-end items-center gap-2">
            <span>:إختر إحدى المقررات التالية</span> <LuDiamond />
          </p>
          <div className="grid grid-cols-2 mt-2 pt-8 md:grid-cols-5 gap-y-12">
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/ekhtebaratSabqaa/ekhtebarat2018.pdf?t=2024-02-21T15%3A42%3A55.672Z",
                  text: "اختبارات سابقة للفرقة الثالثة ٢٠١٨ - ٢٠١٩",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/ekhtebaratSabqaa/ekhtebarat2021.pdf?t=2024-02-21T15%3A43%3A17.996Z",
                  text: "اختبارات سابقة للفرقة الثالثة ٢٠٢١ - ٢٠٢٢",
                },
              ]}
              title="اختبارات فاينل سابقة"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/edary2/bashairAlhadaad.pdf?t=2024-02-21T15%3A45%3A12.174Z",
                  text: "نوت بشاير الحداد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/edary2/bedourAlatal1.pdf?t=2024-02-21T15%3A45%3A44.508Z",
                  text: "نوت بدور العتال الجزء الاول",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/edary2/bedourAlatal2.pdf?t=2024-02-21T15%3A46%3A58.180Z",
                  text: "نوت بدور العتال - الجزء الثاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/edary2/elzameel.pdf?t=2024-02-21T15%3A47%3A28.569Z",
                  text: "جداول اداري (٢) الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/edary2/fatemaAlkhshab.pdf?t=2024-02-21T15%3A48%3A30.520Z",
                  text: "نوت فاطمة الخشاب",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/edary2/fatemaAshkanani.pdf?t=2024-02-21T15%3A49%3A06.875Z",
                  text: "فاطمة اشكناني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/edary2/fwazAlhwel.pdf?t=2024-02-21T15%3A49%3A35.547Z",
                  text: "مذكرة فواز الحويل - قانون اداري 2",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/edary2/jourgy.pdf?t=2024-02-21T15%3A50%3A27.870Z",
                  text: "اسالة الدكتور جورجي 2",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/edary2/moAlenezi.pdf?t=2024-02-21T15%3A51%3A04.122Z",
                  text: "نوت محمد العنزي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/edary2/moRabah.pdf?t=2024-02-21T15%3A51%3A37.298Z",
                  text: "نوت محمد رباح اداري ٢",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/edary2/nouraAlmutairi.pdf?t=2024-02-21T15%3A52%3A16.313Z",
                  text: "تنويت نوره المطيري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/edary2/rwanBoslah.pdf?t=2024-02-21T15%3A52%3A47.359Z",
                  text: "مذكرة روان بوصلحة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/edary2/safaDashti.pdf?t=2024-02-21T15%3A53%3A17.344Z",
                  text: "اداري ٢ - صفا دشتي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/edary2/wafaaAlmaane.docx?t=2024-02-21T15%3A53%3A54.617Z",
                  text: "تنويت وفاء المانع",
                },
              ]}
              title="اداري (٢)"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/commercial1/alheyaan.pdf?t=2024-02-21T15%3A58%3A19.219Z",
                  text: "تجاري الكتاب الاول تنويت د الحيان",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/commercial1/badeeAlmutairi.pdf?t=2024-02-21T15%3A59%3A50.905Z",
                  text: "مذكرة بادي المطيري قانون التجاري (١)",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/commercial1/firstbook.pdf?t=2024-02-21T16%3A00%3A24.460Z",
                  text: "تجاري الكتاب الاول",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/commercial1/rawan.pdf",
                  text: "نوت روان تجاري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/commercial1/sara.pdf?t=2024-02-21T16%3A01%3A35.065Z",
                  text: "نوت سارة تجاري ١ الكتاب الثاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/commercial1/secondbook.pdf?t=2024-02-21T16%3A02%3A24.467Z",
                  text: "نوت تجاري الكتاب الثاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/commercial1/shemaa.pdf?t=2024-02-21T16%3A02%3A54.162Z",
                  text: "تلخيص الطالبة شيماء",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/commercial1/tejariLaw1.pdf?t=2024-02-21T16%3A04%3A36.694Z",
                  text: "قانون تجاري١",
                },
              ]}
              title="تجاري (١)"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/tax/ayaAlhadaad.pdf?t=2024-02-21T16%3A05%3A20.324Z",
                  text: "آيه الحداد تشريعات ضريبيه",
                },
              ]}
              title="تشريعات ضريبية"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/work/elzameel.pdf?t=2024-02-21T16%3A06%3A24.690Z",
                  text: "جداول تشريعات عمل الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/work/elzamel.pdf",
                  text: "نوت تشريعات عمل الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/work/enoud.pdf?t=2024-02-21T16%3A09%3A34.654Z",
                  text: "تشريعات عنود - ١",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/work/enoud2.pdf?t=2024-02-21T16%3A10%3A14.069Z",
                  text: "تشريعات عنود-٢",
                },
              ]}
              title="تشريعات عمل"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/CamScanner.pdf?t=2024-02-21T17%3A54%3A07.431Z",
                  text: "CamScanner",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/NourAlomeAlqtlAlamd.pdf?t=2024-02-21T17%3A54%3A32.135Z",
                  text: "الجرائم الواقعة على الافراد القتل العمد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/NouraAlomeAlrdwAsmaa.pdf?t=2024-02-21T17%3A55%3A34.945Z",
                  text: "الجرائم الواقعة على العرض والسمعه",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/NouraAlomeNsosAljzaa.pdf?t=2024-02-21T17%3A56%3A17.524Z",
                  text: "الجرائم الواقعة على الأفراد نصوص الجزاء",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/abdurhamanAldehani.pdf?t=2024-02-21T17%3A56%3A54.308Z",
                  text: "نوت عبدالرحمن الديحاني - الجرائم الواقعة على النفس والسمعة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/adeelAlmanee.pdf?t=2024-02-21T17%3A57%3A55.048Z",
                  text: "رؤى الرويح - جريمة السب والقذف د.عادل المانع",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/alsayeqAlnafs.pdf?t=2024-02-21T17%3A58%3A27.508Z",
                  text: "تنويت الجرائم الواقعة على النفس",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/alsayeqDrugs.pdf?t=2024-02-21T17%3A59%3A07.446Z",
                  text: "تنويت جرائم الثقة العام بالمحررات",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/alsayeqMoney.pdf?t=2024-02-21T18%3A01%3A11.334Z",
                  text: "جرائم الاموال تنويت",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/alsayeqMoney.pdf?t=2024-02-21T18%3A01%3A11.334Z",
                  text: "تنويت جرائم الوظيفة العامة - علي الصايغ",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/badee.pdf?t=2024-02-21T18%3A02%3A32.653Z",
                  text: "نوت بادي جزاء خاص",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/emanAlgadan.pdf?t=2024-02-21T18%3A03%3A06.763Z",
                  text: "_2قانون الجزاء الكويتي القسم الخاص__امانة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/hessaAlhemoudAlamana.pdf?t=2024-02-21T18%3A03%3A44.948Z",
                  text: "خيانة الامانة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/hessaAlhemoudAlgatel.pdf?t=2024-02-21T18%3A04%3A29.084Z",
                  text: "جريمة القتل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/hessaAlhemoudAlnsb.pdf?t=2024-02-21T18%3A05%3A08.353Z",
                  text: "جريمة النصب",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/hessaAlhemoudElethaa.pdf?t=2024-02-21T18%3A05%3A41.579Z",
                  text: "جريمة الايذاء",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/hessaAlhemoudRshwa.pdf?t=2024-02-21T18%3A07%3A35.084Z",
                  text: "تنويت رشوة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/hessaAlhemoudSheekbdonraseed.pdf?t=2024-02-21T18%3A11%3A38.376Z",
                  text: "شيك بدون رصيد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/hessaAlhemoudSrga.pdf?t=2024-02-21T18%3A12%3A39.259Z",
                  text: "جريمة السرقة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/mostaqillaDrugs.pdf?t=2024-02-21T18%3A13%3A16.534Z",
                  text: "جرائم المخدرات",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/mostaqillaFightingAndWound.pdf?t=2024-02-21T18%3A16%3A08.813Z",
                  text: "جريمة القتل وجريمة الضرب والجرح والإيذاء",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/mostaqillaMoney.pdf?t=2024-02-21T18%3A16%3A52.828Z",
                  text: "الجرائم الواقعة على الأموال",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/mostaqillaPublicInterest.pdf?t=2024-02-21T18%3A17%3A22.804Z",
                  text: "الجرائم المضرة بالمصلحة العامة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/mostaqillaShyandArd.pdf?t=2024-02-21T18%3A18%3A12.776Z",
                  text: "جرائم الواقعة على العرض والحياء",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/nourAlomeAlmana.pdf?t=2024-02-21T17%3A57%3A19.390Z",
                  text: "خيانة الأمانة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/nourAlomeAlnasb.pdf?t=2024-02-21T18%3A20%3A28.412Z",
                  text: "النصب",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/nouraAlomeAlsheek.pdf?t=2024-02-21T18%3A21%3A01.956Z",
                  text: "جرائم الشيك",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/nouraAlomeAltzwerr.pptx?t=2024-02-21T18%3A21%3A35.965Z",
                  text: "جريمة التزوير 2021",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/nouralAlomeAltzeef.pdf?t=2024-02-21T18%3A22%3A08.758Z",
                  text: "جرائم التزييف",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/nouralAlomePublicInterest.pdf?t=2024-02-21T18%3A22%3A47.413Z",
                  text: "الرشوة - الجرائم الضارة بالمصلحة العامة 2020",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/revisionNouraAlome.pdf?t=2024-02-21T18%3A23%3A37.805Z",
                  text: "مراجعة د. نورة العومي جزاء خاص",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/tabelsEzameel.pdf?t=2024-02-21T18%3A24%3A24.617Z",
                  text: "جزاء خاص - جداول الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/private/tsneem.pdf?t=2024-02-21T18%3A24%3A54.007Z",
                  text: "مذكرة تسنيم جزاء خاص",
                },
              ]}
              title="جزاء خاص"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/managementContracts/moAlenezi.pdf?t=2024-02-21T18%3A27%3A38.661Z",
                  text: "عقود ادارية - محمد العنزي",
                },
              ]}
              title="عقود ادارية"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/alhelalSelling.pdf?t=2024-02-21T18%3A28%3A18.756Z",
                  text: "هلالي - عقد البيع",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/alhelaliRent.pdf?t=2024-02-21T18%3A29%3A35.401Z",
                  text: "هلالي - عقد الايجار",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/anasRent.pdf?t=2024-02-21T18%3A30%3A02.023Z",
                  text: "نوت القوبع تلخيص د.أنس - عقد الايجار",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/anasSelling.pdf?t=2024-02-21T18%3A30%3A34.281Z",
                  text: "نوت القويع تلخيص د.أنس - عقد البيع",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/anwarRent.pdf?t=2024-02-21T18%3A31%3A07.457Z",
                  text: "نوت عقد الإيجار - أنوار الخرينج",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/bedour.pdf?t=2024-02-21T18%3A31%3A53.435Z",
                  text: "عقود نوت بدور",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/dalalAhqshad.pdf?t=2024-02-21T18%3A33%3A15.565Z",
                  text: "عقد الايجار دلال القشاط",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/dalalAlqshadSellingContact.pdf?t=2024-02-21T18%3A33%3A50.479Z",
                  text: "عقد البيع - دلال القشاط",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/elzameelRent.pdf?t=2024-02-21T18%3A34%3A24.877Z",
                  text: "الزامل عقد الايجار",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/elzameelSellingcontact.pdf?t=2024-02-21T18%3A34%3A54.612Z",
                  text: "الزامل عقد البيع",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/emanAlhemoud.pdf?t=2024-02-21T18%3A35%3A22.207Z",
                  text: "عقود مدنية - د. إيمان الحمود فاطمة الخشاب",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/khaledAlhndani.pdf?t=2024-02-21T18%3A35%3A56.841Z",
                  text: "عقد البيع - تنويت شرح د.خالد الهندياني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/mousaAlsaaedSellingContact.pdf?t=2024-02-21T18%3A37%3A09.752Z",
                  text: "عقد البيع و الايجار موسى السعيد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/mousaAlsaeed.pdf?t=2024-02-21T18%3A37%3A53.273Z",
                  text: "عقد البيع- موسى السعيد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/nourAlmekheyalRent.pdf?t=2024-02-21T18%3A39%3A38.636Z",
                  text: "عقد الايجار - نوت نوره المخيال",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/nouraAlmekhyalSell1.pdf?t=2024-02-21T18%3A42%3A20.126Z",
                  text: "عقد البيع 1 - نوت نوره المخيال",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/civilContracts/nouraAlmekhyalSell2.pdf?t=2024-02-21T18%3A43%3A05.988Z",
                  text: "عقد البيع 2 - نوت نوره المخيال",
                },
              ]}
              title="عقود مدنية"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/research3/amarAlterkawi.pdf?t=2024-02-21T19%3A22%3A41.902Z",
                  text: "المنهجية القانونية - عمار تركاوي ومحمد خير العكام",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/research3/asmetBaker.pdf?t=2024-02-21T19%3A23%3A15.747Z",
                  text: "كتاب أصول البحث القانوني - عصمت بكر",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/research3/researchApproach.pdf?t=2024-02-21T19%3A23%3A38.091Z",
                  text: "منهجية البحث في العلوم القانونية",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/research3/zehraaAlandeleeb.pdf?t=2024-02-21T19%3A24%3A09.238Z",
                  text: "نموذج لخطّة بحث د. زهراء العندليب",
                },
              ]}
              title="قاعة بحث (٣)"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/globalCriminal/moubark.pdf",
                  text: "عبدالعزيز صالح مبارك - مذكرة دولي جنائي 2",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/globalCriminal/samah.pdf?t=2024-02-21T19%3A25%3A22.543Z",
                  text: "تنويت سماح رضوان جنائي دولي",
                },
              ]}
              title="قانون الجنائي الدولي"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/morafaat/electronicAdvertisment.pdf?t=2024-02-21T19%3A26%3A11.862Z",
                  text: "الإعلان_الإلكتروني_تعديل_قانون_المرافعات",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/morafaat/elzameelBook1.pdf?t=2024-02-21T19%3A27%3A05.302Z",
                  text: "جداول مرافعات الكتاب الاول",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/morafaat/elzameelBook2.pdf?t=2024-02-21T19%3A27%3A34.499Z",
                  text: "جداول مرافعات الكتاب الثاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/morafaat/fatemaAlqdan.pdf?t=2024-02-21T19%3A27%3A55.820Z",
                  text: "نوت فاطمة القطان",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/morafaat/helaliBook1.pdf?t=2024-02-21T19%3A28%3A32.351Z",
                  text: "الكتاب ١ - نوت هلالي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/morafaat/helaliBook2.pdf?t=2024-02-21T19%3A29%3A45.256Z",
                  text: "الكتاب ٢ - نوت هلالي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/morafaat/marafaat1and2.pdf?t=2024-02-21T19%3A29%3A57.543Z",
                  text: "تركات مرافعات ك١ و٢ (1)",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/morafaat/marafatBook1.pdf?t=2024-02-21T19%3A30%3A41.066Z",
                  text: "نوت بادي مرافعات الكتاب الاول",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/morafaat/marafatBook2.pdf?t=2024-02-21T19%3A31%3A11.372Z",
                  text: "نوت بادي مرافعات الكتاب الثاني (جزء الإعلان)",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/morafaat/mneeraBook1.pdf?t=2024-02-21T19%3A31%3A35.347Z",
                  text: "منيرة البذال كتاب الاول",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/morafaat/mneeraBook2.pdf?t=2024-02-21T19%3A32%3A22.318Z",
                  text: "منيرة البذال كتاب الثاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/morafaat/mneeraNouraQweebi.pdf?t=2024-02-21T19%3A32%3A41.061Z",
                  text: "ريم القوبع - تعديل نوت منيرة العنزي ٢٠٢٣",
                },
              ]}
              title="مرافعات"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/ownershiptFkreya/aesha1.pdf?t=2024-02-21T19%3A34%3A36.161Z",
                  text: "ملكية فكرية -عايشة المطيري -1",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/ownershiptFkreya/aesha2.pdf?t=2024-02-21T19%3A35%3A13.643Z",
                  text: "ملكية فكرية -عايشة المطيري -2",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/ownershiptFkreya/mhaa.pdf?t=2024-02-21T19%3A35%3A37.954Z",
                  text: "ملكية فكرية- مها الظفيري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/ownershiptFkreya/rightAndwrong.pdf?t=2024-02-21T19%3A36%3A14.091Z",
                  text: "ملكية فكرية صح وخطأ",
                },
              ]}
              title="ملكية فكرية"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/publicOrganization/dalalAlAnsari.pdf?t=2024-02-21T19%3A36%3A41.006Z",
                  text: "منظمات دولية دلال الانصاري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/publicOrganization/elafAljmi.pdf?t=2024-02-21T19%3A37%3A16.745Z",
                  text: "المنظمات الدوليه، ايلاف العجمي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/publicOrganization/hnanAlsaeed.pdf?t=2024-02-21T19%3A37%3A41.221Z",
                  text: "تلخيص منظمة الامم المتحدة - الطالبة حنان السعيد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/publicOrganization/jmanaAlmutairi.pdf",
                  text: "مذكرة جمانه الشمري ، من ص ١٣٧ لنهايه الكتاب",
                },
              ]}
              title="منظمات دولية"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/inheratance/ElzameelAlfrood.pdf",
                  text: "اصحاب الفروض",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/inheratance/alfrood.pdf?t=2024-02-21T19%3A41%3A47.936Z",
                  text: "الفروض",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/inheratance/alwaqfTlkheez.pdf?t=2024-02-21T19%3A42%3A15.571Z",
                  text: "مذكرة الوقف بعد التلخيص 2",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/inheratance/bnWateen.pdf?t=2024-02-21T19%3A42%3A54.769Z",
                  text: "ميراث بن وطين",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/inheratance/elzameelAlmerath.pdf?t=2024-02-21T19%3A43%3A23.287Z",
                  text: "الميراث",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/inheratance/elzameelAlwaqf.pdf?t=2024-02-21T19%3A43%3A59.167Z",
                  text: "الوقف",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/inheratance/elzameelAlwseya.pdf?t=2024-02-21T19%3A44%3A27.572Z",
                  text: "الوصية",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/inheratance/fatimaAlshoo.pdf?t=2024-02-21T19%3A45%3A01.438Z",
                  text: "ميراث فاطمة السهو لمحاضرات د.محمد العصيمي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/inheratance/latefyAlotiabi.pdf?t=2024-02-21T19%3A45%3A57.251Z",
                  text: "تلخيص ميراث -لطيفة العتيبي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/inheratance/mothakraAlwaqf.pdf?t=2024-02-21T19%3A46%3A29.811Z",
                  text: "مذكرة الوقف",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/inheratance/mothakraAlwaseya.pdf?t=2024-02-21T19%3A47%3A05.653Z",
                  text: "مذكرة الوصية",
                },
                // {
                //   link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/third-year/inheratance/mothaqkraAhkamAAmerath.docx",
                //   text: "مذكرة مختصرة في احكام الميراث",
                // },
              ]}
              title="ميراث"
            />
          </div>
          <Footer />
        </div>
      </div>
    </PageTransitionLayout>
  );
};

export default ThirdYear;
