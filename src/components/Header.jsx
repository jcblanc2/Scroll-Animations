// 'use client';
import NavBar from "./NavBar";
import Button from "./Button";
import { FaRocket } from "react-icons/fa";
import monkey from '../assets/images/monkey.png';
import hover3d from "../utils/hover";
import { useRef } from "react";

const Header = () => {
    const hero = useRef(null);

    const hoverHero = hover3d(hero, {
        x: 30,
        y: -40,
        z: 30,
    });

    const imageHover = hover3d(hero, {
        x: 20,
        y: -5,
        z: 11,
    });

    return (
        <div ref={hero}>
            <NavBar />

            <div className='p-0 px-10 py-5 gap-16 flex justify-between items-center min-h-[calc(100vh-10vh)]'>
                <div>
                    <h1 className='text-xl sm:text-[2rem] lg:text-[4rem] leading-[5rem] text-txt transition duration-75 linear pb-6 font-normal'>
                        Buy, collect, and sell extraordinary NFTs
                    </h1>

                    <p>
                        Acquire expertise in navigating the rapidly evolving and
                        exhilarating NFT landscape, unveil the highly sought-after NFTs, and
                        comprehend the possible advantages and disadvantages of acquiring,
                        amassing, and vending these exceptional digital assets.
                    </p>

                    <div className='flex gap-4 mt-10'>
                        <Button
                            name="Get Started"
                            background="txt"
                            color="white"
                            border="txt"
                            icon={<FaRocket />}
                        />
                        <Button name="Learn More" border="txt" background="cbg" />
                    </div>
                </div>
                <div
                    className='p-2 rounded-lg bg-black-bg border-2 border-cbd' style={{
                        transform: hoverHero.transform,
                    }}
                >
                    <div
                        className='p-4 rounded-lg bg-black-bg border-2 border-cbd'
                        style={{
                            transform: hoverHero.transform,
                        }}
                    >
                        <img
                            className="rounded-lg"
                            src={monkey}
                            width={800}
                            height={800}
                            alt="hero"
                            style={{
                                transform: imageHover.transform,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
