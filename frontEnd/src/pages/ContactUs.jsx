



// import React, { useState } from "react";
// import axios from "axios";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import Footer from "../components/Footer";
// import Header from "../components/Header";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     service: "",
//     message: "",
//   });
//   const [successMessage, setSuccessMessage] = useState("");

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/contact", formData);
//       if (response.status === 201) {
//         setSuccessMessage("Response is submitted.");
//         setFormData({ name: "", email: "", service: "", message: "" }); // Reset form
//         setTimeout(() => setSuccessMessage(""), 5000); // Clear message after 3 sec
//       }
//     } catch (error) {
//       // console.error("Error submitting form", error);
//       alert("Error submitting form");
//     }
//   };

//   return (
//     <>
//     <Header/>
//       <section className="bg-[#0B3159] py-22  py-7 px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-semibold text-[#F4F7FC] uppercase tracking-wide">
//             Contact Us
//           </h2>
//           <div className="w-16 h-1 bg-[#E5A24A] mx-auto mt-2"></div>
//         </div>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Contact Form */}
//           <div className="bg-white p-6 rounded-xl shadow-md">
//             {successMessage && <p className="text-green-600 text-center mb-4">{successMessage}</p>}
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]" />
//                 <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]" />
//               </div>
//               <select name="service" value={formData.service} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]">
//                 <option value="">Select Service</option>
//                 <option value="recruitment">Recruitment Services</option>
//                 <option value="business-development">Business Development</option>
//                 <option value="ecommerce">E-commerce Services</option>
//                 <option value="virtual-assistant">Virtual Assistant</option>
//               </select>
//               <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159] h-32"></textarea>
//               <button type="submit" className="w-full bg-[#0B3159] text-white py-3 rounded-lg font-semibold hover:bg-[#4A1F75] transition duration-300">
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Contact Details */}
//           <div className="space-y-6">
//             <div className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-md">
//               <FaPhoneAlt className="text-[#0B3159] text-3xl" />
//               <div>
//                 <h3 className="text-lg font-semibold text-[#0B3159]">Call Us</h3>
//                 <p className="text-gray-600">+91 9414136598</p>
//                 <p className="text-gray-600">+91 9116007738</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-md">
//               <FaEnvelope className="text-[#0B3159] text-3xl" />
//               <div>
//                 <h3 className="text-lg font-semibold text-[#0B3159]">Message</h3>
//                 <p className="text-gray-600">info@protaskssolution.com</p>
//               </div>
//             </div>
//             <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
//               <FaMapMarkerAlt className="text-[#0B3159] text-3xl mt-1" />
//               <div>
//                 <h3 className="text-lg font-semibold text-[#0B3159]">Our Location</h3>
//                 <p className="text-gray-600"><strong>Registered Address:</strong> E-96, Road No-1 MIA Madri, Riico Near BMW Showroom Udaipur, Rajasthan 313001</p>
//               </div>
//             </div>
//           </div>
//         </div>

//            {/* Google Map Embed */}
//       <div className="max-w-7xl my-12 mx-auto">
//           <iframe
//           title="Google Map"
//           className="w-full h-96 rounded-xl shadow-lg"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.402023134175!2d73.74652997565573!3d24.575318178116518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e8aadf75bad9%3A0xb153620439a53b6c!2sEqra%20International!5e0!3m2!1sen!2sin!4v1740311752139!5m2!1sen!2sin" allowFullScreen
//           loading="lazy"></iframe>
//       </div>
//       </section>

//       <Footer/>

//     </>
//   );
// };

