import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    type?: "up" | "left";
    delay?: number
}

export const Reveal = ({ children, width="fit-content", type="up", delay=0.2 }: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        (type==="up" ? 
        <div ref={ref} >
            <motion.div 
                variants={{
                    hidden: { opacity: 0, x: -100, y: 100,  },
                    visible: { opacity: 1, x: 0, y: 0, rotate: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay }}
            >
                {children}
            </motion.div>
        </div>
        
        :
        
        <div ref={ref} >
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </div>
    )
        
    )
}