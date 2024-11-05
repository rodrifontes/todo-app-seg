import { Image, TouchableOpacity } from 'react-native';

import { Text } from '../Text';

import CustomModal from '../CustomModal';
import TaskForm from '../TaskForm';

import { Header } from './styles';

import close from '../../assets/images/close.png';

export default function EditTaskModal({ visible, onClose, onSave, task }) {
  return (
    <CustomModal visible={visible}>
      <Header>
        <Text weight="600">Editar Tarefa</Text>

        <TouchableOpacity onPress={onClose}>
          <Image source={close} />
        </TouchableOpacity>
      </Header>

      <TaskForm onSave={onSave} task={task} buttonLabel="Alterar" />
    </CustomModal>
  );
}