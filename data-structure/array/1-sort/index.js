// Contoh Array: 23,98,67,45,12,24
// Prosedur: Ambil pasangan pertama dan tukar jika tidak berurutan dan ulangi sampai elemen terakhir diurutkan

// ###### iteration 1:
// step 1: 23,98,67,45,12,24
// step 2: 23,67,98,45,12,24
// step 3: 23,67,45,98,12,24
// step 4: 23,67,45,12,98,24
// step 5: 23,67,45,12,24,98

// result: we got last element sorted!!

// ###### iteration 2:
// step 1: 23,67,45,12,24,98
// step 2: 23,45,67,12,24,98
// step 3: 23,45,12,67,24,98
// step 4: 23,45,12,24,67,98

// result: we got second last element sorted!!

// ###### iteration 3:
// step 1: 23,45,12,24,67,98
// step 2: 23,12,45,24,67,98
// step 3: 23,12,24,45,67,98

// result: we got third last element sorted!!

// ###### iteration 4:
// step 1: 23,12,24,45,67,98
// step 2: 12,23,24,45,67,98

// hasil: kita mendapat array yang diurutkan!!

function bubbleSort(arr){
    let swapped = false;
    //Buuble sort double than do while loop
    // for(let i = 0; i < arr.length; i++){
    //     for(let j = 0; j < arr.length; j++){
    //         if(arr[j] > arr[j+1]){
    //             let temp = arr[j];
    //             arr[j] = arr[j+1];
    //             arr[j+1] = temp;
    //             swapped = true;
    //         } else {
    //             swapped = false;
    //         }
    //     }
    // }

    // while loop
    // swapped = true
    // while (swapped) {
    //     swapped = false;
    //     for(let i = 0; i < arr.length; i++){
    //         if(arr[i] > arr[i+1]){
    //             let temp = arr[i];
    //             arr[i] = arr[i+1];
    //             arr[i+1] = temp;
    //             swapped = true;
    //         }
    //     }
    // }

    // do 
    // {
    //     swapped = false;
    //     for(let i = 0; i < arr.length; i++){
    //         if(arr[i] > arr[i+1]){
    //             let temp = arr[i];
    //             arr[i] = arr[i+1];
    //             arr[i+1] = temp;
    //             swapped = true;
    //         }
    //     }
    // }
    // while (swapped == true);

    

    
    return arr;
}

let nums = [23, 98, 67, 45, 12, 24, 123, 42, 7, 39];
console.time("bubbleSort timestart");
let sorted = bubbleSort(nums);
console.log(sorted);
console.timeEnd("bubbleSort timestart");