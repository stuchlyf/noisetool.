import { create } from "zustand";
import { type Noise, NOISES } from "@/lib/noise/noise";
import * as Tone from "tone";

export type AudioState = {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  noiseMap: ReadonlyMap<Noise, Tone.Noise>;
  volume: number;
  setVolume: (volume: number) => void;
};

const noiseFactory = (color: Noise) => {
  if (typeof window === "undefined") return;

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
  noiseMap: Object.freeze(
    typeof window === "undefined"
      ? new Map<Noise, Tone.Noise>()
      : new Map<Noise, Tone.Noise>(
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          NOISES.map((color) => [
            color,
            noiseFactory(color)!.set({ volume: -40 }),
          ])
        )
  ),
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  setVolume: (volume: number) => {
    if (!(volume >= -60 && volume <= -10)) return;

    set({ volume });
    get().noiseMap.forEach((n) => {
      n.volume.value = volume;
    });
  },
}));
