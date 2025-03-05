import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import Header from '../components/Header';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: "Nikhil Gehlot",
    role: "Co-Founder",
    description:
      "With over 5+ years of experience, Nikhil co-founded ProTasks Solution to deliver innovative outsourcing solutions. His expertise is focused on improving operational efficiency, enhancing client productivity, and ensuring seamless service delivery.",
    image: "https://protaskssolution.com/wp-content/uploads/2024/10/OP-C-min-e1730285873985-2048x1634.png", // Replace with actual image path
    linkedin: "#",
  },
  {
    name: "Naved Hasan",
    role: "Co-Founder",
    description:
      "Naved brings over 6+ years of experience in the Ecommerce and automobile industries. He focuses on strategic growth, process optimization, and expanding service offerings at ProTasks Solution.",
    image: "https://protaskssolution.com/wp-content/uploads/2024/11/WhatsApp_Image_2024-11-09_at_7.20.30_PM-removebg-1.png", // Replace with actual image path
    linkedin: "#",
  },
  {
    name: "Nik O.",
    role: "Business Development Director",
    description:
      "Leading our business growth efforts, Nik specializes in building strategic partnerships and expanding market reach. With a background in sales and client relations, he plays a key role in driving success for both ProTasks Solution and its clients.",
    image: "https://protaskssolution.com/wp-content/uploads/2022/04/Attorneys-03.jpg", // Replace with actual image path
    linkedin: "#",
  },
  {
    name: "Mustafa Raza",
    role: "E-Commerce Specialist",
    description:
      "Mustafa brings a wealth of knowledge in ecommerce management, from product listing to sales optimization. His focus on improving user experience and driving sales makes him an invaluable asset to our clients.",
    image: "https://protaskssolution.com/wp-content/uploads/2022/04/Attorneys-05.jpg", // Replace with actual image path
    linkedin: "#",
  },
];

const About = () => {
  return (
    <>
      <Header/>
       <section className="bg-[#0B3159]   py-22 px-6">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-white uppercase tracking-wide">
          About Our Team
        </h2>
        <div className="w-16 h-1 bg-[#E5A24A] mx-auto mt-2"></div>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#30557D] text-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img src={member.image} alt={member.name} className="w-full h-52 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold uppercase">{member.name}</h3>
              <p className="text-[#E5A24A] font-medium mt-1">{member.role}</p>
              <div className="border-t border-gray-400 my-4"></div>
              <p className="text-gray-200 text-sm">{member.description}</p>

              {/* LinkedIn Icon */}
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                <FaLinkedin className="text-white text-2xl hover:text-[#E5A24A] transition duration-300" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default About