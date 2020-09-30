function camelize(str){
  let arr = str.split("-");
  let brr = arr.map()
      
      .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
  
      return brr.join("");
  }