// export default ContactUs;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    service: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [selectedStateCode, setSelectedStateCode] = useState("");

  const API_KEY = ""; // Replace with your actual key

  useEffect(() => {
    axios
      .get("https://api.countrystatecity.in/v1/countries", {
        headers: { "X-CSCAPI-KEY": API_KEY },
      })
      .then((res) => setCountries(res.data))
      .catch((err) => console.error("Error loading countries", err));
  }, []);

  useEffect(() => {
    if (selectedCountryCode) {
      axios
        .get(`https://api.countrystatecity.in/v1/countries/${selectedCountryCode}/states`, {
          headers: { "X-CSCAPI-KEY": API_KEY },
        })
        .then((res) => setStates(res.data))
        .catch((err) => console.error("Error loading states", err));
    } else {
      setStates([]);
    }
    setSelectedStateCode("");
    setCities([]);
    setFormData((prev) => ({ ...prev, state: "", city: "" }));
  }, [selectedCountryCode]);

  useEffect(() => {
    if (selectedCountryCode && selectedStateCode) {
      axios
        .get(
          `https://api.countrystatecity.in/v1/countries/${selectedCountryCode}/states/${selectedStateCode}/cities`,
          {
            headers: { "X-CSCAPI-KEY": API_KEY },
          }
        )
        .then((res) => setCities(res.data))
        .catch((err) => console.error("Error loading cities", err));
    } else {
      setCities([]);
    }
    setFormData((prev) => ({ ...prev, city: "" }));
  }, [selectedStateCode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (e) => {
    const code = e.target.value;
    setSelectedCountryCode(code);
    const countryObj = countries.find((c) => c.iso2 === code);
    setFormData((prev) => ({ ...prev, country: countryObj?.name || "" }));
  };

  const handleStateChange = (e) => {
    const code = e.target.value;
    setSelectedStateCode(code);
    const stateObj = states.find((s) => s.iso2 === code);
    setFormData((prev) => ({ ...prev, state: stateObj?.name || "" }));
  };

  const handleCityChange = (e) => {
    const name = e.target.value;
    setFormData((prev) => ({ ...prev, city: name }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      if (res.status === 201) {
        setSuccessMessage("Response submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          state: "",
          city: "",
          service: "",
          message: "",
        });
        setSelectedCountryCode("");
        setSelectedStateCode("");
        setTimeout(() => setSuccessMessage(""), 5000);
      }
    } catch (err) {
      console.error("Submission error", err);
      alert("Error submitting form");
    }
  };

  return (
    <>
      <Header />
      <section className="bg-[#0B3159] py-20 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-white uppercase">Contact Us</h2>
          <div className="w-16 h-1 bg-[#E5A24A] mx-auto mt-2"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            {successMessage && (
              <p className="text-green-600 text-center mb-4">{successMessage}</p>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select
                  value={selectedCountryCode}
                  onChange={handleCountryChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
                >
                  <option value="">Select Country</option>
                  {countries.map((c) => (
                    <option key={c.iso2} value={c.iso2}>
                      {c.name}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedStateCode}
                  onChange={handleStateChange}
                  required
                  disabled={!states.length}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
                >
                  <option value="">Select State</option>
                  {states.map((s) => (
                    <option key={s.iso2} value={s.iso2}>
                      {s.name}
                    </option>
                  ))}
                </select>

                <select
                  value={formData.city}
                  onChange={handleCityChange}
                  required
                  disabled={!cities.length}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
                >
                  <option value="">Select City</option>
                  {cities.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
              >
                <option value="">Select Service</option>
                <option value="recruitment">Recruitment Services</option>
                <option value="business-development">Business Development</option>
                <option value="ecommerce">E-commerce Services</option>
                <option value="virtual-assistant">Virtual Assistant</option>
              </select>

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full h-28 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B3159]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#0B3159] text-white py-3 rounded-lg font-semibold hover:bg-[#4A1F75] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
              <FaPhoneAlt className="text-[#0B3159] text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p>+91 9414136598</p>
                <p>+91 9116007738</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
              <FaEnvelope className="text-[#0B3159] text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Message</h3>
                <p>info@protaskssolution.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
              <FaMapMarkerAlt className="text-[#0B3159] text-3xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Our Location</h3>
                <p>
                   E-96, Road No-1 MIA Madri, Riico Near BMW
                  Showroom Udaipur, Rajasthan 313001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="max-w-7xl my-12 mx-auto">
          <iframe
            title="Google Map"
            className="w-full h-96 rounded-xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.402023134175!2d73.74652997565573!3d24.575318178116518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e8aadf75bad9%3A0xb153620439a53b6c!2sEqra%20International!5e0!3m2!1sen!2sin!4v1740311752139!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
