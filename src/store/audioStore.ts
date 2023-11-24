"use client";
import { create } from "zustand";
import { type NoiseColor, noises } from "@/lib/noise";
import type * as Tone from "tone";
import { parseCookies, getCookies } from "@/lib/cookie";

const DEFAULT_VOLUME = -40;

export type AudioState = {
  volume: number;
  setVolume: (volume: number) => void;

  noise?: {noise: Tone.Noise, color: NoiseColor};
  setNoise: (color: NoiseColor) => void;
};

const noiseFactory = (color: NoiseColor) => {
  // Needs to happen for this to work in SSR
  if (typeof window === "undefined") return undefined as unknown as Tone.Noise;

  return noises[color].start();
};

const getVolumeFromCookies = () => {
  try {
    const cookies = parseCookies(getCookies());
    const volumeCookie = cookies.find(([key]) => key === 'volume');

    if (!volumeCookie?.[1]) return DEFAULT_VOLUME;

    return parseInt(volumeCookie[1]);
  } catch (e) {
    console.warn('There was an error trying to read the \'volume\' cookie.', e)
    return DEFAULT_VOLUME;
  }
};

const useAudioStore = create<AudioState>((set, get) => ({
  noise: undefined,
  setNoise: (color: NoiseColor) => {
    const currentNoise = get().noise;

    if (currentNoise) {
      currentNoise.noise.stop()
      set({noise: undefined})

      if (currentNoise.color === color) return;
    }

    const volume = get().volume;
    const noise = {
      noise: noiseFactory(color).set({volume}).start(),
      color
    }

    set({noise});
  },

  volume: getVolumeFromCookies(),
  setVolume: (volume: number) => {
    if (!(volume >= -60 && volume <= -10)) return;

    set({ volume });

    const noise = get().noise;
    if (!noise) return;

    noise.noise.set({volume});
  },
}));

export default useAudioStore;
