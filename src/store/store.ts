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
  }
};


export const useAudioStore = create<AudioState>((set, get) => ({
  isPlaying: false,
  volume: -40,
  noiseMap: typeof window === 'undefined' ? {} as NoiseMap : {
    white: noiseFactory("white").set({ volume: -40 }),
    pink: noiseFactory("pink").set({ volume: -40 }),
    brown: noiseFactory("brown").set({ volume: -40 }),
    "dark-brown": noiseFactory("dark-brown").set({ volume: -40 }),
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
}));
