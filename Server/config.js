module.exports = {
  dbUrl: process.env.MONGODB_URL || 'mongodb://localhost:27017',
  dbName: 'Facts',
  port: process.env.PORT || 3001
};
