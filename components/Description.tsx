"use client";

import React, { useEffect, useState } from "react";

const Description: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const toType =
    "Welcome to my portfolio! I am a passionate developer specializing in building modern web applications with Next.js and React. I have 5 years of experience in full-stack development, focusing on creating responsive and user-friendly interfaces. Feel free to explore my projects and get in touch if you'd like to collaborate or learn more about my work!";
  const typingSpeed = 3;

  useEffect(() => {
    if (index < toType.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + toType.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [index, toType]);

  return (
    <div>
      {/* Add your description content here */}
      <p className="text-white/80 font-font 2xl:text-3xl xl:text-2xl lg:text-3xl sm:text-2xl text-xl font-[var(--font-roboto)] text-center mb-[52px] xl:h-[30vh] h-fit">
        {text}
      </p>
    </div>
  );
};

export default Description;
