import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${props => props.theme.background};
`;

export const WrapperIcon = styled.View`
	flex-direction: row;
`;

export const WrapperMessageIcon = styled.View`
	margin-right: 8px;
`;

export const Content = styled.View`
	/* flex: 1; */
	padding: 10px 24px;
`

export const Divider = styled.View`
	width: 100%;
	height: 2px;
	background-color: #152033;
	margin-top: 16px;
`;

export const WrapperInput = styled.View`
	margin-top: 16px;
`