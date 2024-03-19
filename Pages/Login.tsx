import { StyleSheet, Text, View, Dimensions, TextInput,Button } from 'react-native'
import React, { useState } from 'react'

export default function Login() {
    const [userName, setuserName] = useState("")
    const [password, setpassword] = useState("")
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.heading}><Text>Please Login To Continue</Text></View>
                <View style={styles.login}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setuserName}
                        value={userName}
                        placeholder="Email"
                        inputMode="email"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setpassword}
                        value={password}
                        placeholder="Password"
                    />
                    <Button title="LOGIN" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    input: {
        height: 40,
        width:250,
        // margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:8
    },
    login:{
        gap:10,
        marginTop:10
    },
    heading:{
        fontSize:20,
        fontWeight:"700",
        alignItems:"center"
    }
})