import React, {useState} from 'react'
import {View, Button, TextInput, ScrollView, StyleSheet, Text} from 'react-native'
import fireBase from '../database/fireBase';
import usuariosLista from './usuariosLista';


const crearUsuario = (props) => {

    const [state, setState] = useState({
        nombre:'',
        email: '',

    });

    const handleChangeText = (name,value) =>{
        setState({...state,[name]:value})
    }

    const saveNewUser = async() => {
        if(state.nombre === '')
        {alert('Por favor introduzca un nombre')

        }
        else{
        await fireBase.addDoc(fireBase.collection(fireBase.db, 'users'),{
            nombre : state.nombre,
            email : state.email
        })
        props.navigation.navigate('usuariosLista');
    }
    }

    
    return(
        <ScrollView style={estilos.container}>
            <View style={estilos.inputGroup}>
                <TextInput placeholder = "nombre de usuario" 
                onChangeText={(value) => handleChangeText('nombre',value)} />
            </View>
            <View style={estilos.inputGroup}>
                <TextInput placeholder = "Email de usuario"
                onChangeText={(value) => handleChangeText('email',value)} />
            </View>
            <View>
                <Button title="Añadir usuario" onPress={() => saveNewUser()}/>
            </View>
        </ScrollView>
        
    )
}

const estilos = StyleSheet.create({
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    container: {
        flex:1,
        padding:35
    }
})

export default crearUsuario