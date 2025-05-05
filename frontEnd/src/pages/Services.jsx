
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
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      <Footer />
    </>
  );
};

export default Services;



