import { useCallback } from 'react';

/**
 * Returns convenience functions for interacting with the License API.
 * @returns {Object} A series of helper functions.
 */
export const useLicenseApi = () => {
  /**
   * Add licenses to an existing user.
   * @param {String} user The user ID for the user that the licenses must be assigned to.
   * @param {Array<String>} selectedProducts An array of product IDs that must be assigned to the user.
   * @returns {Promise<Object>} A representation of the products that have been assigned.
   */
  const assignLicensesToUser = useCallback((userId, selectedProducts) => {
    return Promise.resolve({ userId: userId, addedProducts: { ...selectedProducts } });
  }, []);

  /**
   * Get products owned by the organization.
   * @returns {Promise<Object>} A representation of the products owned by the organization.
   */
  const getOrganizationProducts = useCallback(() => {
    return Promise.resolve([
      {
        assignedLicenses: 4,
        productId: 'PHSP',
        productName: 'Photoshop',
        ownedLicenses: 10,
      },
      {
        assignedLicenses: 16,
        productId: 'ILLU',
        productName: 'Illustrator (10GB Photography Plan)',
        ownedLicenses: 25,
      },
      {
        assignedLicenses: 15,
        productId: 'CCLE',
        productName: 'Creative Cloud All Apps (inc. Adobe Stock, 1TB Storage)',
        ownedLicenses: 15,
      },
    ]);
  }, []);

  return { assignLicensesToUser, getOrganizationProducts };
};
