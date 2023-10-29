import { useState } from 'react';
import styles from './Toggle.module.sass'

const Toggle = ({ toggleNav }) => {

  const [isActive, setIsActive] = useState(false)
  const toggleHandler = () => {
    setIsActive(!isActive)
    toggleNav()
  }

  return (
    <div className={`${styles.toggle} ${isActive && styles.active}`} onClick={toggleHandler}>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  )
}

export default Toggle