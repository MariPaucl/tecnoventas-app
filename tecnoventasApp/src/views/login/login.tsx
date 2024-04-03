import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, ScrollView, TouchableOpacity, ToastAndroid, Alert } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import useViewModel from './loginViewModel';
import { CustomTextInput } from '../../components/CustomTextInputs';
import styles from './Styles';
import { RegistroScreen } from '../Registro/registro';


export const LoginScreen = () => {
    const { Tipo_Documento, Numero_Documento, password, onChange, login } = useViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();



    const handleLogin = async () => {
        if (Tipo_Documento == '' || Numero_Documento === '' || password === '') {
            ToastAndroid.show('Por favor, completa todos los campos.', ToastAndroid.SHORT);
        } else {
            const success = await login();
            if (success) {

            } else {
                ToastAndroid.show('El Numero De Documento O la contraseña no coinciden.', ToastAndroid.SHORT);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/tecnoventasfondo.jpg')}
                style={styles.imageBackground}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../assets/Tecnoventas.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}></Text>
                <Text style={styles.logoText}></Text>
            </View>
            <View style={styles.form}>
                <ScrollView>
                    <Text style={[styles.formText, { textAlign: 'center' }]}>INICIA SESION</Text>

                    <CustomTextInput
                        image={require('../../../assets/ID.png')}
                        placeholder='tipo de documento'
                        value={Tipo_Documento}
                        keyboardType='numeric'
                        property='Numero_Documento'
                        onChangeText={onChange}
                    />

                    <CustomTextInput
                        image={require('../../../assets/ID.png')}
                        placeholder='Numero-Documento'
                        value={Numero_Documento}
                        keyboardType='numeric'
                        property='Numero_Documento'
                        onChangeText={onChange}
                    />
                    <CustomTextInput
                        image={require('../../../assets/pass.png')}
                        placeholder='Contraseña'
                        value={password}
                        keyboardType='default'
                        secureTextEntry={true}
                        property='password'
                        onChangeText={onChange}
                    />
                    <View style={{ marginTop: 30 }}>
                        <RoundedButton text='ENTRAR' onPress={handleLogin} />
                    </View>
                    <View style={styles.formRegister}>
                        <Text>¿No tienes cuenta?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('RegistroScreen')}>
                            <Text style={styles.formRegisterText}>Regístrate</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>

    );
};