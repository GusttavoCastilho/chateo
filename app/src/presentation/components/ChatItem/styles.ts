import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  margin: 10px 0px;
  flex-direction: row;
`;

export const Avatar = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 18px;
  background-color: #375fff;
  align-items: center;
  justify-content: center;
`;

export const TextAvatar = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 700;
  color: ${(props) => props.theme.active};
  line-height: ${RFValue(24)}px;
`;

export const Content = styled.View`
  padding-left: 12px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 600;
  color: ${(props) => props.theme.active};
  line-height: ${RFValue(24)}px;
`;

export const Message = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 400;
  color: #adb5bd;
  line-height: ${RFValue(20)}px;
`;

export const WrapperTag = styled.View`
	align-items: center;
	justify-content: space-around;
	flex: 1;
`;

export const TextDate = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: 400;
  color: #ededed;
  line-height: ${RFValue(16)}px;
  align-self: flex-end;
`;

export const Tag = styled.View`
  width: 22px;
  height: 20px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  background-color: #d2d5f9;
  align-self: flex-end;
`;

export const TextNumber = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: 600;
  color: #001a83;
  line-height: ${RFValue(16)}px;
`;
