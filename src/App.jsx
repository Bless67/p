import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Service from "./pages/Service.jsx"
import Contact from "./pages/Contact.jsx"

const App = () => {
    return (
        <main className="bg-gray-100 h-screen ">
            <Navbar />
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
