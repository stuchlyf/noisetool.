import { useEffect, useState } from "react";

/**
 * Hook that returns `now`, where `now` is the current date-time.</br>
 * It updates every `950`ms.
 * @returns Date the current date-time.
 */
export default function useNow() {
  const [now, setNow] = useState(new Date(Date.now()));

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date(Date.now()))
    }, 950);

    return () => clearInterval(interval)
  }, []);

  return now;
}
