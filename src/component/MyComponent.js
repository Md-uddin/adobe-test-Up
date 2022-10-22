import { ActionButton, Button, Dialog, DialogTrigger } from '@adobe/react-spectrum';
import Modal from './modal/modal';

export const MyComponent = () => {
  return (
    <div data-testid="my-component-text">
      <DialogTrigger>
        <ActionButton variant="cta" marginTop={'size-200'}>
          Open Modal
        </ActionButton>
        {(close) => (
          <Dialog >
            <Modal close={close} />
          </Dialog>
        )}
      </DialogTrigger>
    </div>
  );
};
