import MPGame from "./MPGame";
import WeatherApp from "./WeatherApp";
import { motion } from "framer-motion";

const containerVariant = {
    visible: {
        transition: { staggerChildren: 0.1 },
    },

    exit: {
        transition: { 
            staggerChildren: 0.1, 
        },
    },
    hover: {
        scale: 1,
    }
}

const itemVariant = {
    hidden: { 
        y: 20,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    },
    exit: {
        y: 20,
        opacity: 0,
        transition: {
            duration: 0.5,
        }
    },
}

const PortfolioBox = () => {
    return (
        <motion.div 
        className="portfolio-box"
        variants={containerVariant}
        initial="hidden" 
        animate="visible" 
        exit="exit"
        whileHover="hover"
        >
            <WeatherApp variants={itemVariant}/>
            <MPGame variants={itemVariant}/>
        </motion.div>
    )
}

export default PortfolioBox;