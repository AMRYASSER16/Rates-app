import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getRates } from '../store/action-creators/getRates';
import { Table, Button, Loading, Model } from 'components';
import { RootState } from 'store';
import { HomeProps } from '../modals/Home';
 
const Home: FC<HomeProps> = ({ rates, loading, error, getRates }) => {
	const [ showErrorModal, setShowErrorModal ] = useState<boolean>(false);

	useEffect(
		() => {
			if (error) {
				setShowErrorModal(true);
			}
		},
		[ error ]
	);

	const handleCloseErrorModal = () => {
		setShowErrorModal(false);
	};

	return (
		<div className="home">
			<Button onClick={getRates} />
			{loading ? <Loading /> : <Table rates={rates} />}
			{showErrorModal && <Model message={error} onClose={handleCloseErrorModal} />}
		</div>
	);
};

const mapStateToProps = (state: RootState) => ({
		rates: state.rates.rates,
		loading: state.rates.loading,
		error: state.rates.error
	}
);

const mapDispatchToProps = {
	getRates
};

const connector = connect(mapStateToProps, mapDispatchToProps) as any;

export default connector(Home);