import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import styles from './Header.module.scss';

export default function Header() {
	return (
		<div className={styles.Header}>
			<AppBar position="static">
			</AppBar>
		</div>
	);
}