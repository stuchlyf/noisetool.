"use client";
import React, {
  type ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";
import * as Tone from "tone";
import { useAudioStore } from "@/store/store";
import unmute from "@/lib/unmute";
import { useCookies } from "react-cookie";

export const Toolbar: React.FC<{ volumeSsr: number | undefined }> = ({
  volumeSsr,
}) => {
  const _vol = useAudioStore((state) => state.volume);
  const volume = _vol === -40 ? volumeSsr ?? -40 : _vol;

  const setVolume = useAudioStore((state) => state.setVolume);

  const [, setCookie] = useCookies(["volume"]);

  const [mute, setMute] = useState(
    Tone.Destination.mute || Tone.getContext().state !== "running"
  );

  useEffect(() => {
    Tone.Destination.mute = mute;
  }, [mute]);

  useEffect(() => {
    setCookie("volume", _vol, {
      path: "/",
      expires: new Date(Date.now() + 10 * 365 * 24 * 60 * 60),
    });
  }, [_vol, setCookie]);

  const handleVolumeChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setVolume(e.target.valueAsNumber);
    },
    [setVolume]
  );

  const handleMuteToggleClick = useCallback(() => {
    if (Tone.getContext().state !== "running")
      unmute(Tone.getContext().rawContext as AudioContext, true);

    setMute((prev) => !prev && Tone.getContext().state === "running");
  }, []);

  useEffect(() => {
    const eventHandler = (e: KeyboardEventInit) => {
      switch (e.key) {
        case "m":
        case "AudioVolumeMute":
          handleMuteToggleClick();
          return;
      }
    };

    document.addEventListener("keydown", eventHandler);
    return () => {
      document.removeEventListener("keydown", eventHandler);
    };
  }, [handleMuteToggleClick]);

  return (
    <div
      className={"navbar rounded-box flex w-full gap-4 bg-base-100 px-8 shadow-xl"}
    >
      <button className={'btn btn-square btn-primary btn-sm'}>
        <div className={'tooltip'} data-tip={`${mute ? "unmute" : "mute"} (m)`}>
          <label className="swap">
            <input
              type="checkbox"
              checked={mute}
              onChange={handleMuteToggleClick}
            />
            <IoVolumeMuteOutline className={"swap-on fill-current text-xl"} />
            <IoVolumeHighOutline className={"swap-off fill-current text-xl"} />
          </label>
        </div>
      </button>
      <input
        type={'range'}
        className={'range range-primary w-full'}
        onChange={handleVolumeChange}
        value={volume}
        min={-60}
        max={-10}
      />
    </div>
  );
};
