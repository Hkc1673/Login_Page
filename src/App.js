import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';

const App = () => {
  return (
    <KeyboardAvoidingView style={{flex:1}}
    behavior={Platform.OS == 'android' ? null : "padding"}>
      <ScrollView style={{flex:1}}
                  bounces={false}>
      <View style={styles.container}>
        <View>
          <Image style={styles.img} source={require('./image/sepet.png')} />
        </View>

        <View >
          <TextInput placeholder= "Enter Your Email..." keyboardType = "email-address" style={styles.inputstyle}/>
        </View>

        <View>
          <TextInput placeholder= "Enter Your Password..." keyboardType = "number-pad" style={styles.inputstyle}/>
        </View>

        <View  style={{marginBottom:210}}>
          <TouchableOpacity >
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={styles.button}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#61DAFB",
    alignItems:"center",
  },

  img: {
    width: 170,
    height: 130,
    resizeMode: "center",
    marginTop: 80,
    marginBottom: 100,
  },

  inputstyle: {
    height: 40,
    width: 380, 
    paddingLeft: 15,
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  
  button: {
    height: 40,
    width: 200,
    color: "white",
    backgroundColor: "#708090",
    margin: 10,
    borderRadius: 10,
    textAlign: "center",
    paddingTop: 10,
  }

});
