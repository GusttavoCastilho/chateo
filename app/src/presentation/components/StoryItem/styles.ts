import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.TouchableOpacity`
  height: 76px;
  border-radius: 16px;
  margin-right: 20px;

  margin-bottom: 15px;
`;

export const Border = styled(LinearGradient).attrs({
  colors: ["#D2D5F9", "#2C37E1"],
  start: { x: 0.1, y: 0.9 },
})`
  border-radius: 100px;
  padding: 2px;
`;

export const Image = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background-color: #375fff;
  border-width: 4px;
  border-color: ${(props) => props.theme.background};
  align-items: center;
  justify-content: center;
`;

export const TextImage = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 700;
  color: ${(props) => props.theme.active};
  line-height: ${RFValue(24)}px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: 400;
  color: ${(props) => props.theme.active};
  line-height: ${RFValue(16)}px;
  padding-top: 4px;
  text-align: center;
`;
