"use client";
import React from "react";
import { type NoiseColor, NOISES } from "@/lib/noise";
import Blob from "@/components/blob";
import { useAudioStore } from "@/store";

export const BlobGroup: React.FC = () => {
  const [noise, setNoise] = useAudioStore(state => [state.noise, state.setNoise]);

  const handleBlobClickFactory = (color: NoiseColor) => () => {
    setNoise(color)
  }

  return (
    <div className={"flex justify-center gap-8 w-72 flex-wrap"}>
      {NOISES.map((color) => (
        <button
          key={color}
          className={'btn btn-ghost btn-circle btn-lg'}
          onClick={handleBlobClickFactory(color)}
        >
          <div data-tip={`${color} noise`} className={"tooltip h-full w-full"}>
            <Blob color={color} active={noise && color === noise.color} />
          </div>
        </button>
      ))}
    </div>
  );
};
