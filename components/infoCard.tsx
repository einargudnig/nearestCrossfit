import styles from "../styles/Home.module.css";
import Icon from "./icons";

export const InfoCard = ({ name, address, openingHours, contact, socials }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardDiv}>
        <div className={styles.cardDivContent}>
          <span className={styles.cardDivKey}>Name:</span>{" "}<span>{name}</span>
        </div>
        <div className={styles.cardDivContent}>
          <span className={styles.cardDivKey}>Address:</span>{" "}<span>{address}</span>
        </div>
      </div>
      <div className={styles.openingHours}>
        <span className={styles.description}>Opening Hours:</span> <br />
          <span>Monday:</span>{" "}<span>{openingHours.mon}</span> <br />
          <span>Tuesday:</span>{" "}<span>{openingHours.tue}</span> <br />
          <span>Wednesday:</span>{" "}<span>{openingHours.wed}</span> <br />
          <span>Thursday:</span>{" "}<span>{openingHours.thu}</span> <br />
          <span>Friday:</span>{" "}<span>{openingHours.fri}</span> <br />
          <span>Saturday:</span>{" "}<span>{openingHours.sat}</span> <br />
          <span>Sunday:</span>{" "}<span>{openingHours.sun}</span> <br />
      </div>
      <div className={styles.cardDiv}>
        <div className={styles.cardDivContent}>
          <span>Phone:</span>{" "}<span>{contact.phone}</span>
        </div>
        <div className={styles.cardDivContent}>
          <span>Email:</span>{" "}<span>{contact.email}</span>
        </div>
      </div>
      <div className={styles.cardDiv}>
        <div className={styles.cardDivContent}>
          <span>Instagram:</span>{" "}<span>{socials.instagram}</span>
        </div>
        <div className={styles.cardDivContent}>
          <span>Facebook:</span>{" "}<span>{socials.facebook}</span>
        </div>
        <div className={styles.cardDivContent}>
          <span>Website:</span>{" "}<span>{socials.href}</span>
          {/* {socials.href ? <Icon kind="external" href={socials.href} /> : null} */}
        </div>
      </div>
        
      </div>
  )
}