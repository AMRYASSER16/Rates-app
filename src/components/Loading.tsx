import React, { FC } from 'react';
import styles from './styles/Loading.module.css';

const Loading: FC = () => {
	return (
		<div data-testid="loading-container" className={styles.loadingContainer}>
			<img
				data-testid="loading-image"
				width="250px"
				height="250px"
				src={require('../assets/images/loading.svg').default}
				alt="Loading spinner"
			/>
			<h2 className={styles.loadingHeader} data-testid="loading-header">
				Loading...
			</h2>
		</div>
	);
};

export default Loading;
