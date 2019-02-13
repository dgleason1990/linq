'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Companies', [{
        businessName: 'Fuzz Wax Bar',
        img: 'https://s3-media2.fl.yelpcdn.com/bphoto/unC7PeI434pdvFjneCRYfg/ls.jpg',
        address: '701 Queen St W',
        summary: "The concept is simple. We focus on one thing and one thing only – waxing. No manicures, no pedicures, just waxing at its best. Fast, affordable, and done really really well! From head to toe and everything in-between, our Fuzzologists® provide superior services with minimal ouch-factor. Speed-Waxing Did you know that the average wax in the city takes 45 minutes? Who wants to lie around being pawed and pulled at for that length of time? Not us! That's why we use a quick waxing method to ensure less pain and the ultimate in-and-out experience. Memberships Waxing is the type of service that should be done regularly in order to reap the full benefits. Our memberships help you stick to your waxing routine while providing ongoing perks, goodies, and discounts so you can save while staying smooth. Learn more Convenience Our flexible hours and speedy services allow you to wax what you want, when you want. We always encourage walk-ins and last minute appointments, making us the go-to wax bar for every lifestyle.",
        latitude: 43.646729,
        longitude: -79.405663,
        industryId: 1
      },{
        businessName: 'Eye Love Beauty Bar',
        img: 'https://static1.squarespace.com/static/5739f80a7c65e49dc2280c06/t/5c48bad58a922d0603eb7e08/1548270341916/eyelove_final_2016-_texture.jpg?format=1000w',
        address: '793 Queen St W, 2nd Floor Toronto, ON',
        summary: "Eye Love Beauty Bar is a specialty salon dedicated to offering modern brow, lash and make-up services in the heart of Queen West in Toronto.",
        latitude: 43.646151,
        longitude:  -79.408518,
        industryId: 1
      },{
        businessName: 'Perfect Threading & Beauty Salon',
        img: 'https://s3-media1.fl.yelpcdn.com/bphoto/6wghrJ9ZqYKMS64CQXsOtQ/o.jpg',
        address:'203 Dundas St W',
        summary: 'Perfect Threading & Beauty Salon - A Downtown Toronto Beauty Salon and Spa specializing in the best waxing, henna, facials, hair cuts, hair color, eyelash tinting, eyelash extensions, manicure, pedicure, eyebrow tinting, brazilian waxing, and much more!',
        latitude: 43.654834,
        longitude: -79.387331,
        industryId: 1
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Companies', null, {});
  }
};
