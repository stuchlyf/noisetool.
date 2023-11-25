'use client';
import React, { useMemo } from "react";
import { useAudioStore } from "@/store";
import { type Interval, intervalToDuration } from "date-fns";
import useNow from "@/lib/useNow";

export default function Timer() {
  const noise = useAudioStore(state => state.noise);
  const now = useNow();

  const {
    hoursActive,
    minutesActive,
    secondsActive
  } = useMemo(() => {
    if (!noise) return {hoursActive: undefined, minutesActive: undefined, secondsActive: undefined};

    const interval = {
      start: noise.startedAt,
      end: now
    } satisfies Interval;

    const duration = intervalToDuration(interval);

    return {
      hoursActive: duration.hours,
      minutesActive: duration.minutes,
      secondsActive: duration.seconds
    }
  }, [noise, now]);

  if (!noise) return <div>no noise</div>

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max text-opacity-70 opacity-70">
      <div className="flex flex-col">
        <CountdownNumber value={hoursActive} />hours
      </div>
      <div className="flex flex-col">
        <CountdownNumber value={minutesActive} />min
      </div>
      <div className="flex flex-col">
        <CountdownNumber value={secondsActive} />sec
      </div>
    </div>
  );
}


export type CountdownNumberProps = Readonly<{ value?: number }>;

export function CountdownNumber({ value }: CountdownNumberProps) {
  return (
    <span className={'countdown font-mono text-5xl'}>
      {/* `@ts-ignore` needs to be here, since `--value` isn't recognized as a css property. */}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <span style={{ '--value': value ?? 0 }} className={'text-base-content'} />
    </span>
  )
}
