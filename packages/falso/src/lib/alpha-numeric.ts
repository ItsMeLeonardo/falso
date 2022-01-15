import { FakeOptions, fake } from './core/core';
import { randBoolean } from './boolean';
import { randAlpha } from './alpha';
import { randNumber } from './number';

/**
 * Get a random alpha or numeric.
 *
 * @category text
 *
 * @example
 *
 * randAlphaNumeric()
 *
 * @example
 *
 * randAlphaNumeric({ length: 3 })
 *
 */
export function randAlphaNumeric<Options extends FakeOptions>(
  options?: Options
) {
  return fake(
    () => (randBoolean() ? randAlpha() : randNumber({ min: 0, max: 9 })),
    options
  );
}
