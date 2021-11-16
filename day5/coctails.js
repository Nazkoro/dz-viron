
class HashStorage {
    constructor() {
      this.store = {}; 
    }
  
    addValue(key, value) {
      this.store[key] = value; 
    }
  
    getValue(key) {
      return this.store[key]; 
    }
  
    deleteValue(key) {
      if(!(key in this.store)) {
        return false
      }
  
      return delete this.store[key];
    }
  
    getKeys() {
      return Object.keys(this.store);
    }
  }
  
 
  const coctail = new HashStorage();
  
  coctail.addValue('coffee', {milk: true}); // добавляем значение
  coctail.addValue('tea', 'tea with lemons'); // добавляем значение
  console.log(coctail.getValue('coffee'));
  console.log(coctail.getKeys());
  console.log(coctail.deleteValue('tea'));
  