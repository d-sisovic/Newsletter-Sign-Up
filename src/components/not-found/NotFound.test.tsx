import NotFound from './NotFound';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const renderNotFoundComponent = () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);
};

describe('NotFound component', () => {
    it('should display go to homepage button', () => {
        renderNotFoundComponent();

        const button = screen.getByRole('button');
        
        expect(button).toBeEnabled();
    });
});