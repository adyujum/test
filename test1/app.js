//1
const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12as45"));

//2
const logEverySecond = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
}

logEverySecond();

//3
const count = () => {
    let i = 1; // Начальное значение
    const interval = setInterval(() => {
        console.log(i); // Выводим текущее число
        if (i === 10) {
            clearInterval(interval); // Останавливаем таймер на 10
        }
        i++; // Увеличиваем счетчик
    }, 1000); // Интервал в 1 секунду
};

count();

//4
const block = document.getElementById('colorBlock');

block.addEventListener('click', () => {
    block.classList.toggle('bg-colored');
});


// 5

const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json');

xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    console.log('Данные :', data);

};


xhr.send();