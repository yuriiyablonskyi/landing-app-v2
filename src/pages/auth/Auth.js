import styles from './Auth.module.sass'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/button/Button'

const Authorization = ({ onVisible }) => (
  <div className={styles.authorization}>
    <form className={styles.form}>
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <Button text="SIGN IN" />
    </form>
    <button onClick={() => onVisible(false)} className={styles.btn}>&#10006;</button>
  </div>
)

export default Authorization

