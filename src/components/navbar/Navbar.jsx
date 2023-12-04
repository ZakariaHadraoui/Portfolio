import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.3 }}
          transition={{ duration: 0.5 }}
        >
          Zakaria.Dev
        </motion.span>
        <div className="social">
          <a href="https://github.com/ZakariaHadraoui" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.instagram.com/coding_enjoyerr/" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@coding_guyy" target="_blank">
            <img src="/youtube.png" alt="" />
          </a>
         

        </div>
      </div>
    </div>
  );
};

export default Navbar;
