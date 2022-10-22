import {
  Button,
  ButtonGroup,
  Content,
  Flex,
  Heading,
  TextField,
  Form,
  ListView,
  Item,
  ActionGroup,
  ActionButton,
  ActionMenu,
  Text,
} from '@adobe/react-spectrum';
import React from 'react';
import { H3, H4, HeaderText, ListContainer } from './styles';

const Modal = ({ close }) => {
  let [value, setValue] = React.useState('me@email.com');
  let isValid = React.useMemo(() => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value), [value]);
  return (
    <>
      <Heading maxWidth={'size-6000'} marginStart={{ S: 'size-400' }}>
        <H3>Add user to your team</H3>

        <HeaderText>You can add a new user below by entering their email address.</HeaderText>
      </Heading>

      <Content maxWidth={{ base: 'size-3000', S: 'size-3400', M: 'size-4600', L: 'size-6000' }} marginX="auto">
        <Form>
          <Flex gap="size-150" columnGap={'size-350'} wrap>
            <TextField
              label="Enter email"
              marginEnd="size-1000"
              validationState={isValid ? 'valid' : 'invalid'}
              value={value}
              onChange={setValue}
              inputMode="email"
              // errorMessage={<p>Please Enter a valid Email.</p>}
            />
            <TextField label="First name(optional)" />
            <TextField label="Last name(optional)" />
          </Flex>
        </Form>
        <H4>Assign products</H4>
        <ListContainer>
          <Flex direction={'row'} justifyContent="space-between" marginX={{ base: 'size-100', M: 'size-200' }}>
            <p className="bold">PRODUCT</p> <p className="bold">licenses available</p>
          </Flex>
          <div className="box">
            <ListView
              selectionMode="multiple"
              aria-label="Static ListView items example"
              isQuiet
              selectionStyle="checkbox"
            >
              <Item>
                <Text>Photoshop</Text>
                <ActionButton>3 / 5</ActionButton>
              </Item>
              <Item>
                <Text>illustrator (10GB Photography Plan)</Text>
                <ActionButton>2 / 10</ActionButton>
              </Item>
              <Item>
                <Text>Creative Cloud All Apps (inc. Adobe Stock, 1T...</Text> <ActionButton>1 / 10</ActionButton>
              </Item>
            </ListView>
          </div>
          <a className="link" href="#link">
            Click here to buy more licenses
          </a>
        </ListContainer>
      </Content>

      <ButtonGroup marginEnd={{ S: 'size-400' }}>
        <Button variant="secondary" onPress={close}>
          Cancel
        </Button>
        <Button variant="cta" onPress={close}>
          Save
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Modal;
