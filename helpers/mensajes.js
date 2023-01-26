require('colors');

const mostrarMenu = () => {
    return new Promise( resolve => {

        console.clear();
        console.log('====================='.green);
        console.log('SELECCIONE UNA OPCION');
        console.log('=====================\n'.green);
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borarr tarea`);
        console.log(`${'7.'.green} Salir\n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        })

    });



    
}
const pausa = () => {

    return new Promise(resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`Precione ${'ENTER'.green} para continuar`, (opt) => {
            readline.close();
            resolve();
        })  

    })

}

module.exports = {
    mostrarMenu,
    pausa,
}