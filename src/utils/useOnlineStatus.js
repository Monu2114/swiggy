import { useState, useEffect } from "react";
export default function useOnlineStatus() {
  const [status, setStatus] = useState(() => window.navigator.onLine); // Check initial online status

  useEffect(() => {
    function handleOnline() {
      setStatus(true);
    }
    function handleOffline() {
      setStatus(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return status;
}
