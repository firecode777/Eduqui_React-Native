import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Paragraph>
      </Paragraph>
      <Header> Bem-Vindo! </Header>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      .
      
      <Button
        mode="contained"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Registrar-se 
      </Button>
    </Background>
  )
}
