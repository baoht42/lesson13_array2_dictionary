let arr_eng = ["banana", "apple", "orange", "pen", "pencil", "book", "car", "eraser"];
let arr_vie = ["chuối", "táo", "cam", "bút", "bút chì", "sách", "xe hoi", "cuc tay"];

function indexOf(arr, key) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            index = i;
            break;
        }
    }
    return index;
}

function translate1() {
    let key = document.getElementById("key").value;
    let index = indexOf(arr_eng, key);
    let result;
    if (index !== -1) {
        result = key + " co nghia la " + arr_vie[index];
    } else {
        let index2 = indexOf(arr_vie, key);
        if (index2 !== -1) {
            result = key + " co nghia la " + arr_eng[index2];
        } else {
            result = "khong tim thay ket qua";
        }

    }
    document.getElementById('result').innerText = result;
}
