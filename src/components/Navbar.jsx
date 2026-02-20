import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const routes = [
        { path: "/", name: "Home" },
        { path: "/about", name: "About me" },
        { path: "/service", name: "Services" },
        { path: "/contact", name: "Contact me" }
    ];

    const changeRoute = pathName => {
        setIsOpen(false);
        navigate(pathName);
    };
    return (
        <div className="bg-white">
            <nav className="w-full  flex justify-between p-2 items-center">
                <p className="font-bold text-2xl text-orange-500">Bicons</p>
                <div className="flex items-center gap-3">
                    <button className="p-1 px-3 border border-orange-500 rounded font-semibold text-orange-500">
                        Let's Chat
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <MdMenu size={28} />
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="flex flex-col gap-3 p-2 border-t border-t-gray-200 pb-4">
                  
                    {routes.map(route => (
                        <p
                            onClick={() => changeRoute(route.path)}
                            key={route.name}
                            className={`font-semibold cursor-pointer ${location.pathname === route.path ? "text-orange-500" : "text-gray-700"}`}
                        >
                            {route.name}
                      
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;
