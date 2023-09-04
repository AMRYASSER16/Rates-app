import React, { FC } from 'react';
import { ModelProps } from './types';
import styles from './styles/Model.module.css';

const Model: FC<ModelProps> = ({ message, onClose }) => {
	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<h2>Error</h2>
				<p>{message}</p>
				<button className={styles.closeButton} onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	);
};

export default Model;
