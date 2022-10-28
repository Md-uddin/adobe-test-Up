import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Modal from '../modal';

describe('Modal', () => {
  /////render function
  const renderModal = (props) => (
    <Provider theme={defaultTheme} colorScheme="light">
      <Modal {...props} />
    </Provider>
  );
  beforeEach(() => {
    user.setup();
  });
  ////tests
  it('should render  the modal', () => {
    render(renderModal());
    const heading = screen.getByRole('heading', {
      name: /add user to your team you can add a new user below by entering their email address\./i,
    });
    const headingLabel = screen.getByText(/you can add a new user below by entering their email address\./i);

    expect(heading).toBeVisible();
    expect(headingLabel).toBeVisible();
  });
  it('it should close on clicking cancel', async () => {
    let closeFunction = jest.fn();
    render(
      renderModal({
        close: closeFunction,
      })
    );
    const cancelBtn = screen.getByRole('button', { name: /cancel/i });
    await user.click(cancelBtn);
    expect(closeFunction).toBeCalled();
  });
  it('it should type the Email', async () => {
    render(renderModal());
    let Email = 'me@gmail.com';
    const Emailinput = screen.getByRole('textbox', { name: /enter email/i });
    await user.type(Emailinput, Email);
    expect(Emailinput).toHaveValue(Email);
  });
});
