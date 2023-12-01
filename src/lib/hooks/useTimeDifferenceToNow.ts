import { useNow, useTimeDifference } from "@/lib/hooks";

export default function useTimeDifferenceToNow(start?: Date) {
  const now = useNow();

  return useTimeDifference(start, now);
}