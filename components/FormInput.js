import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../util/Dimension'

const FormInput = ({
    labelValue,
    placeholderText,
    iconType,
    ...rest
}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={labelValue}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'

    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#333',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
    }

})