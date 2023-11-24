import * as Tone from 'tone';
import simpleNoise from "@/lib/noise/simpleNoise";

export const NOISES = Object.freeze([
  'white' as const,
  'pink' as const,
  'brown' as const,
  'dark-brown' as const,
  'black' as const
])

export type NoiseColor = (typeof NOISES)[number];

export type Noise = {
  start: () => Tone.Noise;
}

export const noises: {[k in NoiseColor]: Noise} = {
  white: { start: () => simpleNoise('white').toDestination() },
  pink: { start: () => simpleNoise('pink').toDestination() },
  brown: { start: () => simpleNoise('brown').toDestination() },
  "dark-brown": {
    start: () => {
      const noise = simpleNoise('brown');

      const lpFilter = new Tone.Filter({
        type: 'lowpass',
        frequency: 420,
        rolloff: -12
      });

      const hpFilter = new Tone.Filter({
        type: 'highpass',
        frequency: 80,
        rolloff: -48
      })

      return noise.chain(lpFilter, hpFilter, Tone.Destination);
    }
  },
  black: {
    start: () => {
      const noise = simpleNoise('brown');

      const lpFilter = new Tone.Filter({
        type: 'lowpass',
        frequency: 100,
        rolloff: -24
      });

      const hpFilter = new Tone.Filter({
        type: 'highpass',
        frequency: 0,
        rolloff: -48
      })

      return noise.chain(lpFilter, hpFilter, Tone.Destination);
    }
  }
}
