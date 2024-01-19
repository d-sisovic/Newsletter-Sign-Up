import List from './List.component';
import { screen, render } from '@testing-library/react';

const listText = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!'
];

describe('List component', () => {
    it('should render 3 passed list items', () => {
        render(<List list={listText} ></List>);

        listText.forEach(text => {
            const listItem = screen.getByText(text);

            expect(listItem).toBeVisible();
        });
    });
});