import * as React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import MainContent from '@/components/MainContent/MainContent';
import styles from './ContentWrapper.module.scss';

export interface IContentWrapperProps {
}

export interface IContentWrapperState {
}

export default class ContentWrapper extends React.Component<IContentWrapperProps, IContentWrapperState> {
	constructor(props: IContentWrapperProps) {
		super(props);

		this.state = {
		}
	}

	public render() {
		return (
			<div className={styles.Content}>
				<Navbar></Navbar>
				<MainContent></MainContent>
			</div>
		);
	}
}
