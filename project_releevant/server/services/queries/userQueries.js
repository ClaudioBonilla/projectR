const md5 = require("md5")
const db = require("../mysqlConfig")

const userQueries = {};

userQueries.addUser = async (userData) =>{
    let conn = null;

    try{
        conn = await db.createConnection()

        const userDataObj = {
            nombre:(userData.nombre),
            email:(userData.email),
            password: md5(userData.password),
            telefono:(userData.telefono),
            direccion:(userData.direccion),
            cif:(userData.cif)
        };

        return await db.query('INSERT INTO usuario SET ?', userDataObj, 'insert', conn)

    }catch(error){
        throw new Error (error.message)
    }finally{
        conn && conn.end()
    }
};

userQueries.getUserbyEmail = async(email) =>{
let conn = null;

try{
 conn = await db.createConnection();
 return await db.query('SELECT * FROM usuario WHERE email= ?', email, 'select', conn) 

}catch(error){
    throw new Error (error.message)
}finally{
    conn && conn.end()
}
};


module.exports = userQueries;