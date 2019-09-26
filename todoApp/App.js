/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Provider } from 'react-redux'
import store from './store';
import React from 'react';
import FormComponent from './components/Form';
import { Tabs, Tab, TabHeading, Text, Icon, Header, View } from 'native-base';
import List from './components/list';

class App extends React.Component {
  render() {

    return (
      <>
       
        <Provider store={store}>
          <Tabs>
            <Tab heading={<TabHeading><Text>Form</Text></TabHeading>}>
              <FormComponent />
            </Tab>
            <Tab heading={<TabHeading><Text>No Icon</Text></TabHeading>}>
              <View>
                <List/>
              </View>
            </Tab>
          </Tabs>
        </Provider>
      </>
    );
  }

};



export default App;
