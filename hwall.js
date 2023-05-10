'use strick';

// Код должен найти сумму результатов работы двух функций:
// function func1() {
//     return(3);
//     }
// function func2() {
//      return(5);
//     }
//     alert(func1());
//     alert(func2());
//     alert( func1() + func2() ); 


// ЗАДАЧА № 2
// Код должен найти сумму элементов массива

// function sum(arr) {
// 	let res = 0;
	
//     for (let elem of arr) {
//         res += elem;
//     }
    
//     return res;
// }

// alert(sum([1, 2, 3, 4, 5]));

// let err=[1,2,3,4,5,6,7,8,9];

// alert(sum(err));

//ЗАДАЧА №3
// Код должен найти сумму элементов массива, однако ничего не должен выводить в консоль/браузер

// let arr = [1, 2, 3, 4, 5];

// function func(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	return res;
// }

// alert(func(arr));

// ЗАДАЧА № 4
//Код должен найти сумму результатов работы двух функций:

// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }

// alert( func1() + func2() );

// ЗАДАЧА № 5
// Код должен найти сумму элементов массива
// let su = sum([1, 2, 3, 4, 5]);
// alert(su);

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return sum;
// }

//ЗАДАЧА № 6
// Код должен найти сумму элементов массива:
// let res = sum([1, 2, 3, 4, 5]);
// alert(res);

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum;
// }


//ЗАДАЧ № 7
// Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:

// function add(num) {
// 	if (num <= 9) {
// 		return '0' + num;
// 	}
// 	return num;
// }
// alert(add(1));
// alert(add(9));
// alert(add(20));

// ЗАДАЧА № 8
// Код должен найти сумму элементов массива:
// let arr = [1, 2, 3, 4, 5];
// let su = sum(arr);
// alert(su);

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	return res;
// }

// ЗАДАЧА № 9
// Код должен найти сумму цифр числа:

// let num = 12345;
// let res = getDigitsSum(num);
// alert(res);

// function getDigitsSum(num) {
// 	num = String(num);
// 	let arr = num.split('');
// 	let sum = 0;
	
// 	// for (let elem of arr) {
// 	// 	sum += elem;
// 	// }
// 	for( let i = 0; i<arr.length; i++){
// 		sum += +arr[i];
// 	}
// 	return sum;
// 	// return arr;
// }


// ЗАДАЧА № 10
// Код должен проверить число на то, что оно является простым:

// alert(isPrime(13)); // должен вывести true

// function isPrime(num) {
	
// 	for (let i = 2; i < num; i++) {
// 		if (num % i === 0) {
// 			return false;
// 		} 
// 		else {
// 			return true;
// 		}
		
// 	}
// }