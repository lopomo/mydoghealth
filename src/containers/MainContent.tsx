import * as React from 'react';
import { Typography, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import IState from '@/interfaces/IState';

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
	  <div>
		  {this.props.selectedTab}
	  </div>
	);
  }
}


function TabPanel(props) {
	const { children, value, index, ...other } = props;
  
	return (
	  <div
		role="tabpanel"
		hidden={value !== index}
		id={`vertical-tabpanel-${index}`}
		aria-labelledby={`vertical-tab-${index}`}
		{...other}
	  >
		{value === index && (
		  <Box p={3}>
			<Typography>{children}</Typography>
		  </Box>
		)}
	  </div>
	);
  }