import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { faSyringe, faBug, faViruses } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import IState from '@/interfaces/IState';
import { setSelectedTab } from '@/store/actions';

function mapDispatchToProps(dispatch) {
	return {
		changeSelectedTab: (tab) => dispatch(setSelectedTab(tab))
	}
}

function mapStateToProps(state: IState) {
	return {
		selectedTab: state.runtime.selectedTab
	};
}

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class Navbar extends React.Component<any, any> {
  public handleChange = (event, newValue) => {
	this.props.changeSelectedTab(newValue);
  };
  public render() {
	return (
		<div>
		<Tabs
			orientation="vertical"
			variant="scrollable"
			value={this.props.selectedTab}
			onChange={this.handleChange}
			aria-label="Vertical tabs example"
		>
			<Tab icon={<FontAwesomeIcon icon={faBug} />} id="antiparasitics" value="antiparasitics" />
			<Tab icon={<FontAwesomeIcon icon={faSyringe} />} id="vaccinations" value="vaccinations"  />
			<Tab icon={<FontAwesomeIcon icon={faViruses} />} id="wormed" value="wormed"  />
		</Tabs>
		</div>
	);
  }
}