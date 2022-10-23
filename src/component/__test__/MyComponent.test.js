import { render, screen } from '@testing-library/react';
import { MyComponent } from '../MyComponent';
describe('MyComponent', () => {
  it('should render the Open MOdal button', () => {
    render(<MyComponent />);
    expect(screen.getByRole('button', { name: /open modal/i })).toBeVisible();
  });
});
