import { PureComponent } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import Header from '@/components/Header/Header';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import styles from './App.module.scss';
import './App.scss';

function mapDispatchToProps(dispatch) {
	return {
		
	};
}

function mapStateToProps(state) {
	return {

	};
}

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class App extends PureComponent<any, any> {
	constructor(props) {
		super(props);
	}

	public async componentDidMount() {
		
	}

	public render() {
		return (
			<div className={styles.App}>
				<Header></Header>
				<ContentWrapper></ContentWrapper>
			</div>
		);
	}
}