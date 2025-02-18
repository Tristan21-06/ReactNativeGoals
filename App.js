import GoalList from "./views/GoalList";
import {SafeAreaView} from "react-native-safe-area-context";

function App() {
    return (
        <SafeAreaView style={[{flex: 1}]}>
            <GoalList/>
        </SafeAreaView>
    );
}

export default App;