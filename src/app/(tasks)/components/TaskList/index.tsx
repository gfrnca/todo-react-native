import Task from "@/src/components/Task";
import { Text } from "@/src/components/Themed";
import { useTasks } from "@/src/contexts/TaskContext";
import { Box, ScrollView } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <Box style={styles.tasksContainer}>
      <Box style={styles.taskContainerHeader}>
        <Text style={styles.headerTitle}>Tarefas</Text>
      </Box>

      <ScrollView contentContainerStyle={{ rowGap: 16 }}>
        {tasks.map((task, index) => (
          <Task task={task} key={index} />
        ))}
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  tasksContainer: {
    display: "flex",
    width: "100%",
    paddingTop: 25,
    paddingBottom: 25,
    gap: 20,
  },

  taskContainerHeader: { display: "flex", flexDirection: "row" },

  headerTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
});
