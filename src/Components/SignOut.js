import React from 'react';
import {Text} from 'react-native';
import {Auth} from 'aws-amplify';

export default class SignOut extends React.Component {
  static navigationOptions = {
    title: 'Sign out',
  };

  componentDidMount() {
    console.log("------------", this.props, Auth);
    let self = this;

    Auth.signOut().then(() => {
      self.props.navigation.navigate('Home')
    });
  }

  render() {
    return <Text>Sign Out</Text>;
  }
}