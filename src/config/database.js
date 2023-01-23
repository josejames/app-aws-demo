import { Sequelize } from 'sequelize'
import pg from 'pg'

const sequelize = new Sequelize(process.env.NEXT_PUBLIC_DB_STRING, {
    logging: false,
    dialectModule: pg,
    dialect: 'postgres'
})

export default sequelize
