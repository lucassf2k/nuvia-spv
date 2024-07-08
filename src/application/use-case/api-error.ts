export type ApiErrorMessage = {
	message: string;
	code: number;
};

export type ApiError = {
	hasError: boolean;
	error?: ApiErrorMessage;
};
