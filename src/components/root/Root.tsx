import { useState } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import styles from './Root.module.scss';
import List from '../list/List.component';
import { IEmailState } from '../../ts/models/email-state.model';
import illustrationMobileImg from '../../assets/images/illustration-sign-up-mobile.svg';
import illustrationDesktopImg from '../../assets/images/illustration-sign-up-desktop.svg';

const listText = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!'
];

const Root = () => {
    const [emailState, setEmailState] = useState<IEmailState>({ email: '', valid: false });

    const handleSetEmailState = (email: string, valid: boolean) => setEmailState({ email, valid });

    return <div className={styles.container}>
        <div className={styles.wrapper}>
            <img src={illustrationMobileImg} alt="illustration" className={`${styles.img} ${styles['img--mobile']}`} />
            <img src={illustrationDesktopImg} alt="illustration" className={`${styles.img} ${styles['img--desktop']}`} />

            <div className={styles.body}>
                <h1 className="title">Stay updated!</h1>

                <p className={styles['body__subtitle']}>Join 60,000+ product managers receiving monthly updates on:</p>

                <List list={listText}></List>

                <Input emailState={emailState} setEmailState={handleSetEmailState}></Input>

                <Button emailState={emailState}></Button>
            </div>
        </div>
    </div>;
};

export default Root;