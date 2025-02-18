import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {Icon} from "react-native-elements";

function GoalListForm({list, setList}) {
    const [goal, setGoal] = useState('')

    const addToList = () => {
        list.push(goal);

        setGoal('')
        setList([
            ...list
        ]);
    }

    return (
        <View style={styles.form}>
            <TextInput style={styles.input} value={goal} onChangeText={setGoal}/>
            <TouchableOpacity
                style={[styles.add, styles.button]}
                onPress={addToList}
            >
                <Icon name="add" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        padding: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        borderStyle: "solid",
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        flex: 1,
    },
    button: {
        padding: 10,
        borderBottomEndRadius: 5,
        borderTopEndRadius: 5,
    },
    add: {
        backgroundColor: "#005424",
    }
});

export default GoalListForm;