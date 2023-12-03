import Modal from './Modal';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const renderModalComponent = () => {
    render(<MemoryRouter><Modal /></MemoryRouter>);
};

describe('Modal component', () => {
    it('should display dismiss button', () => {
        renderModalComponent();

        const button = screen.getByRole('button');
        
        expect(button).toBeEnabled();
    });
});