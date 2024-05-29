// https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (verificaN(n)) {
        return true
    }

    if (flowerbed.length == 1 && flowerbed[0] == 0) {
        flowerbed[0] = 1
        n--
        return true
    }

    if (flowerbed[0] == 0) {
        if (flowerbed[1] == 0) {
            flowerbed[0] = 1
            n--
        }
    }

    if (verificaN(n)) {
        return true
    }

    if (flowerbed[flowerbed.length - 1] == 0) {
        if (flowerbed[flowerbed.length - 2] == 0) {
            flowerbed[flowerbed.length - 1] = 1
            n--
        }
    }

    if (verificaN(n)) {
        return true
    }

    for (let index = 0; index < flowerbed.length; index++) {
        if (verificaN(n)) {
            break
        }

        if (flowerbed[index] == 0) {
            if (flowerbed[index + 1] == 0 && flowerbed[index - 1] == 0) {
                flowerbed[index] = 1
                n--
            }
        }
    }

    if (verificaN(n)) {
        return true
    }

    return false
};

function verificaN(n) {
    if (n === 0) {
        return true
    }
    return false
}


console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));
