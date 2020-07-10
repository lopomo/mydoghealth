import { PureComponent } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import Headers from '@/components/Headers';
import Content from '../Content';
import Footer from '@/components/Footer';
import styles from './App.module.scss';

function mapDispatchToProps(dispatch) {
	return {

	}
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
			<div className={styles.pica}>
				<Headers></Headers>
				<Content></Content>
				<Footer></Footer>
			</div>
		);
	}
}