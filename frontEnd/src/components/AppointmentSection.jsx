import React from "react";

const testimonials = [
  {
    name: "Jack Sannons",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZAnvcyMxoOnmcm54BwRhXXIyP42TlHRk69g&s",
    feedback:
      "We have been consistently impressed with ProTasks Solution's ability to deliver high-quality work within tight deadlines. Their professionalism and expertise make them a trusted partner for our company.",
  },
  {
    name: "Emily Rose",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZAnvcyMxoOnmcm54BwRhXXIyP42TlHRk69g&s",
    feedback:
      "ProTasks Solution provided us with top-notch outsourcing services that have greatly enhanced our business processes. Their commitment to quality and customer satisfaction is truly commendable.",
  },
  {
    name: "Edoardo B.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZAnvcyMxoOnmcm54BwRhXXIyP42TlHRk69g&s",
    feedback:
      "ProTasks is a great company to work with. They delivered our project with the highest quality and in a timely manner. Highly recommend ProTasks Solution for their exceptional service and professionalism.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-[#AAB4C3] pb-10">
      

    <div className="text-center py-12">
        <h2 className="text-4xl font-bold text-[#002147] uppercase tracking-wide relative inline-block">
            WHAT OUR CLIENTS SAY
            <span className="block w-16 h-1 bg-[#E5A24A] mx-auto mt-2"></span>
        </h2>
    </div>

      {/* Testimonials Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#002147] to-[#3A5F91] text-white p-6 rounded-lg w-80 shadow-lg"
          >
            <p className="text-sm italic">"{testimonial.feedback}"</p>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <h3 className="font-bold">{testimonial.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// const AppointmentSection = () => {
//   return (
//     <section className="w-full bg-[#AAB4C3] pb-10">
      
//       <div className="text-center py-12">
//         <h2 className="text-4xl font-bold text-[#002147] uppercase tracking-wide relative inline-block">
//         BOOK AN APPOINTMENT
//           <span className="block w-16 h-1 bg-[#E5A24A] mx-auto mt-2"></span>
//         </h2>
//       </div>

//       {/* Google Map */}
//       <div className="flex justify-center px-6">
//       <iframe
//           title="Google Map"
//           className="w-full h-96 rounded-xl shadow-lg"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.402023134175!2d73.74652997565573!3d24.575318178116518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e8aadf75bad9%3A0xb153620439a53b6c!2sEqra%20International!5e0!3m2!1sen!2sin!4v1740311752139!5m2!1sen!2sin" allowFullScreen
//           loading="lazy"></iframe>
//       </div>
//     </section>
//   );
// };

const ClientTestimonials = () => {
  return (
    <>
      <TestimonialsSection />
      {/* <AppointmentSection /> */}
    </>
  );
};

export default ClientTestimonials;
