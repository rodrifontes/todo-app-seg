import { useState } from 'react';

import { Container } from './styles';

import { Text } from '../components/Text';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddButton from '../components/AddButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';

import { tasks } from '../mocks/tasks';

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  function handleChangeStatus(task) {
    alert("Alterar Status da Tarefa");
  }

  function handleEditTask(task) {
    alert("Alterar Tarefa");
  }

  function handleConfirmDeleteTask(task) {
    setIsDeleteModalVisible(true);
  }

  function handleDeleteTask() {
    //Codigo p Excluir a tarefa
    setIsDeleteModalVisible(false);
  }

  return (
    <Container>
      <Header />

      <Tasks
        tasks={tasks}
        onChangeStatus={handleChangeStatus}
        onEditTask={handleEditTask}
        onDeleteTask={handleConfirmDeleteTask}
      />

      <AddButton onPress={() => alert('Criar Tarefa')} />

      <DeleteConfirmModal
        visible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onConfirm={handleDeleteTask}
      />

    </Container>
  );
}