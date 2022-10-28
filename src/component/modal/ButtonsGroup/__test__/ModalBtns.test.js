import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Modal from '../../modal';
import ModalBtns from '../ModalBtns';

describe('Modal', () => {
  /////render function
  const renderModal = (...props) => (
    <Provider theme={defaultTheme} colorScheme="light">
      <Modal {...props} />
    </Provider>
  );
  const renderButtons = (close, handleSubmit) => (
    <Provider theme={defaultTheme} colorScheme="light">
      <ModalBtns close={close} handleSubmit={handleSubmit} />
    </Provider>
  );
  beforeEach(() => {
    user.setup();
  });
  ////tests
  it('should render the action buttons', () => {
    let close = jest.fn();

    render(renderModal(close));
    const cancelBtn = screen.getByRole('button', { name: /cancel/i });
    const saveBtn = screen.getByRole('button', { name: /save/i });
    expect(cancelBtn).toBeVisible();
    expect(saveBtn).toBeVisible();
  });
  it('should close on click cancel', async () => {
    let close = jest.fn();
    let handleSubmit = jest.fn();
    console.log(renderButtons(close, handleSubmit), 'modal buttons');
    render(renderButtons(close, handleSubmit));
    const cancelBtn = screen.getByRole('button', { name: /cancel/i });
    await user.click(cancelBtn);
    expect(close).toBeCalled();
  });
  it('should called handle save on click save', async () => {
    let close = jest.fn();
    let handleSubmit = jest.fn();
    console.log(renderButtons(close, handleSubmit), 'modal buttons');
    render(renderButtons(close, handleSubmit));
    const saveBtn = screen.getByRole('button', { name: /save/i });
    await user.click(saveBtn);
    expect(handleSubmit).toBeCalled();
  });
});
