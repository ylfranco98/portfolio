"use client";
import React, { useEffect, useState } from "react";
// import styles from "./Title.module.css";

export const Title = ({ toType }: { toType?: string }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  //   const toType =
  //     "I'm a full-stack developer with 5 years of experience using React and NodeJS. Reach out if you'd like to learn more! I'm a full-stack developer with 5 years of experience using React and NodeJS. Reach out if you'd like to learn more!"; // The text you want to type out
  const typingSpeed = 100; // Adjust the typing speed as needed

  useEffect(() => {
    const str = toType ?? "";
    if (index < str.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + str.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [index, toType]);
  return (
    <h2 className="w-full text-white 2xl:text-6xl xl:text-4xl lg:text-6xl sm:text-4xl text-3xl uppercase text-center font-extrabold mb-5">
      {text}
    </h2>
  );
};
