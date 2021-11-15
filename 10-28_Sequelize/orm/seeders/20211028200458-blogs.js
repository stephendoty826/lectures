'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('blogs', [
      {
      title: "Promises",
      body: "body goes here",
      userID: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Prototypes',
      body: 's,djs;lkdfjslkdjf', 
      userID: 3,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      title: 'Sequelize',
      body: 'slkdjfsldfj', 
      userID: 5,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      title: 'PG Promise',
      body: 'sdkjfslkdf', 
      userID: 6,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      title: 'React',
      body: 'sldkfjsldkjfs', 
      userID: 8,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      title: 'Redux',
      body: 'slkfjsl;kdjflsdf', 
      userID: 9,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      title: 'Bootstrap',
      body: 'lskjdflsk', 
      userID: 2,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      title: 'JQuery',
      body: 'slkjdf;slkdjfls', 
      userID: 3,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      title: 'Alogrithms',
      body: 'lskjfs;lkdf', 
      userID: 5,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      title: 'Houston - Htown',
      body: 'sldkfjls', 
      userID: 6,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      title: 'Atlanta - ATL',
      body: 'sdjfslkjdfs', 
      userID: 8,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      title: 'Santa Barbara',
      body: 'lsdkjflskdf', 
      userID: 9,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      title: 'Seattle- Emerald City',
      body: 'sldkfjslkdfj', 
      userID: 2,
      createdAt: new Date(),
      updatedAt: new Date() 
    }

  ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
