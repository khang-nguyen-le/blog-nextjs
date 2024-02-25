import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext();

export function NotificationContextProvider({ children }) {
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (
      activeNotification?.status === "success" ||
      activeNotification?.status === "error"
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [activeNotification]);

  const showActiveNotification = function (notificationData) {
    setActiveNotification(notificationData);
  };

  const value = { activeNotification, showActiveNotification };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
