import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
	{
		id: 1,
		title: "Laravel Blog Application",
		img: "blogapp.png",
		demo: '',
		desc: "Created an interactive blog application using laravel where the user can add , edit or delete a post and all of this is managed in the database",
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
				<motion.div className="wrapper"  >
					<motion.div className="imagecontainer" ref={ref}>
						<img src={item.img} alt="" />
					</motion.div>
					<motion.div className="textcontainer" >
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<a href={item.demo} target="_blank"><button > Demo   </button>
						</a>
					</motion.div>
				</motion.div>
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



	return (
		<div className="portfolio" ref={ref}>
			{items.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};

export default Portfolio;
