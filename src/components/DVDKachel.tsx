"use client";
import { useState } from "react";
import { DvdScreensaver } from "react-dvd-screensaver";

const DVDKachel = ({ icons }: { icons: JSX.Element[] }) => {
  const [index, setIndex] = useState(0);
  const [bounceCounter, setBounceCounter] = useState(0);

  // Safeguard against empty icons array
  if (!icons || icons.length === 0) {
    return <div>No icons provided</div>;
  }

  return (
    <div className="h-full w-full">
      <DvdScreensaver
        impactCallback={(counter) => {
          if (bounceCounter !== counter) {
            setIndex((prev) =>
              prev < icons.length - 1 ? prev + 1 : 0,
            );
            setBounceCounter(counter);
          }
        }}
      >
        <div className="flex aspect-square w-[60px] items-center justify-center">
          {icons[index] || <div>Invalid icon</div>}
        </div>
      </DvdScreensaver>
    </div>
  );
};

export default DVDKachel;
