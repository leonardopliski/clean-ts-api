export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://root:example@localhost:27017/clean-node-api?authSource=admin',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || '^[0sO)H2@8B!W8,'
}
