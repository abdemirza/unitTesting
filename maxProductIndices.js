const maxProduct = (arr) => {
    max = -Infinity, secondMax = -Infinity;
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            secondMax = max;
            max = arr[i];
        }
        else if (secondMax < arr[i])
            secondMax = arr[i];
    }
    return (max - 1) * (secondMax - 1)
}
