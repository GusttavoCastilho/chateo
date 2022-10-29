import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
  padding: 16px;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 600;
  color: ${(props) => props.theme.active};
  padding-left: ${RFValue(8)}px;
`;
