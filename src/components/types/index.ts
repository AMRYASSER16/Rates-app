import { Rates } from '../../shared/types';

export interface ButtonProps {
	onClick: () => void;
};

export interface ModelProps {
	message: string | null;
	onClose: () => void;
};


export interface TableProps {
	rates: Rates;
}
