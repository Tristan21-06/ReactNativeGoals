import {View} from "react-native";
import {Text} from 'react-native-elements';

function ConfirmDelete() {
    return (
        <>
            <View>
                <Text h3>Suppression</Text>
            </View>
            <View>
                <Text>Voulez-vous vraiment supprimer cette ligne?</Text>
            </View>
        </>
    );
}

export default ConfirmDelete;