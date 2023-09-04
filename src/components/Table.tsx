import { useDateFormatChanger } from 'shared/hooks/useDateFormatChanger';
import React, { FC } from 'react';
import { TableProps } from './types';
import styles from './styles/Table.module.css';

const Table: FC<TableProps> = ({ rates }) => {
	const { outputDate } = useDateFormatChanger(rates.date);
	const ratesData = rates.rates;

	if (!ratesData || Object.keys(ratesData).length === 0) {
		return (
			<div data-testid="no-data-container" className={styles.noDataContainer}>
				<img
					data-testid="no-data-image"
					width="150px"
					height="150px"
					src={require('../assets/images/nodata.svg').default}
					alt="No Data"
				/>
				<h2 data-testid="no-data-header" className={styles.noDataHeader}>
					No rates data available.
				</h2>
			</div>
		);
	}

	return (
		<div data-testid='rates-table' className={styles.tableContainer}>
			<h2> Date: {outputDate}</h2>
			<h3> Base: {rates.base}</h3>
			<h3 className={styles.rates}>Rates:</h3>
			<table className={styles.table}>
				<tbody>
					{Object.entries(ratesData).map(([ currency, exchangeRate ]: [string, number]) => (
						<tr key={currency}>
							<td data-testid={currency}>{currency}</td>
							<td data-testid={exchangeRate}>{exchangeRate}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
