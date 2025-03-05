// import React from 'react'
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// const services = [
//     {
//       title: "Recruitment Services",
//       description:
//         "ProTasks Solution provides end-to-end recruitment support, from sourcing candidates and screening resumes to managing the hiring process. We ensure you find the right talent quickly and efficiently, matching candidates to your specific organizational needs.",
//       image: "https://protaskssolution.com/wp-content/uploads/2022/04/Rec5.jpg", // Replace with actual image path
//     },
//     {
//       title: "Business Development",
//       description:
//         "At ProTasks Solution, we drive business growth by identifying new market opportunities and forming strategic partnerships. Our team supports lead generation, client acquisition, and market expansion, helping your business achieve measurable success.",
//       image: "https://protaskssolution.com/wp-content/uploads/2022/04/BD1.jpg", // Replace with actual image path
//     },
//     {
//       title: "E-commerce Services",
//       description:
//         "ProTasks Solution provides end-to-end eCommerce support, from managing product listings and customer service to order processing. We help you streamline your online store operations, improving both sales performance and customer satisfaction.",
//       image: "https://protaskssolution.com/wp-content/uploads/2024/11/Ecomm-23-1.jpg", // Replace with actual image path
//     },
//     {
//       title: "Virtual Assistant",
//       description:
//         "Our Virtual Assistant services are designed to streamline your daily operations, from administrative tasks to customer support. We manage your emails, schedule appointments, handle data entry, and provide efficient, reliable assistance, helping you focus on core business activities.",
//       image: "https://protaskssolution.com/wp-content/uploads/2022/04/VA2.jpg", // Replace with actual image path
//     },
//   ];

// const Services = () => {
//   return (
//     <>
//     <Header/>
//      <section className="bg-[#0B3159] py-22  px-6">
//       {/* Section Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-semibold text-white uppercase tracking-wide">
//           Our Services
//         </h2>
//         <div className="w-16 h-1 bg-[#E5A24A] mx-auto mt-2"></div>
//       </div>

//       {/* Services Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
//           >
//             <img src={service.image} alt={service.title} className="w-full h-52 object-cover" />
//             <div className="p-6 text-center">
//               <h3 className="text-xl font-semibold text-[#0B3159] uppercase">{service.title}</h3>
//               <p className="text-gray-600 mt-3 text-sm">{service.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>

//     <Footer/>

//     </>
//   )
// }

// export default Services


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
  {
    title: "E-commerce Services",
    key: "EcommerceServices",
    image: "https://protaskssolution.com/wp-content/uploads/2024/11/Ecomm-23-1.jpg",
  },
  {
    title: "Virtual Assistant",
    key: "VirtualAssistant",
    image: "https://protaskssolution.com/wp-content/uploads/2022/04/VA2.jpg",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="bg-[#0B3159] py-22 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white uppercase tracking-wide">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-[#E5A24A] mx-auto mt-2"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => navigate(`/service/${service.key}`)}
            >
              <img src={service.image} alt={service.title} className="w-full h-52 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#0B3159] uppercase">{service.title}</h3>
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
