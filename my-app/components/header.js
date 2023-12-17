import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        padding: "20px",
        backgroundColor: "pink",
        width: "100%",
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: "32px"
    },
})