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

  ////tests
  it('should render all the required elements', () => {
    render(renderModal());
    const heading = screen.getByRole('heading', {
      name: /add user to your team you can add a new user below by entering their email address\./i,
    });
    const headingLabel = screen.getByText(/you can add a new user below by entering their email address\./i);
    const Emailinput = screen.getByRole('textbox', { name: /enter email/i });
    const productsHeading = screen.getByRole('heading', { name: /assign products/i });

    const link = screen.getByRole('link', { name: /click here to buy more licenses/i });
    const cancelBtn = screen.getByRole('button', { name: /cancel/i });
    const saveBtn = screen.getByRole('button', { name: /save/i });
    expect(heading).toBeVisible();
    expect(headingLabel).toBeVisible();
    expect(Emailinput).toBeVisible();
    expect(productsHeading).toBeVisible();
    expect(link).toBeVisible();
    expect(cancelBtn).toBeVisible();
    expect(saveBtn).toBeVisible();
  });
  it('it should close on clicking cancel', async () => {
    user.setup();
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
    user.setup();
    render(renderModal());
    let Email = 'me@gmail.com';
    const Emailinput = screen.getByRole('textbox', { name: /enter email/i });
    await user.type(Emailinput, Email);
    expect(Emailinput).toHaveValue(Email);
  });

  // it('save function should work properly', async () => {
  //   user.setup();
  //   render(renderModal());
  //   const Emailinput = screen.getByRole('textbox', { name: /enter email/i });
  //   // await user.type(Emailinput, 'me@gmail.com');
  //   // expect(Emailinput).toHaveValue(Email);
  //   const checkBox = screen.findByRole('checkbox', { name: /select illustrator \(10gb photography plan\) 16 \/ 25/i });
  // });
  it('The save button should perform action properly', async () => {
    user.setup();
    render(renderModal());
    const Emailinput = screen.getByRole('textbox', { name: /enter email/i });
    console.log(Emailinput);
    const checkBox = screen.findByRole('checkbox', { name: /select illustrator \(10gb photography plan\) 16 \/ 25/i });
    const saveBtn = screen.getByRole('button', { name: /save/i });
    await user.type(Emailinput, 'me@gmail.com');
    await user.click(checkBox);
    await user.click(saveBtn);
    expect(screen.getByText(/add user to your team/i)).not.toBeVisible();
  });
});
