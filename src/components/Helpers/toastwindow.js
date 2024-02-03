/** @format */

import toast from 'react-hot-toast';

export function toastError(mes) {
	toast.error(mes, {
		icon: '❌',
	});
}

export function toastSuccess(mes) {
	toast.success(mes, {
		icon: '✅',
	});
}
