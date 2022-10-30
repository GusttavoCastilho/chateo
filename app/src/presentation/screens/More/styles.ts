import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px 16px;
`;

export const UserInfo = styled.View`
	flex-direction: row;
	margin-bottom: 36px;
`;

export const Avatar = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #152033;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.View`
	padding-left: 20px;
`;

export const TextUsername = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 600;
  color: ${(props) => props.theme.active};
  line-height: ${RFValue(24)}px;
`;

export const TextPhoneUser = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 400;
  color: #ADB5BD;
  line-height: ${RFValue(20)}px;
`;

export const WrapperIcon = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`