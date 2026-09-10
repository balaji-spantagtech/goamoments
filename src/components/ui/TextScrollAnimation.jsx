import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "../../lib/utils";

const AnimatedCharacter = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [distanceFromCenter * 25, 0]
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 1],
    [distanceFromCenter * 25, 0]
  );

  return (
    <motion.span
      className={cn("inline-block", isSpace && "w-4 md:w-6")}
      style={{
        x,
        rotateX,
      }}
    >
      {char}
    </motion.span>
  );
};

const TextScrollAnimation = ({ text, className, offset = ["start 100%", "center 30%"] }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: offset,
  });

  const words = text.split(" ");
  const totalChars = text.length;
  const centerIndex = Math.floor(totalChars / 2);
  let currentIndex = 0;

  return (
    <div
      ref={targetRef}
      className={cn("flex flex-wrap justify-center", className)}
      style={{ perspective: "1000px" }}
    >
      {words.map((word, wordIdx) => {
        const wordNode = (
          <span key={wordIdx} className="inline-flex whitespace-nowrap mr-[0.25em]">
            {word.split("").map((char, charIdx) => {
              const charIndex = currentIndex++;
              return (
                <AnimatedCharacter
                  key={charIdx}
                  char={char}
                  index={charIndex}
                  centerIndex={centerIndex}
                  scrollYProgress={scrollYProgress}
                />
              );
            })}
          </span>
        );
        if (wordIdx < words.length - 1) {
          currentIndex++; // account for space in index calculation
        }
        return wordNode;
      })}
    </div>
  );
};

export default TextScrollAnimation;
