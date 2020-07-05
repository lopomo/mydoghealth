import * as React from 'react';
import Navbar from '@/components/Navbar';
import MainContent from './MainContent';
import AdditionalBar from '@/components/AdditionalBar';

export interface IContentProps {
}

export interface IContentState {
}

export default class Content extends React.Component<IContentProps, IContentState> {
  constructor(props: IContentProps) {
	super(props);

	this.state = {
	}
  }

  public render() {
	return (
	  <div>
			<Navbar></Navbar>
			<MainContent></MainContent>
			<AdditionalBar></AdditionalBar>
	  </div>
	);
  }
}
