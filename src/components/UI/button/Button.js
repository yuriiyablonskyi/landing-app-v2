import styles from './Button.module.sass'

const Button = ({ text, onVisible }) => <button className={styles.btn} onClick={() => onVisible(true)}>{text}</button>

export default Button