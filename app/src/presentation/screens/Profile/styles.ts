import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Keyboard = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Avatar = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #152033;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ChangeAvatar = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const WrapperInput = styled.View`
	width: 100%;
	padding: 50px 20px;
`

export const WrapperButton = styled.View`
	width: 100%;
	padding: 0 20px;
`