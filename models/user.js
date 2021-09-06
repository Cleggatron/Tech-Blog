const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

//ToDo ADD HOOK FOR PASSWORD bcryption
//ToDo Add a password comparision method

class User extends Model {

}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false     
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        //passes the connection
        sequelize,       
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        //table name
        modelName: "user"
    }
)
module.exports = User