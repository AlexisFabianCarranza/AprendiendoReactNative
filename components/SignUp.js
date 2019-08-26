import React from 'react';

import {View, Text, TextInput, Button} from 'react-native';

export default (props) => {
    return(
        <View>
            <Text>Correo electrónico</Text>
            <TextInput />
            <Text>Password:</Text>
            <TextInput />
            <Button title='Guardar usuario'/>
        </View>
    );
}