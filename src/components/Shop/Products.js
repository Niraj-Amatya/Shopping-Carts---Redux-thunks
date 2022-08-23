import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  {
    id: 'a1',
    title: 'Test1',
    price: 12,
    quantity: 1,
    description: 'This is a first product - amazing!',
  },
  {
    id: 'a2',
    title: 'Test2',
    price: 22,
    quantity: 1,
    description: 'This is a second product - amazing!',
  },
  {
    id: 'a3',
    title: 'Test3',
    price: 40,
    description: 'This is a last product - amazing!',
    quantity: 1,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            quantity={item.quantity}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
