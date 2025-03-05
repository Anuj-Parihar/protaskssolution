import React, { useEffect, useState } from "react";
import ClientTestimonials from "../components/AppointmentSection";
import { FaLinkedin, FaUserTie, FaChartLine, FaShoppingCart, FaHeadset } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const teamMembers = [
    {
      name: "Nikhil Gehlot",
      role: "Co-Founder",
      image: "https://protaskssolution.com/wp-content/uploads/2024/10/OP-C-min-e1730285873985-2048x1634.png",
      description:
        "With over 5+ years of experience, Nikhil Co-founded ProTasks Solution to deliver innovative outsourcing solutions. His expertise is focused on improving operational efficiency, enhancing client productivity, and ensuring seamless service delivery. Nikhil is dedicated to building customized solutions that address each client’s unique needs.",
      linkedin: "#",
    },
    {
      name: "Naved Hasan",
      role: "Co-Founder",
      image: "https://protaskssolution.com/wp-content/uploads/2024/11/WhatsApp_Image_2024-11-09_at_7.20.30_PM-removebg-1.png",
      description:
        "Naved brings over 6+ years of experience in the E-commerce and automobile industries. As a Co-Founder, he focuses on strategic growth, process optimization, and expanding service offerings at ProTasks Solution. Naved’s deep industry knowledge allows him to develop solutions that drive results and foster long-term partnerships.",
      linkedin: "#",
    },
    {
      name: "Nik O.",
      role: "Business Development Director",
      image: "https://protaskssolution.com/wp-content/uploads/2022/04/Attorneys-03.jpg",
      description:
        "Leading our business growth efforts, Nik specializes in building strategic partnerships and expanding market reach. With a background in sales and client relations, he plays a key role in driving success for both ProTasks Solution and its clients.",
      linkedin: "#",
    },
    {
      name: "Mustafa Raza",
      role: "E-commerce Specialist",
      image: "https://protaskssolution.com/wp-content/uploads/2022/04/Attorneys-05.jpg",
      description:
        "Mustafa brings a wealth of knowledge in e-commerce management, from product listing to sales optimization. His focus on improving user experience and driving sales makes him an invaluable asset to our clients looking to grow their online presence.",
      linkedin: "#",
    },
  ];



 
  
  
  
  const Home = () => {
      const [counters, setCounters] = useState({
        leads: 0,
        clients: 0,
        savings: 0,
        successRate: 0,
      });

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



  return (
    <>
    <Header/>
    <section 
      className="relative  py-22  w-full h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('data:image/jpeg;base64,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')" }}>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 opacity-80">
        <div className="bg-[#2C3E50] text-white p-6 md:p-10 rounded-lg shadow-lg md:w-2/3 ml-auto">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-white pb-2">About Us</h2>
          <p className="text-lg mb-4">
            Welcome to <span className="font-semibold">ProTasks Solution</span>, your trusted partner in transforming business 
            efficiency through innovative outsourcing.
          </p>
          <p className="text-lg">
            Join us on the journey to reimagine the future of outsourcing—driving growth, unlocking potential, 
            and delivering exceptional value at every step.
          </p>
        </div>
      </div>
    </section>

    <section className="w-full bg-[#AAB4C3] pb-10">
      {/* Header Section */}
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold text-[#002147] uppercase tracking-wide relative inline-block">
          OUR SERVICES
          <span className="block w-16 h-1 bg-[#E5A24A] mx-auto mt-2"></span>
        </h2>
        <h3 className="text-xl text-[#002147] mt-2 italic font-light">
          TOGETHER WE GROW, TOGETHER WE SUCCEED
        </h3>
      </div>

      {/* Services Section */}
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {/* Service Card 1 */}
        <div className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-72 shadow-lg text-center">
          <FaUserTie className="text-[#E5A24A] text-4xl mx-auto mb-4" />
          <h3 className="font-bold text-lg">RECRUITMENT SERVICES</h3>
          <p className="text-sm mt-2">
            ProTasks Solution provides end-to-end recruitment support, ensuring
            you find the right talent quickly and efficiently.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-72 shadow-lg text-center">
          <FaChartLine className="text-[#E5A24A] text-4xl mx-auto mb-4" />
          <h3 className="font-bold text-lg">BUSINESS DEVELOPMENT</h3>
          <p className="text-sm mt-2">
            We drive business growth by identifying market opportunities and
            forming strategic partnerships.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-72 shadow-lg text-center">
          <FaShoppingCart className="text-[#E5A24A] text-4xl mx-auto mb-4" />
          <h3 className="font-bold text-lg">E-COMMERCE SERVICES</h3>
          <p className="text-sm mt-2">
            ProTasks Solution provides end-to-end eCommerce support, improving
            sales performance and customer satisfaction.
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-72 shadow-lg text-center">
          <FaHeadset className="text-[#E5A24A] text-4xl mx-auto mb-4" />
          <h3 className="font-bold text-lg">VIRTUAL ASSISTANT</h3>
          <p className="text-sm mt-2">
            Our Virtual Assistants handle emails, scheduling, data entry, and
            customer support to streamline operations.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="flex justify-center gap-10 mt-10 text-white text-center bg-[#3A5F91] py-6">
        <div>
          <h3 className="text-xl font-bold">{counters.leads.toLocaleString()}+</h3>
          <p className="text-sm">LEADS GENERATED</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{counters.clients}+</h3>
          <p className="text-sm">HAPPY CLIENTS</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{counters.savings}%</h3>
          <p className="text-sm">SAVE UPTO</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{counters.successRate}%</h3>
          <p className="text-sm">SUCCESS RATE</p>
        </div>
      </div>
    </section>



    <section className="w-full bg-[#AAB4C3] pb-10">
      {/* Header Section */}

      <div className="text-center py-12">
        <h2 className="text-4xl font-bold text-[#002147] uppercase tracking-wide relative inline-block">
        DEDICATED TEAM OF PROTASKS SOLUTION
          <span className="block w-16 h-1 bg-[#E5A24A] mx-auto mt-2"></span>
        </h2>
        <h3 className="text-xl text-[#002147] mt-2 italic font-light">
          TOGETHER WE GROW, TOGETHER WE SUCCEED
        </h3>
      </div>

      {/* Team Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-72 shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-md mx-auto mb-4"
            />
            <h3 className="font-bold text-lg text-center">{member.name}</h3>
            <p className="text-sm text-[#F4A261] text-center">{member.role}</p>
            <hr className="border-t border-gray-300 my-3" />
            <p className="text-sm">{member.description}</p>

            {/* LinkedIn Icon */}
            <div className="flex justify-center mt-4">
              <a href="#" className="text-gray-400 hover:text-[#E5A24A]">
                <FaLinkedin className="text-white text-2xl hover:text-[#E5A24A] transition duration-300" />
                </a>
            </div>
          </div>
        ))}
      </div>

    <ClientTestimonials/>

    </section>
    <Footer/>
    </>
  );
};

export default Home;
