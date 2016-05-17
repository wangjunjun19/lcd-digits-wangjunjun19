function printLcd(input) {
    var keys = buildKeysArray(input);
    var lcdArray = buildLcdsArray(keys);

    console.log(toLcd(lcdArray));
}

function buildKeysArray(input) {
    input += "";
    var keysArray = input.split("");

    return keysArray;
}

function buildLcdsArray(keysArray) {
    var allItems = loadAllItems();
    var lcdArray = [];

    keysArray.forEach(function (value) {
        findTheCorrespondingItem(allItems, value, lcdArray);
    });

    return lcdArray;
}

function findTheCorrespondingItem(allItems, value, lcdArray) {
    for (var j = 0; j < allItems.length; j++) {
        if (value == allItems[j].key) {
            lcdArray.push(allItems[j]);
        }
    }
}

function toLcd(lcdArray) {
    var str = "```\n";

    lcdArray.forEach(function (value, index) {
        str = stringBuilder(lcdArray, str, index);
        str += "\n";
    });
    str += "```";

    return str;
}

function stringBuilder(lcdArray, str, j) {
    for (var i = 0; i < lcdArray.length; i++) {
        str += lcdArray[i].item[j];
        if (i != lcdArray.length - 1) {
            str += " ";
        }
    }

    return str;
}
