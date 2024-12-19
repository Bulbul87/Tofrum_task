function coinChangeCombinations(coins, target) {
    const dp = Array(target + 1).fill(0);
    dp[0] = 1;
    for (const coin of coins) {

        for (let amount = coin; amount <= target; amount++) {
            dp[amount] += dp[amount - coin];
        }
    }

    return dp[target];
}
const coins = [5, 2, 4];
const target = 13;
console.log(coinChangeCombinations(coins, target)); 
