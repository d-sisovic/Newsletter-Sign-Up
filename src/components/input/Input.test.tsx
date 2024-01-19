import Input from './Input';
import { screen, render, fireEvent } from '@testing-library/react';

describe('List component', () => {
    it('should show error message, when email is invalid', () => {
        const setEmailState = vi.fn();

        render(<Input emailState={{ email: 'sisko', valid: false }} setEmailState={setEmailState} ></Input>);

        expect(screen.getByText('Valid email required')).toBeVisible();
    });

    it('should call setEmailState once, if input is changed', () => {
        const setEmailState = vi.fn();

        render(<Input emailState={{ email: 'sisko', valid: false }} setEmailState={setEmailState} ></Input>);

        const inputElement = screen.getByTestId('email');

        fireEvent.change(inputElement, { target: { value: 'change' } });

        expect(setEmailState).toHaveBeenCalledTimes(1);
    });
});