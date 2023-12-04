import { motion } from "framer-motion";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const ToggleButton = ({ open,setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      {open ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}

    </button>
  );
};

export default ToggleButton;
