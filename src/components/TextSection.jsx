import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const texts = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing.",
];

const TextWrapper = ({ children }) => {
    const text = React.useRef(null);

    const { scrollYProgress } = useScroll({
        target: text,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
    const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
    const colorChange = useTransform(
        scrollYProgress,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        [
            "hsla(180, 7%, 75%, 0.9)",
            "hsla(180, 7%, 75%, 0.9)",
            "#f2994a",
            "#f2994a",
            "#f2994a",
            "#f2994a",
        ]
    );

    return (
        <div ref={text}>
            <motion.p
                style={{ opacity, x, color: colorChange }}
            >{children}</motion.p>
        </div>
    );
};

function TextSection() {
    return (
        <div
            className="text-[4rem] flex flex-col justify-center gap-12"
        >
            {
                texts.map((text, index) => (
                    <TextWrapper>{text}</TextWrapper>
                ))
            }
        </div>
    );
}


export default TextSection;