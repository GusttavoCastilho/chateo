// @ts-nocheck
import mobileMetadata from 'libphonenumber-js/metadata.mobile.json';
import { Metadata } from 'libphonenumber-js/core';
import { AsYouType } from 'libphonenumber-js/mobile';

const defaultMetadata = new Metadata(mobileMetadata).country('BR');

export const hasLengthEqualToMaxLength = (phoneNumber: AsYouType): boolean => {
	let metadata = new Metadata(mobileMetadata).country(phoneNumber.country);

	if (!metadata?.numberingPlan?.possibleLengths) {
		metadata = defaultMetadata;
	}

	const possibleLengths = metadata.numberingPlan.possibleLengths();
	const maxLength = Math.max(...possibleLengths);
	const length = phoneNumber.getChars().length;
	return length === maxLength;
};
