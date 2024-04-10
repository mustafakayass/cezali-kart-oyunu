import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  // dropdown menünün açık/kapalı durumunu tutan state
  const [isOpen, setIsOpen] = useState(false);

  // dropdown menüyü açmak veya kapatmak için kullanılan fonksiyon
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
      <div className="bg-base-200 py-2">
        <div className="max-w-7xl mx-auto navbar">
          <div className="navbar-start">
            <Link href="/" className="btn btn-ghost normal-case text-2xl">
              Cezalı Kart Oyunu
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;