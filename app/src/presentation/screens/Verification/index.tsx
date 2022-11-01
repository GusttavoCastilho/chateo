import React, { useState, useMemo } from "react";
import { Platform, useColorScheme } from "react-native";

import { useNavigation } from "@react-navigation/native";

import CountryPicker, {
  CountryCode as CPCountryCode,
  DARK_THEME,
  DEFAULT_THEME,
} from "react-native-country-picker-modal";
import {
  AsYouType,
  CountryCode as PNCountryCode,
} from "libphonenumber-js/mobile";

import { Button } from "../../components/Button";
import { GoBack } from "../../components/GoBack";

import * as S from "./styles";
import { formatPhoneNumber, getMaxInputLengthAsYouType } from "../../utils";

export const Verification = () => {
  const [phone, setPhone] = useState(new AsYouType("BR"));
  const [callingCode, setCallingCode] = useState("");
  const navigation = useNavigation();
  const scheme = useColorScheme();

  const IsDisabledButton = useMemo(() => {
    return phone.getChars().length === 0;
  }, [phone]);

  const onSelectCountryCode = ({
    cca2,
    callingCode,
  }: {
    cca2: CPCountryCode;
    callingCode: string[];
  }) => {
    const numberPersist = phone.getChars();
    updatePhoneNumber({
      number: numberPersist,
      countryCode: cca2 as PNCountryCode,
    });
    setCallingCode(callingCode[0]);
  };

  const updatePhoneNumber = ({
    number,
    countryCode,
  }: {
    number: string;
    countryCode?: PNCountryCode;
  }) => {
    setPhone((prevPhone) => {
      const _countryCode = countryCode || prevPhone.country;
      const newPhoneNumber = new AsYouType(_countryCode);
      newPhoneNumber.input(number);
      newPhoneNumber.unrecognizedCountryCode = _countryCode;
      return newPhoneNumber;
    });
  };

  const getValue = () => {
    return formatPhoneNumber(phone);
  };

  const getMaxLength = () => {
    return getMaxInputLengthAsYouType(phone);
  };

  return (
    <S.Container>
      <GoBack onPress={() => navigation.goBack()} />
      <S.Keyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <S.Content>
          <S.Title>Enter Your Phone Number</S.Title>
          <S.Description>
            Please confirm your country code and enter your phone number
          </S.Description>

          <S.WrapperInput>
            <S.WrapperFlag>
              <CountryPicker
                translation="por"
                countryCode={
                  (phone.country ||
                    phone.unrecognizedCountryCode) as CPCountryCode
                }
                withCallingCodeButton
                withCallingCode
                withFlag
                withFilter
                preferredCountries={["BR", "US"]}
                theme={scheme === "dark" ? DARK_THEME : DEFAULT_THEME}
                onSelect={onSelectCountryCode}
              />
            </S.WrapperFlag>

            <S.InputNumber
              onChangeText={(value) => updatePhoneNumber({ number: value })}
              value={getValue()}
              maxLength={getMaxLength()}
              keyboardType="number-pad"
              placeholder="Enter your phone"
            />
          </S.WrapperInput>
        </S.Content>

        <S.WrapperButton>
          <Button
            title="Continue"
            onPress={() =>
              navigation.navigate("VerificationCode", {
                country: callingCode,
                phone: phone.getChars(),
              })
            }
            disabled={IsDisabledButton}
          />
        </S.WrapperButton>
      </S.Keyboard>
    </S.Container>
  );
};
