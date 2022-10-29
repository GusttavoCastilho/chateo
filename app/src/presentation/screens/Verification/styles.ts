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
  /* background-color: red; */
`;

export const Content = styled.View`
  flex: 1;
  /* background-color: blue; */
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
  height: 46px;
  padding: 0px 24px;
  flex-direction: row;
  margin-top: ${RFValue(48)}px;
`;

export const Country = styled.View`
  width: 74px;
  height: 46px;
  background-color: #152033;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 4px;
`;

export const TextCountry = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 600;
  color: ${(props) => props.theme.active};
  padding-left: 8px;
`;

export const InputNumber = styled.TextInput`
  flex: 1;
  height: 46px;
  background-color: #152033;
  margin-left: 8px;
  border-radius: 4px;
  color: ${(props) => props.theme.active};
  padding: 8px;
`;

export const WrapperButton = styled.View`
  padding: 20px;
`;
