import styles from './NotFound.module.scss';
import { useNavigate } from 'react-router-dom';
import modalStyles from '../modal/Modal.module.scss';
import xCircleImg from '../../assets/images/x-circle.svg';
import { RoutePaths } from '../../ts/enums/route-paths.enum';

const NotFound = () => {
    const navigate = useNavigate();

    const onNavigateToRoot = () =>  navigate(RoutePaths.ROOT);

    return <div className={modalStyles.container}>
        <div>
            <img src={xCircleImg} alt="success" className={styles.img} />

            <h1 className={`title ${modalStyles.title}`}>Page not found!</h1>

            <p>Uh-oh! Page not found (404 error). Please check the URL or return to the homepage. Apologies for any inconvenience!</p>
        </div>

        <button className={`button ${modalStyles.button}`} onClick={onNavigateToRoot}>Go to homepage</button>
    </div>;
};

export default NotFound;