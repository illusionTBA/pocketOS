import React from "react";
import { motion, Variants } from "framer-motion";
const list: Variants = {
    visible: { opacity: 1, y:0,
        transition: {
            staggerChildren: 0.2,
            duration:0.6,
            delayChildren: 0.3,
        }
    },
    hidden: { opacity: 0, y:20 },
  }
  

const Index: React.FC = () => {
    return (
            <motion.div className="z-10  fixed p-1 flex space-x-3 bottom-5 w-3/5 Glassmorphism items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={list}
 
            >
                <App image="Chrome.svg" title="Chrome!" className="h-full w-14"/>
                <App image="vite.svg" title="Vite!"/>
                <App image="vite.svg" title="Vite!"/>
                <App image="Settings.svg" title="Settings" className=""/>
            </motion.div>

    )
}


export default Index;

const item: Variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

const App = ({image, title, className}: {image: string, title:string, className?:string}) => {
    const [isToolTip, setIsToolTip] = React.useState<boolean>(false)
    return (

        <motion.div 
        className={`p-3 w-16 flex items-center justify-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-none  rounded-2xl border-solid border  cursor-pointer`}
        style={{
            background: "rgba(255, 255, 255, 0.32)",
            WebkitBackdropFilter: "blur(0px)"
        }}
        variants={item} 
        onMouseEnter={
            () => {setIsToolTip(true)}
        }
        onMouseLeave={() => {setIsToolTip(false)}}
        >
            {isToolTip && <Tooltip text={title}/>}
            <img src={image} className={className} alt={title} />
        </motion.div>
    )
}


  

const Tooltip = ({text}: {text: string}) => {
    return (
            <motion.div className="fixed px-3 hadow-[0_4px_50px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border rounded-2xl border-solid border-[rgba(205,205,205,0.3)]"
            initial="hidden"
            animate="visible"
            exit={"hidden"}
            style={{
                background: "rgba(255, 255, 255, 0.32)",
                WebkitBackdropFilter: "blur(0px)"
            }}
            variants={{
                visible: {
                    y:-60,
                    opacity: 1
                },
                hidden: { y:0, opacity: 0 },
            }}
            
            >
                <motion.h1 className="text-lg p-1 text-white">{text}</motion.h1>
            </motion.div>
    )
}