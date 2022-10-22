import { useCallback } from 'react';

/**
 * Returns convenience functions for interacting with the User API.
 * @returns {Object} A series of helper functions.
 */
export const useUserApi = () => {
  /**
   * Create a new user in the current team.
   * @param {Object} user The properties of the new user.
   * @param {String} user.email The email address of the new user.
   * @param {String} [user.firstName] The first name of the new user.
   * @param {String} [user.lastName] The last name of the new user.
   * @returns {Promise<Object>} The user that has been created.
   */
  const createUser = useCallback((user) => {
    return Promise.resolve({ ...user, id: 'new-user-id' });
  }, []);

  return {
    createUser,
  };
};
