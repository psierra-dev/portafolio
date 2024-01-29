import React, { useEffect, useState } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

const StatusBar = () => {
  const { isOnline } = useOnlineStatus();

  return (
    <div>
      <span className="text-gray-200">{isOnline ? "online" : "offline"}</span>
    </div>
  );
};

export default StatusBar;
