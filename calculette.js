class Calculette {
    constructor() {
      this.inner_value = 0
    }
  
    // change inner value
    set(value) {
      if(typeof(value) !== 'number'){
        throw new Error("not a number");
      }else {
        this.inner_value = value
      }
     
      return this
    }
  
    reset() {
      this.inner_value = 0
      return this
    }
  
    // return inner value
    value() {
      return this.inner_value
    }
  
    add(value) {
      this.inner_value += value
      return this
    }
  
    multiply(value) {
      this.inner_value *= value
      return this
    }

    substract(value) {
      this.inner_value -= value
      return this
    }

    divide(value) {
      if(value===0){
        throw new Error("Unvailable de diviser par 0");
      } else {
        this.inner_value /= value
      }
      return this
    }

    print(){
      console.log(this.inner_value);
    }
  }
  
  
  
  
  module.exports = Calculette;