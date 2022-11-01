import { AsYouType } from 'libphonenumber-js/mobile';
import { hasLengthEqualToMaxLength } from '.';

export const isPossibleMobilePhoneNumber = (
	phoneNumber: AsYouType,
): boolean => {
	const isLongestPossible = hasLengthEqualToMaxLength(phoneNumber);
	const isValid = phoneNumber.isValid();

	return isLongestPossible || (!isLongestPossible && isValid);
};
