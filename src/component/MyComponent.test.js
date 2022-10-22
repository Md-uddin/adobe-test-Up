import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('<MyComponent />', () => {
  it('should return the expected message', () => {
    render(<MyComponent />);
    expect(screen.getByTestId('my-component-text')).toHaveTextContent('Make your changes to this component!');
  });
});
