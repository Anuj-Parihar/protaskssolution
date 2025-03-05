


// import { Routes, Route, Navigate, useLocation } from "react-router-dom"; 
// import Home from "./pages/Home";
// import Services from './pages/Services';
// import About from './pages/About';
// import ContactUs from './pages/ContactUs';
// import Response from "./AdminPannel/Response";
// import Login from "./AdminPannel/Login";
// import PageNotFound from "./components/PageNotFound";
// import AdminHome from "./AdminPannel/AdminHome";
// import Settings from "./AdminPannel/Settings";

//  // Import 404 Page

// function DynamicRedirect({ Component, basePath }) {
//   const location = useLocation();

//   // If user enters a wrong subpath (e.g., /about/xyz), redirect to basePath
//   if (location.pathname !== basePath) {
//     return <Navigate to={basePath} replace />;
//   }

//   return <Component />;
// }

// function App() {
//   return (
//     <>
   
//       <div className="">
//         <Routes>
//           {/* Standard Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/about" element={<DynamicRedirect Component={About} basePath="/about" />} />
//           <Route path="/contact" element={<DynamicRedirect Component={ContactUs} basePath="/contact" />} />
//           <Route path="/admin-login" element={<Login />} />
//           <Route path="/response" element={<Response />} />
//           <Route path="/admin-home" element={<AdminHome />} />
//           <Route path="/admin-settings" element={<Settings />} />
          
          
//           {/* 404 Page Not Found */}
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </div>
     
//     </>
//   );
// }

// export default App;

import { Routes, Route,  } from "react-router-dom"; 
import Home from "./pages/Home";
import Services from './pages/Services';
import EachService from './pages/EachService';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Response from "./AdminPannel/Response";
import Login from "./AdminPannel/Login";
import PageNotFound from "./components/PageNotFound";
import AdminHome from "./AdminPannel/AdminHome";
import Settings from "./AdminPannel/Settings";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          {/* Standard Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:serviceKey" element={<EachService />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin-login" element={<Login />} />
          <Route path="/response" element={<Response />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/admin-settings" element={<Settings />} />
          
          {/* 404 Page Not Found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;