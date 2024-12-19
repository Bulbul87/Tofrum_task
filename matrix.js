function maximumPathSum(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const dp = Array.from({ length: n }, () => Array(m).fill(0));
    for (let j = 0; j < m; j++) {
        dp[n - 1][j] = matrix[n - 1][j];
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j < m; j++) {
            let down = dp[i + 1][j];
            let diagLeft = j > 0 ? dp[i + 1][j - 1] : 0;
            let diagRight = j < m - 1 ? dp[i + 1][j + 1] : 0;

            dp[i][j] = matrix[i][j] + Math.max(down, diagLeft, diagRight);
        }
    }
    return Math.max(...dp[0]);
}
const matrix = [
    [12, 22, 5, 0, 20, 18],
    [0, 2, 5, 25, 18, 17],
    [12, 10, 5, 4, 2, 1],
    [3, 8, 2, 20, 10, 8]
];

console.log(maximumPathSum(matrix)); 
