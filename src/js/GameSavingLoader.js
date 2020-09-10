import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      const value = read().then((data) => json(data));
      resolve(value);
    });
  }
}

GameSavingLoader.load().then((saving) => {
  return saving;
});
// const data = read(); // возвращается Promise!
// const value = json(data); // возвращается Promise!
// return value;

// {"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}