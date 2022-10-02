import styles from "../../styles/Home.module.css";

// import Mail from './mail.svg'
// import Github from './github.svg'
import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
// import Linkedin from './linkedin.svg'
// import Twitter from './twitter.svg'
import External from './external.svg'

const components = {
  facebook: Facebook,
  instagram: Instagram,
  external: External,
}

const Icon = ({ kind, href }) => {
  // if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    // return null


  const IconSvg = components[kind]

  return (
    <a
      className={styles.icons}
      target="_blank"
      rel='noopener noreferrer'
      href={href}
    >
      <>
        <span className="sr-only">{kind}</span>
        <IconSvg />
      </>
    </a>
  )
}
export default Icon