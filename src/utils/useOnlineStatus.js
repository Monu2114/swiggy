import React from "react";
import { useState, useEffect } from "react";
export default function useOnlineStatus() {
  const [status, setStatus] = useState(true); // Check initial online status

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
