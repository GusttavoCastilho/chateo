import { AsYouType } from "libphonenumber-js/mobile";

export const formatPhoneNumber = (phoneNumber: AsYouType): string => {
  const rawNumber = phoneNumber.getChars();
  phoneNumber.reset();

  return phoneNumber.input(rawNumber);
};
