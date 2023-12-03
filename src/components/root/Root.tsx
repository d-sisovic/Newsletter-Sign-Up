import styles from './Root.module.scss';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconListImg from '../../assets/images/icon-list.svg';
import { RoutePaths } from '../../ts/enums/route-paths.enum';
import illustrationImg from '../../assets/images/illustration-sign-up-mobile.svg';

const Root = () => {
    const navigate = useNavigate();
    const [emailState, setEmailState] = useState<{ email: string, valid: boolean }>({ email: '', valid: false });

    const onSetEmailState = (event: ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        const valid = email.trim() !== '' && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

        setEmailState({ email, valid });
    };

    const onOpenModal = () => {
        if (!emailState.valid) { return; }

        navigate(`${RoutePaths.MODAL}/${emailState.email}`);
    };

    return <div className={styles.container}>
        <div className={styles.wrapper}>
            <img src={illustrationImg} alt="illustration" className={styles.img} />

            <div className={styles.body}>
                <h1 className="title">Stay updated!</h1>

                <p className={styles['body__subtitle']}>Join 60,000+ product managers receiving monthly updates on:</p>

                <ul className={styles['body__list']}>
                    <li>
                        <img src={iconListImg} alt="check" />

                        <p>Product discovery and building what matters</p>
                    </li>

                    <li>
                        <img src={iconListImg} alt="check" />

                        <p>Measuring to ensure updates are a success</p>
                    </li>

                    <li>
                        <img src={iconListImg} alt="check" />

                        <p>And much more!</p>
                    </li>
                </ul>

                <div className={styles['input__container']}>
                    <div className={styles['input__container__label']}>
                        <label htmlFor="email">Email address</label>

                        {!emailState.valid && <span>Valid email required</span>}
                    </div>


                    <input type="email" name="email" id="email" placeholder="email@company.com"
                        className={`${styles['input__container__input']} ${!emailState.valid ? styles['input__container__input--invalid'] : ''}`}
                        onChange={event => onSetEmailState(event)} />
                </div>

                <button className={`button ${!emailState.valid ? 'button--invalid' : 'button--valid'}`}
                    disabled={!emailState.valid} onClick={onOpenModal}>
                    Subscribe to monthly newsletter
                </button>
            </div>
        </div>
    </div>;
};

export default Root;