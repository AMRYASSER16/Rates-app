interface RatesData {
	[currencyCode: string]: number;
}

export interface Rates {
	date: string;
	base: string;
	rates: RatesData;
}