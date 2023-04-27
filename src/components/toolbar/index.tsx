"use client";
import React, {
  type ChangeEventHandler,
  type FormEventHandler,
  useCallback,
} from "react";
import { Button, Navbar, Range, Swap } from "react-daisyui";
import { IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";
import * as Tone from "tone";
import { useAudioStore } from "@/store/store";

export const Toolbar: React.FC = () => {
  const volume = useAudioStore((state) => state.volume);
  const setVolume = useAudioStore((state) => state.setVolume);

  const handleVolumeChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setVolume(e.target.valueAsNumber);
    },
    [setVolume]
  );

  const handleMuteToggleClick = useCallback<FormEventHandler>(async () => {
    if (Tone.context.state !== "running") {
      await Tone.start();
    }
    Tone.Destination.mute = !Tone.Destination.mute;
  }, []);

  return (
    <Navbar
      className={"rounded-box flex w-full gap-4 bg-base-100 px-8 shadow-xl"}
    >
      <Button shape={"square"} color={"primary"} size={"sm"}>
        <Swap
          offElement={<IoVolumeHighOutline className={"text-xl"} />}
          onElement={<IoVolumeMuteOutline className={"text-xl"} />}
          active={Tone.Destination.mute}
          onChange={handleMuteToggleClick}
        />
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
