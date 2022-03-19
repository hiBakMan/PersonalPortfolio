import { motion } from "framer-motion";

const MPGame = ({variants}) => {
    return (
        <motion.div variants={variants} className="project-box">
            <h1 className="project-title">Multiplayer Snake</h1>
            <div className="tools">
                <div>Express.js</div>
                <div>Node.js</div>
                <div>Socket.io</div>           
            </div>
            <img src={process.env.PUBLIC_URL + `/assets/zhaltys.png`} alt="mpgame"/>
            <p className="desctiption">
                A secure real-time multiplayer online snake game built for freeCodeCamp.org curriculum and deployed on Replit.   
            </p>
            <div className="links">
                <a className="source" target="_blank" rel="noreferrer" href="https://replit.com/@gvidasB/MultiplayerOnlineGameZhaltys">Source</a>
                <a className="live" target="_blank" rel="noreferrer" href="https://multiplayeronlinegamezhaltys.gvidasb.repl.co/">Live</a>
            </div>
        </motion.div>
    )
}

export default MPGame;