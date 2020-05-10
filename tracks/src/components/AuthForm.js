import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  return (
    <>
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
