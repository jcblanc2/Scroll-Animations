import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import rover from '../assets/images/rover.jpg';

const Fullpage = () => {
    const secRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: secRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const xTransform = useTransform(
        scrollYProgress,
        [1, 0.5, 0.1, 0],
        [-1000, 0, 0, 0]
    );

    return (
        <div ref={secRef}>
            <motion.div
                className="w-full h-full relative rounded-2xl border-2 border-cbd transition-border duration-300 ease-in-out hover:border-txt"
                style={{
                    scale: scale,
                    x: xTransform,
                }}
            >
                <img
                className="p-6"
                    src={rover}
                    alt="monkey"
                    fill={true}
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
            </motion.div>
        </div>
    )
}

export default Fullpage