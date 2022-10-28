import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import ModalForm from '../ModalForm';

describe('Modal', () => {
  /////render function

  const renderForm = (...props) => (
    <Provider theme={defaultTheme} colorScheme="light">
      <ModalForm {...props} />
    </Provider>
  );
  beforeEach(() => {
    user.setup();
  });
  ////tests
  it('all the inputs should be type able', async () => {
    render(renderForm());
    let Email = 'me@gmail.com';
    const Emailinput = screen.getByRole('textbox', { name: /enter email/i });
    const firstName = screen.getByRole('textbox', { name: /first name\(optional\)/i });
    const lastName = screen.getByRole('textbox', { name: /last name\(optional\)/i });
    await user.type(firstName, Email);
    await user.type(lastName, Email);
    await user.type(Emailinput, Email);
    expect(Emailinput).toHaveValue(Email);
    expect(firstName).toHaveValue(Email);
    expect(lastName).toHaveValue(Email);
  });
  it('should call set Email on typing Eamil', async () => {
    let email = 'me@gmail.com';
    let setEmail = jest.fn();
    render(renderForm(email, setEmail));
    const Emailinput = screen.getByRole('textbox', { name: /enter email/i });
    await user.type(Emailinput, email);
    expect(Emailinput).toHaveValue(email);
    expect(setEmail).toBeCalled()
  });
});
