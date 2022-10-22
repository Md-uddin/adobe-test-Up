import { MyComponent } from './MyComponent';

export default {
  title: 'My Component',
};

const MyComponentTemplate = () => {
  return <MyComponent />;
};

const Default = MyComponentTemplate.bind({});

export { Default };
