import React, { FC } from 'react';
import { ButtonProps } from './types';
import styles from './styles/Button.module.css';

const Button: FC<ButtonProps> = ({ onClick }) => {
	return (
		<div data-testid="button-container" className={styles.buttonContainer}>
			<button data-testid="click-me-button" className={styles.buttonStyles} onClick={onClick}>
				Click me
			</button>
		</div>
	);
};

export default Button;
