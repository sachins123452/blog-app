import React, { useEffect, useState, useLayoutEffect } from 'react';

export default function useNetworkStatus() {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);
  useLayoutEffect(() => {
    const handleOnline = () => {
      setOnlineStatus(true);
    };
    const handleOffline = () => {
      setOnlineStatus(false);
    };
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    // Cleanup the event listeners when the component unmounts

    return() => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return onlineStatus;
}
