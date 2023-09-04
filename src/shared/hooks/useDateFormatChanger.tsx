import { useState, useEffect } from 'react';
import { DateFormatChangerResult } from './types';

export function useDateFormatChanger(initialDate?: string): DateFormatChangerResult {
	const [ outputDate, setOutputDate ] = useState<string>('');

	useEffect(
		() => {
			if (initialDate) {
				changeDateFormat(initialDate);
			}
		},
		[ initialDate ]
	);

	function changeDateFormat(inputDate: string): void {
		const parts = inputDate.split('-');
		if (parts.length !== 3) {
			setOutputDate('Invalid date format');
			return;
		}

		const year = parts[0];
		const month = parts[1];
		const day = parts[2];

		const newDateFormat = `${day}-${month}-${year}`;
		setOutputDate(newDateFormat);
	}

	return { outputDate };
}
