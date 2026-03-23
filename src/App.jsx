import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Service from "./pages/Service.jsx";
import NavBar from "./components/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx"

const App = () => {
    return (
        <main className=" h-screen bg-gray-50">
        <ScrollToTop/>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />
            </Routes>
        </main>
    );
};

export default App;
