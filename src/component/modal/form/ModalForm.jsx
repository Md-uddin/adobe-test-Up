import { Flex, Form, TextField } from '@adobe/react-spectrum';
import React from 'react';

const ModalForm = ({ email, setEmail, firstName, setFirstName, lastName, setLastName }) => {
  let isValid = React.useMemo(() => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email), [email]);
  return (
    <Form>
      <Flex gap="size-150" columnGap={'size-350'} wrap>
        <TextField
          label="Enter email"
          marginEnd="size-1000"
          validationState={isValid ? 'valid' : 'invalid'}
          value={email}
          onChange={setEmail}
          autoFocus={true}
          inputMode="email"
        />
        <TextField label="First name(optional)" value={firstName} onChange={setFirstName} />
        <TextField label="Last name(optional)" value={lastName} onChange={setLastName} />
      </Flex>
    </Form>
  );
};

export default ModalForm;
