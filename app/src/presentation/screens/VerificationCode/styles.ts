import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

export const Keyboard = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: 700;
  color: ${(props) => props.theme.active};
  line-height: ${RFValue(30)}px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 400;
  color: ${(props) => props.theme.active};
  line-height: ${RFValue(24)}px;
  text-align: center;
  padding: 10px 20px;
`;

export const WrapperInput = styled.View`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: ${RFValue(56)}px;
`

export const CircleInput = styled.TextInput`
	width: 24px;
	height: 24px;
	background-color: #152033;
	border-radius: 12px;
`