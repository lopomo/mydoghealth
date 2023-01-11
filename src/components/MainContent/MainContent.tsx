import * as React from 'react';
import { Typography, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import IState from '@/interfaces/IState';
import styles from './MainContent.module.scss';

function mapStateToProps(state: IState) {
	return {
		selectedTab: state.runtime.selectedTab
	};
}

@(connect(mapStateToProps) as any)
export default class MainContent extends React.Component<any, any> {
  constructor(props) {
	super(props);
	this.state = {
	}
  }

  public render() {
	return (
	  <div className={styles.MainContent}>
		  {this.props.selectedTab}
	  </div>
	);
  }
}