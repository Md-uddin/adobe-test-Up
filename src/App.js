/* istanbul ignore file */
import { Flex, Heading, Image, Text, View, Well } from '@adobe/react-spectrum';
import './App.css';
import Logo from './assets/adobe.png';
import { MyComponent } from './component/MyComponent';

function App() {
  return (
    <div className="App">
      <Flex justifyContent="center">
        <View gridArea="content" width="size-6000">
          <Flex justifyContent="space-between">
            <Heading level={1}>Adobe Coding Assessment</Heading>
            <View>
              <Image src={Logo} alt="The Adobe logo" width="size-500" />
            </View>
          </Flex>

          <Text>
            Add your component here when you're done. If it's a modal, add a button here to launch the component.
          </Text>
          <Well>
            <pre>
              Add your component here!
              <MyComponent />
            </pre>
          </Well>
        </View>
      </Flex>
    </div>
  );
}

export default App;
