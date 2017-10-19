import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
	it('should return currencies', () => {
		const result = getCurrencies();

		expect(result).toContain('AMD');
		expect(result).toContain('USD');
		expect(result).toContain('EUR');

	});
});