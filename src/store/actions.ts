import ActionTypes from '@/enums/action_types';

export function setSelectedTab(tab: number) {
	return { type: 'PICA', payload: tab };
}

// thunk
// export function fetchConfig(finesseConfig) {
// 	return async (dispatch) => {
	
// 		dispatch(__loadConfigSuccess(configResponse.config));
// 	};
// }

// function __loadConfigSuccess(payload) {
// 	return { type: ActionTypes.FETCH_CONFIG, payload };
// }
