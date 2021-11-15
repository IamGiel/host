// a beautiful coin combination is a coin that has all HHHH... or all TTTT...

// need the least number of flips/action to get beautiful coin combination

// If its coins are randomly mixed, a combination THHHHHT for example1,
// any HH....TT is a beautiful coin combination, therefore
// in example1, we need to flip the first T to H and the second to last H to T to be considered beautiful combination
// exmaple2 THHTTHH, we need to flip first coin to H, then flip the last two H's to T

let test_case1 = "THHHTH";
let test_case2 = "TTTHHH";
let test_case3 = "TTTTTT";
let test_case4 = "HHHHHH";
let test_case5 = "TTTTTH";
let test_case6 = "HHHHHT";
let test_case7 = "THHHHT";
let test_case8 = "HTHHHT";
let test_case9 = "HHHTTT";
let test_case10 = "HHHTTH";
let test_case11 = "THHHTT"

let flips = null;

// function helpers
function allsame(s) {
  let test_s = /^(.)\1+$/.test(s);
  // console.log("test s: ", test_s)
  return test_s;
}

function checkFirstTwoChars(s) {
  // console.log(s)
  let res = {};
  let nArr = s.split("");
  let restOfElements = [];
  let countInstanceofT = 0;


  // check if two first chars have HH
  for (i = 0; i < nArr.length; i++) {
    if ((nArr[0] == "H") && (nArr[1] == "H")) {
      // console.log("two HHs baby!", nArr)
      // if it is, check the remaining elements
      if (i > 1) {
        // console.log("hellow")
        for (i = 2; i < nArr.length; i++) {
          // console.log(`${i}: ${nArr[i]}`)
          if (nArr[i] !== "H") {
           
            // remove the first two characters from original string s
            let new_str = s.substring(2);

            res.original_string = s;
            res.restOfString = new_str;
            // let new_str = "HHHT"; // testing purpose
            console.log(new_str)
            console.log("first index of H: ", new_str.indexOf("H"))
            console.log("last index of H ", new_str.lastIndexOf("H"))
            let first_indexofH = new_str.indexOf("H");
            let last_indexofH = new_str.lastIndexOf("H")

            // if first instanceo f H and last instance of H are not 0 and not equal 
            // it means that there are H's spread out randomly in the remaining string
            // this means its not a beautiful combination
            //  console.log("allsame(new_str): ", allsame(new_str))
            if (allsame(new_str) && new_str.indexOf("H") > -1) {
              console.log("all Hs --> beautiful combination already!")
              countInstanceofT = 0;
            } else {
              if (((first_indexofH == 0) && (last_indexofH !== first_indexofH)) || (first_indexofH > 0) && ((last_indexofH - first_indexofH) >= 1)) {
                console.log("some H's are spread mixed with T's")
                for(j=0;j<new_str.split("").length;j++){
                  if(new_str[j]=="H"){
                    countInstanceofT++;
                  }
                }
              } else {
                console.log("its beautiful combination already!")
                countInstanceofT = 0;
              }
            }
          } else {
            res.theRestAreTs = false;
          }
        }
      }
      // res.numOfT = countInstanceofT;
      // res.definition = "string starts with H's"
      // res.resolve = true;
    } 

    if ((nArr[0] == "T") && (nArr[1] == "H")) {
      countInstanceofT = 1;
      // console.log("two HHs baby!", nArr)
      // if it is, check the remaining elements
      if (i > 1) {
        // console.log("hellow")
        for (i = 2; i < nArr.length; i++) {
          // console.log(`${i}: ${nArr[i]}`)
          if (nArr[i] !== "H") {
           
            // remove the first two characters from original string s
            let new_str = s.substring(2);

            res.original_string = s;
            res.restOfString = new_str;
            // let new_str = "HHHT"; // testing purpose
            console.log(new_str)
            // console.log("first index of H: ", new_str.indexOf("H"))
            // console.log("last index of H ", new_str.lastIndexOf("H"))
            let first_indexofH = new_str.indexOf("H");
            let last_indexofH = new_str.lastIndexOf("H")

            // if first instanceo f H and last instance of H are not 0 and not equal 
            // it means that there are H's spread out randomly in the remaining string
            // this means its not a beautiful combination
            //  console.log("allsame(new_str): ", allsame(new_str))

            let tr = new_str.split("");
            let second_to_last = tr[tr.length-2]
            // console.log(second_to_last)
            if (allsame(new_str.slice(0,-2)) && new_str.slice(0,-2).indexOf("H") > -1 && second_to_last =="T") {
              console.log("all Hs --> beautiful combination already!")
            } 
          } else {
            res.theRestAreTs = false;
          }
        }
      }
      res.numOfT = countInstanceofT;
      res.definition = "string starts with H's"
      res.resolve = true;
    } 
    
    
    
    else {
      // console.log("NO, two HHs")
      res.numOfT = null;
      res.definition = "string DID NOT start with H's"
      res.resolve = false;
    }
  }
  res.numOfT_definition = "number of flips to make em rest of combination Ts"
  // console.log("checkFirstTwoChars info: ", res)
  return res;
}

function makeEmUniform(s) {
  // attemp to make em all uniform, how many flips would it require
  let nArr = s.split("");
  // console.log(nArr)
  let allT = [];
  let allH = [];
  // console.log("make this uniform: ", nArr)

  for (let i = 0; i < nArr.length; i++) {
    let el = nArr[i]
    // console.log(el)
    if (el == "H") {
      allH.push(el)
    }
    if (el == "T") {
      allT.push(el)
    }
  }
  // console.log(allH.length)
  // console.log(allT.length)
  if ((allH.length < allT.length) && (allH.length !== nArr.length)) {
    // console.log("all H < all Ts", nArr)
    // console.log("steps to uniformity: ", allH.length)
    return allH.length;
  }
  if ((allT.length < allH.length) && (allT.length !== nArr.length)) {
    // console.log("all T < all H", nArr)
    // console.log("steps to uniformity: ", allT.length)
    return allT.length;
  }
  if ((allH.length > allT.length) && (allH.length === nArr.length)) {
    // console.log("all H < all Ts", nArr)
    // console.log("steps to uniformity: ", 0)
    return 0;
  }
  if ((allT.length > allH.length) && (allT.length === nArr.length)) {
    // console.log("all T < all H", nArr)
    // console.log("steps to uniformity: ", 0)
    return 0;
  }
  if (allT.length == allH.length) {
    // console.log("equal number of T and H", nArr)
    // console.log("steps to uniformity: ", allT.length)
    return allT.length;
  }



}

function run(s) {
  console.log("test string: ", s)
  console.log("============")
  let twoChars = checkFirstTwoChars(s);
  console.log(twoChars)
  console.log("numOfT: ", twoChars.numOfT)
  console.log("============")
  let uniformity = makeEmUniform(s);
  console.log("uniformity: ",uniformity);
  console.log("============")

  // twochars.numoft is null go to uniformity
  if(twoChars.numOfT == null){
    console.log("we go to uniformity: ", uniformity)
    return uniformity;
  } else {
    if(twoChars.numOfT < uniformity){
      console.log("return num steps: ", twoChars.numOfT)
    }
    if(twoChars.numOfT > uniformity){
      console.log("return num steps: ", uniformity)
    }
    if(twoChars.numOfT == uniformity){
      console.log("return num steps: ", uniformity)
    }
  }
}

run(test_case5);
