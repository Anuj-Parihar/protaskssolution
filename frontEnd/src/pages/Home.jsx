


// import React, { useEffect, useState } from "react";
// import ClientTestimonials from "../components/AppointmentSection";
// import { FaUserTie, FaChartLine, FaShoppingCart, FaHeadset } from "react-icons/fa";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// // Industry logos
// import SoftwareLogo from "../assets/logos/software.jpg";
// import CybersecurityLogo from "../assets/logos/cybersecurity.jpg";
// import AiMlLogo from "../assets/logos/ai_ml.jpg";
// import ItServicesLogo from "../assets/logos/it_services.jpg";
// import DigitalMarketingLogo from "../assets/logos/digital_marketing.jpg";
// import StaffingLogo from "../assets/logos/staffing_agencies.jpg";

// const industryLogos = [
//   SoftwareLogo,
//   CybersecurityLogo,
//   AiMlLogo,
//   ItServicesLogo,
//   DigitalMarketingLogo,
//   StaffingLogo,
// ];

// const Home = () => {
//   const [counters, setCounters] = useState({
//     leads: 0,
//     clients: 0,
//     savings: 0,
//     successRate: 0,
//   });

//   useEffect(() => {
//     const targets = { leads: 10000, clients: 15, savings: 70, successRate: 95 };
//     const speed = 80;

//     const interval = setInterval(() => {
//       setCounters((prev) => ({
//         leads: Math.min(prev.leads + 250, targets.leads),
//         clients: Math.min(prev.clients + 1, targets.clients),
//         savings: Math.min(prev.savings + 2, targets.savings),
//         successRate: Math.min(prev.successRate + 3, targets.successRate),
//       }));

//       if (
//         counters.leads >= targets.leads &&
//         counters.clients >= targets.clients &&
//         counters.savings >= targets.savings &&
//         counters.successRate >= targets.successRate
//       ) {
//         clearInterval(interval);
//       }
//     }, speed);

//     return () => clearInterval(interval);
//   }, [counters]);

//   return (
//     <>
//       <Header />

//       {/* Hero Section */}
//       <section className="relative w-full h-screen flex items-center justify-start pl-6 md:pl-20 overflow-hidden">
//         <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
//           <source src="/Images/holding.mp4" type="video/mp4" />
//         </video>
//         <div className="absolute inset-0"></div>
//         <div className="relative z-10 bg-white/70 p-6 md:p-10 rounded-lg shadow-lg max-w-2xl text-left">
//           <h1 className="text-4xl font-extrabold text-black mb-6 leading-tight">
//             <span className="text-[#002147]">Outsource Smart, Scale Faster, Succeed Together</span>
//           </h1>
//           <p className="text-lg md:text-xl font-bold text-black mb-8">
//             Accelerate Your Business Growth with Our Expert Lead Generation & Recruitment Solutions.
//           </p>
//           <a
//             href="https://calendly.com/nikhil-gehlot-protaskssolution/30min"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-[#002147] hover:bg-[#00172f] text-white font-semibold py-3 px-6 rounded-full transition duration-300"
//           >
//             BOOK A FREE CONSULTATION
//           </a>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="w-full bg-[#AAB4C3] pb-10">
//         <div className="text-center py-12">
//           <h2 className="text-4xl font-bold text-[#002147] uppercase tracking-wide relative inline-block">
//             OUR SERVICES
//             <span className="block w-16 h-1 bg-[#E5A24A] mx-auto mt-2"></span>
//           </h2>
//           <h3 className="text-xl text-[#002147] mt-2 italic font-light">
//             TOGETHER WE GROW, TOGETHER WE SUCCEED
//           </h3>
//         </div>

//         <div className="flex flex-wrap justify-center gap-6 px-6">
//           <div className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-72 shadow-lg text-center">
//             <FaUserTie className="text-[#E5A24A] text-4xl mx-auto mb-4" />
//             <h3 className="font-bold text-lg">RECRUITMENT SERVICES</h3>
//             <p className="text-sm mt-2">
//               ProTasks Solution provides end-to-end recruitment support, ensuring
//               you find the right talent quickly and efficiently.
//             </p>
//           </div>

