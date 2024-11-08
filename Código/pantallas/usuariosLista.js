import React, { useEffect, useState } from 'react';
import { View, Text , StyleSheet} from 'react-native';
import fireBase, { collection } from '../database/fireBase';



const UsuariosLista = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const usersCollectionRef = fireBase.collection(fireBase.db, 'users'); // Referencia a la colección 'users'
        const unsubscribe = fireBase.onSnapshot(usersCollectionRef, querySnapshot => {
            const usersArray = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setUsers(usersArray); 
            console.log(usersArray); 
        });

        return () => unsubscribe(); 
    }, []);

    return (
        <View style={styles.container}> 
            <Text style={styles.lista}>Lista de usuarios</Text>
            {users.map((user) => (
                <Text key={user.id} style={styles.userName}>{user.nombre}</Text> 
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 90,
        padding: 20,
    },
    
    userName: {
        fontSize: 16,
        fontFamily: 'Arial',  
        color: '#333', 
        marginBottom: 10
    },
    lista:{
        marginBottom: 20
    }
});

export default UsuariosLista;
