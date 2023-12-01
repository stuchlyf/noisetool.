import { useMemo } from "react";
import { type Interval, intervalToDuration } from "date-fns";

type UseTimeDifferenceReturnValue = {result: Duration, isError?: false} | {isError: true, result: undefined}

export default function useTimeDifference(x?: Date, y?: Date): UseTimeDifferenceReturnValue {
  return useMemo(() => {
    if (!x || !y) return {isError: true};

    const interval = {
      start: x,
      end: y
    } satisfies Interval;

    const {...result} = intervalToDuration(interval);

    return {result};
  }, [x, y]);
}