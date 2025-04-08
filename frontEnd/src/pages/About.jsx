// import React from 'react'
// import { FaLinkedin } from "react-icons/fa";
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const teamMembers = [
//   {
//     name: "Nikhil Gehlot",
//     role: "Co-Founder",
//     description:
//       "With over 5+ years of experience, Nikhil co-founded ProTasks Solution to deliver innovative outsourcing solutions. His expertise is focused on improving operational efficiency, enhancing client productivity, and ensuring seamless service delivery.",
//     image: "https://protaskssolution.com/wp-content/uploads/2024/10/OP-C-min-e1730285873985-2048x1634.png", // Replace with actual image path
//     linkedin: "#",
//   },
//   {
//     name: "Naved Hasan",
//     role: "Co-Founder",
//     description:
//       "Naved brings over 6+ years of experience in the Ecommerce and automobile industries. He focuses on strategic growth, process optimization, and expanding service offerings at ProTasks Solution.",
//     image: "https://protaskssolution.com/wp-content/uploads/2024/11/WhatsApp_Image_2024-11-09_at_7.20.30_PM-removebg-1.png", // Replace with actual image path
//     linkedin: "#",
//   },
  
// ];

// const About = () => {
//   return (
//     <>
//       <Header/>
//        <section className="bg-[#0B3159]   py-22 px-6">
//       {/* Section Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-semibold text-white uppercase tracking-wide">
//         Meet our Founders 
//         </h2>
//         <div className="w-16 h-1 bg-[#E5A24A] mx-auto mt-2"></div>
//       </div>

//       {/* Team Members Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8">
//         {teamMembers.map((member, index) => (
//           <div
//             key={index}
//             className="bg-[#30557D] text-white rounded-xl overflow-hidden  shadow-lg transform hover:scale-105 transition duration-300"
//           >
//             <img src={member.image} alt={member.name} className="w-full h-52 object-cover" />
//             <div className="p-6 text-center">
//               <h3 className="text-xl font-semibold uppercase">{member.name}</h3>
//               <p className="text-[#E5A24A] font-medium mt-1">{member.role}</p>
//               <div className="border-t border-gray-400 my-4"></div>
//               <p className="text-gray-200 text-sm">{member.description}</p>

//               {/* LinkedIn Icon */}
//               <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
//                 <FaLinkedin className="text-white text-2xl hover:text-[#E5A24A] transition duration-300" />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//     <Footer/>
//     </>
//   )
// }

// export default About
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import Header from '../components/Header';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: "Nikhil Gehlot",
    role: "Co-Founder",
    description:
      "With over 5+ years of experience, Nikhil co-founded ProTasks Solution to deliver innovative outsourcing solutions. His expertise is focused on improving operational efficiency, enhancing client productivity, and ensuring seamless service delivery.",
    image: "https://protaskssolution.com/wp-content/uploads/2024/10/OP-C-min-e1730285873985-2048x1634.png",
    linkedin: "#",
  },
  {
    name: "Naved Hasan",
    role: "Co-Founder",
    description:
      "Naved brings over 6+ years of experience in the Ecommerce and automobile industries. He focuses on strategic growth, process optimization, and expanding service offerings at ProTasks Solution.",
    image: "https://protaskssolution.com/wp-content/uploads/2024/11/WhatsApp_Image_2024-11-09_at_7.20.30_PM-removebg-1.png",
    linkedin: "#",
  },
];

const About = () => {
  return (
    <>
      <Header />
      <section className="bg-[#0B3159] min-h-screen flex  flex-col justify-center items-center px-4 py-12">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl mt-6 font-bold text-white uppercase tracking-wide">
            Meet Our Founders
          </h2>
          <div className="w-20 h-1 bg-[#E5A24A] mx-auto mt-4"></div>
        </div>

        {/* Centered Team Members */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 max-w-5xl w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#30557D] text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full sm:w-90 flex flex-col"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold uppercase">{member.name}</h3>
                  <p className="text-[#E5A24A] font-medium mt-2">{member.role}</p>
                  <div className="border-t border-gray-400 my-4"></div>
                  <p className="text-gray-200 text-sm leading-relaxed">{member.description}</p>
                </div>

                {/* LinkedIn Icon */}
                <div className="mt-6">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <FaLinkedin className="text-white text-2xl hover:text-[#E5A24A] transition duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
