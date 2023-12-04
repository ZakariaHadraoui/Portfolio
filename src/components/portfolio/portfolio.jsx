import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
	{
		id: 1,
		title: "React Commerce",
		img: "/zakshop.png",
		desc: "Created a seamless and intuitive shopping cart system using React, prioritizing efficiency and user satisfaction in the online shopping experience.",
	},
	{
		id: 2,
		title: "Javascript Quiz",
		img: '/quiz.png',
		desc: 'Developed a sleek and responsive Javascript navbar, combining aesthetics with functionality to provide easy navigation and an enhanced user interface for my portfolio.'
	},
	{
		id: 3,
		title: "Javascript responsive Navbar",
		img: '/navbar.png',
		desc: 'Engineered an interactive React quiz application, blending engaging user interactions with dynamic content to deliver an enjoyable and educational experience within my portfolio.'
	},

];


const Single = ({ item }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

	return (
		<section >
			<div className="container">
				<div className="wrapper">
					<div className="imagecontainer" ref={ref}>
						<img src={item.img} alt="" />
					</div>
					<motion.div className="textcontainer" style={{ y }}>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<button>Demo Will be available soon</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const Portfolio = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	return (
		<div className="portfolio" ref={ref}>
			<div className="progress">
				<h1>My Projects</h1>
				<motion.div style={{ scaleX }} className="progressbar"></motion.div>
			</div>
			{items.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};

export default Portfolio;
