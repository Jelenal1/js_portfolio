"use client";
import { useState } from "react";
import { DvdScreensaver } from "react-dvd-screensaver";

const KachelRotation = ({ icons }: { icons: JSX.Element[] }) => {
  const [index, setIndex] = useState(0);
  const [bounceCounter, setBounceCounter] = useState(0);

  // Safeguard against empty icons array
  if (!icons || icons.length === 0) {
    return <div>No icons provided</div>;
  }

  return (
    <DvdScreensaver
      impactCallback={(counter) => {
        if (bounceCounter !== counter) {
          setIndex((prev) =>
            prev < icons.length - 1 && bounceCounter % 2 === 0 ? prev + 1 : 0,
          );
          setBounceCounter(counter);
        }
      }}
    >
      <div className="flex aspect-square w-[60px] items-center justify-center border">
        {icons[index] || <div>Invalid icon</div>}
      </div>
    </DvdScreensaver>
  );
};

export default KachelRotation;
