module.exports = function(sequelize,DataTypes){

    var usuario = sequelize.define('usuario',{
        'nome' :DataTypes.STRING,
        'admin' : DataTypes.BOOL
    });
    return usuario;

}



