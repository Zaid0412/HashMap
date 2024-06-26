class HashMap {
  constructor(bucketLimit) {
    this.bucketLimit = bucketLimit;
  }

  bucket = new Array(this.bucketLimit);

  hash = (key, max) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % max;
  };

  get = (key) => {
    const index = this.hash(key, this.bucketLimit);

    if (this.bucket[index]) return this.bucket[index];
    else return null;
  };

  set = (key, value) => {
    for (const item of this.bucket) {
      if (item) {
        if (item[0] == key) {
          item[1] == value;
        }
      }
    }

    const index = this.hash(key, this.bucketLimit);
    this.bucket[index] = [key, value];
  };

  // Checks whether HashMap has 'key', if yes return true, else return false
  has = (key) => {
    const index = this.hash(key, this.bucketLimit);

    if (this.bucket[index]) return true;
    else return false;
  };

  // Deletes the value of 'key'
  remove = (key) => {
    const index = this.hash(key, this.bucketLimit);

    if (this.bucket[index]) {
      delete this.bucket[index];
      return true;
    } else return false;
  };

  // Returns the number of stored keys in the hash map
  length = () => {
    let count = 0;

    for (const item of this.bucket) {
      if (item) {
        count++;
      }
    }
    return count;
  };

  // Removes all entries in the hash map
  clear = () => {
    this.bucket = new Array(this.bucketLimit);
  };

  // Returns an array containing all the keys inside the hash map
  keys = () => {
    let allKeys = [];

    for (const item of this.bucket) {
      if (item) {
        allKeys.push(item[0]);
      }
    }
    return allKeys;
  };

  // Returns an array containing all the values
  values = () => {
    let allValues = [];

    for (const item of this.bucket) {
      if (item) {
        allValues.push(item[1]);
      }
    }
    return allValues;
  };

  // Returns an array that contains each key, value pair
  entries = () => {
    let allEntries = [];

    for (const item of this.bucket) {
      if (item) {
        allEntries.push(item);
      }
    }
    return allEntries;
  };
}
