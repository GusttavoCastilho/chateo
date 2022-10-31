import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  position: relative;
`;

export const WrapperHeader = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
`;

export const WrapperIcons = styled.View`
  flex-direction: row;
`;

export const Content = styled.View`
  flex: 1;
  background-color: #152033;
`;

export const Bottom = styled.View`
  background-color: ${(props) => props.theme.background};
`;

export const WrapperBottom = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const WrapperInput = styled.View`
  width: 75%;
  flex-direction: row;
  margin: 16px 12px 0px 12px;
`;

export const Keyboard = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
`;