//           <div className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-72 shadow-lg text-center">
//             <FaChartLine className="text-[#E5A24A] text-4xl mx-auto mb-4" />
//             <h3 className="font-bold text-lg">BUSINESS DEVELOPMENT</h3>
//             <p className="text-sm mt-2">
//               We drive business growth by identifying market opportunities and
//               forming strategic partnerships.
//             </p>
//           </div>

//           <div className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-72 shadow-lg text-center">
//             <FaShoppingCart className="text-[#E5A24A] text-4xl mx-auto mb-4" />
//             <h3 className="font-bold text-lg">E-COMMERCE SERVICES</h3>
//             <p className="text-sm mt-2">
//               ProTasks Solution provides end-to-end eCommerce support, improving
//               sales performance and customer satisfaction.
//             </p>
//           </div>

//           <div className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-72 shadow-lg text-center">
//             <FaHeadset className="text-[#E5A24A] text-4xl mx-auto mb-4" />
//             <h3 className="font-bold text-lg">VIRTUAL ASSISTANT</h3>
//             <p className="text-sm mt-2">
//               Our Virtual Assistants handle emails, scheduling, data entry, and
//               customer support to streamline operations.
//             </p>
//           </div>
//         </div>

        

//         {/* Industries We Serve */}
// <div className="text-center mt-16 px-4">
//   <h2 className="text-4xl font-bold text-[#002147] uppercase tracking-wide mb-2">
//   Our Industry Focus
//   </h2>
//   <span className="block w-16 h-1 bg-[#E5A24A] mx-auto mb-6"></span>

//   {/* Scrolling logos container */}
//   <div className="relative overflow-hidden w-full py-6">
//     <div className="whitespace-nowrap flex animate-scroll-logo gap-8 hover:[animation-play-state:paused] px-8">
//       {[...industryLogos, ...industryLogos].map((logo, idx) => (
//         <div key={idx} className="flex-shrink-0 h-20 w-32 md:w-40 flex items-center justify-center bg-white rounded-lg shadow-md">
//           <img
//             src={logo}
//             alt={`Industry ${idx}`}
//             className="h-16 md:h-20 w-auto object-contain"
//           />
//         </div>
//       ))}
//     </div>
//   </div>
// </div>

// {/* Tailwind-compatible keyframes style block */}
// <style>{`
//   @keyframes scroll-logo {
//     0% { transform: translateX(0); }
//     100% { transform: translateX(-50%); }
//   }
//   .animate-scroll-logo {
//     animation: scroll-logo 30s linear infinite;
//   }
// `}</style>

//         {/* Statistics Section */}
//         <div className="flex justify-center gap-10 mt-10 text-white text-center bg-[#3A5F91] py-6">
//           <div>
//             <h3 className="text-xl font-bold">{counters.leads.toLocaleString()}+</h3>
//             <p className="text-sm">LEADS GENERATED</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold">{counters.clients}+</h3>
//             <p className="text-sm">HAPPY CLIENTS</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold">{counters.savings}%</h3>
//             <p className="text-sm">SAVE UPTO</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold">{counters.successRate}%</h3>
//             <p className="text-sm">SUCCESS RATE</p>
//           </div>
//         </div>
//       </section>

//       <ClientTestimonials />



//       <Footer />
//     </>
//   );
// };

// export default Home;




// import React, { useEffect, useState } from "react";
// import ClientTestimonials from "../components/AppointmentSection";
// import { FaUserTie, FaChartLine, FaShoppingCart, FaHeadset } from "react-icons/fa";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// // Industry logos
// import SoftwareLogo from "../assets/logos/software.jpg";
// import CybersecurityLogo from "../assets/logos/cybersecurity.jpg";
// import AiMlLogo from "../assets/logos/ai_ml.jpg";
// import ItServicesLogo from "../assets/logos/it_services.jpg";
// import DigitalMarketingLogo from "../assets/logos/digital_marketing.jpg";
// import StaffingLogo from "../assets/logos/staffing_agencies.jpg";

