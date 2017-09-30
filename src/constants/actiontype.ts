export const ADD_TODO = 'ADD_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export type ADD_TODO = typeof ADD_TODO;
export type CLEAR_COMPLETED = typeof CLEAR_COMPLETED;
export type COMPLETE_ALL = typeof COMPLETE_ALL;
export type COMPLETE_TODO = typeof COMPLETE_TODO;
export type DELETE_TODO = typeof DELETE_TODO;
export type EDIT_TODO = typeof EDIT_TODO;

/**
 * Supported types
 */
export type ActionType =
  | ADD_TODO
  | CLEAR_COMPLETED
  | COMPLETE_ALL
  | COMPLETE_TODO
  | DELETE_TODO
  | EDIT_TODO;
