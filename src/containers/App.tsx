import { PureComponent } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import Header from '@/components/Header';
import Content from './Content';
import Footer from '@/components/Footer';

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
			<div>
				<Header></Header>
				<Content></Content>
				<Footer></Footer>
			</div>
		);
	}
}