


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Response = () => {
//   const [responses, setResponses] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/contact")
//       .then((res) => setResponses(res.data))
//       .catch((err) => console.error("Error fetching responses", err));
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl font-semibold text-[#0B3159] text-center mb-6">
//         All Responses
//       </h2>

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg">
//           <thead className="bg-[#0B3159] text-white">
//             <tr>
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
//                 <tr key={response._id} className="text-center">
//                   <td className="border p-3">{response.name}</td>
//                   <td className="border p-3">{response.email}</td>
//                   <td className="border p-3">{response.service}</td>
//                   <td className="border p-3 max-w-xs overflow-x-auto">
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
//     </div>
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
      .then((res) => setResponses(res.data))
      .catch((err) => console.error("Error fetching responses", err));
  }, []);

  return (
    <>
    <HeaderAdmin/>
    <div className="max-w-7xl  mx-auto p-6">
      <h2 className="text-3xl my-22 font-semibold text-[#0B3159] text-center mb-6">
        All Responses
      </h2>

      {/* TABLE FOR DESKTOP & TABLET */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg">
          <thead className="bg-[#0B3159] text-white">
            <tr className="text-sm lg:text-base">
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Service</th>
              <th className="border p-3">Message</th>
              <th className="border p-3">Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {responses.length > 0 ? (
              responses.map((response) => (
                <tr key={response._id} className="text-center text-sm lg:text-base">
                  <td className="border p-3">{response.name}</td>
                  <td className="border p-3">{response.email}</td>
                  <td className="border p-3">{response.service}</td>
                  <td className="border p-3 max-w-xs">
                    <div className="whitespace-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-2">
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
                <td colSpan="5" className="border p-3 text-center text-gray-500">
                  No response yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MOBILE RESPONSIVE CARDS WITH HEADINGS */}
      <div className="md:hidden mt-6 space-y-4">
        {responses.length > 0 ? (
          responses.map((response) => (
            <div
              key={response._id}
              className="bg-white shadow-lg rounded-lg p-4 border"
            >
              <div className="mb-2">
                <p className="text-[#0B3159] text-sm font-semibold">Name:</p>
                <p className="text-lg font-semibold text-gray-900">{response.name}</p>
              </div>

              <div className="mb-2">
                <p className="text-[#0B3159] text-sm font-semibold">Email:</p>
                <p className="text-gray-700">{response.email}</p>
              </div>

              <div className="mb-2">
                <p className="text-[#0B3159] text-sm font-semibold">Service:</p>
                <p className="text-gray-700">{response.service}</p>
              </div>

              <div className="mb-2">
                <p className="text-[#0B3159] text-sm font-semibold">Message:</p>
                <div className="text-gray-700 p-2 border rounded-md overflow-x-auto whitespace-nowrap">
                  {response.message}
                </div>
              </div>

              <div>
                <p className="text-[#0B3159] text-sm font-semibold">Date/Time:</p>
                <p className="text-gray-500 text-sm">
                  {new Date(response.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No response yet</p>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Response;
