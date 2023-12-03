import styles from './Modal.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePaths } from '../../ts/enums/route-paths.enum';
import checkboxImg from '../../assets/images/icon-success.svg';

const Modal = () => {
    const { email } = useParams();
    const navigate = useNavigate();

    const onDismissMessage = () => navigate(RoutePaths.ROOT);

    return <div className={styles.container}>
        <div className={styles.wrapper}>
            <div>
                <img src={checkboxImg} alt="success" />

                <h1 className={`title ${styles.title}`}>Thanks for subscribing!</h1>

                <p>A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription</p>
            </div>

            <button className={`button ${styles.button}`} onClick={onDismissMessage}>Dismiss message</button>
        </div>
    </div>;
};

export default Modal;