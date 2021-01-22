function kilometerToMeter(kilometer) {
    var meter = 1000;
    if (kilometer > 0) {
        meter = kilometer * meter;
        return meter;
    }
    else if (kilometer < 0 || typeof kilometer !== "number") {
        return "Invalid input.Kilometer should be a positive interger";
    }
}

function budgetCalculator(watch, mobile, laptop) {
    watchPrice = 50;
    mobilePrice = 100;
    laptopPrice = 500;
    if (watch >= 0 && mobile >= 0 && laptop >= 0) {
        var budget = watch * watchPrice + mobile * mobilePrice + laptop * laptopPrice;
        return budget;
    }
    else if (typeof watch !== "number" || typeof mobile !== "number" || typeof laptop !== "number") {
        return "Invalid input.Measurement should be positive interger.";
    }
    else if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Measurement can not be negetive";
    }
}

function hotelCost(day) {
    var oneToTenDaysCost = 100;
    var elevenToTwentyDaysCost = 80;
    var uptoTwentyDaysCost = 50;
    if (day <= 10 && day >= 0) {
        var rent = day * oneToTenDaysCost;
        return rent;
    }
    else if (day <= 20 && day >= 0) {
        var firstTenDaysCost = 10 * oneToTenDaysCost;
        var restDayscost = (day - 10) * elevenToTwentyDaysCost;
        var rent = firstTenDaysCost + restDayscost;
        return rent;
    }
    else if (day > 20) {
        var firstTenDaysCost = 10 * oneToTenDaysCost;
        var secondTenDaysCost = 10 * elevenToTwentyDaysCost;
        var restDayscost = (day - 20) * uptoTwentyDaysCost;
        var rent = firstTenDaysCost + secondTenDaysCost + restDayscost;
        return rent;
    }
    else if (day < 0 || typeof day !== "number") {
        return "Invalid input.Day should be a positive interger";
    }
}

function megaFriend(friendsName) {
    if (friendsName.length <= 0) {
        return "invalid input";
    }
    else if (Array.isArray(friendsName)) {
        var longestName = friendsName[0];
        for (var i = 0; i < friendsName.length; i++) {
            if (typeof friendsName[i] !== "string") {
                return "Invalid input, Please type only name as string.";
            }
            else if (longestName.length < friendsName[i].length) {
                longestName = friendsName[i];
            }
        }
        return longestName;
    }
}