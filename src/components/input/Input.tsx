import { ChangeEvent } from 'react';
import styles from './Input.module.scss';
import { IEmailState } from '../../ts/models/email-state.model';

const isProvidedEmailValid = (value: string) => value.trim() !== '' && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

const Input = ({ emailState, setEmailState }: { emailState: IEmailState, setEmailState: (email: string, valid: boolean) => void }) => {
    const emailInvalid = !emailState.valid;

    const onSetEmailState = (event: ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        const valid = isProvidedEmailValid(email);

        setEmailState(email, valid);
    };

    return <div className={styles.container}>
        <div className={styles['container__label']}>
            <label htmlFor="email">Email address</label>

            {emailInvalid && <span>Valid email required</span>}
        </div>


        <input type="email" name="email" id="email" placeholder="email@company.com" data-testid="email"
            className={`${styles['container__input']} ${emailInvalid ? styles['container__input--invalid'] : ''}`}
            onChange={event => onSetEmailState(event)} />
    </div>;
};

export default Input;