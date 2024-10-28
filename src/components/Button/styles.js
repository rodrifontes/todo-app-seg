import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({ primary }) => primary ? '#fa824c' : '#fff'};
  padding: 14px 24px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  border-color: #fa824c;
  border-width: 1px;
`;