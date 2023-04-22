import styles from './StyleButton.module.css';

const StyleButton = (props: any) => {
  return (
    <span className={styles.btn}>{props.children}</span>
  );
};

export { StyleButton };
