import { FakeOptions, fake } from './core/core';
import { data } from './currency-code.json';

/**
 * Generate a random currency code.
 *
 * @category Finance
 *
 * @example
 *
 * randCurrencyCode()
 *
 * @example
 *
 * randCurrencyCode({ length: 10 })
 *
 */
export function randCurrencyCode<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
