module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('user',{
        name:{
            type:DataTypes.STRING(20),
            allowNull:false,
            unique:true
        },
        age:{
            type:DataTypes.INTEGER.UNSIGNED,
            allowNullo:false,
        }
    })
}