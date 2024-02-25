import { createPortal } from "react-dom";

import classes from "./notification.module.css";
import React, { useContext } from "react";
import NotificationContext from "@/store/notification-context";

function Notification() {
  const { activeNotification } = useContext(NotificationContext);

  let statusClasses = "";

  if (activeNotification.status === "success") {
    statusClasses = classes.success;
  }

  if (activeNotification.status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return createPortal(
    <div className={cssClasses}>
      <h2>{activeNotification.title}</h2>
      <p>{activeNotification.message}</p>
    </div>,
    document.getElementById("notification")
  );
}

export default Notification;
