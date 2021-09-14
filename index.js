total = 12
coins = [5, 1, 4]

try {
    var result = GetReturnCoins(total, coins);
    console.log("result:");
    console.log(result);
} catch (err) {
    console.error(err);
}

function GetReturnCoins(totalAmount, coins) {
    let coinsToReturn = {};

    coins.forEach(element => {
        coinsToReturn[element] = 0;
    });

    coins = coins.sort(function (a, b) { return b - a });
    coinsToReturn = CalculateCoins(totalAmount, coins, coinsToReturn);

    return coinsToReturn;
}

function CalculateCoins(totalAmount, availableCoins, coinsToReturn) {

    if (totalAmount == 0) {
        return coinsToReturn;
    } else if (availableCoins.length < 1) {
        throw ("Can't return desired money with available coins")
    }

    let currentCoin = availableCoins[0];
    let division = Math.floor(totalAmount / currentCoin);

    if (division > 0) {
        coinsToReturn[currentCoin] += division;
        totalAmount = totalAmount - (division * currentCoin);
    }

    availableCoins.shift();

    return CalculateCoins(totalAmount, availableCoins, coinsToReturn);
}