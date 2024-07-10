import { z } from 'zod';

const REGEX_TO_VALIDATE_PATH = new RegExp(
	/^\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+$/,
);

export const videoDTO = z.object({
	file: z
		.string({
			invalid_type_error: 'Espera-se uma string',
			required_error: 'Propriedade file é obrigatório',
		})
		.min(1, 'Propriedade file não pode ser vázio')
		.regex(REGEX_TO_VALIDATE_PATH, 'Não é um diretório válido'),
});