// const industryLogos = [
//   SoftwareLogo,
//   CybersecurityLogo,
//   AiMlLogo,
//   ItServicesLogo,
//   DigitalMarketingLogo,
//   StaffingLogo,
// ];

// const Home = () => {
//   const [counters, setCounters] = useState({
//     leads: 0,
//     clients: 0,
//     savings: 0,
//     successRate: 0,
//   });

//   const [activeIndex, setActiveIndex] = useState(null);

//   useEffect(() => {
//     const targets = { leads: 10000, clients: 15, savings: 70, successRate: 95 };
//     const speed = 80;

//     const interval = setInterval(() => {
//       setCounters((prev) => ({
//         leads: Math.min(prev.leads + 250, targets.leads),
//         clients: Math.min(prev.clients + 1, targets.clients),
//         savings: Math.min(prev.savings + 2, targets.savings),
//         successRate: Math.min(prev.successRate + 3, targets.successRate),
//       }));

//       if (
//         counters.leads >= targets.leads &&
//         counters.clients >= targets.clients &&
//         counters.savings >= targets.savings &&
//         counters.successRate >= targets.successRate
//       ) {
//         clearInterval(interval);
//       }
//     }, speed);

//     return () => clearInterval(interval);
//   }, [counters]);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <>
//       <Header />

//       {/* Hero Section */}
//       <section className="relative w-full h-screen flex items-center justify-start pl-6 md:pl-20 overflow-hidden">
//         <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
//           <source src="/Images/holding.mp4" type="video/mp4" />
//         </video>
//         <div className="absolute inset-0"></div>
//         <div className="relative z-10 bg-white/70 p-6 md:p-10 rounded-lg shadow-lg max-w-2xl text-left">
//           <h1 className="text-4xl font-extrabold text-black mb-6 leading-tight">
//             <span className="text-[#002147]">Outsource Smart, Scale Faster, Succeed Together</span>
//           </h1>
//           <p className="text-lg md:text-xl font-bold text-black mb-8">
//             Accelerate Your Business Growth with Our Expert Lead Generation & Recruitment Solutions.
//           </p>
//           <a
//             href="https://calendly.com/nikhil-gehlot-protaskssolution/30min"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-[#002147] hover:bg-[#00172f] text-white font-semibold py-3 px-6 rounded-full transition duration-300"
//           >
//             BOOK A FREE CONSULTATION
//           </a>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="w-full bg-[#AAB4C3] pb-10">
//         <div className="text-center py-12">
//           <h2 className="text-4xl font-bold text-[#002147] uppercase tracking-wide relative inline-block">
//             OUR SERVICES
//             <span className="block w-16 h-1 bg-[#E5A24A] mx-auto mt-2"></span>
//           </h2>
//           <h3 className="text-xl text-[#002147] mt-2 italic font-light">
//             TOGETHER WE GROW, TOGETHER WE SUCCEED
//           </h3>
//         </div>

//         <div className="flex flex-wrap justify-center gap-6 px-6">
//           <div className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-72 shadow-lg text-center">
//             <FaUserTie className="text-[#E5A24A] text-4xl mx-auto mb-4" />
//             <h3 className="font-bold text-lg">RECRUITMENT SERVICES</h3>
//             <p className="text-sm mt-2">
//               ProTasks Solution provides end-to-end recruitment support, ensuring
//               you find the right talent quickly and efficiently.
//             </p>
//           </div>

//           <div className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-72 shadow-lg text-center">
//             <FaChartLine className="text-[#E5A24A] text-4xl mx-auto mb-4" />
//             <h3 className="font-bold text-lg">BUSINESS DEVELOPMENT</h3>
//             <p className="text-sm mt-2">
//               We drive business growth by identifying market opportunities and
//               forming strategic partnerships.
//             </p>
//           </div>

