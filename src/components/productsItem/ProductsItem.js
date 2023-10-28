import styles from './ProductsItem.module.sass'

const ProductsItem = ({ title, description, src }) => (
  <div className={styles.item}>
    <img className={styles.img} src={src} alt="cat" />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.desc}>{description}</p>
  </div>
)

export default ProductsItem