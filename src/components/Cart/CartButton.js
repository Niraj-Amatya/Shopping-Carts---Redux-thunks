import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../Store/UI-Slice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(uiActions.toggleCartButton());
  };

  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
