import styles from './Toggle.module.sass'

const Toggle = ({ onToggleNav, isActive }) => (
  <div className={`${styles.toggle} ${isActive && styles.active}`} onClick={onToggleNav}>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
  </div>
)

export default Toggle