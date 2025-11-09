import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useScrollDirection from "../hooks/useScrollDirection";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollDirection = useScrollDirection();

  const handleNavClick = (sectionId: string) => {
    setOpen(false);
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <nav
      className={`bg-white shadow-md fixed top-0 w-full z-50 transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="h-16 max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 text-xl font-bold text-orange-700 font-devanagari"
        >
          {/* <span className="text-2xl">ॐ</span> */}
          <img
            src="/companyLogo.png"
            alt="Sanatan Dham Kendra Logo"
            className="w-16 h-16 object-contain"
          />
          <span>Sanatan Dham Kendra</span>
        </Link>

        <button
          className="md:hidden text-2xl text-orange-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

<ul
  className={`${
    open ? "block" : "hidden"
  } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex space-y-3 md:space-y-0 md:space-x-6 text-center md:text-left border-t md:border-none p-4 md:p-0 transition-all`}
>
  {[
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ].map((item, index) => (
    <li key={index}>
      <button
        onClick={() => handleNavClick(item.id)}
        className="relative text-gray-700 md:text-orange-700 font-medium transition group hover:text-orange-600"
      >
        {/* Link Text */}
        {item.name}

        {/* Divine Underline Animation */}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
      </button>
    </li>
  ))}
</ul>

      </div>
    </nav>
  );
};

export default Navbar;
