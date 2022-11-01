import { AsYouType } from 'libphonenumber-js/mobile';
import { isPossibleMobilePhoneNumber } from '.';

export const getMaxInputLengthAsYouType = (phoneNumber: AsYouType): number => {
	const formattedCurrentPhoneNumberLength = phoneNumber.getTemplate().length;
	if (isPossibleMobilePhoneNumber(phoneNumber)) {
		return formattedCurrentPhoneNumberLength;
	}
	return formattedCurrentPhoneNumberLength + 1;
};
