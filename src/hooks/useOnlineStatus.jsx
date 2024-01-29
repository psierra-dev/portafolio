import { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

const useOnlineStatus = () => {
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );
};

export default useOnlineStatus;
