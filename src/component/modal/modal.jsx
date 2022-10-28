import { Content } from '@adobe/react-spectrum';
import React, { useState } from 'react';
import { useLicenseApi } from '../../services/licenseApi';
import { useUserApi } from '../../services/userApi';
import ModalBtns from './ButtonsGroup/ModalBtns';
import ModalForm from './form/ModalForm';
import ModalHeader from './header/ModalHeader';
import ProductsList from './ProductsList/ProductsList';

const Modal = ({ close }) => {
  const [email, setemail] = React.useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const { createUser } = useUserApi();
  const { assignLicensesToUser } = useLicenseApi();
  const [selectedKeys, setSelectedKeys] = useState(['photoshop']);

  const handleSubmit = async () => {
    if (!isValid) return alert('please Enter a valid Email to continue');
    const data = {
      email,
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
      <ModalHeader />
      <Content maxWidth={{ base: 'size-3000', S: 'size-3400', M: 'size-4600', L: 'size-6000' }} marginX="auto">
        <ModalForm
          email={email}
          setEmail={setemail}
          firstName={firstName}
          lastName={lastName}
          setFirstName={setFirstName}
          setLastName={setLastName}
        />
        <ProductsList selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} />
      </Content>
      <ModalBtns close={close} handleSubmit={handleSubmit} />
    </>
  );
};

export default Modal;
