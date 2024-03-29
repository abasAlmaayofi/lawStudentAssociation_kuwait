import React from "react";
import Background from "../assets/background.jpg";
import File from "@/components/file.component";
import Header from "@/components/header.component";
import Footer from "@/components/footer.component";
import { LuDiamond } from "react-icons/lu";
import PageTransitionLayout from "@/components/pageTransitionLayout.component";
import { RiNumber1 } from "react-icons/ri";

const FirstYear = () => {
  return (
    <PageTransitionLayout>
      <div className="relative w-screen h-auto">
        <img
          src={Background}
          alt="kuwait-university-collage-of-law"
          className="w-full md:h-[1000px] h-[1460px] object-fit"
        />
        <div className="absolute top-0 w-screen h-full  bg-gray-200/50 ">
          <div className="border-b-4 border-double border-[#3384c3]/90 pb-12">
            <Header />
            <p className="text-[#3384c3] mt-12  w-fit mx-auto h-4 md:text-5xl font-vexa text-[25px] bg-[#f2cc3f]  md:text-right text-center leading-relaxed mb-6 bg-opacity-70">
              <span className="relative -top-5">الفرقة الدراسية الأولي </span>
              <span className="w-full flex justify-center relative -top-2">
                <RiNumber1
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
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/test/test2018.pdf?t=2024-02-22T13%3A17%3A04.517Z",
                  text: "اختبارات سابقة للفرقة الاولى ٢٠١٨ - ٢٠١٩",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/test/test2021.pdf?t=2024-02-22T13%3A17%3A35.647Z",
                  text: "اختبارات سابقة للفرقة الأولى ٢٠٢١ - ٢٠٢٢",
                },
              ]}
              title="اختبارات فاينل سابقة"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/dstory/arwaAlwafi.pdf?t=2024-02-17T22%3A11%3A27.413Z",
                  text: "دستوري اروى اللافي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/dstory/ayaGallaf.pdf?t=2024-02-17T22%3A12%3A31.249Z",
                  text: "تنويت-د.محمد الفيلي-ايه القلاف",
                },
                // {
                //   link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/dstory/demaAlajaji.pdf?t=2024-02-17T22%3A13%3A21.296Z",
                //   text: "نوت ديما العجاجي",
                // },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/dstory/husianManee.pdf?t=2024-02-17T22%3A13%3A54.371Z",
                  text: "نوت حسين الميع ",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/dstory/mohammedIbrahem.pdf?t=2024-02-17T22%3A14%3A33.281Z",
                  text: "دستوري مذكرة محمد ابراهيم ",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/dstory/aliAlsayeq.pdf?t=2024-02-22T18%3A16%3A41.532Z",
                  text: "مذكرة دستوري علي الصايغ",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/dstory/brak1.pdf?t=2024-02-22T18%3A18%3A21.677Z",
                  text: "دستوري الباب الاول-براك الحمد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/dstory/brakAlhamd3.pdf?t=2024-02-22T18%3A18%3A58.730Z",
                  text: "دستوري الباب الثالث - براك الحمد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/dstory/revisionDestory.pdf?t=2024-02-22T18%3A19%3A47.571Z",
                  text: "مراجعه دستوري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/dstory/sarahAlsayeq.pdf?t=2024-02-22T18%3A20%3A11.943Z",
                  text: "مذكرة قانون دستوري سارة الفضلي",
                },
              ]}
              title="قانون دستوري"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/research/hiaAlsaih.pdf?t=2024-02-17T23%3A37%3A09.483Z",
                  text: "أساسيات البحث العلمي أ. هيا السابج",
                },
              ]}
              title="قاعة بحث (١)"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/history/saifRabah.docx?t=2024-02-19T03%3A22%3A11.413Z",
                  text: "سيف رباح - تاريخ القانون الفصل الثاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/history/saifRabah.pdf?t=2024-02-19T03%3A22%3A46.842Z",
                  text: "تاريخ القانون نوت سيف رباح ",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/history/reemAlmfreh.pdf?t=2024-02-19T03%3A23%3A17.426Z",
                  text: "نوت ريم المفرح",
                },
              ]}
              title="تاريخ قانون"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/assol/Al-HilaliBookTwo.pdf?t=2024-02-17T23%3A40%3A43.456Z",
                  text: "مذكرة الهلالي لنظرية الحق - الكتاب الثاني",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/assol/Al-HilaliRightBook%20one.pdf?t=2024-02-17T23%3A41%3A24.984Z",
                  text: "مذكرة الهلالي لأصول قانون - الكتاب الاول",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/assol/ManarAlBarazi.pdf?t=2024-02-17T23%3A41%3A58.306Z",
                  text: "مراجعه اصول اعداد منار البرازي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/assol/Memorandum%20on%20the%20principles%20of%20law,%20Book%20One%20-%20Ahmed%20Al-Ali.pdf?t=2024-02-17T23%3A42%3A39.419Z",
                  text: "مذكرة اصول قانون الكتاب الاول - احمد العلي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/assol/Note%20A.%20Ahmed%20Al-Fahd.pdf?t=2024-02-17T23%3A43%3A40.837Z",
                  text: "نوت أ. أحمد الفهد ",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/assol/Note%20on%20the%20principles%20of%20the%20law,%20Book%20Two%20-%20Muhammad%20Al-Fadl.pdf?t=2024-02-17T23%3A44%3A37.071Z",
                  text: "مذكرة أصول قانون الكتاب الثاني - محمد الفضل",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/assol/samah.pdf?t=2024-02-22T18%3A09%3A07.795Z",
                  text: "اصول من ١ الى ٢٦٦",
                },
              ]}
              title="اصول قانون"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/human/amerAlShamery.pdf?t=2024-02-19T03%3A24%3A36.104Z",
                  text: "حقوق انسان عمر الشمري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/human/generalMemorem.pdf?t=2024-02-19T03%3A24%3A50.439Z",
                  text: "مذكرة حقوق انسان",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/human/khlfAldaas.pdf?t=2024-02-19T03%3A25%3A11.022Z",
                  text: "القانون الدولي لحقوق الانسان - خلف الدعاس ",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/human/zahraAlali.pdf?t=2024-02-19T03%3A25%3A37.559Z",
                  text: "تنويت حقوق انسان - زهراء العلي",
                },
              ]}
              title="حقوق انسان"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/criminology/ShahadSaeed.pdf?t=2024-02-17T23%3A37%3A48.188Z",
                  text: "تنويت علم اجرام شهد سعيد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/criminology/badeeAlam.pdf?t=2024-02-17T23%3A38%3A34.436Z",
                  text: "بادي_علم اجرامpdf",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/criminology/reemKaram.pdf?t=2024-02-17T23%3A39%3A05.501Z",
                  text: "علم اجرام - ريم كرم",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/criminology/scienceOfCriminolologyAnd.pdf?t=2024-02-17T23%3A39%3A36.732Z",
                  text: "نوت علم الاجرام والعقاب كاملاً",
                },
              ]}
              title="علم الاجرام"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/economy/barakAlhamad1.pdf?t=2024-02-19T03%3A26%3A51.886Z",
                  text: "اقتصاد (القسم الاول) -  نوت براك الحمد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/economy/barakAlhamad2.pdf",
                  text: "اقتصاد (القسم الثاني) - نوت براك الحمد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/economy/omarAlshamery.pdf?t=2024-02-19T03%3A27%3A25.475Z",
                  text: "اقتصاد عمر الشمري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/economy/safaDashti.pdf?t=2024-02-19T03%3A28%3A01.622Z",
                  text: "مبادئ  الاقتصاد {صفا دشتي}",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/economy/taif.pdf?t=2024-02-19T03%3A28%3A26.908Z",
                  text: "مبادئ الاقتصاد-طيف",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/economy/aliAlsayeg.pdf?t=2024-02-22T18%3A34%3A38.832Z",
                  text: "الاقتصاد الكويتي والنظام التعاوني علي الصايغ",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/economy/fatimaDashti.pdf?t=2024-02-22T18%3A35%3A12.283Z",
                  text: "محاضرات مقرر مبادئ الاقتصاد السياسي للدكتوره فاطمة دشتي ١",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/economy/fatimaDashti2.pdf?t=2024-02-22T18%3A35%3A51.504Z",
                  text: "محاضرات مقرر مبادئ الاقتصاد السياسي للدكتوره فاطمة دشتي ٢",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/economy/fatimaDashti3.pdf?t=2024-02-22T18%3A36%3A19.767Z",
                  text: "محاضرات لمقرر الاقتصاد السياسي للدكتوره فاطمة دشتي ٣",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/economy/fatimaDashti4.pdf?t=2024-02-22T18%3A36%3A48.785Z",
                  text: "محاضرات لمقرر الاقتصاد السياسي للدكتوره فاطمة دشتي ٤",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/economy/husain.pdf?t=2024-02-22T18%3A37%3A12.095Z",
                  text: "مفاهيم عامة لعلم الاقتصاد حسين فهد العجمي",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/economy/midtern2.pdf?t=2024-02-22T18%3A37%3A57.271Z",
                  text: "الميدتيرم الثاني اقتصاد",
                },
              ]}
              title="مبادئ اقتصاد"
            />
            <File
              links={[
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/Sharia/barakAlhamad1.pdf?t=2024-02-19T03%3A28%3A59.188Z",
                  text: "مدخل شريعه الفصل الاول - نوت براك الحمد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/Sharia/barakAlhamad2.pdf?t=2024-02-19T03%3A30%3A10.546Z",
                  text: "مدخل الشريعة الفصل الثاني - نوت براك الحمد",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/Sharia/omerAlshameri.pdf?t=2024-02-19T03%3A30%3A44.186Z",
                  text: "نوت عمر الشمري",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/Sharia/slmaAshkanani110_200.pdf?t=2024-02-19T03%3A30%3A57.854Z",
                  text: "تكملة لمذكرة الفقه الاسلامي ص١١٣ - ص٢٠٠ ",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/Sharia/slmaAshkanani1_110.pdf?t=2024-02-19T03%3A31%3A35.348Z",
                  text: "مذكرة الشريعة.ص١ - ص١١٠",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/Sharia/slmaAshkanani212_271.pdf?t=2024-02-19T03%3A32%3A05.502Z",
                  text: "شريعة ٢١٢ لي ٢٧١",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/Sharia/converted.pdf?t=2024-02-22T18%3A42%3A12.028Z",
                  text: "الشريعة-converted",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/Sharia/samah1-200.pdf?t=2024-02-22T18%3A42%3A33.103Z",
                  text: "شريعة ١ الى ٢٠٠ - سماح رضوان",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/Sharia/samah253.pdf?t=2024-02-22T18%3A43%3A09.578Z",
                  text: "شريعة ٢٠٠ الى ٢٥٣ - سماح رضوان",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/Sharia/test.pdf?t=2024-02-22T18%3A43%3A56.743Z",
                  text: "نماذج إختبارات شريعة",
                },
                {
                  link: "https://ctfbafebksoayjgumfsw.supabase.co/storage/v1/object/public/main_lsaku/Sharia/oqabAlmutairi.pdf?t=2024-02-27T17%3A52%3A00.365Z",
                  text: "نوت شريعة - عقاب المطيري",
                },
              ]}
              title="مدخل الشريعة"
            />
          </div>
          <Footer />
        </div>
      </div>
    </PageTransitionLayout>
  );
};

export default FirstYear;
