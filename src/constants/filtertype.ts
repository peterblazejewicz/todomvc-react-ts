export const SHOW_ACTIVE = 'show_active';
export const SHOW_ALL = 'show_all';
export const SHOW_COMPLETED = 'show_completed';

export type SHOW_ACTIVE = typeof SHOW_ACTIVE;
export type SHOW_ALL = typeof SHOW_ALL;
export type SHOW_COMPLETED = typeof SHOW_COMPLETED;

export type FilterType = SHOW_ACTIVE | SHOW_ALL | SHOW_COMPLETED;
