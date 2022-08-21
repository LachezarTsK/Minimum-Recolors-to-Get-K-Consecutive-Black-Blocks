
using namespace std;

class Solution {
    
    inline static const char WHITE = 'W';
    inline static const char BLACK = 'B';
    
public:
    int minimumRecolors(string blocks, int targetConsecutiveBlackBlocks) {
        int currentCount = 0;
        int front = 0;
        int back = 0;

        while (front < targetConsecutiveBlackBlocks) {
            currentCount += (blocks[front] == WHITE) ? 1 : 0;
            ++front;
        }

        int minCount = currentCount;
        while (front < blocks.length()) {
            currentCount += (blocks[front] == WHITE) ? 1 : 0;
            currentCount -= (blocks[back] == WHITE) ? 1 : 0;
            minCount = min(minCount, currentCount);
            ++front;
            ++back;
        }
        return minCount;
    }
};
