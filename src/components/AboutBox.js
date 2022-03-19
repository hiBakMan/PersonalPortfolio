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
    }
}

const AboutBox = () => {
    return (
        <motion.div 
        className="about-box"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <motion.img variants={itemVariant} src={process.env.PUBLIC_URL + `/assets/portrait_green.svg`} className="portrait" alt="portrait"/>
            <motion.div className="right-side">
                <motion.div variants={itemVariant} className="about-text">
                    <br /> 
                    <h1>Welcome</h1>
                    <br /> 
                    <p>My name is Gvidas and I am a self-taught software developer based in Vilnius, Lithuania.</p>
                    <p>I have started this journey in 2022 and currently focus on Full Stack web application development.</p>
                    <p>Portfolio section contains some of the projects that I have completed recently.</p>
                    <p>Should you have any questions, inquiries or ideas that we could work on together - feel free to reach out using the Contact section.</p>
                    <p>Take care!</p>
                </motion.div>
                <motion.div variants={itemVariant} className="lang-box">
                    <img src={process.env.PUBLIC_URL + `/assets/css.svg`} alt="csslogo"/>
                    <img src={process.env.PUBLIC_URL + `/assets/html.svg`} alt="htmllogo"/>
                    <img src={process.env.PUBLIC_URL + `/assets/js.svg`} alt="jslogo"/>
                    <img src={process.env.PUBLIC_URL + `/assets/python.svg`} alt="pythonlogo"/>
                </motion.div>
                <motion.div variants={itemVariant} className="packet-box">
                    <img src={process.env.PUBLIC_URL + `/assets/mongo.svg`} alt="mongologo"/>
                    <img src={process.env.PUBLIC_URL + `/assets/express.svg`} alt="expresslogo"/>
                    <img src={process.env.PUBLIC_URL + `/assets/react.svg`} alt="reactlogo"/>
                    <img src={process.env.PUBLIC_URL + `/assets/node.svg`} alt="nodelogo"/>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default AboutBox;