import { motion } from "framer-motion";

const WeatherApp = ({variants}) => {
    return (
        <motion.div variants={variants} className="project-box">
            <h1 className="project-title">Weather App</h1>
            <div className="tools">
                <div>Express.js</div>
                <div>Node.js</div>
                <div>MongoDB</div>
                <div>React.js</div>         
            </div>
            <img src={process.env.PUBLIC_URL + `/assets/weatherapp.png`} alt="weatherapp"/>
            <p className="desctiption">
                An application that uses Foreca API for weather data and logs user actions in the back end. Deployed on GCP.   
            </p>
            <div className="links">
                <a className="source" target="_blank" rel="noreferrer" href="https://github.com/tikrasZaltys/WeatherApp">Source</a>
                <a className="live" target="_blank" rel="noreferrer" href="https://high-gecko-340913.lm.r.appspot.com/">Live</a>
            </div>
        </motion.div>
    )
}

export default WeatherApp;