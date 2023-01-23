import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(process.env.NEXT_PUBLIC_DB_STRING, {
    dialect: 'postgres'
})

export default sequelize
