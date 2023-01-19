import { DataTypes } from 'sequelize'
import sequelize from '@config/database'

const Affinity = sequelize.define('Affinity', {
    affinity: {
        type: DataTypes.SMALLINT,
        defaultValue: 0
    }
})

export default Affinity
