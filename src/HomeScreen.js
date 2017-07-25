import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button, NavigationBar, Title, Icon, DropDownMenu, Image, Tile, Caption, Text } from '@shoutem/ui';

import {Examples } from '@shoutem/ui/examples/components';

class HomeScreen extends React.Component {

  render() {
    return (

            <Examples/>
    );
  }
}

class ChatScreen extends React.Component {

  render() {
    return (
      NULL
    );
  }
}

const BaghaliN = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('BaghaliN', () => HomeScreen);