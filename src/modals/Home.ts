import { Rates } from "shared/types";

export interface HomeProps {
	rates: Rates;
	loading: boolean;
	error: null | string;
	getRates: () => void
}