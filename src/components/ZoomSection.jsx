import React from 'react'
import hover3d from "../utils/hover";
import spiral from '../assets/images/spiral.svg';
import arm2 from '../assets/images/arm2.jpg';
import arm from '../assets/images/arm.jpg';

const ZoomSection = () => {
    const hero = React.useRef(null);

    const hover = hover3d(hero, {
        x: -5,
        y: 10,
        z: 4,
    });

    const hover2 = hover3d(hero, {
        x: 40,
        y: 20,
        z: 7,
    });

    const hover3 = hover3d(hero, {
        x: -40,
        y: -20,
        z: -7,
    });

    return (
        <div ref={hero} className='relative overflow-hidden rounded-lg border-2 border-cbd'>
            <div
                className="rounded-lg"
                style={{
                    height: "50rem",
                    width: "100%",
                }}
            >
                <img
                    className='absolute top-10 right-12 rounded-lg'
                    src={spiral}
                    alt="bulb tree"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        transform: hover.transform,
                        scale: 1.2,
                        background: "var(--color-bg)",
                    }}
                />

                <img
                    src={arm2}
                    alt="bulb tree"
                    className="absolute top-10 right-12 rounded-lg"
                    width={500}
                    height={500}
                    style={{
                        objectFit: "cover",
                        objectPosition: "50% 0%",
                        transform: hover2.transform,
                        transition: hover2.transition,
                    }}
                />

                <img
                    src={arm}
                    alt="bulb tree"
                    className="absolute top-10 left-12 rounded-lg"
                    width={500}
                    height={500}
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        transform: hover3.transform,
                        transition: hover3.transition,
                    }}
                />
            </div>
        </div>
    )
}

export default ZoomSection