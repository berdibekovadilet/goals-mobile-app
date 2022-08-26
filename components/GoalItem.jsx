import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text, deleteGoalHandler, id }) => {
  return (
    <Pressable onPress={deleteGoalHandler.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
  },
});

export default GoalItem;
