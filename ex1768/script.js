// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    word1 = word1.split("");
    word2 = word2.split("");

    const wordsSum = word1.length + word2.length;

    let merge = [];
    let counter = 0;

    for (let indexSum = 0; indexSum < wordsSum; indexSum++) {
        merge.push(word1[indexSum]);

        for (let biggerWordIndex = counter; biggerWordIndex < word2.length; biggerWordIndex++) {
            merge.push(word2[biggerWordIndex]);
            counter++;
            break;
        }
    }

    let merge2 = [];
    for (let index = 0; index < merge.length; index++) {
        if (merge[index] != undefined) {
            merge2.push(merge[index])
        }
    }

    merge2 = merge2.join("");
    return merge2;
};

let x = mergeAlternately("abc", "pq")
// apbqc