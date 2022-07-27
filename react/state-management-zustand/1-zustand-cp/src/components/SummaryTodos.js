import useTodoStore from "../store/todoStore";
import { Box, Text } from "@chakra-ui/react";

export default function SummaryTodos() {
  // TODO: answer here
  const count = useTodoStore((state) => state.todos.length);
  const doneCount = useTodoStore((state) =>
    state.todos.filter((todo) => todo.isDone).length
  );
  return (
    <Box width="md" rounded="xl" border="1px">
      <Text aria-label="todo-count-total">Total : {count}</Text>
      <Text aria-label="todo-count-done">Done : {doneCount}</Text>
    </Box>
  );
}
