import { Container } from './styles';

import { Text } from '../components/Text';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddButton from '../components/AddButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';

import { tasks } from '../mocks/tasks';

export default function Main() {
  function handleChangeStatus(task) {
    alert("Alterar Status da Tarefa");
  }

  function handleEditTask(task) {
    alert("Alterar Tarefa");
  }

  function handleDeleteTask(task) {
    alert("Excluir Tarefa");
  }

  return (
    <Container>
      <Header />

      <Tasks
        tasks={tasks}
        onChangeStatus={handleChangeStatus}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />

      <AddButton onPress={() => alert('Criar Tarefa')} />

      <DeleteConfirmModal visible={true} />

    </Container>
  );
}