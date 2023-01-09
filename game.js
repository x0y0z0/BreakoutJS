/* 
ДЛЯ ДОБАВЛЕНИЯ/УДАЛЕНИЯ ЭЛЕМЕНТОВ МАССИВА
*/
push(...items) // добавляет элементы в конец
pop() // извлекает элемент с конца
shift() // извлекает элемент с начала
unshift(...items) // добавляет элементы в начало
splice(pos, deleteCount, ...items) // начиная с [pos], удаляет deleteCount элементов и вставляет items
slice(start, end) // создаёт новый массив, копируя в него [start, end)
concat(...items) // возвращает новый массив из элементов текущего массива + items
/* 
ДЛЯ ПОИСКА СРЕДИ ЭЛЕМЕНТОВ МАССИВА
*/
indexOf(item, pos) //
lastIndexOf(item, pos) //
includes(value) // 
find(func) //
filter(func) //
findIndex() //
/*
ДЛЯ ПЕРЕБОРА ЭЛЕМЕНТОВ МАССИВА
*/
forEach(func) //
/*
ДЛЯ ПРЕОБРАЗОВАНИЯ МАССИВА
*/
map(func) //
sort(func) //
reverse() //
split / join //
reduce(func, initial)
reduceRight(func, initial)

Array.isArray(arr) // 