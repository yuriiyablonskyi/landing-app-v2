import styles from './NavItem.module.sass'

const NavItem = ({ text }) => (
  <a className={styles.item} href="#">{text}</a>
)

export default NavItem