import { StyleSheet, Text, View, Dimensions, TextInput, Button, Linking, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

export default function Login() {
    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const [userName, setuserName] = useState("")
    const [password, setpassword] = useState("")

    const openWebsite = (websiteLink: string) => {
        Linking.openURL(websiteLink)
    }
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
                    <Button onPress={() => navigate.navigate('Home')} title="LOGIN" />
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity
                        onPress={() => openWebsite("https://github.com/azzzrro")}
                    >
                        <Text>Facing Trouble? Contact Us.</Text>
                    </TouchableOpacity>
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
        width: 250,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8
    },
    login: {
        gap: 10,
        marginTop: 10
    },
    heading: {
        fontSize: 20,
        fontWeight: "700",
        alignItems: "center"
    },
    bottom: {
        marginTop: 10,
        alignItems: "center"
    }
})