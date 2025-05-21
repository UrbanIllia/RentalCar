// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import Catalog from "./pages/Catalog";
// import CarDetails from "./pages/CarDetails";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <div style={{ padding: "0 120px", maxWidth: "1440px", margin: "0 auto" }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/catalog" element={<Catalog />} />
//           <Route path="/catalog/:id" element={<CarDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import Container from "./components/Container";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CarDetails from "./pages/CarDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
