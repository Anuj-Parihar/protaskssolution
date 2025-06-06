

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import HeaderAdmin from "./HeaderAdmin";
// import Footer from "../components/Footer";

// const Response = () => {
//   const [responses, setResponses] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/contact")
//       .then((res) => setResponses(res.data))
//       .catch((err) => console.error("Error fetching responses", err));
//   }, []);

//   return (
//     <>
//     <HeaderAdmin/>
//     <div className="max-w-7xl  mx-auto p-6">
//       <h2 className="text-3xl my-22 font-semibold text-[#0B3159] text-center mb-6">
//         All Responses
//       </h2>

//       {/* TABLE FOR DESKTOP & TABLET */}
//       <div className="hidden md:block overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg">
//           <thead className="bg-[#0B3159] text-white">
//             <tr className="text-sm lg:text-base">
//               <th className="border p-3">Name</th>
//               <th className="border p-3">Email</th>
//               <th className="border p-3">Service</th>
//               <th className="border p-3">Message</th>
//               <th className="border p-3">Date/Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {responses.length > 0 ? (
//               responses.map((response) => (
//                 <tr key={response._id} className="text-center text-sm lg:text-base">
//                   <td className="border p-3">{response.name}</td>
//                   <td className="border p-3">{response.email}</td>
//                   <td className="border p-3">{response.service}</td>
//                   <td className="border p-3 max-w-xs">
//                     <div className="whitespace-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-2">
//                       {response.message}
//                     </div>
//                   </td>
//                   <td className="border p-3">
//                     {new Date(response.createdAt).toLocaleString()}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="border p-3 text-center text-gray-500">
//                   No response yet
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* MOBILE RESPONSIVE CARDS WITH HEADINGS */}
//       <div className="md:hidden mt-6 space-y-4">
//         {responses.length > 0 ? (
//           responses.map((response) => (
//             <div
//               key={response._id}
//               className="bg-white shadow-lg rounded-lg p-4 border"
//             >
//               <div className="mb-2">
//                 <p className="text-[#0B3159] text-sm font-semibold">Name:</p>
//                 <p className="text-lg font-semibold text-gray-900">{response.name}</p>
//               </div>

//               <div className="mb-2">
//                 <p className="text-[#0B3159] text-sm font-semibold">Email:</p>
//                 <p className="text-gray-700">{response.email}</p>
//               </div>

//               <div className="mb-2">
//                 <p className="text-[#0B3159] text-sm font-semibold">Service:</p>
//                 <p className="text-gray-700">{response.service}</p>
//               </div>

//               <div className="mb-2">
//                 <p className="text-[#0B3159] text-sm font-semibold">Message:</p>
//                 <div className="text-gray-700 p-2 border rounded-md overflow-x-auto whitespace-nowrap">
//                   {response.message}
//                 </div>
//               </div>

//               <div>
//                 <p className="text-[#0B3159] text-sm font-semibold">Date/Time:</p>
//                 <p className="text-gray-500 text-sm">
//                   {new Date(response.createdAt).toLocaleString()}
//                 </p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No response yet</p>
//         )}
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default Response;

import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderAdmin from "./HeaderAdmin";
import Footer from "../components/Footer";

const Response = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contact")
      .then((res) => {
        const sorted = res.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setResponses(sorted);
      })
      .catch((err) => console.error("Error fetching responses", err));
  }, []);

  return (
    <>
      <HeaderAdmin />
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-semibold text-[#0B3159] text-center mb-6">
          All Responses
        </h2>

        {/* TABLE VIEW */}
        <div className="hidden md:block ">
          <table className="w-full border-collapse border border-gray-300 bg-white shadow-md">
            <thead className="bg-[#0B3159] text-white">
              <tr className="text-sm lg:text-base">
                <th className="border p-3">Name</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Phone</th>
                <th className="border p-3">Country</th>
                <th className="border p-3">State</th>
                <th className="border p-3">City</th>
                <th className="border p-3">Service</th>
                <th className="border p-3">Message</th>
                <th className="border p-3">Date/Time</th>
              </tr>
            </thead>
            <tbody>
              {responses.length > 0 ? (
                responses.map((response) => (
                  <tr
                    key={response._id}
                    className="text-center text-sm lg:text-base"
                  >
                    <td className="border p-3">{response.name}</td>
                    <td className="border p-3">{response.email}</td>
                    <td className="border p-3">{response.phone}</td>
                    <td className="border p-3">{response.country}</td>
                    <td className="border p-3">{response.state}</td>
                    <td className="border p-3">{response.city}</td>
                    <td className="border p-3">{response.service}</td>
                    <td className="border p-3 max-w-xs">
                      <div className="overflow-x-auto whitespace-nowrap p-2">
                        {response.message}
                      </div>
                    </td>
                    <td className="border p-3">
                      {new Date(response.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center text-gray-500 p-4">
                    No response yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden mt-6 space-y-4">
          {responses.map((response) => (
            <div
              key={response._id}
              className="bg-white shadow-md rounded-lg p-4 border"
            >
              <p><strong>Name:</strong> {response.name}</p>
              <p><strong>Email:</strong> {response.email}</p>
              <p><strong>Phone:</strong> {response.phone}</p>
              <p><strong>Country:</strong> {response.country}</p>
              <p><strong>State:</strong> {response.state}</p>
              <p><strong>City:</strong> {response.city}</p>
              <p><strong>Service:</strong> {response.service}</p>
              <p><strong>Message:</strong> {response.message}</p>
              <p className="text-sm text-gray-500">
                {new Date(response.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Response;


