
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const services = [
//   {
//     title: "Recruitment Services",
//     key: "RecruitmentServices",
//     image: "https://protaskssolution.com/wp-content/uploads/2022/04/Rec5.jpg",
//   },
//   {
//     title: "Business Development",
//     key: "BusinessDevelopment",
//     image: "https://protaskssolution.com/wp-content/uploads/2022/04/BD1.jpg",
//   },
//   {
//     title: "E-commerce Services",
//     key: "EcommerceServices",
//     image: "https://protaskssolution.com/wp-content/uploads/2024/11/Ecomm-23-1.jpg",
//   },
//   {
//     title: "Virtual Assistant",
//     key: "VirtualAssistant",
//     image: "https://protaskssolution.com/wp-content/uploads/2022/04/VA2.jpg",
//   },
// ];

// const Services = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <Header />
//       <section className="bg-[#0B3159] py-22 px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-semibold text-white uppercase tracking-wide">
//             Our Services
//           </h2>
//           <div className="w-16 h-1 bg-[#E5A24A] mx-auto mt-2"></div>
//         </div>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
//               onClick={() => navigate(`/service/${service.key}`)}
//             >
//               <img src={service.image} alt={service.title} className="w-full h-52 object-cover" />
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-semibold text-[#0B3159] uppercase">{service.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Services;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppointmentSection from '../components/AppointmentSection';
import {
 FaWhatsapp,
  FaEnvelope, FaPhone, FaPlus, FaTimes
} from "react-icons/fa";
const services = [
  {
    title: "Recruitment Services",
    key: "RecruitmentServices",
    image: "https://protaskssolution.com/wp-content/uploads/2022/04/Rec5.jpg",
  },
  {
    title: "Business Development",
    key: "BusinessDevelopment",
    image: "https://protaskssolution.com/wp-content/uploads/2022/04/BD1.jpg",
  },
  // {
  //   title: "E-commerce Services",
  //   key: "EcommerceServices",
  //   image: "https://protaskssolution.com/wp-content/uploads/2024/11/Ecomm-23-1.jpg",
  // },
  // {
  //   title: "Virtual Assistant",
  //   key: "VirtualAssistant",
  //   image: "https://protaskssolution.com/wp-content/uploads/2022/04/VA2.jpg",
  // },
];

const Services = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
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
      <section className="bg-[#0B3159] py-20 px-4 md:px-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-[#E5A24A] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className=" pl-93  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-transform  duration-300 transform hover:-translate-y-2 hover:scale-[1.03] group cursor-pointer "
              onClick={() => navigate(`/service/${service.key}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center bg-white">
                <h3 className="text-lg md:text-xl font-semibold text-[#0B3159] uppercase tracking-wide">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="flex flex-wrap justify-center gap-10  text-white text-center bg-[#3A5F91]  py-6">
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

      <AppointmentSection/>
      <Footer />

      {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
              {isOpen && (
                <div className="flex flex-col items-end gap-3">
                  <a href="https://wa.me/your-number" target="_blank" className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 transition">
                    <FaWhatsapp size={20} />
                  </a>
                  <a href="mailto:your@email.com" className="bg-blue-500 p-3 rounded-full text-white shadow-lg hover:bg-blue-600 transition">
                    <FaEnvelope size={20} />
                  </a>
                  <a href="tel:+1234567890" className="bg-red-500 p-3 rounded-full text-white shadow-lg hover:bg-red-600 transition">
                    <FaPhone size={20} />
                  </a>
                </div>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#002147] text-white p-4 rounded-full shadow-lg hover:bg-[#00172f] transition"
              >
                {isOpen ? <FaTimes size={20} /> : <FaPlus size={20} />}
              </button>
            </div>

    </>
  );
};

export default Services;



