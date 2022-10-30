import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Content = styled.View`
	flex-direction: row;
`;

export const WrapperIcon = styled.View`
	margin-right: 6px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 600;
  color: ${(props) => props.theme.active};
  line-height: ${RFValue(24)}px;
`;
