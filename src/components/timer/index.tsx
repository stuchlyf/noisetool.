'use client';
import React, { useMemo } from "react";
import { useAudioStore } from "@/store";
import { type Interval, intervalToDuration } from "date-fns";
import { useNow } from "@/lib/hooks";
import { cn } from "@/lib/utils";

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

  return (
    <div className={cn(
      `grid grid-flow-col gap-5 text-center auto-cols-max text-opacity-70 select-none transition-opacity opacity-0`,
      noise && 'opacity-70'
    )}>
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

export function CountdownNumber({ value = 0 }: CountdownNumberProps) {
  const paddedValue = useMemo(
    () => value.toString().padStart(2, '0'),
    [value]
  );

  return (
    <span className={'font-mono text-5xl'}>
      <span className={'text-base-content'}>
        {paddedValue}
      </span>
    </span>
  )
}
