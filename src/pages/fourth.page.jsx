import React from "react";
import Background from "../assets/background.jpg";
import File from "@/components/file.component";
import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import { LuDiamond } from "react-icons/lu";
import PageTransitionLayout from "@/components/pageTransitionLayout.component";
import { RiNumber4 } from "react-icons/ri";

const FourthYear = () => {
  return (
    <PageTransitionLayout>
      <div className="relative w-screen h-auto">
        <img
          src={Background}
          alt="kuwait-university-collage-of-law"
          className="w-full md:h-[1220px] h-[1660px] object-fit"
        />
        <div className="absolute top-0 w-screen h-full bg-gray-200/50  ">
          <div className="border-b-4 border-double border-[#3384c3]/90 pb-12">
            <Header />
            <p className="text-[#3384c3] mt-12  w-fit mx-auto h-4 md:text-5xl font-vexa text-[25px] bg-[#f2cc3f]  md:text-right text-center leading-relaxed mb-6 bg-opacity-70">
              <span className="relative -top-5">الفرقة الدراسية الرابعة</span>
              <span className="w-full flex justify-center relative -top-2">
                <RiNumber4
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
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/tests/test2018.pdf?t=2024-02-21T22%3A47%3A41.306Z",
                  text: "اختبارات سابقة للفرقة الرابعة ٢٠١٨ - ٢٠١٩",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/tests/test2022.pdf?t=2024-02-21T22%3A48%3A16.520Z",
                  text: "اختبارات سابقة للفرقة الرابعة ٢٠٢١ - ٢٠٢٢",
                },
              ]}
              title="اختبارات فاينل سابقة "
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/ejraaat/alrebee.pdf?t=2024-02-21T22%3A50%3A30.675Z",
                  text: "اجراءات ك١ الربعي والسميري - تنويت د.محمد التميمي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/ejraaat/barakAljsaar.pdf?t=2024-02-21T22%3A51%3A12.764Z",
                  text: "نوت مادة اجراءات جزائية براك الجسار",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/ejraaat/ezameel.pdf?t=2024-02-21T22%3A51%3A50.858Z",
                  text: "نوت اجراءات الزامل (تنويت الدكتور نجاتي)",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/ejraaat/fatemahAlshoo1.pdf?t=2024-02-21T22%3A52%3A24.853Z",
                  text: "اجراءات الكتاب الاول فاطمة السهو",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/ejraaat/fatemahAlshoo2.pdf?t=2024-02-21T22%3A52%3A53.422Z",
                  text: "اجراءات الكتاب الثاني فاطمة السهو",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/ejraaat/jajer1.pdf?t=2024-02-21T22%3A53%3A29.159Z",
                  text: "تنويت اجراءات جزائية",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/ejraaat/hajer2.pdf?t=2024-02-21T22%3A53%3A22.795Z",
                  text: "تنويت إجراءات جزائية ٢",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/ejraaat/hneen.pdf?t=2024-02-21T22%3A54%3A29.885Z",
                  text: "تنويت حنين المطيري - اجراءات ك١",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/ejraaat/reemAldwesh1.pdf?t=2024-02-21T22%3A55%3A13.640Z",
                  text: "اجراءات الكتاب الاول - ريم الدويش",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/ejraaat/reemAlhblani.pdf?t=2024-02-21T22%3A55%3A49.249Z",
                  text: "إجراءات جزائية ريم الحبلاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/ejraaat/sara1.pdf?t=2024-02-21T22%3A56%3A17.407Z",
                  text: "اجراءات الكتاب الاول سارة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/ejraaat/sara2.pdf?t=2024-02-21T22%3A56%3A50.892Z",
                  text: "اجراءات الكتاب الثاني سارة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/ejraaat/zmrd.pdf?t=2024-02-21T22%3A57%3A19.972Z",
                  text: "مذكرة اجراءات شرح حل القضايا - أ. زمرد",
                },
              ]}
              title="اجراءات جزائية"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/asoolAlfqh/asoolFqhFinal.pdf?t=2024-02-21T23%3A01%3A02.504Z",
                  text: "اصول فقه نهائي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/asoolAlfqh/asoolAlfqh.pdf?t=2024-02-21T22%3A59%3A24.767Z",
                  text: "مذكرة أصول الفقه ٢٠٢٣",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/asoolAlfqh/bnwadeen.pdf?t=2024-02-21T23%3A02%3A03.473Z",
                  text: "أصول فقة - بن وطين",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/asoolAlfqh/definationsAssolAlfgh.pdf?t=2024-02-21T23%3A02%3A31.002Z",
                  text: "تعاريف اصول فقه",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/asoolAlfqh/definationsBnWadeen.pdf?t=2024-02-21T23%3A03%3A01.432Z",
                  text: "تعاريف اصول فقه - بن وطين",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/asoolAlfqh/elzameel.pdf?t=2024-02-21T23%3A03%3A27.581Z",
                  text: "اصول فقه الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/asoolAlfqh/nweerAlbdhani.pdf?t=2024-02-21T23%3A03%3A57.328Z",
                  text: "تلخيص أصول فقة نوير البطحاني وفق ارشادات د.جراح الفضلي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/asoolAlfqh/review.pdf?t=2024-02-21T23%3A00%3A47.335Z",
                  text: "تلخيص المراجعه",
                },
              ]}
              title="اصول فقه"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/eflas/khelodAldhafeeriPersons.pdf?t=2024-02-21T23%3A06%3A29.102Z",
                  text: "نوت افلاس - خلود الظفيري (الى كمية اشخاص التفليسة)",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/eflas/kheloodAldeferri.pdf?t=2024-02-21T23%3A06%3A54.704Z",
                  text: "خلود الظفيري - نوت قانون الافلاس (التسويه الوقائيه و اعادة الهيكله)",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/eflas/kouther.pdf?t=2024-02-21T23%3A07%3A19.995Z",
                  text: "نوت افلاس - كوثر جاسم",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/eflas/mousaSaeed.pdf?t=2024-02-21T23%3A07%3A48.156Z",
                  text: "مذكرة قانون الإفــلاس - موسى السعيد كمية الاختبار الاول",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/eflas/questionAndAnswer.pdf",
                  text: "سؤال وجواب",
                },
              ]}
              title="افلاس"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/criminalInvistagation/elaaf.pdf",
                  text: "نوت إيلاف العجمي - لمقرر الأدلة الجنائية",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/criminalInvistagation/criminalInvestigation.pdf?t=2024-02-21T23%3A10%3A27.844Z",
                  text: "الادلة الجنائية - التحقيق الجنائي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/criminalInvistagation/AssolCriminalInvestigation.pdf?t=2024-02-21T23%3A10%3A51.249Z",
                  text: "الكمية المطلوبة المرشد في اصول التحقيق الجزائي",
                },
              ]}
              title="الادلة الجنائية"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/bahree/NaveltradingLaw.pdf?t=2024-02-21T23%3A12%3A02.623Z",
                  text: "مرسوم رقم ٢٨ لسنة ١٩٨٠ بإصدار قانون التجارة البحرية",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/bahree/dalalAlqshad.pdf?t=2024-02-21T23%3A12%3A33.345Z",
                  text: "بحري - دلال القشاط",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/bahree/elzameel.pdf?t=2024-02-21T23%3A12%3A59.766Z",
                  text: "بحري الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/bahree/galyaAldehani.pdf?t=2024-02-21T23%3A13%3A25.780Z",
                  text: "تنويت بحري - غاليه الديحاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/bahree/moAlmutairi.pdf?t=2024-02-21T23%3A14%3A02.331Z",
                  text: "بحري مراجعة د.محمد المطيري",
                },
              ]}
              title="بحري"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/commercial2/abdulkareemAlkanderi1.pdf?t=2024-02-21T23%3A27%3A04.514Z",
                  text: "تجاري ٢ الكتاب الاول د.عبدالكريم الكندري الجزء الاول",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/commercial2/abdulkareemAlkanderi2.pdf?t=2024-02-21T23%3A27%3A38.512Z",
                  text: "تجاري ٢ الكتاب الاول د.عبدالكريم الكندري الجزء الثاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/commercial2/bade1.pdf?t=2024-02-21T23%3A28%3A06.058Z",
                  text: "تجاري ٢ الكتاب الاول بادي المطيري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/commercial2/badrya1.pdf?t=2024-02-21T23%3A28%3A37.904Z",
                  text: "تنويت تجاري ٢ الكتاب الاول كامل -بدرية عبادي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/commercial2/badrya2.pdf?t=2024-02-21T23%3A29%3A15.486Z",
                  text: "تنويت تجاري٢ الكتاب الثاني كامل - بدرية عبادي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/commercial2/badryaPoints.pdf?t=2024-02-21T23%3A29%3A42.420Z",
                  text: "رؤوس اقلام - بدرية عبادي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/commercial2/commercialPapers.pdf?t=2024-02-21T23%3A30%3A20.769Z",
                  text: "كتاب الأوراق التجارية",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/commercial2/elzameel1.pdf?t=2024-02-21T23%3A31%3A04.133Z",
                  text: "مذكرة تجاري 2 الكتاب الاول الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/commercial2/elzameel2.pdf?t=2024-02-21T23%3A31%3A44.397Z",
                  text: "مذكرة تجاري 2 الكتاب الثاني الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/commercial2/hessa1.pdf?t=2024-02-21T23%3A32%3A09.037Z",
                  text: "تجاري ٢ - حصة الحمود الجزء الاول",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/commercial2/hessa2.pdf?t=2024-02-21T23%3A33%3A29.954Z",
                  text: "تجاري ٢ - حصة الحمود الجزء الثاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/commercial2/importantPoinst.pdf?t=2024-02-21T23%3A33%3A54.388Z",
                  text: "نقاط مهمه",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/commercial2/moAlkanderi.pdf?t=2024-02-21T23%3A34%3A23.202Z",
                  text: "تجاري ٢ - د. محمد الكندري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/commercial2/moRabah.pdf?t=2024-02-21T23%3A34%3A46.690Z",
                  text: "مراجعة د.محمد رباح قانون تجاري (2)",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/commercial2/tsneem2.pdf?t=2024-02-21T23%3A35%3A29.455Z",
                  text: "تجاري ٢ الكتاب الثاني تسنيم",
                },
              ]}
              title="تجاري (٢)"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/thkeem/aseel.pdf?t=2024-02-21T23%3A38%3A04.535Z",
                  text: "التحكيم الدولي - اسيل التورة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/thkeem/reem20.pdf?t=2024-02-21T23%3A38%3A32.242Z",
                  text: "اخر 20 صفحة تحكيم - ريم الدويش",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/thkeem/reemBdlaan.pdf?t=2024-02-21T23%3A39%3A41.031Z",
                  text: "دعوى البطلان - ريم الدويش",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/thkeem/reemThkeem.pdf?t=2024-02-21T23%3A41%3A27.860Z",
                  text: "الكود تحكيم - ريم الدويش",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/thkeem/reemthkeemMagali.pdf?t=2024-02-21T23%3A41%3A57.357Z",
                  text: "مقالي تحكيم - سارة الظفيري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/thkeem/saraThkeem2.pdf?t=2024-02-21T23%3A43%3A22.023Z",
                  text: "تحكيم٢ - سارة الظفيري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/thkeem/sarathkeemDaweli.pdf?t=2024-02-21T23%3A43%3A55.623Z",
                  text: "تحكيم دولي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/thkeem/reemSummaryMidterm.pdf?t=2024-02-21T23%3A40%3A38.711Z",
                  text: "ملخص مقرر تحكيم-ميدتيرم",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/thkeem/reemSummaryfinal.pdf?t=2024-02-21T23%3A45%3A50.209Z",
                  text: "مخلص التحكيم الدولي -فاينل",
                },
              ]}
              title="تحكيم دولي"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/executive/aljbree.pdf?t=2024-02-21T23%3A47%3A47.500Z",
                  text: "شرح مادة التنفيذ الجبري كلية الحقوق جامعة الكويت - اعداد عمر ابوزيد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/executive/badi1.pdf?t=2024-02-21T23%3A48%3A32.619Z",
                  text: "تنفيذ الكتاب الاول - بادي المطيري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/executive/badi2.pdf?t=2024-02-21T23%3A49%3A02.009Z",
                  text: "تنفيذ الكتاب الثاني - بادي المطيري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/executive/dalal1.pdf?t=2024-02-21T23%3A49%3A35.593Z",
                  text: "تنفيذ الكتاب الاول - دلال القشاط",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/executive/dalal2.pdf?t=2024-02-21T23%3A50%3A04.355Z",
                  text: "تنفيذ الكتاب الثاني - دلال القشاط",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/executive/elzamel1.pdf?t=2024-02-21T23%3A50%3A32.323Z",
                  text: "تنفيذ - الكتاب الاول الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/executive/elzamel2.pdf?t=2024-02-21T23%3A51%3A03.228Z",
                  text: "تنفيذ - الكتاب الثاني الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/executive/summary.pdf?t=2024-02-21T23%3A51%3A44.828Z",
                  text: "ملخص تنفيذ",
                },
              ]}
              title="تنفيذ"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalEconomy/daweliIgtesadi.pdf?t=2024-02-22T00%3A04%3A36.192Z",
                  text: "نوت دولي اقتصادي",
                },
              ]}
              title="دولي اقتصادي"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/asmaaNationality.pdf?t=2024-02-22T00%3A05%3A26.551Z",
                  text: "تنويت الجنسية أسماء العازمي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/badiNationality.pdf?t=2024-02-22T00%3A05%3A55.653Z",
                  text: "قانون دولي خاص (الجنسية) بادي المطيري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/dalal.pdf?t=2024-02-22T00%3A06%3A47.981Z",
                  text: "دولي خاص - دلال القشاط",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/elzameel.pdf?t=2024-02-22T00%3A07%3A24.585Z",
                  text: "جداول دولي خاص (الاختصاص) الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/elzameelConflict.pdf?t=2024-02-22T00%3A07%3A49.317Z",
                  text: "مذكرة دولي خاص (التنازع) الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/elzameelQawaedAlesnad.pdf?t=2024-02-22T00%3A08%3A31.302Z",
                  text: "قواعد الاسناد في القانون الكويتي الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/emanNationality.pdf?t=2024-02-22T00%3A08%3A28.832Z",
                  text: "سلايدات الجنسية-ايمان المونّس",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/faselNationality.pdf?t=2024-02-22T00%3A09%3A33.254Z",
                  text: "فيصل الفضالة - مذكرة دولي خاص (قانون الجنسية)",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/internationLawPrivateBadi.pdf?t=2024-02-22T00%3A10%3A04.388Z",
                  text: "قانون دولي خاص (قواعد الاسناد) بادي المطيري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/khlf.pdf?t=2024-02-22T00%3A11%3A27.020Z",
                  text: "نوت خلف-قواعد الاختصاص القضائي الدولي الى ص١١٦",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/reemNationality.pdf?t=2024-02-22T00%3A11%3A56.309Z",
                  text: "ملخص مادة الجنسية , ريم الشمري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/sara411.pdf?t=2024-02-22T00%3A12%3A34.487Z",
                  text: "نوت سارة - دولي خاص من ص143 الى 411",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/saraNationality.pdf?t=2024-02-22T00%3A13%3A10.768Z",
                  text: "كتاب الجنسية-تنويت سارة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/summaryElzameel.pdf?t=2024-02-22T00%3A13%3A59.427Z",
                  text: "ملخص - دولي خاص الزامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/tsneemNationality.pdf?t=2024-02-22T00%3A14%3A28.884Z",
                  text: "تنويت الجنسية - تسنيم",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/zahraNationality.pdf?t=2024-02-22T00%3A14%3A52.029Z",
                  text: "مذكرة قانون جنسية - زهراء العلي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/bshairNationality.pdf?t=2024-02-22T00%3A16%3A06.678Z",
                  text: "بشاير الحداد - الجنسية",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/InternationalPrivat/bdoor.pdf?t=2024-02-22T00%3A17%3A33.080Z",
                  text: "دولي خاص - بدور الظفيري 2",
                },
              ]}
              title="دولي خاص"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/MousaSaeedTest1.pdf?t=2024-02-22T12%3A42%3A21.008Z",
                  text: "مذكرة مدني تعديل موسى السعيد - للاختبار الاول",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/abdulAzeez2.pdf?t=2024-02-22T12%3A43%3A05.095Z",
                  text: "مدني الكتاب الثاني عبدالعزيز المطيري - 2022",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/abdulaAzeez1.pdf?t=2024-02-22T12%3A43%3A46.159Z",
                  text: "مدني الكتاب الأول عبدالعزيز المطيري - 2022",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/alrhnAlrasme.pdf?t=2024-02-22T12%3A44%3A18.579Z",
                  text: "مقالي - الرهن الرسمي والحيازي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/alrhnExpiry.pdf?t=2024-02-22T12%3A44%3A57.530Z",
                  text: "انقضاء_الرهن_الحيازي_+_حق_الامتياز",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/alrweeh1.pdf?t=2024-02-22T12%3A46%3A06.341Z",
                  text: "مدني-الكتاب الاول - رؤى الرويح",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/asselAlrhnAlheyaza.pdf?t=2024-02-22T12%3A47%3A13.206Z",
                  text: "الرهن الحيازي وحق الامتياز - اسيل التورة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/bdoor1.pdf?t=2024-02-22T12%3A48%3A27.855Z",
                  text: "مدني الكتاب الاول بدرية العبادي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/bdoorAlheyaza.pdf?t=2024-02-22T12%3A49%3A36.873Z",
                  text: "الحيازة - بدور الظفيري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/bdoorAlmlkya.pdf?t=2024-02-22T12%3A50%3A15.580Z",
                  text: "الملكية - بدور الظفيري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/bdray2.pdf?t=2024-02-22T12%3A50%3A46.825Z",
                  text: "مدني الكتاب الثاني بدرية العبادي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/civilBdoor.pdf?t=2024-02-22T12%3A51%3A26.749Z",
                  text: "مدني - بدور الظفيري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/civilBook2.pdf?t=2024-02-22T12%3A52%3A21.632Z",
                  text: "ملخص - مدني - الكتاب الثاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/civilSummary.pdf?t=2024-02-22T12%3A52%3A53.478Z",
                  text: "مراجعة مدني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/dalaAlmlkya.pdf?t=2024-02-22T12%3A53%3A40.990Z",
                  text: "تلخيص مدني (الملكية) - دلال القشاط",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/dalalAlrhn.pdf?t=2024-02-22T12%3A54%3A13.144Z",
                  text: "مدني( الرهن) - دلال القشاط",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/faizAlkandri.pdf?t=2024-02-22T12%3A54%3A48.983Z",
                  text: "محاضرات د.فايز الكندري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/fatimaAlshoo1.pdf?t=2024-02-22T12%3A55%3A20.763Z",
                  text: "مدني الكتاب الاول فاطمة السهو",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/fatimaAlshoo2.pdf?t=2024-02-22T12%3A56%3A38.780Z",
                  text: "مدني الكتاب الثاني فاطمة السهو",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/hamedAlmutairi.pdf?t=2024-02-22T12%3A57%3A26.736Z",
                  text: "قانون مدني - حامد المطيري (الكتاب الأول)",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/mousaSaeed1.pdf?t=2024-02-22T12%3A58%3A40.530Z",
                  text: "مذكرة مدني تعديل موسى السعيد - الكتاب الاول كامل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/mousaSaeedAltaamenat.pdf?t=2024-02-22T12%3A59%3A21.569Z",
                  text: "نوت موسى السعيد - التأمينات العينية",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/reemAlheyaza.pdf?t=2024-02-22T13%3A02%3A51.511Z",
                  text: "الحيازه ريم الدويش",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/reemAlrhn.pdf?t=2024-02-22T13%3A04%3A56.335Z",
                  text: "الرهن الرسمي - ريم الدويش",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/rweefAlrhn.pdf?t=2024-02-22T13%3A05%3A27.771Z",
                  text: "الرهن الرسمي - رؤى الرويح",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/fourth-year/civil/summaryCivil1.pdf?t=2024-02-22T13%3A08%3A44.378Z",
                  text: "ملخص - مدني - الكتاب الاول",
                },
              ]}
              title="مدني"
            />
          </div>
          <Footer />
        </div>
      </div>
    </PageTransitionLayout>
  );
};

export default FourthYear;
