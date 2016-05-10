function printLcd(input) {
    var keys=buildKeys(input);
    var allItems=buildItems(keys);
    
    console.log(printf(allItems));
}

function buildKeys(input) {
    input+="";
    var keys=input.split("");
    
    return  keys;
}

function buildItems(keys) {
    var allItems = loadAllItems();
    var items=[];

    keys.forEach(function (value) {
       findTheCorrespondingItem(allItems,value,items);
   });
    
    return items;
}

function findTheCorrespondingItem(allItems,value,items) {
    for(var j=0;j<allItems.length;j++){
        if(value==allItems[j].key){
            items.push(allItems[j]);
        }
    }
}

function printf(items) {
    var str="```\n";

    items.forEach(function (value, index) {
        str=stringBuilderItems(items,str,index);
        str+="\n";
    });
    str+="```";

    return str;
}

function stringBuilderItems(items,str,j) {
    for(var i=0;i<items.length;i++){
        str+=items[i].item[j];
        if(i!=items.length-1){
            str+=" ";
        }
    }

    return str;
}
