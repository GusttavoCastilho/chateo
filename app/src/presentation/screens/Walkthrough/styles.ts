import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  align-items: center;
  justify-content: space-evenly;
  
`;

export const Header = styled.View`
	width: 100%;
	align-items: center;
	justify-content: center;
`

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: 700;
  color: ${(props) => props.theme.active};
  text-align: center;
  line-height: ${RFValue(35)}px;
  padding-top: ${RFValue(42)}px;
`;

export const WrapperButtons = styled.View`
  margin-top: 50px;
  padding: 20px;
`;
