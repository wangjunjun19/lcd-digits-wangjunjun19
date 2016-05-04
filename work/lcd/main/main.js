function printLCD(input) {
    var Keys=buildKeys(input);
    var AllItems=buildAllItems(Keys);
    console.log(printf(AllItems));
}
function buildKeys(input) {
    input+="";
    var Keys=input.split("");
    return  Keys;
}
function buildAllItems(Keys) {
    var allItems = loadAllItems();
    var AllItems=[];
    for(var i=0;i<Keys.length;i++){
        for(var j=0;j<allItems.length;j++){
            if(Keys[i]==allItems[j].key){
                AllItems.push(allItems[j]);
            }
        }
    }
    return AllItems;
}
function printf(AllItems) {
    var str="```\n"+AllItems[0].item[0];
    var str1=AllItems[0].item[1];
    var str2=AllItems[0].item[2];
    for(var i=1;i<AllItems.length;i++){
        str+=" "+AllItems[i].item[0];
        str1+=" "+AllItems[i].item[1];
        str2+=" "+AllItems[i].item[2];
    }
    str+="\n"+str1+"\n"+str2+"\n"+"```";
    return str;
}
