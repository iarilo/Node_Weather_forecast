/* 
// os homedir получаю домашнюю дерикторию
// path Добавить название файла
import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

// join из 2-ух строк делает путь  // C:\Users\weather-data-json
const filePath = join(homedir(), 'weather-data.json');

// Функция создаёт ключ : значение
const saveKeyValue = async (key, value) => {
  let data = {};
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  }
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

// Функция получения valu
const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};

// Функция проверяет что файл существует
const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (e) {
    return false;
  }
};
export { saveKeyValue, getKeyValue }; */


//--------------------------------------

import { promises } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

const filePath = join(homedir(), 'weather-data.json');

const TOKEN_DICTIONARY = {
  token: 'token',
  city: 'city'
}


const saveKeyValue = async (key, value) => {
  let data = {};
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  };

  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  };
  return undefined;
};

const isExist = async (token) => {
  try {
    await promises.stat(filePath)
    return true
  } catch (err) {
    return false;
  }
};

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };















