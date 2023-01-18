import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(process.env.NEXT_PUBLIC_DB_STRING)

export default sequelize
