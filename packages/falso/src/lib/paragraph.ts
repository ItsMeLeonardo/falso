import { FakeOptions, fake } from './core/core';
import { data } from './paragraph.json';

/**
 * Generate a random paragraph.
 *
 * @category text
 *
 * @example
 *
 * randJobTitle()
 *
 * @example
 *
 * randJobTitle({ length: 10 })
 *
 */
export function randParagraph<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
