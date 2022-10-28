import { Button, ButtonGroup } from '@adobe/react-spectrum';
import React from 'react';

const ModalBtns = ({ close, handleSubmit }) => {
  return (
    <>
      <ButtonGroup marginEnd={{ S: 'size-400' }}>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button
          variant="cta"
          onPress={() => {
            handleSubmit();
          }}
        >
          Save
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ModalBtns;
