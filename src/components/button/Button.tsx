import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../ts/enums/route-paths.enum';
import { IEmailState } from '../../ts/models/email-state.model';

const Button = (data: { emailState: IEmailState }) => {
    const navigate = useNavigate();
    const emailInvalid = !data.emailState.valid;

    const onOpenModal = () => {
        if (emailInvalid) { return; }

        navigate(`${RoutePaths.MODAL}/${data.emailState.email}`);
    };

    return <button className={`button ${emailInvalid ? 'button--invalid' : 'button--valid'}`}
        disabled={emailInvalid} onClick={onOpenModal}>
        Subscribe to monthly newsletter
    </button>;
};

export default Button;