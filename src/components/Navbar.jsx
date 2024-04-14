import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

  const handleRefresh = () => {
    window.location.reload(); // Sayfayı yenilemek için window.location.reload() kullanılıyor
  };

    return (
      <div className="bg-base-200 py-2">
        <div className="max-w-7xl mx-auto navbar">
          <div className="navbar-start">
            <Link href="/" className="btn btn-ghost normal-case text-2xl" onClick={handleRefresh}>
              Cezalı Kart Oyunu
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;