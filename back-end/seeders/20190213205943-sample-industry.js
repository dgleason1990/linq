'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Industries', [
      {industry: 'Eyebrows',id:1},
      {industry: 'Massage Therapist',id:2},
      {industry: 'Wax',id:3},
      {industry: 'Eyelashes',id:4},
      {industry: 'Hair',id:5},
      {industry: 'Facials',id:6},
      {industry: 'Makeup',id:7}
    ],{});

    const industries = await queryInterface.sequelize.query(
      `SELECT id from INDUSTRIES;`
    );

    const industryRow = industries[0]

    await  queryInterface.bulkInsert('Companies', [{
      businessName: 'Fuzz Wax Bar',
      img: 'https://s3-media2.fl.yelpcdn.com/bphoto/unC7PeI434pdvFjneCRYfg/ls.jpg',
      address: '701 Queen St W',
      summary: "The concept is simple. We focus on one thing and one thing only – waxing. No manicures, no pedicures, just waxing at its best. Fast, affordable, and done really really well! From head to toe and everything in-between, our Fuzzologists® provide superior services with minimal ouch-factor. Speed-Waxing Did you know that the average wax in the city takes 45 minutes? Who wants to lie around being pawed and pulled at for that length of time? Not us! That's why we use a quick waxing method to ensure less pain and the ultimate in-and-out experience. Memberships Waxing is the type of service that should be done regularly in order to reap the full benefits. Our memberships help you stick to your waxing routine while providing ongoing perks, goodies, and discounts so you can save while staying smooth. Learn more Convenience Our flexible hours and speedy services allow you to wax what you want, when you want. We always encourage walk-ins and last minute appointments, making us the go-to wax bar for every lifestyle.",
      point: Sequelize.fn('GeomFromText', 'POINT(43.646729 -79.405663)'),
      industryId: industryRow[0].id
    },{
      businessName: 'Eye Love Beauty Bar',
      img: 'https://static1.squarespace.com/static/5739f80a7c65e49dc2280c06/t/5c48bad58a922d0603eb7e08/1548270341916/eyelove_final_2016-_texture.jpg?format=1000w',
      address: '793 Queen St W, 2nd Floor Toronto, ON',
      summary: "Eye Love Beauty Bar is a specialty salon dedicated to offering modern brow, lash and make-up services in the heart of Queen West in Toronto.",
      point: Sequelize.fn('GeomFromText', 'POINT(43.646151 -79.408518)'),
      industryId: industryRow[0].id
    },{
      businessName: 'Perfect Threading & Beauty Salon',
      img: 'https://s3-media1.fl.yelpcdn.com/bphoto/6wghrJ9ZqYKMS64CQXsOtQ/o.jpg',
      address:'203 Dundas St W',
      summary: 'Perfect Threading & Beauty Salon - A Downtown Toronto Beauty Salon and Spa specializing in the best waxing, henna, facials, hair cuts, hair color, eyelash tinting, eyelash extensions, manicure, pedicure, eyebrow tinting, brazilian waxing, and much more!',
      point: Sequelize.fn('GeomFromText', 'POINT(43.654834 -79.387331)'),
      industryId: industryRow[0].id
    }], {});

    const companies = await queryInterface.sequelize.query(
      `SELECT id from COMPANIES;`
    );

    const companyRow = companies[0];

    await queryInterface.bulkInsert('Employees', [{
              firstName: 'David',
              lastName: 'Gleason',
              img: 'https://david-gleasons-portfolio.herokuapp.com/Assets/profilePicture.jpg',
              bio: 'Hi my name is David! I like beauty stuff',
              companyId: companyRow[0].id
            },{
              firstName: 'Megan',
              lastName: 'Markle',
              img: 'https://timedotcom.files.wordpress.com/2018/12/square-meghan-markle-person-of-the-year-2018.jpg?quality=85',
              bio: 'Hi my name Megan! I am a princess, but on my downtime I like to do eyebrow stuff',
              companyId: companyRow[0].id
            },{
              firstName: 'Kate',
              lastName:'Middleton',
              img:'https://www.hellomagazine.com/imagenes/royalty/2019021167798/see-kate-middleton-thank-you-card/0-319-464/kate-middleton-baftas-t.jpg',
              bio: "Hi I'm Kate and I am going to be the queen. I also like eyebrows",
              companyId: companyRow[0].id
            }], {});

    const employees = await queryInterface.sequelize.query(
      `SELECT id from EMPLOYEES;`
    );

    const employeeRow = employees[0];
    
    return queryInterface.bulkInsert('Services', [{
              service: 'Microblading',
              description: 'We will microblade your eyebrows',
              price: 45.00,
              time: 25,
              employeeId: employeeRow[0].id
            },{
              service: 'Waxing',
              description: 'Wax your eyebrows with organic wax',
              price: 89.99,
              time: 60,
              employeeId: employeeRow[0].id
            },{
              service: 'Cutting',
              price: 10,
              time: 20,
              employeeId: employeeRow[0].id
            }], {});

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Industries');
    await queryInterface.bulkDelete('Companies');
    await queryInterface.bulkDelete('Employees')
  }
};