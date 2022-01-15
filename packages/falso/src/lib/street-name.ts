import { FakeOptions, fake } from './core/core';
import { data } from './street-name.json';

/**
 * Generate a random street-name.
 *
 * @category address
 *
 * @example
 *
 * randStreetName()
 *
 * @example
 *
 * randStreetName({ length: 10 })
 *
 */
export function randStreetName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
