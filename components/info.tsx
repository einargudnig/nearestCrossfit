import { DATA } from '../tempData'
import { InfoCard } from './infoCard'
import styles from "../styles/Home.module.css";

export const Info = () => {
  
  // const temp = DATA.map((d) => (d.name))
  // const temp1 = DATA.map((d) => (d.openingHours))
  // console.log(temp)
  // console.log(temp1[0].mon)

  return (
    <div className={styles.infoContainer}>
      <h3>This box contains the Information for the box!</h3>
      <div className={styles.cardContainer}>
        {DATA.map((d) => (
          <InfoCard key={d.name} name={d.name} address={d.address} openingHours={d.openingHours} contact={d.contact} socials={d.socials} />
        ))}
      </div>
      <div className={styles.postScript}>
        If the information you see above is not correct update them on this link. I fetch my data from this site.
      </div>
    </div>
  )
}