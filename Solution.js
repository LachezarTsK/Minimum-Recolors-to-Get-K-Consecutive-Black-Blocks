
/**
 * @param {string} blocks
 * @param {number} targetConsecutiveBlackBlocks
 * @return {number}
 */
var minimumRecolors = function (blocks, targetConsecutiveBlackBlocks) {
    const WHITE = 'W';
    const BLACK = 'B';

    let currentCount = 0;
    let front = 0;
    let back = 0;

    while (front < targetConsecutiveBlackBlocks) {
        currentCount += (blocks.charAt(front) === WHITE) ? 1 : 0;
        ++front;
    }

    let minCount = currentCount;
    while (front < blocks.length) {
        currentCount += (blocks.charAt(front) === WHITE) ? 1 : 0;
        currentCount -= (blocks.charAt(back) === WHITE) ? 1 : 0;
        minCount = Math.min(minCount, currentCount);
        ++front;
        ++back;
    }
    return minCount;
};
