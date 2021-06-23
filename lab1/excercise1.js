Array.prototype.odd = function () {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      if (this[i] % 2 !== 0) {
        newArr.push(this[i]);
      }
    }
    return newArr;
  };
  
  let arr = [33, 2, 3, 4, 5, 6, 7, 8];
  
  console.log(arr.odd());
  
  Array.prototype.even = function () {
    let newArr2 = [];
    for (let i = 0; i < this.length; i++) {
      if (this[i] % 2 === 0) {
        newArr2.push(this[i]);
      }
    }
    return newArr2;
  };
  let arr2 = [1, 2, 3, 4, 5, 6, 7, 10];
  console.log(arr2.even());
  