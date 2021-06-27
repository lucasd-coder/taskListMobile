import React from 'react';
import {
  SafeAreaView, StyleSheet, Text, View
} from 'react-native';

interface HeaderProps {
  darkMode: boolean;
}

export function Header(props: HeaderProps) {
  return (
    <SafeAreaView style={[
      props.darkMode ? 
      styles.containerDark : 
      styles.container
    ]}>
      <View style={[
        props.darkMode ? 
        styles.containerDark : 
        styles.header
      ]}>       
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
  },  
  header: {
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }, 
  containerDark: {
    backgroundColor: '#483C67',
  },
  headerDark: {
    paddingBottom: 44,
    backgroundColor: '#483C67',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
});
