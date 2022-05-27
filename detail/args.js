  const getArgs = (args) => {
  console.log('ARGS',args);
  const res = {};
  const [ executer, file, ...rest ] = args;
  // executer, file, это 2 дефолтные аргумента свойства  process.argv
  //  ...rest  все  добавленые  свойства из терминала
  // console.log('Rest', rest);
  //Rest [ '-h',Piter ]
    rest.forEach((value, index, array) => {
    // console.log('Array', array);
    // Array['-h',Piter ]

    //charAt() возвращает указанный символ из строки.
                   //Убираю 2 дефолтные аргумента
     // if (если аргумент начинается с "-" то надо его учитывать// нахожу 1 символ в строке: тире - ){}  
    if (value.charAt(0) == '-') {
          if (index == array.length - 1) {
        //index == array.length - 1  //  массив закончился
        // Если масив закончился то тогда эл. с дефисом "-" устанавливаю true
        res[value.substring(1)] = true;
      }
                           // Нахожу 2 элемент: moscow 
    //Если в массиве индекс 2 элемента 1 символа не равен:тире-
      else if (array[index + 1].charAt(0) != '-') {
    //то тогда  формирую массив где 1 эл. ключ а, 2 эл значение
    // value.substring(1) // s
    // array[index + 1] // Moskow
      res[value.substring(1)] = array[index + 1];
         //  substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки. 
      }
      //Если элемент содержит дефис "-" и он не последний то тогда ему тоже ставим true
      else {
        res[value.substring(1)] = true;
     }
    }
  }); 
  return res;
};

export { getArgs };


