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
      style={{ backgroundImage: "url('https://tophinhanhdep.com/wp-content/uploads/2021/10/Business-Wallpapers.jpg')" }}>
      
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
