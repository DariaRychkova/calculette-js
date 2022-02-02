var assert = require('assert');
const { error } = require('console');

var Calculette = require('../calculette');

    // it('should return -1 when the value is not present', function() {
    //  assert.equal( [1, 2, 3].indexOf(4), -1 );
    // });

    function iThrowError() {
        throw new Error("Error thrown");
    }

describe('Calculette', function() {
  describe('#constructor()', function() {

    it('should return 0 by default', function() {
      let calc = new Calculette();
      assert.equal( calc.value(), 0 )
    });

  });

  describe('#set()', function() {
    it('it should work only with numbers', function() {
        let calc = new Calculette();
        
        const expError = new Error("not a number");
        //assert.throws(iThrowError, Error, "Error thrown");
        assert.throws(()=>{
            calc.set("toto")
        }, expError);
      });

    it('it should change the inner value of the calculette', function() {
      let calc = new Calculette();
      calc.set(100);
      let final = calc.value();

      assert.equal( final, 100 )
    });

   
    it('it should keep only the latest value set', function() {
      let calc = new Calculette();
      calc.set(50);
      calc.set(100);
      calc.set(200);
      let final = calc.value();

      assert.equal( final, 200 )
    });
  });

  describe('#reset()', function() {
    // it should return 0 after reset
    it('should return 0 after reset', function() {
        let calc = new Calculette();
      assert.equal( calc.value(), 0  )
    });
  });


  describe('#add()', function() {
    it('it should not change the value when we add 0', function() {
        let calc = new Calculette();
      calc.set(100)
      calc.add(0) // added value
    
      assert.equal( calc.value(), 100 )
    });
 
    it('should changes the inner value by a difference of X', function() {
        let calc = new Calculette();
      calc.set(100)
      let initial = calc.value();
      let added = 98;
      calc.add(added) // added value
      let final = calc.value();

      assert.equal( final - initial, added )
    })
  })

  describe('#multiply()', function() {
    it('should not change the value when we multiply with 1', function() {
        let calc = new Calculette();
      calc.set(100)
      calc.multiply(1)
      assert.equal( calc.value(), 100 ) 
    })
   
    it('should change to 0 when we multiply with 0', function() {
        let calc = new Calculette();
      calc.set(100)
      calc.multiply(0)
      assert.equal( calc.value(), 0 ) 
    })

    it('should work even with negative values', function() {
        let calc = new Calculette();
      calc.set(100)
      calc.multiply(-1)
      assert.equal( calc.value(), -100 ) 
    })
   
    // it changes the inner value by +X 
  });

  it('should allow composing functions', function() {
    let calc = new Calculette();
    calc.set(100).add(10)
    assert.equal( calc.value(), 110)

    calc.reset().add(10).multiply(2)
    assert.equal( calc.value(), 20)

    calc.reset().multiply(2).add(10)
    assert.equal( calc.value(), 10)

    calc.reset().divide(1).multiply(1).substract(1).add(1)
    assert.equal( calc.value(), 0)
  })

  describe('#substract()', function() {
    it('La méthode substract doit retirer x de la valeur interne de la calculette', function() {
        let calc = new Calculette();
      calc.set(100)
      calc.substract(10) // added value
    
      assert.equal( calc.value(), 90 )
    });
 
    it('La méthode substract doit etre invariante quand x vaut zéro (0)', function() {
        let calc = new Calculette();
      calc.set(100)
      calc.substract(0) // added value
     
      assert.equal(calc.value(), 100 )
    })

    // it('La méthode substract doit etre composable avec les autres méthodes', function() {
    //     calc = new Calculette();
    //     calc.set(100)
    //     calc.substract(1).divide(1).multiply(1).add(1)
    //     assert.equal( calc.value(), 100 ) 
    //   })
  });

  describe('#divide()', function() {
    it('La méthode divide doit diviser la valeur interne par x', function() {
        let calc = new Calculette();
      calc.set(100)
      calc.divide(10)
      assert.equal( calc.value(), 10 ) 
    })
   
    it('La méthode divide doit etre invariante quand x vaut un (1)', function() {
        let calc = new Calculette();
      calc.set(100)
      calc.divide(1)
      assert.equal( calc.value(), 100 ) 
    })

    it('La méthode divide doit retourner une exception quand x vaut zéro (0)', function() {
        let calc = new Calculette();
    //   calc.set(100)
    //   calc.divide(0)
      const expError = new Error("Unvailable de diviser par 0");
      //assert.throws(iThrowError, Error, "Error thrown");
      assert.throws(()=>{
        calc.divide(0)
      }, expError);
    })

//     it('La méthode divide doit etre composable avec les autres méthodes', function() {
//         calc = new Calculette();
//         calc.set(100)
//         calc.divide(1).multiply(1).add(1).substract(1)
//         assert.equal( calc.value(), 100 ) 
//       })
   });

});