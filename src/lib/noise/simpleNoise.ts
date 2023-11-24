import * as Tone from "tone";

export default function simpleNoise(color: 'white' | 'pink' | 'brown') {
  return new Tone.Noise(color);
}
