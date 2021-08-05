export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://database-mongo:27017/clean-node-api',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || '^[0sO)H2@8B!W8,'
}
