import { create } from "zustand";
import { type Noise } from "@/lib/noise/noise";
import * as Tone from "tone";

export type AudioState = {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  noiseMap: ReadonlyMap<Noise, Tone.Noise>;
  volume: number;
  setVolume: (volume: number) => void;
};

const noiseFactory = (noise: Noise) => {
  if (typeof window === "undefined") return;

  return new Tone.Noise(noise).set({volume: -40, }).toDestination();
}

export const useAudioStore = create<AudioState>((set, get) => ({
  isPlaying: false,
  volume: -40,
  noiseMap: Object.freeze(new Map([
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ["white" as const, noiseFactory("white")!],
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ["brown" as const, noiseFactory("brown")!],
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ["pink" as const, noiseFactory("pink")!],
  ])),
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  setVolume: (volume: number) => {
    if (!(volume > -60 && volume < -10)) return;

    set({ volume });
    get().noiseMap.forEach(n => {
      n.volume.value = volume;
    });
  }
}));