import {StyleSheet, TextInput, View} from "react-native";
import {Text} from 'react-native-elements';

function Edit({editedGoal, setEditedGoal}) {
    return (
        <>
            <View>
                <Text h3>Editer</Text>
            </View>
            <View>
                <TextInput style={styles.input} value={editedGoal} onChangeText={setEditedGoal} />
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    input: {
        borderStyle: "solid",
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
    },
});


export default Edit;