import Button from './Button';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';

describe('Button component', () => {
    it('should render button', () => {
        render(<MemoryRouter><Button emailState={{ email: 'sisko', valid: false }} ></Button></MemoryRouter>);

        expect(screen.getByText('Subscribe to monthly newsletter')).toBeVisible();
    });
});