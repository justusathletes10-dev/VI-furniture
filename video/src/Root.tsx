import React from "react";
import { Composition } from "remotion";
import { ViBrandIntro } from "./ViBrandIntro";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="ViBrandIntro"
        component={ViBrandIntro}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
