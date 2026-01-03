import { Sequelize } from "sequelize";

const sequelize = new Sequelize('mariadb://chordhub_metalthumb:33120fe664247cfba8ad3164b712c3658ccf645e@qmfblg.h.filess.io:3305/chordhub_metalthumb')

export async function testConnection(){
    try{
        await sequelize.authenticate();
        console.log('Conexion hecha')
    }
    catch(error){
        console.error(ErrorEvent)
    }
}
