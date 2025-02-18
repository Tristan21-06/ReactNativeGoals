import ConfirmDelete from "./Modal/ConfirmDelete";
import Edit from "./Modal/Edit";
import {StyleSheet, Modal, TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements";

function CustomModal({currentAction, confirmAction, editedGoal, setEditedGoal, setModalVisible, modalVisible = false}) {
    let component;

    const cancelAction = () => {
        setModalVisible(false)
    }

    switch(currentAction) {
        case 'delete':
            component = (
                <ConfirmDelete />
            )
            break;
        case 'edit':
            component = (
                <Edit editedGoal={editedGoal} setEditedGoal={setEditedGoal} />
            )
            break;
        default:
            component = null
            break;
    }

    return (
        <>
            <Modal
                visible={modalVisible}
            >
                <View>
                    {component}

                    <View style={styles.actions}>
                        <TouchableOpacity style={[styles.cancel, styles.button]} onPress={cancelAction}>
                            <Icon name="close" size={20} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.valid, styles.button]} onPress={confirmAction}>
                            <Icon name="check" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    cancel: {
        backgroundColor: '#d32f2f',
    },
    valid: {
        backgroundColor: "#005424",
    },
    actions: {
        flexDirection: "row-reverse",
    },
});

export default CustomModal;