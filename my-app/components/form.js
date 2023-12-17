import React, { useState} from 'react'
import { StyleSheet, TextInput, View, Button} from 'react-native'

export default function Form({ addHandler }) {
    const [text, setValue] = useState("");
    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View style={styles.main}>
            <TextInput 
                style={styles.input}
                onChangeText={onChange}
                placeholder="Впишите задачу..."
            />
            <Button 
                onPress={() => addHandler(text)}
                title="Добавить задачу"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: "20px",
        width: "100%",
    },
    input: {
        padding: "10px",
        marginBottom: "10px",
        textAlign: "center",
        border: "1px solid black"
    },
});