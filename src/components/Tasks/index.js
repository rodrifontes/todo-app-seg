import { TouchableOpacity, FlatList } from 'react-native';

import { Text } from '../Text';

import pending from '../../assets/images/pending.png';
import done from '../../assets/images/done.png';
import excluir from '../../assets/images/delete.png';
import edit from '../../assets/images/edit.png';

import {
  Task,
  TaskHeader,
  TaskDescription,
  TaskFooter,
  TaskStatus,
  TaskActions,
  TaskIcon
} from './styles';

export default function Tasks({ tasks, onChangeStatus, onEditTask, onDeleteTask }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={task => task.id}
      renderItem={({ item: task }) => (
        <Task>
          <TaskHeader>
            <Text size={18} weight="600">{task.title}</Text>
          </TaskHeader>
          <TaskDescription>
            <Text opacity={0.5}>{task.description}</Text>
          </TaskDescription>
          <TaskFooter>
            <TaskStatus onPress={() => onChangeStatus(task)}>
              <TaskIcon source={task.done ? done : pending} />

              <Text color={task.done ? "#2192d8" : "#E620AE"}>
                {task.done ? "Feita" : "Pendente"}
              </Text>
            </TaskStatus>

            <TaskActions>
              <TouchableOpacity onPress={() => onEditTask(task)}>
                <TaskIcon source={edit} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => onDeleteTask(task)} >
                <TaskIcon source={excluir} />
              </TouchableOpacity>
            </TaskActions>
          </TaskFooter>
        </Task>
      )}
    />
  );
}