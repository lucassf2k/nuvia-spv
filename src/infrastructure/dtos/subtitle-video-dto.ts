import { z } from 'zod';

export const subtitleVideoDTO = z.object({
	file: z
		.string({
			invalid_type_error: 'Espera-se uma string',
			required_error: 'Propriedade file é obrigatório',
		})
		.min(1, 'Propriedade file não pode ser vázio'),
});
