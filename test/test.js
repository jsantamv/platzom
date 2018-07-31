
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom',function(){


    it('// Si la palabra termina con "ar", se le quitan esas dos letras',function(){
        const transltion = platzom("Programar")
        expect(transltion).to.equal("Program")
    })

    it('Si la palabra inicia con Z, se le añade "pe" al final.',function(){
        const transltion = platzom("Zorro")
        const transltion2 = platzom("Zarpar")

        expect(transltion).to.equal("Zorrope")
        expect(transltion2).to.equal("Zarppe")
    })

    it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio',function(){
        const transltion = platzom("abecedario")
      
        expect(transltion).to.equal("abece-dario")
        
    })

    it('Por último, si la palabra original es un palíndromo',function(){
        const transltion = platzom("sometemos")
      
        expect(transltion).to.equal("SoMeTeMoS")
    })
})