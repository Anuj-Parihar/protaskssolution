// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import HeaderAdmin from "./HeaderAdmin";
// import Footer from "../components/Footer";

// const AdminHome = () => {
//   const [responses, setResponses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/contact")
//       .then((res) => {
//         const latestResponses = res.data.slice(-5).reverse(); // Get the last 5 responses (latest ones)
//         setResponses(latestResponses);
//       })
//       .catch((err) => console.error("Error fetching responses", err));
//   }, []);

//   return (
//     <>
//       <HeaderAdmin />
//       <div className="max-w-7xl mx-auto p-6">
//         <h2 className="text-3xl font-semibold text-[#0B3159] text-center mb-6">
//           Admin Dashboard
//         </h2>
//         <h3 className="text-2xl font-semibold text-[#0B3159] mb-4">
//           Latest Responses
//         </h3>

//         {/* TABLE FOR DESKTOP & TABLET */}
//         <div className="hidden md:block overflow-x-auto">
//           <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg">
//             <thead className="bg-[#0B3159] text-white">
//               <tr className="text-sm lg:text-base">
//                 <th className="border p-3">Name</th>
//                 <th className="border p-3">Email</th>
//                 <th className="border p-3">Service</th>
//                 <th className="border p-3">Message</th>
//                 <th className="border p-3">Date/Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {responses.length > 0 ? (
//                 responses.map((response) => (
//                   <tr key={response._id} className="text-center text-sm lg:text-base">
//                     <td className="border p-3">{response.name}</td>
//                     <td className="border p-3">{response.email}</td>
//                     <td className="border p-3">{response.service}</td>
//                     <td className="border p-3 max-w-xs">
//                       <div className="whitespace-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-2">
//                         {response.message}
//                       </div>
//                     </td>
//                     <td className="border p-3">
//                       {new Date(response.createdAt).toLocaleString()}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="border p-3 text-center text-gray-500">
//                     No recent responses
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* MOBILE RESPONSIVE CARDS */}
//         <div className="md:hidden mt-6 space-y-4">
//           {responses.length > 0 ? (
//             responses.map((response) => (
//               <div
//                 key={response._id}
//                 className="bg-white shadow-lg rounded-lg p-4 border"
//               >
//                 <div className="mb-2">
//                   <p className="text-[#0B3159] text-sm font-semibold">Name:</p>
//                   <p className="text-lg font-semibold text-gray-900">{response.name}</p>
//                 </div>
//                 <div className="mb-2">
//                   <p className="text-[#0B3159] text-sm font-semibold">Email:</p>
//                   <p className="text-gray-700">{response.email}</p>
//                 </div>
//                 <div className="mb-2">
//                   <p className="text-[#0B3159] text-sm font-semibold">Service:</p>
//                   <p className="text-gray-700">{response.service}</p>
//                 </div>
//                 <div className="mb-2">
//                   <p className="text-[#0B3159] text-sm font-semibold">Message:</p>
//                   <div className="text-gray-700 p-2 border rounded-md overflow-x-auto whitespace-nowrap">
//                     {response.message}
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-[#0B3159] text-sm font-semibold">Date/Time:</p>
//                   <p className="text-gray-500 text-sm">
//                     {new Date(response.createdAt).toLocaleString()}
//                   </p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No recent responses</p>
//           )}
//         </div>

//         {/* BUTTON TO VIEW ALL RESPONSES */}
//         <div className="text-center mt-6">
//           <button
//             onClick={() => navigate("/response")}
//             className="bg-[#E5A24A] hover:bg-[#c7873a] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
//           >
//             All Responses
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AdminHome;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderAdmin from "./HeaderAdmin";
import Footer from "../components/Footer";

const AdminHome = () => {
  const [responses, setResponses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contact")
      .then((res) => {
        const latestResponses = res.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ); // Sort responses from latest to oldest
        setResponses(latestResponses.slice(0, 5)); // Get the top 5 latest responses
      })
      .catch((err) => console.error("Error fetching responses", err));
  }, []);

  return (
    <>
      <HeaderAdmin />
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-semibold text-[#0B3159] text-center mb-6">
          Admin Dashboard
        </h2>
        <h3 className="text-2xl font-semibold text-[#0B3159] mb-4">
          Latest Responses
        </h3>

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
                    No recent responses
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* MOBILE RESPONSIVE CARDS */}
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
            <p className="text-center text-gray-500">No recent responses</p>
          )}
        </div>

        {/* BUTTON TO VIEW ALL RESPONSES */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/response")}
            className="bg-[#E5A24A] hover:bg-[#c7873a] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            All Responses
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminHome;
