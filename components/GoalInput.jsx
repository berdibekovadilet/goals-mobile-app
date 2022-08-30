import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";

const GoalInput = ({
  goalInputHandler,
  onAddGoal,
  visible,
  endAddGoalHandler,
}) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/rocket.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your goal"
          placeholderTextColor="#ffffff" 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={endAddGoalHandler}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 16,
  },
  image: {
    width: 56,
    height: 56,
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#d0d8ff",
    backgroundColor: "#d0d8ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
