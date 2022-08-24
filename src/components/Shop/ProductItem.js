import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/Cart-slice';

const ProductItem = (props) => {
  const { title, price, description, id, quantity } = props;

  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(cartActions.add({ title, price, id, quantity }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onAdd}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
