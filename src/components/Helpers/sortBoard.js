/** @format */

export function sortByIDFirst(arr, targetID) {
	const tempArr = [...arr];

	return tempArr.sort((a, b) => {
		if (a._id === targetID) {
			return -1;
		} else if (b._id === targetID) {
			return 1;
		} else {
			return 0;
		}
	});
}
