//import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

//make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//make the component availablew to other parts of the app
export default Header;

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 30,
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
