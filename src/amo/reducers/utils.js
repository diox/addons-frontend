import invariant from 'invariant';

import type { LocalizedString } from 'amo/types/api';

import type { CategoryEntry } from './categories';
import type { ExternalAddonType } from '../types/addons';

export const selectLocalizedContent = (
  field: LocalizedString,
  lang: string,
) => {
  invariant(lang, 'lang must not be empty');
  if (!field) {
    return null;
  }

  if (!field[lang]) {
    return field[field._default];
  }

  return field[lang];
};

export const selectCategoryObject = (
  apiAddon: ExternalAddonType,
): CategoryEntry => {
  if (apiAddon.categories instanceof Array) {
    return apiAddon.categories;
  }
  return apiAddon.categories?.firefox;
};
