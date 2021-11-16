let addRecipe = document.querySelector('.write_list__сocktails')
let removeRecipe = document.querySelector('.delete_recipe')
let showRecipe = document.querySelector('.read_list_recipe')
let showAllName = document.querySelector('.all_name__recipe')
let result = document.querySelector('.result')

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
  
 
  const coctailsStorage = new HashStorage();
  
  coctailsStorage.addValue('coffee', {'alcohol': true}); // добавляем значение
  coctailsStorage.addValue('tea', 'tea with lemons'); 
  // добавляем 
  let addName = ''
  let addList = {}
  addRecipe.addEventListener('click' , () => {
	  addName = prompt('Название рацепта')
	  addList = prompt('Рецепт')
	  coctailsStorage.addValue(addName, addList)
	   
  })

   showAllName.addEventListener('click' , () => {
	  
	  result.textContent = coctailsStorage.getKeys()
	   
  })

  
   showRecipe.addEventListener('click' , () => {
	  addName = prompt('Название рацепта')
	  if(coctailsStorage.getValue(addName)){
		result.textContent = JSON.stringify(coctailsStorage.getValue(addName))
	  } else result.textContent = 'нет такого рецепта'
	  
	   
  })

  removeRecipe.addEventListener('click' , () => {
	  addName = prompt('Название рацепта')
	  result.textContent = JSON.stringify(coctailsStorage.deleteValue(addName))
	   
  })
  

  
  