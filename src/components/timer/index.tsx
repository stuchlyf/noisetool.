'use client';
import React, { useMemo } from "react";
import { useAudioStore } from "@/store";
import { useTimeDifferenceToNow } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export default function Timer() {
  const noise = useAudioStore(state => state.noise);

  const {
    result: timeDifference,
    isError: timeDifferenceIsError
  } = useTimeDifferenceToNow(noise?.startedAt);

  return (
    <div className={cn(
      `grid grid-flow-col gap-5 text-center auto-cols-max text-opacity-70 select-none transition-opacity opacity-0`,
      !timeDifferenceIsError && 'opacity-70'
    )}>
      <div className="flex flex-col">
        <CountdownNumber value={timeDifference?.hours} />hours
      </div>
      <div className="flex flex-col">
        <CountdownNumber value={timeDifference?.minutes} />min
      </div>
      <div className="flex flex-col">
        <CountdownNumber value={timeDifference?.seconds} />sec
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
