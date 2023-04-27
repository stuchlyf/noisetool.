"use client";
import React, {
  type ChangeEventHandler,
  type FormEventHandler, type TouchEventHandler,
  useCallback, useEffect, useState
} from "react";
import { Button, Navbar, Range } from "react-daisyui";
import { IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";
import * as Tone from "tone";
import { useAudioStore } from "@/store/store";
import unmute from "@/lib/unmute";

export const Toolbar: React.FC = () => {
  const volume = useAudioStore((state) => state.volume);
  const setVolume = useAudioStore((state) => state.setVolume);

  const [mute, setMute] = useState(Tone.Destination.mute || Tone.getContext().state !== "running");

  useEffect(() => {
    Tone.Destination.mute = mute;
  }, [mute]);

  const handleVolumeChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setVolume(e.target.valueAsNumber);
    },
    [setVolume]
  );

  const handleMuteToggleClick = useCallback<FormEventHandler & TouchEventHandler>(() => {
    if (Tone.getContext().state !== "running") {
      try {
        unmute(Tone.getContext().rawContext as AudioContext, true)
      } catch (e) {
        console.error('There was an error while trying to start the audio context:', e)
      }
    }
    setMute(prev => (!prev && Tone.getContext().state === "running"))
  }, []);

  return (
    <Navbar
      className={"rounded-box flex w-full gap-4 bg-base-100 px-8 shadow-xl"}
    >
      <Button shape={"square"} color={"primary"} size={"sm"}>
        <label className="swap">
          <input
            type="checkbox"
            checked={mute}
            onChange={handleMuteToggleClick}
          />
          <IoVolumeMuteOutline className={"swap-on fill-current text-xl"} />
          <IoVolumeHighOutline className={"swap-off fill-current text-xl"} />
        </label>
      </Button>
      <Range
        color={"primary"}
        onChange={handleVolumeChange}
        value={volume}
        min={-60}
        max={-10}
      />
    </Navbar>
  );
};
