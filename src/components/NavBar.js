import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariant = {
    hidden: { 
        y: -20,
        opacity: 0, 
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { 
            staggerChildren: 0.3,
        },
    },
}

const svgVariant = {
    hidden: { y: -20 },
    visible: {
        y: 0,
    },
    exit: {
        y: -20,
    }
}

const pathVariant = {
    hidden: { 
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: { 
            duration: 2,
        },
    },
    exit: { 
        opacity: 0,
        pathLength: 0,
        transition: { 
            delay: 1,
            duration: 1,
        },
    },
    hover: {
        pathLength: 0,
        transition: { duration: 3 },
    },
    click: {
        pathLength: 0,
        transition: { duration: 0.5 },
    }
}

const btnVariant = {
    hidden: { 
        y: -20,
        opacity: 0, 
    },
    visible: {
        y: 0,
        opacity: 1,
    }
}


const NavBar = ({setState}) => {
    return (
        <motion.div 
        className = "navbar"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        >
            <motion.svg
            variants={svgVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover="hover"
            whileTap="click"
            className="svg-logo"
            stroke="#282c34"
            stroke-width="10"
            width="40"
            height="60"
            viewBox="0 0 200 265"
            xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    variants={pathVariant}
                    transform="translate(-452,355)"
                    fill="none"
                    d="m 524.90793,-168.82261 c -15.08734,-2.76346 -30.0823,-12.70321 -39.93325,-21.9934 -16.65765,-15.70942 -24.39164,-35.19871 -25.4447,-64.11943 -1.2083,-33.18427 8.24565,-58.42339 28.01523,-74.79201 23.28746,-19.28132 64.02612,-21.20163 89.85505,-4.23553 12.94918,8.50585 22.0713,20.3247 26.37284,34.16933 2.60337,8.37902 2.15296,8.86106 -8.26273,8.8429 -4.82976,-0.008 -9.23138,-0.34593 -9.78138,-0.75 -0.55,-0.40408 -2.68099,-4.1238 -4.73554,-8.26604 -4.49105,-9.05456 -11.61163,-16.54255 -19.9644,-20.99453 -8.28622,-4.41651 -14.74911,-5.9483 -25.15572,-5.96225 -16.20434,-0.0217 -28.34839,4.8306 -38.41809,15.35047 -3.23126,3.37571 -7.04963,8.16266 -8.48527,10.63766 -9.43464,16.26505 -12.09198,45.09227 -6.22224,67.5 3.52101,13.44146 12.94397,27.59417 22.96106,34.48611 22.91731,13.01202 18.16396,4.61357 19.19914,30.12672 z"
                    id="path539" />
                <motion.path
                    variants={pathVariant}
                    transform="translate(-449,355)"
                    fill="none"
                    d="m 522.7952,-173.70689 0.25571,-83.75 34.25101,-0.26313 c 37.19164,-0.28572 43.16268,0.28793 53.82987,5.17153 7.22402,3.30727 15.74451,11.52447 19.16187,18.47981 2.52449,5.13808 2.75724,6.58255 2.75724,17.11179 0,10.52924 -0.23275,11.97371 -2.75724,17.11179 -3.27012,6.65567 -11.91485,15.1921 -18.20058,17.97258 -2.45264,1.08491 -4.70876,2.37615 -5.01361,2.86941 -0.30485,0.49326 2.02546,1.64678 5.17848,2.56339 7.58624,2.20538 12.54572,4.81296 17.26764,9.07892 10.81543,9.7711 15.30664,25.45907 11.91072,41.60469 -2.77797,13.20764 -10.6502,23.14964 -23.12156,29.20064 -12.29668,5.96626 -17.97227,6.59858 -59.22739,6.59858 h -36.54787 z m 69.43334,65.7223 c 14.44249,-1.89745 25.45532,-9.58845 28.27675,-19.74756 0.56895,-2.04861 1.03257,-6.87474 1.03026,-10.72474 -0.009,-15.05508 -8.62275,-24.40762 -25.84067,-28.05705 -6.76735,-1.43437 -48.25012,-2.10692 -51.56218,-0.83596 -1.3926,0.53439 -1.58179,4.11256 -1.58179,29.91667 0,22.51207 0.2899,29.42665 1.25,29.81406 2.35745,0.95125 40.6023,0.66267 48.42763,-0.36542 z m -2.89616,-78.48282 c 8.09458,-1.90842 12.8208,-4.39139 17.42565,-9.15475 10.16363,-10.51346 8.82512,-30.49828 -2.55682,-38.1751 -8.14696,-5.49492 -9.19905,-5.65963 -36.1503,-5.65963 h -25 l -0.26736,25.98358 c -0.14704,14.29097 -0.0487,26.55347 0.21862,27.25 0.73737,1.92155 37.97682,1.72534 46.33021,-0.2441 z"
                    id="path2563" />
            </motion.svg>
            <Link to="personalportfolio/">
                <motion.button variants={btnVariant} className="about-btn">About</motion.button>
            </Link>
            <Link to="personalportfolio/portfolio">
                <motion.button variants={btnVariant} className="portfolio-btn">Portfolio</motion.button>
            </Link>
            <Link to="personalportfolio/contact">
                <motion.button variants={btnVariant} className="contact-btn">Contact</motion.button>
            </Link>
        </motion.div>
    )
}

export default NavBar;