import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";

const variants = {
	initial: {
		y: 500,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		},
	},
};

const Contact = () => {
	const ref = useRef();


	const isInView = useInView(ref, { margin: "-100px" });


	return (
		<motion.div
			ref={ref}
			className="contact"
			variants={variants}
			initial="initial"
			whileInView="animate"
		>
			<motion.div className="textContainer" variants={variants}>
				<motion.h1 variants={variants}> Contact me any time </motion.h1>
				<motion.div className="item" variants={variants}>
					<h2>Mail</h2>
					<span>Zikoxo05@gmail.com</span>
				</motion.div>
				<motion.div className="item" variants={variants}>
					<h2>Address</h2>
					<span> Casablanca Morocco</span>
				</motion.div>
				<motion.div className="item" variants={variants}>
					<h2>Phone</h2>
					<span>0691407941</span>
				</motion.div>
			</motion.div>
			<div className="formContainer">
				<motion.div
					className="phoneSvg"
					initial={{ opacity: 1 }}
					whileInView={{ opacity: 0 }}
					transition={{ delay: 3, duration: 1 }}
				>

				</motion.div>

			</div>
		</motion.div>
	);
};

export default Contact;
