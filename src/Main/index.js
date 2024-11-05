import { useState } from 'react';

import { Container } from './styles';

import { Text } from '../components/Text';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddButton from '../components/AddButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import NewTaskModal from '../components/NewTaskModal';
import EditTaskModal from '../components/EditTaskModal';

import { tasks } from '../mocks/tasks';

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const [taskBeingEdit, setTaskBeingEdit] = useState('');

  function handleChangeStatus(task) {
    alert("Alterar Status da Tarefa");
  }

  function handleEditTask(task) {
    setTaskBeingEdit(task);
    setIsEditTaskModalVisible(true);
  }

  function handleConfirmDeleteTask(task) {
    setIsDeleteModalVisible(true);
  }

  function handleDeleteTask() {
    //Codigo p Excluir a tarefa
    setIsDeleteModalVisible(false);
  }

  function handleCreateTask(task) {
    //Código para cadastrar a tarefa
    setIsNewTaskModalVisible(false);
  }

  function handleSaveEditTask(task) {
    //Código para Alterar a tarefa
    setIsEditTaskModalVisible(false);
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

      <AddButton onPress={() => setIsNewTaskModalVisible(true)} />

      <DeleteConfirmModal
        visible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onConfirm={handleDeleteTask}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
        onSave={handleCreateTask}
      />

      <EditTaskModal
        visible={isEditTaskModalVisible}
        onClose={() => setIsEditTaskModalVisible(false)}
        onSave={handleSaveEditTask}
        task={taskBeingEdit}
      />

    </Container>
  );
}