//           <div className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-72 shadow-lg text-center">
//             <FaShoppingCart className="text-[#E5A24A] text-4xl mx-auto mb-4" />
//             <h3 className="font-bold text-lg">E-COMMERCE SERVICES</h3>
//             <p className="text-sm mt-2">
//               ProTasks Solution provides end-to-end eCommerce support, improving
//               sales performance and customer satisfaction.
//             </p>
//           </div>

//           <div className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-72 shadow-lg text-center">
//             <FaHeadset className="text-[#E5A24A] text-4xl mx-auto mb-4" />
//             <h3 className="font-bold text-lg">VIRTUAL ASSISTANT</h3>
//             <p className="text-sm mt-2">
//               Our Virtual Assistants handle emails, scheduling, data entry, and
//               customer support to streamline operations.
//             </p>
//           </div>
//         </div>

//         {/* Industries We Serve */}
//         <div className="text-center mt-16 px-4">
//           <h2 className="text-4xl font-bold text-[#002147] uppercase tracking-wide mb-2">
//             Our Industry Focus
//           </h2>
//           <span className="block w-16 h-1 bg-[#E5A24A] mx-auto mb-6"></span>

//           {/* Scrolling logos container */}
//           <div className="relative overflow-hidden w-full py-6">
//             <div className="whitespace-nowrap flex animate-scroll-logo gap-8 hover:[animation-play-state:paused] px-8">
//               {[...industryLogos, ...industryLogos].map((logo, idx) => (
//                 <div key={idx} className="flex-shrink-0 h-20 w-32 md:w-40 flex items-center justify-center bg-white rounded-lg shadow-md">
//                   <img
//                     src={logo}
//                     alt={`Industry ${idx}`}
//                     className="h-16 md:h-20 w-auto object-contain"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Tailwind-compatible keyframes style block */}
//         <style>{`
//           @keyframes scroll-logo {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .animate-scroll-logo {
//             animation: scroll-logo 30s linear infinite;
//           }
//         `}</style>

//         {/* Statistics Section */}
//         <div className="flex justify-center gap-10 mt-10 text-white text-center bg-[#3A5F91] py-6">
//           <div>
//             <h3 className="text-xl font-bold">{counters.leads.toLocaleString()}+</h3>
//             <p className="text-sm">LEADS GENERATED</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold">{counters.clients}+</h3>
//             <p className="text-sm">HAPPY CLIENTS</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold">{counters.savings}%</h3>
//             <p className="text-sm">SAVE UPTO</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold">{counters.successRate}%</h3>
//             <p className="text-sm">SUCCESS RATE</p>
//           </div>
//         </div>
//       </section>

//       {/* Client Testimonials Section */}
//       <ClientTestimonials />

//       {/* Why Choose ProTasks Section */}
//       <section className="bg-[#AAB4C3] py-12 px-6 md:px-20">
//         <div className="text-center mb-8">
//           <h2 className="text-4xl font-bold text-[#002147] uppercase tracking-wide">
//             Why Choose ProTasks Solution?
//           </h2>
//           <span className="block w-16 h-1 bg-[#E5A24A] mx-auto mt-4"></span>
//         </div>

