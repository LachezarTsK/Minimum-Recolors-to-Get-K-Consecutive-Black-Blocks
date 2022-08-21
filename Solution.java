
public class Solution {

    private static final char WHITE = 'W';
    private static final char BLACK = 'B';

    public int minimumRecolors(String blocks, int targetConsecutiveBlackBlocks) {
        int currentCount = 0;
        int front = 0;
        int back = 0;

        while (front < targetConsecutiveBlackBlocks) {
            currentCount += (blocks.charAt(front) == WHITE) ? 1 : 0;
            ++front;
        }

        int minCount = currentCount;
        while (front < blocks.length()) {
            currentCount += (blocks.charAt(front) == WHITE) ? 1 : 0;
            currentCount -= (blocks.charAt(back) == WHITE) ? 1 : 0;
            minCount = Math.min(minCount, currentCount);
            ++front;
            ++back;
        }
        return minCount;
    }
}
