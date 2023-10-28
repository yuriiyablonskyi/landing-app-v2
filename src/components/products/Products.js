import styles from './Products.module.sass'
import ProductsItem from '../productsItem/ProductsItem'

const Products = ({ listItems }) => (
  <section className={styles.products}>
    {listItems.map(({ id, ...item }) => <ProductsItem key={id}  {...item} />)}
  </section >
)


export default Products


