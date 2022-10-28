import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import ModalHeader from '../ModalHeader';

describe('Modal', () => {
  /////render function
  const renderModal = (props) => (
    <Provider theme={defaultTheme} colorScheme="light">
      <ModalHeader {...props} />
    </Provider>
  );
  beforeEach(() => {
    user.setup();
  });
  ////tests
  it('should show the header properly', () => {
    render(renderModal());
    const heading = screen.getByRole('heading', {
      name: /add user to your team you can add a new user below by entering their email address\./i,
    });
    const headingLabel = screen.getByText(/you can add a new user below by entering their email address\./i);

    expect(heading).toBeVisible();
    expect(headingLabel).toBeVisible();
  });
});
