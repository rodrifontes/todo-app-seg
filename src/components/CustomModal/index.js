import { Modal } from 'react-native';

import { Text } from '../Text';

import { Overlay, ModalBody } from './styles';

export default function CustomModal({ children, visible }) {
  return (
    <Modal
      transparent
      statusBarTranslucent
      visible={visible}
    >
      <Overlay>
        <ModalBody>
          {children}
        </ModalBody>
      </Overlay>
    </Modal>
  );
}