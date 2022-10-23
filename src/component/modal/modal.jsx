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
  ActionButton,
  Text,
} from '@adobe/react-spectrum';
import React, { useMemo, useState } from 'react';
import { useLicenseApi } from '../../services/licenseApi';
import { useUserApi } from '../../services/userApi';

import { H3, H4, HeaderText, ListContainer } from './styles';
// import { SubmitModelData } from '../../asyncFunctions/model';

const Modal = ({ close }) => {
  const [value, setValue] = React.useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [products, setProducts] = useState(null);
  const { createUser } = useUserApi();
  const { assignLicensesToUser, getOrganizationProducts } = useLicenseApi();
  useMemo(async () => {
    setProducts(await getOrganizationProducts());
    return await getOrganizationProducts();
  }, []);

  const [selectedKeys, setSelectedKeys] = useState(['photoshop']);
  let isValid = React.useMemo(() => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value), [value]);
  const handleSubmit = async () => {
    if (!isValid) return alert('please Enter a valid Email to continue');
    const data = {
      Email: value,
      firstName,
      lastName,
    };

    try {
      const newUser = await createUser(data);
      await assignLicensesToUser(newUser?.userId, selectedKeys);
      close();
    } catch (error) {
      alert('something went wrong');
    }
  };

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
              autoFocus={true}
              inputMode="email"
            />
            <TextField label="First name(optional)" value={firstName} onChange={setFirstName} />
            <TextField label="Last name(optional)" value={lastName} onChange={setLastName} />
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
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              {products?.map((product) => (
                <Item key={product.id} >
                  <Text>{product?.productName}</Text>
                  <ActionButton>
                    {product?.assignedLicenses} / {product?.ownedLicenses}
                  </ActionButton>
                </Item>
              ))}
            </ListView>
          </div>
          <a className="link" href="#link" target="_blank">
            Click here to buy more licenses
          </a>
        </ListContainer>
      </Content>

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

export default Modal;
