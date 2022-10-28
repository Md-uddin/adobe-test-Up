import { ActionButton, Flex, Item, ListView, Text } from '@adobe/react-spectrum';
import React, { useMemo, useState } from 'react';
import { useLicenseApi } from '../../../services/licenseApi';
import { H4, ListContainer } from '../styles';

const ProductsList = ({ selectedKeys, setSelectedKeys }) => {
  const [products, setProducts] = useState(null);
  const { getOrganizationProducts } = useLicenseApi();
  useMemo(async () => {
    setProducts(await getOrganizationProducts());
  }, []);


  return (
    <>
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
              <Item key={product.id}>
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
    </>
  );
};

export default ProductsList;
