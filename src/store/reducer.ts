import ActionTypes from '@/enums/action_types';
import IState from '@/interfaces/IState';
import AnimalType from '@/enums/animal_type';

const initState: IState = {
	user: {
		id: 'a',
		name: 'RV'
	},
	animal: [{
		chip: '1',
		detail: {
			name: 'Sisi',
			birthDate: new Date('05-05-2016'),
			type: AnimalType.DOG,
			breed: 'mix',
			color: 'bezova',
			sex: 'FEMALE'
		},
		antiparasitics: [
			{ type: 'tablet', name: 'Bravecto', iat: new Date('07-03-2020'), exp: new Date('10-03-2020') }
		],
		rabiesVaccinations: [
			{ type: 'injection', name: 'Rabisin', iat: new Date('04-24-2019'), exp: new  Date('04-24-2020') }
		],
		otherVaccinations: [
			{ type: 'injection', name: 'Nobivac L4', iat: new Date('04-24-2019'), exp: new  Date('04-24-2020') },
			{ type: 'injection', name: 'Nobivac DHPPi', iat: new Date('04-24-2019'), exp: new  Date('04-24-2020') }
		],
		wormed: [
			{ type: 'tablet', name: 'Galces', iat: new Date('05-04-2020'), exp: new Date('08-04-2020') }
		]
	}],
	runtime: {
		selectedTab: 'antiparasitics'
	}
};

function rootReducer(state = initState, action) {
	switch (action.type) {
		case ActionTypes.CHANGE_SELECTED_TAB:
			state.runtime.selectedTab = action.tab;
		default:
			return state;
	}
}

export default rootReducer;