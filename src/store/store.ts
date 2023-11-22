"use client";
import { create } from "zustand";
import { type Noise } from "@/lib/noise/noise";
import * as Tone from "tone";

export type NoiseMap = Readonly<Record<Noise, Tone.Noise>>;

export type AudioState = {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  noiseMap: NoiseMap;
  volume: number;
  setVolume: (volume: number) => void;
};

const noiseFactory = (color: Noise) => {
  // Needs to happen for this to work in SSR
  if (typeof window === "undefined") return undefined as unknown as Tone.Noise;

  switch (color) {
    case "white":
    case "pink":
    case "brown":
      return new Tone.Noise(color).toDestination();
    case "dark-brown":
      const noise = new Tone.Noise("brown");
      noise.set({ volume: -27 });

      // Create a filter object and set its properties
      const lpFilter = new Tone.Filter({
        type: "lowpass",
        frequency: 420,
        rolloff: -12,
      });

      const hpFilter = new Tone.Filter({
        type: "highpass",
        frequency: 80,
        rolloff: -48,
      });

      return noise.chain(lpFilter, hpFilter, Tone.Destination).start();
    case "black":
      const blackNoise = new Tone.Noise("brown");
      blackNoise.set({volume: -27});

      // Create a filter object and set its properties
      const blackNoiseLpFilter = new Tone.Filter({
        type: "lowpass",
        frequency: 100,
        rolloff: -24,
      });

      const blackNoiseHpFilter = new Tone.Filter({
        type: "highpass",
        frequency: 0,
        rolloff: -48,
      });

      return blackNoise.chain(blackNoiseLpFilter, blackNoiseHpFilter, Tone.Destination).start();
  }
};

const parseCookie = (cookie: string): [string, string][] => {
  try {
    return cookie.split(";").map((cookie) => {
      const [key, ...value] = cookie.split("=");
      return [key!.trim(), value.join("=")];
    });
  } catch(e) {
    console.warn('There was an error while trying to read the cookies.');
    return [];
  }
};

export const useAudioStore = create<AudioState>((set, get) => {
  let volume = -40;

  try {
    const cookies = typeof document === 'object' ? parseCookie(document.cookie) : [];
    const cookie = cookies.find(([key]) => key === "volume");

    volume = cookie?.[1] ? parseInt(cookie[1]) : -40;
  } catch(e) {
    console.warn('There was an error trying to read the \'volume\' cookie.', e);
  }


  return {
    isPlaying: false,
    volume,
    noiseMap:
      typeof window === "undefined"
        ? ({} as NoiseMap)
        : {
            white: noiseFactory("white").set({ volume }),
            pink: noiseFactory("pink").set({ volume }),
            brown: noiseFactory("brown").set({ volume }),
            "dark-brown": noiseFactory("dark-brown").set({ volume }),
            black: noiseFactory("black").set({ volume })
          },
    setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
    setVolume: (volume: number) => {
      if (!(volume >= -60 && volume <= -10)) return;

      set({ volume });
      const noiseMap = get().noiseMap;
      Object.keys(noiseMap).forEach((color) => {
        noiseMap[color].volume.value = volume;
      });
    },
  };
});
