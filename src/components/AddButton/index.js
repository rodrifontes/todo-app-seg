import { Text } from '../Text';

import { Container, Add } from './styles';

export default function AddButton({ onPress }) {
  return (
    <Container onPress={onPress}>
      <Add>
        <Text size={40} color="#fff">+</Text>
      </Add>
    </Container>
  );
}