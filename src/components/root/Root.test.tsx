import Root from './Root';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

const mockedUsedNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom") as Record<string, any>;

    return {
        ...actual,
        useNavigate: () => mockedUsedNavigate
    };
  });

describe('Root component', () => {
    beforeEach(() => {
        render(<MemoryRouter><Root /></MemoryRouter>);
    });

    it('should display correctly initial form state', () => {
        const button = screen.getByRole('button');
        const emailInput = screen.getByRole('textbox');
        const invalidText = screen.getByText('Valid email required');

        expect(button).toBeDisabled();

        expect(emailInput).toBeVisible();

        expect(invalidText).toBeVisible();
    });

    it('should enable button when correct email is inserted', () => {
        const button = screen.getByRole('button');
        const emailInput = screen.getByRole('textbox');

        fireEvent.change(emailInput, { target: { value: 'siskoftn@gmail.com' } });

        expect(button).toBeEnabled();
    });

    it('should disable button when incorrect email is inserted', () => {
        const button = screen.getByRole('button');
        const emailInput = screen.getByRole('textbox');

        fireEvent.change(emailInput, { target: { value: 'siskoftn' } });

        expect(button).toBeDisabled();
    });

    it('should render modal component, if email was correct', () => {
        const button = screen.getByRole('button');
        const emailInput = screen.getByRole('textbox');

        fireEvent.change(emailInput, { target: { value: 'siskoftn@gmail.com' } });

        fireEvent.click(button);

        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    });
});
