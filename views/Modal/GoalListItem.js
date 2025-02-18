import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {Icon} from "react-native-elements";

export default GoalListItem;

function GoalListItem({beginAction, goal, index}) {

    return (
        <View style={styles.item}>
            <View>
                <Text>{goal}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity
                    style={[styles.edit, styles.button]}
                    onPress={() => beginAction('edit', index)}
                >
                    <Icon name="edit" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.delete, styles.button]}
                    onPress={() => beginAction('delete', index)}
                >
                    <Icon name="delete" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EEE',
        padding: 15,
        borderRadius: 8,
        marginVertical: 5,
    },
    button: {
        padding: 5,
        borderRadius: 5,
        marginRight: 10
    },
    delete: {
        backgroundColor: '#d32f2f',
    },
    edit: {
        backgroundColor: '#1c5190',
    },
    actions: {
        flexDirection: "row",
    },
});