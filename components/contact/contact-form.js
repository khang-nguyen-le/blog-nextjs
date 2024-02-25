import { useContext, useState } from "react";
import styles from "./contact-form.module.css";
import { createMessage } from "@/lib/api-utils";
import NotificationContext from "@/store/notification-context";
import Notification from "@/ui/notification";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const { activeNotification, showActiveNotification } =
    useContext(NotificationContext);

  const handleSubmit = async function (e) {
    e.preventDefault();

    // validate the form at client-side here...
    showActiveNotification({
      status: "pending",
      title: "Sending...",
      message: "Your message is sending.",
    });

    try {
      await createMessage({
        email,
        name,
        message,
      });

      showActiveNotification({
        status: "success",
        title: "Success!",
        message: "Successfully sent message.",
      });

      setEmail("");
      setName("");
      setMessage("");
    } catch (err) {
      showActiveNotification({
        status: "error",
        title: "Error!",
        message: err.message,
      });
    }
  };

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={activeNotification?.status === "pending"}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={activeNotification?.status === "pending"}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={activeNotification?.status === "pending"}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button disabled={activeNotification?.status === "pending"}>
            Send Message
          </button>
        </div>
      </form>

      {activeNotification && <Notification />}
    </section>
  );
}

export default ContactForm;
