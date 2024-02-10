import './App.css';
import Header from './components/header';
import SectionLayout from './components/SectionLayout';
import HorizontalWrapper from './components/HorizontalWrapper';
import Card from "./components/Card";
import { cards } from "./utils/cards";
import TextSection from "./components/TextSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';

function App() {
  const video = useRef(null);

  const { scrollYProgress } = useScroll({
    target: video,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    [1, 0.8, 0.8, 0]
  );

  return (
    <>
      <Header />

      <main className='min-h-screen w-full'>
        {/* First section */}
        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={-1400}>
            <div className="absolute grid grid-cols-5 gap-16">
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>

        {/* Second Section */}
        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={1400}>
            <div className="absolute grid grid-cols-5 gap-16" style={{ right: 0 }}>
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>

        {/* Third Section */}
        <SectionLayout>
          <TextSection />
        </SectionLayout>

        {/* Fourth Section */}
        <SectionLayout>
          <motion.div
            className="p-8 bg-[#161616] rounded-xl"
            ref={video}
            style={{
              opacity,
              scale,
            }}
          >
            <iframe
            className='border-none w-full h-[32rem]'
              src="https://www.youtube.com/embed/OuaUjkZhfqQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        </SectionLayout>

        {/* Fifth Section */}
        <SectionLayout>
          <ZoomSection></ZoomSection>
        </SectionLayout>
      </main>
    </>
  )
}

export default App
