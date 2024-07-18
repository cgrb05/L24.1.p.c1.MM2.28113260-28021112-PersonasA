export default class Persona {
    constructor(){

        this.contGeneral = 0;
        this.contHombres = 0;
        this.contMujeres = 0;
        
    }

    procesarDatos(data){

        this.contGeneral ++;

        if (data.sexo == 'M') {
            this.contHombres ++;
        }else{
            this.contMujeres ++;
        };


    }

    porcMujeres(){
        return (this.contMujeres * 100 / this.contGeneral).toFixed(2);
    }

    sexoMayorAsistencia(){
        if (this.contHombres > this.contMujeres) {
            return 'mayor asistencia masculina';
        }else if(this.contHombres < this.contMujeres){
            return 'mayor asistencia femenina';
        }else{
            return 'igual asistencia femenina y masculina';
        }
    }
}