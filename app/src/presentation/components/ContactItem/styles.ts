import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 68px;
  margin: 8px 24px;
  flex-direction: row;

  border-bottom-width: 1px;
  border-color: #152033;
`;

export const Avatar = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background-color: blue;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 600;
  color: ${(props) => props.theme.active};
  line-height: ${RFValue(24)}px;
`;

export const Status = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 400;
  color: #adb5bd;
  line-height: ${RFValue(20)}px;
`;
