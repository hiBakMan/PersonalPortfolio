import { useRef } from 'react';
import emailjs from '@emailjs/browser';
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

const btnVariant = {
    hidden: { 
        y: 20,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
        }
    },
    exit: {
        y: 20,
        opacity: 0,
        transition: {
            duration: 0.1,
        }
    }
}

const ContactBox = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      e.target.reset();
        
      emailjs.sendForm('service_pm9j1xh', 'template_ap6udha', form.current, 'V0T_3mbnTJlfZ23wi')
    };

    return (
        <motion.div 
        className="contact-box"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <form ref={form} onSubmit={sendEmail}>
                <motion.input variants={itemVariant} className="input-name" type="text" name="name" placeholder="Your Name" required />
                <motion.input variants={itemVariant} className="input-email" type="email" name="email" placeholder="Your Email" required />
                <motion.textarea variants={itemVariant} className="input-message"rows="7" name="message" placeholder="Your Message" required />
                <motion.button variants={btnVariant} type="submit" className="send-btn">Send Your Message</motion.button> 
            </form>
        </motion.div>
    )
}

export default ContactBox;