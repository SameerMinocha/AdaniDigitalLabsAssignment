function treeConstructor(strArr) {
    var isBinary = 0; 
  
    childs = strArr.map(ele => {
        return ele.substr(1, 1)
    });
  
    parents = strArr.map(ele => {
        return ele.substr(3, 1)
    });
    
    parents.map(parent => {
        if (!childs.includes(parent))
            isBinary++;
    });
  
    isBinary = isBinary == 1 ? true : false;
    return isBinary;
}

console.log(treeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
console.log(treeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));