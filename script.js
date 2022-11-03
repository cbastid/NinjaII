/**Genera Constructor */
function ninjaConstructor(nombreNinja) {
    this.nombre = nombreNinja;
    this.vida = 100;
    this.velocidad = 3;
    this.fuerza = 3;

    this.punch = function(ninjaGolpeado){
        console.log("-> " + this.nombre + " golpeó a " + ninjaGolpeado.nombre + " y perdió 5 de vida =>" + (ninjaGolpeado.vida - 5)  );
    }
    this.kick = function(ninjaGolpeado){
        let vidasGolpeado = 15 * ninjaGolpeado.fuerza;
        console.log("-> " + this.nombre + " golpeó a " + ninjaGolpeado.nombre + " y perdió 15 de vida =>" + (ninjaGolpeado.vida - vidasGolpeado)  );
    }
}

// -> "Bill Gates golpeó a Goemon y perdió 5 de vida"
let blueNinja = new ninjaConstructor("Goemon");
let redNinja = new ninjaConstructor("Bill Gates");
redNinja.punch(blueNinja);

blueNinja.kick(redNinja);



