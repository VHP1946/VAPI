const months = [
  {
      "name": "Carry-Over",
      "abbrev": "CO"
  },
  {
      "name": "January",
      "abbrev": "Jan"
  },
  {
      "name": "February",
      "abbrev": "Feb"
  },
  {
      "name": "March",
      "abbrev": "Mar"
  },
  {
      "name": "April",
      "abbrev": "Apr"
  },
  {
      "name": "May",
      "abbrev": "May"
  },
  {
      "name": "June",
      "abbrev": "Jun"
  },
  {
      "name": "July",
      "abbrev": "Jul"
  },
  {
      "name": "August",
      "abbrev": "Aug"
  },
  {
      "name": "September",
      "abbrev": "Sep"
  },
  {
      "name": "October",
      "abbrev": "Oct"
  },
  {
      "name": "November",
      "abbrev": "Nov"
  },
  {
      "name": "December",
      "abbrev": "Dec"
  }
]

function toTitleCase(str) {
    var lcStr = str.toLowerCase();
    return lcStr.replace(/(?:^|\s)\w/g, function(match) {
    return match.toUpperCase();
    });
}

function SORTlist(list,sortopt,sortorder){
    return list.sort((a,b)=>{
      const itemA = a[sortopt]; 
      const itemB = b[sortopt]; 
      if (itemA < itemB) {
        return -1*sortorder;
      }
      if (itemA > itemB) {
        return 1*sortorder;
      }
      return 0;
      });
}

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }
  return true;
}
function isObject(object) {
  return object != null && typeof object === 'object';
}


// Need to check for leading characters
// Need to send error messege
function stringValidate(str){
  //let spChar = "/[!@#$%^&*()_+\-=\[\]{};':\\|.<>\/?]+/";
  let spChar = `\/:*?"<>|`;
  if(str.charAt(0)=='.'){str = str.replace('.','')}  // Replaces just the first '.' if the name starts with one
  for (var i = 0; i < str.length; i++) {
      if (spChar.indexOf(str.charAt(i)) != -1) {
          return spChar;
      }
  }
  return false;
}

const format = {
  number: {
      get: (value)=>{
        return Number(value.replace(/[$,]/g,''));
      },
      set: (value,decimals=0)=>{
        return numformat(value,decimals);
      }
    },
  price: {
    get: (value)=>{
      return Number(value.replace(/[$,]/g,''));
    },
    set: (value,cents=false)=>{
      return priceformat(value,cents);
    }
  },
  percent: {
      get: (value)=>{
        return Number(value.replace(/[%,]/g,''))/100;
      },
      set: (value,decimals=0)=>{
        return percentformat(value,decimals);
      }
    },
  phone: {
    get: (value)=>{
      return value.replace(/\D/g,'');
    },
    set: (value)=>{
      return phoneformat(value);
    }
  },
  zip: {
    get: (value)=>{
      return value.replace(/\D/g,'');
    },
    set: (value)=>{
      return zipformat(value);
    }
  },
  date: {
    get: (value)=>{
      return new Date(value);
    },
    set: (value,time=false)=>{
      return dateformat(value,time);
    }
  }
}

function zipformat(input){  // returns ##### or #####-####
  input = input.replace(/\D/g,'');
  let size = input.length;
  if(size<=5){
      let diff = 5 - input.length;
      for(let i=0;i<diff;i++){
          input = input + 'x';
      }
  }else{
      let diff = 9 - input.length;
      for(let i=0;i<diff;i++){
          input = input + 'x';
      }
      input = input.slice(0,5) + "-" + input.slice(5,9)
  }
  return input;  
}

function numformat(input,decimals=0){   // returns ##,### or ##,###.###
  return new Intl.NumberFormat(`en-US`, {
      style: 'decimal',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
      }).format(input);
}

function priceformat(price,cents=false){  // returns $##,### or $##,###.##
  let fprice = new Intl.NumberFormat(`en-US`, {
      currency: `USD`,
      style: 'currency',
      }).format(price);
  return cents?fprice:fprice.split('.')[0];  
}

function phoneformat(input) {  // returns (###) ###-####
  input = input.replace(/\D/g,'');
  let size = input.length;
  if (size>0) {input="("+input}
  if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11)}
  if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
  return input;
}

function dateformat(input,time=false){  // returns mm/dd/yy or hh:mm:ss AM
  input = new Date(input);
  if(!time){
      return input.toLocaleDateString();
      //return input.toISOString().split('T')[0];
  }else{
      return input.toLocaleTimeString();
      //return input.toISOString().split('T')[1].replace('Z','');
  }
}

function percentformat(input,decimals=0){
  return new Intl.NumberFormat(`en-US`, {
      style: 'percent',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
      }).format(input);
}

module.exports = {
  months,
  toTitleCase,
  SORTlist,
  deepEqual,
  stringValidate,
  format,
  numformat,
  priceformat,
  percentformat,
  phoneformat,
  zipformat,
  dateformat
}