//         {/* Accordion */}
//         <div className="max-w-4xl mx-auto space-y-4">
//           {[
//             {
//               title: "Tailored Solutions for Every Business",
//               content: "At ProTasks Solution, we understand that every business is unique. Our strategies and services are customized to meet your specific goals, ensuring maximum efficiency and growth.",
//             },
//             {
//               title: "Expert Team with Proven Results",
//               content: "Our team consists of industry experts who bring extensive experience and a track record of success, delivering measurable outcomes that drive your business forward.",
//             },
//             {
//               title: "Commitment to Long-Term Partnerships",
//               content: "We believe in building lasting relationships with our clients. Your success is our priority, and we work closely with you every step of the way to ensure sustained growth.",
//             },
//           ].map((item, idx) => (
//             <div key={idx} className="border border-[#002147] rounded-lg">
//               <button
//                 onClick={() => toggleAccordion(idx)}
//                 className="w-full text-left p-4 font-semibold text-[#002147] flex justify-between items-center focus:outline-none"
//               >
//                 {item.title}
//                 <span className="text-[#002147]  text-2xl">{activeIndex === idx ? '-' : '+'}</span>
//               </button>
//               {activeIndex === idx && (
//                 <div className="p-4 text-gray-700 bg-white rounded-b-lg">
//                   {item.content}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import ClientTestimonials from "../components/AppointmentSection";
import { FaUserTie, FaChartLine, FaShoppingCart, FaHeadset } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Industry logos
import SoftwareLogo from "../assets/logos/software.jpg";
import CybersecurityLogo from "../assets/logos/cybersecurity.jpg";
import AiMlLogo from "../assets/logos/ai_ml.jpg";
import ItServicesLogo from "../assets/logos/it_services.jpg";
import DigitalMarketingLogo from "../assets/logos/digital_marketing.jpg";
import StaffingLogo from "../assets/logos/staffing_agencies.jpg";
import GrowthBanner from "../components/GrowthBanner";

const industryLogos = [
  { img: SoftwareLogo, title: "Software" },
  { img: CybersecurityLogo, title: "Cybersecurity" },
  { img: AiMlLogo, title: "AI/ML" },
  { img: ItServicesLogo, title: "IT Services" },
  { img: DigitalMarketingLogo, title: "Digital Marketing" },
  { img: StaffingLogo, title: "Staffing Agencies" },
];

