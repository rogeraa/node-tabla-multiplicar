const fs = require('fs');
const color = require('colors');
const crearArchivoTabla =  async( base = 5, listar = false, hasta = 10) => {
    try{
        let salida, consola = '';
        for(let i=1; i<=hasta;i++){
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.red} ${i} ${'='.red} ${base * i}\n`;
        }
        if(listar){
            console.log('============================='.cyan);
            console.log('Tabla del:'.yellow, base);
            console.log('============================='.cyan);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    }
    catch(error){
        throw error;
    }
    
};
module.exports = {
    crearArchivoTabla
};