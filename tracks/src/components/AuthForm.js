import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { Context } from '../context/AuthContext'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const {  clearErrorMessage } = useContext(Context);

  return (
    <>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
      />
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errorMessage ? (
        <Spacer>
          <Text style={styles.errorMessage}>
            {errorMessage}
          </Text>
        </Spacer>
        )
        : null}
        <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  )
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red'
  },
});

export default AuthForm;
