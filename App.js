/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, } from 'react-native';
import Header from './components/header';
import AlbumList from './components/AlbumList';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
});
