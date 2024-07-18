export default class Datos {
    constructor(nomb, sex) {
        this.nombre = nomb;
        this.sexo = sex;
    }

    set nombre (nomb) {
        this._nombre = nomb;
    }
    get nombre() {
        return this._nombre;
    }
    set sexo(sex) {
        this._sexo = sex;
    }
    get sexo() {
        return this._sexo;
    }

    
} 