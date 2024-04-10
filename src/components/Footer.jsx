import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="footer footer-center p-10  bg-primary text-primary-content rounded">
        <div className="grid grid-flow-col gap-4">
          <Link to="https://mustafakayas.vercel.app" className="link link-hover">
            Hakkımızda
          </Link>
          <Link to="https://mustafakayas.vercel.app/contact" className="link link-hover">
            İletişim
          </Link>
        </div>

        <div>
          <p>Copyright © 2024 - All right reserved by Kayas</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;