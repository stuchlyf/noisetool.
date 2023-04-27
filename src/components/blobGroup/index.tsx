"use client";
import React, { useCallback, useEffect, useState } from "react";
import { type Noise, NOISES } from "@/lib/noise/noise";
import { Button, Tooltip } from "react-daisyui";
import Blob from "@/components/blob";
import { useAudioStore } from "@/store/store";

export const BlobGroup: React.FC = () => {
  const noises = useAudioStore((state) => state.noiseMap);

  const [noiseType, setNoiseType] = useState<Noise>();

  useEffect(() => {
    if (!noiseType) {
      noises.forEach((noise) => {
        noise.stop();
      });

      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const noise = noises.get(noiseType)!;
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
    <div className={"flex justify-center gap-4"}>
      {NOISES.map((color) => (
        <Button
          key={color}
          color={"ghost"}
          shape={"circle"}
          size={"lg"}
          onClick={handleBlobClickFactory(color)}
        >
          <Tooltip message={`${color} noise`} className={"h-full w-full"}>
            <Blob color={color} active={color === noiseType || !noiseType} />
          </Tooltip>
        </Button>
      ))}
    </div>
  );
};
