import { z } from 'zod';

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string(),
});

export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo: z.object({
        Fullname: z.string(),
        Name: z.string(),
    }),
});

export const CryptoCurrenciesSchema = z.array(CryptoCurrencyResponseSchema);