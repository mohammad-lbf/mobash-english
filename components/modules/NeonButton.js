import styles from './neonButton.module.css';

const NeonButton = ({name , clickHandler}) => {
    return (
            <button onClick={clickHandler} className={`${styles.neonButton} fs-13`} role="button">{name}</button>
    );
};

export default NeonButton;