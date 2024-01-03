function merge(left, right) {
    const sortedList = [];
    let lIndex = 0, rIndex = 0;
    while (lIndex < left.length || rIndex < right.length) {
        if (lIndex === left.length) {
            sortedList.push(right[rIndex]);
            rIndex++;
        } else if (rIndex === right.length) {
            sortedList.push(left[lIndex]);
            lIndex++;
        }
        else if (left[lIndex] < right[rIndex]) {
            sortedList.push(left[lIndex]);
            lIndex++;
        } else {
            sortedList.push(right[rIndex]);
            rIndex++;
        }
    }

    return sortedList;
}

function mergeSort(low, high, list) {
    if (list.length === 0) {
        return [];
    }

    if (low === high) {
        return [list[low]];
    }

    const mid = Math.floor((low + high) / 2);
    const left = mergeSort(low, mid, list);
    const right = mergeSort(mid + 1, high, list);

    return merge(left, right);
}

const list1 = [3, 2, 1, 13, 8, 5, 0, 1];
console.log('List1:', list1);
console.log('Sorted:', mergeSort(0, list1.length - 1, list1));

const list2 = [105, 79, 100, 110];
console.log('List2', list2);
console.log('Sorted', mergeSort(0, list2.length - 1, list2));