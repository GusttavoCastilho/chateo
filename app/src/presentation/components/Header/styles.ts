import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
	width: 100%;
	padding: 16px 20px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 600;
  color: ${(props) => props.theme.active};
  line-height: ${RFValue(30)}px;
`;
