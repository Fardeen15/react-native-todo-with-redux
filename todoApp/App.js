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
  constructor() {
    super()
    this.state = {
      form: true,
      list: false
    }
  }
  render() {

    return (
      <>

        <Provider store={store}>
          <Tabs tabBarUnderlineStyle = {{height : 2, backgroundColor : 'black'}} onChangeTab={() => this.setState({
            form: !this.state.form,
            list: !this.state.list
          })}>
            <Tab
             heading={<TabHeading style={{backgroundColor: "#b7daf8" }}><Text style={{color : 'black'}}>Form</Text></TabHeading>}>
              {this.state.form ? <FormComponent /> : null}
            </Tab>
            <Tab heading={<TabHeading style={{backgroundColor: "#b7daf8" }}><Text  style={{color : 'black'}}>No Icon</Text></TabHeading>}>
              <View>
                {this.state.list ? <List /> : null}
              </View>
            </Tab>
          </Tabs>
        </Provider>
      </>
    );
  }

};



export default App;
