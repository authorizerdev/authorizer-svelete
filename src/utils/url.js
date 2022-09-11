import { hasWindow } from './window';

export const getSearchParams = (search = '') => {
	let searchPrams = search;
	if (!searchPrams && hasWindow()) {
		searchPrams = window.location.search;
	}
	const urlSearchParams = new URLSearchParams(`${searchPrams}`);
	const params = Object.fromEntries(urlSearchParams.entries());
	return params;
};
