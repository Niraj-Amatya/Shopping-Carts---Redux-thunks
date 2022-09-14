import classes from './Notification.module.css';

const Notification = (props) => {
  let specialClassess = '';

  if (props.status === 'error') {
    specialClassess = classes.error;
  }
  if (props.status === 'success') {
    specialClassess = classes.success;
  }

  const helperClass = `${classes.notification} ${specialClassess}`;
  return (
    <section className={helperClass}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};
