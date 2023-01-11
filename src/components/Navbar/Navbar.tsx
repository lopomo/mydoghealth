import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { faSyringe, faBug, faViruses } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import IState from '@/interfaces/IState';
import { setSelectedTab } from '@/store/actions';
import styles from './Navbar.module.scss';

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
		<div className={styles.Navbar}>
		<Tabs
			orientation="vertical"
			variant="scrollable"
			value={this.props.selectedTab}
			onChange={this.handleChange}
			classes={{ root: styles.pepe }}
			aria-label="Vertical tabs example"
		>
			<Tab icon={<div className={styles.pica} />} id="antiparasitics" value="antiparasitics" />
			<Tab icon={<div className={styles.pica2}/>} id="vaccinations" value="vaccinations"  />
			<Tab icon={<FontAwesomeIcon icon={faViruses} />} id="wormed" value="wormed"  />
		</Tabs>
		</div>
	);
  }
}