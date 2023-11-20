"use client";
import React, { useCallback, useEffect, useState } from "react";
import { type Noise, NOISES } from "@/lib/noise/noise";
import Blob from "@/components/blob";
import { useAudioStore } from "@/store/store";

export const BlobGroup: React.FC = () => {
  const noises = useAudioStore((state) => state.noiseMap);

  const [noiseType, setNoiseType] = useState<Noise>();

  useEffect(() => {
    if (!noiseType) {
      Object.keys(noises).forEach((color) => {
        noises[color].stop();
      });

      return;
    }

    const noise = noises[noiseType];
    noise.start();

    return () => {
      noise.stop();
    };
  }, [noises, noiseType]);

  const handleBlobClickFactory = useCallback(
    (color: (typeof NOISES)[number]) => () => {
      setNoiseType((prev) => (prev === color ? undefined : color));
    },
    []
  );

  return (
    <div className={"flex justify-center gap-8 w-72 flex-wrap"}>
      {NOISES.map((color) => (
        <button
          key={color}
          className={'btn btn-ghost btn-circle btn-lg'}
          onClick={handleBlobClickFactory(color)}
        >
          <div data-tip={`${color} noise`} className={"tooltip h-full w-full"}>
            <Blob color={color} active={color === noiseType || !noiseType} />
          </div>
        </button>
      ))}
    </div>
  );
};
