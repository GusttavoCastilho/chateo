import React from "react";
import { FlatList } from 'react-native'

import { Header } from "../../components/Header";
import { MoreItem } from "../../components/MoreItem";

import { MaterialIcons } from "@expo/vector-icons";

import { items } from "./mock";
import AvatarSvg from "../../assets/avatar.svg";

import * as S from "./styles";


export const More = () => {
  return (
    <S.Container>
      <Header title="More" />

      <S.Content>
        <S.UserInfo>
          <S.Avatar>
            <AvatarSvg width={20} />
          </S.Avatar>

          <S.Info>
            <S.TextUsername>Almayra Zamzamy</S.TextUsername>
            <S.TextPhoneUser>+62 1309 - 1710 - 1920</S.TextPhoneUser>
          </S.Info>

          <S.WrapperIcon>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="#F7F7FC"
			  style={{ alignSelf: 'flex-end' }}
            />
          </S.WrapperIcon>
        </S.UserInfo>

		<FlatList
			data={items}
			keyExtractor={(item) => String(item.id)}
			renderItem={({ item }) => (
				<MoreItem title={item.title} icon={item.icon} />
			)}
		/>
      </S.Content>
    </S.Container>
  );
};
