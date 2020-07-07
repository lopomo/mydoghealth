import ActionTypes from '@/enums/action_types';

export function setSelectedTab(tab: string) {
	return { type: ActionTypes.CHANGE_SELECTED_TAB, tab };
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
