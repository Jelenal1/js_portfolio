"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const splitTextNodes = (children: ReactNode): ReactNode[] => {
  return React.Children.toArray(children).flatMap((child) => {
    if (typeof child === "string") {
      return child
        .split("")
        .map((char) => <span key={Math.random()}>{char}</span>);
    }
    return child;
  });
};

export const useTypingEffect = ({
  elements,
  delay = 100,
}: {
  elements: ReactNode[];
  delay?: number;
}) => {
  const [displayElements, setDisplayElements] = useState<ReactNode[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < elements.length) {
        setDisplayElements((prev) => [...prev, elements[index]]);
        setIndex((prev) => prev + 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [elements, index, delay]);

  return { displayElements };
};

const TypingEffect = ({
  children,
  delay = 100,
  className = "font-mono",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const childrenArray = splitTextNodes(children);

  const { displayElements } = useTypingEffect({
    elements: childrenArray,
    delay,
  });

  return (
    <div className={twMerge("font-mono", className)}>
      {displayElements}
      <span className="animation-blink bg-white font-mono">|</span>
    </div>
  );
};

export default TypingEffect;
