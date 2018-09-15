class Sorter {
  constructor() {
    // your implementation
    this.storage = [];
    this.averageSort = (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.storage.push(element);
  }

  at(index) {
    // your implementation
    return this.storage[index];
  }

  get length() {
    // your implementation
    return this.storage.length;
  }

  toArray() {
    // your implementation
    return this.storage;
  }

  sort(indices) {
    // your implementation
    indices.sort();
    const tempArr = [];
    for(let i = 0; i<indices.length; i++){
      tempArr.push(this.storage[indices[i]]);
    }
    tempArr.sort(this.averageSort);
    for( let i=0; i<indices.length; i++){
      this.storage[indices[i]] = tempArr[i];
    }
  }

  setComparator(compareFunction) {
    this.averageSort = compareFunction;
  }
}

module.exports = Sorter;