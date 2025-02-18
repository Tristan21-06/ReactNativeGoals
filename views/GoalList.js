import {useState} from "react";
import GoalListForm from "./GoalListForm";
import CustomModal from "./CustomModal";
import {FlatList, StyleSheet} from "react-native";
import GoalListItem from "./Modal/GoalListItem";

function GoalList() {
    const [list, setList] = useState([
        "Faire les courses",
        "Aller à la salle de sport 3 fois par semaine",
        "Monter à plus de 5000m d altitude",
        "Acheter mon premier appartement",
        "Perdre 5 kgs",
        "Gagner en productivité",
        "Apprendre un nouveau langage",
        "Faire une mission en freelance",
        "Organiser un meetup autour de la tech",
        "Faire un triathlon",
    ]);

    const [actionIndex, setActionindex] = useState(null)
    const [currentAction, setCurrentAction] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);
    const [editedGoal, setEditedGoal] = useState('');

    const beginAction = (action, index) => {
        setCurrentAction(action);
        setActionindex(index);

        setEditedGoal(list[index]);
        setModalVisible(true)
    };

    const removeFromList = () => {
        list.splice(actionIndex, 1);

        setList([
            ...list
        ]);
    }

    const editFromList = () => {
        list[actionIndex] = editedGoal;

        setEditedGoal('')
        setList([
            ...list
        ]);
    }

    const confirmAction = () => {
        switch (currentAction) {
            case 'delete':
                removeFromList();
                break;
            case 'edit':
                editFromList();
                break;
            default:
                break;
        }

        setModalVisible(false)
    }

    return (
        <>
            <GoalListForm list={list} setList={setList}/>
            <FlatList
                data={list}
                renderItem={({item, index}) => <GoalListItem index={index} goal={item} beginAction={beginAction} />}
                keyExtractor={(item, index) => index}
            />
            <CustomModal
                currentAction={currentAction}
                confirmAction={confirmAction}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setEditedGoal={setEditedGoal}
                editedGoal={editedGoal}
            />
        </>
    );
}

export default GoalList;