const Home = () => {
  const [counters, setCounters] = useState({
    leads: 0,
    clients: 0,
    savings: 0,
    successRate: 0,
  });

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const targets = { leads: 10000, clients: 15, savings: 70, successRate: 95 };
    const speed = 80;

    const interval = setInterval(() => {
      setCounters((prev) => ({
        leads: Math.min(prev.leads + 250, targets.leads),
        clients: Math.min(prev.clients + 1, targets.clients),
        savings: Math.min(prev.savings + 2, targets.savings),
        successRate: Math.min(prev.successRate + 3, targets.successRate),
      }));

      if (
        counters.leads >= targets.leads &&
        counters.clients >= targets.clients &&
        counters.savings >= targets.savings &&
        counters.successRate >= targets.successRate
      ) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [counters]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-start pl-6 md:pl-20 overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="/Images/holding.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0"></div>
        <div className="relative z-10 bg-white/70 p-6 md:p-10 rounded-lg shadow-lg max-w-2xl text-left">
          <h1 className="text-4xl font-extrabold text-black mb-6 leading-tight">
            <span className="text-[#002147]">Outsource Smart, Scale Faster, Succeed Together</span>
          </h1>
          <p className="text-lg md:text-xl font-bold text-black mb-8">
            Accelerate Your Business Growth with Our Expert Lead Generation & Recruitment Solutions.
          </p>
          <a
            href="https://calendly.com/nikhil-gehlot-protaskssolution/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#002147] hover:bg-[#00172f] text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            BOOK A FREE CONSULTATION
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-[#AAB4C3] pb-10">
        <div className="text-center py-12">
          <h2 className="text-4xl font-bold text-[#002147] uppercase tracking-wide relative inline-block">
            OUR SERVICES
            <span className="block w-16 h-1 bg-[#E5A24A] mx-auto mt-2"></span>
          </h2>
          <h3 className="text-xl text-[#002147] mt-2 italic font-light">
            TOGETHER WE GROW, TOGETHER WE SUCCEED
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-6 px-6">
          {[
            { icon: <FaUserTie />, title: "RECRUITMENT SERVICES", desc: "ProTasks Solution provides end-to-end recruitment support, ensuring you find the right talent quickly and efficiently." },
            { icon: <FaChartLine />, title: "BUSINESS DEVELOPMENT", desc: "We drive business growth by identifying market opportunities and forming strategic partnerships." },
            { icon: <FaShoppingCart />, title: "E-COMMERCE SERVICES", desc: "ProTasks Solution provides end-to-end eCommerce support, improving sales performance and customer satisfaction." },
            { icon: <FaHeadset />, title: "VIRTUAL ASSISTANT", desc: "Our Virtual Assistants handle emails, scheduling, data entry, and customer support to streamline operations." },
          ].map((service, idx) => (
            <div key={idx} className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-72 shadow-lg text-center">
              <div className="text-[#E5A24A] text-4xl mx-auto mb-4">{service.icon}</div>
              <h3 className="font-bold text-lg">{service.title}</h3>
              <p className="text-sm mt-2">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="text-center mt-16 px-4">
          <h2 className="text-4xl font-bold text-[#002147] uppercase tracking-wide mb-2">
            Our Industry Focus
          </h2>
          <span className="block w-16 h-1 bg-[#E5A24A] mx-auto mb-6"></span>

          {/* Scrolling logos container */}
          <div className="relative overflow-hidden w-full py-6">
            <div className="whitespace-nowrap flex animate-scroll-logo gap-8 hover:[animation-play-state:paused] px-8">
              {[...industryLogos, ...industryLogos].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 h-44 w-40 md:w-48 flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4"
                >
                  <img
                    src={logo.img}
                    alt={logo.title}
                    className="h-24 md:h-28 w-auto object-contain mb-2"
                  />
                  <h4 className="text-[#002147] font-semibold text-sm md:text-base text-center">
                    {logo.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tailwind-compatible keyframes style block */}
        <style>{`
          @keyframes scroll-logo {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-logo {
            animation: scroll-logo 30s linear infinite;
          }
        `}</style>

        {/* Statistics Section */}
        <div className="flex flex-wrap justify-center gap-10 mt-10 text-white text-center bg-[#3A5F91] py-6">
          {[
            { count: counters.leads.toLocaleString(), label: "LEADS GENERATED" },
            { count: counters.clients, label: "HAPPY CLIENTS" },
            { count: `${counters.savings}%`, label: "SAVE UPTO" },
            { count: `${counters.successRate}%`, label: "SUCCESS RATE" },
          ].map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold">{stat.count}+</h3>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials Section */}
      <ClientTestimonials />

      {/* Why Choose ProTasks Section */}
      <section className="bg-[#AAB4C3] py-12 px-6 md:px-20">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#002147] uppercase tracking-wide">
            Why Choose ProTasks Solution?
          </h2>
          <span className="block w-16 h-1 bg-[#E5A24A] mx-auto mt-4"></span>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              title: "Tailored Solutions for Every Business",
              content: "At ProTasks Solution, we understand that every business is unique. Our strategies and services are customized to meet your specific goals, ensuring maximum efficiency and growth.",
            },
            {
              title: "Expert Team with Proven Results",
              content: "Our team consists of industry experts who bring extensive experience and a track record of success, delivering measurable outcomes that drive your business forward.",
            },
            {
              title: "Commitment to Long-Term Partnerships",
              content: "We believe in building lasting relationships with our clients. Your success is our priority, and we work closely with you every step of the way to ensure sustained growth.",
            },
          ].map((item, idx) => (
            <div key={idx} className="border border-[#002147] rounded-lg">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full text-left p-4 font-semibold text-[#002147] flex justify-between items-center focus:outline-none"
              >
                {item.title}
                <span className="text-[#002147] text-2xl">{activeIndex === idx ? '-' : '+'}</span>
              </button>
              {activeIndex === idx && (
                <div className="p-4 text-gray-700 bg-white rounded-b-lg">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      
      <GrowthBanner/>
      <Footer />
    </>
  );
};

export default Home;
