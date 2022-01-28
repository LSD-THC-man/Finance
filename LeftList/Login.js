import React, { useState } from "react";
import {Text, SafeAreaView, TextInput, Button, StyleSheet, View} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Login(){
    const[username,setUsername]=useState(' ')
    const[password,setPassword]=useState(' ')

    const storeToken = async (value) => {
        try {
          await AsyncStorage.setItem('token', value)
        } catch (e) {
          console.log('cant save token')
        }
      }

      async function clearToken(){
          AsyncStorage.removeItem('token')
      }

      function submitHandler(){
          fetch
      }

        return(
            <SafeAreaView style={styles.container}>
                <TextInput 
                    defaultValue={username}
                    onChangeText={text => setUsername(text)}
                    placeholder={'Username'}
                    style={styles.abby}
                />

                <TextInput 
                    defaultValue={password}
                    onChangeText={text => setPassword(text)}
                    placeholder={'Password'}
                    style={styles.abby}
                    secureTextEntry={true}
                />
                <Button 
                    title={'Login'}
                    style={styles.input}
                />
                <Button 
                    title={'Logout'}
                    style={styles.input}
                />
            </SafeAreaView>
        )}

        const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            },
            abby: {
                width: 300,
                height: 48,
                padding: 10,
                borderWidth: 1,
                borderColor: 'black',
                marginBottom: 10,
            }
          });
