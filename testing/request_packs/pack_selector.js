

// list of modules -> JSON file
let modules = {
    tracking:{}
}

for(let m in modules){
    let mod = require(`./${m}.json`);
    console.log(mod);
    for(let r in mod){
        modules[m][r] = r;
    }
}
console.log('Modules are setup >\n',modules);


/**
 * Takes module to find JSON file.
 * Takes route to match route in file
 * Takes type to test a pack in that route. Can
 * add any pack to route and reach it through the 
 * type. A 'default' pack should always exist.
 * 
 * @param {String} module 
 * @param {String} route 
 * @param {String} type
 */
const selector = (route,type)=>{
    let runroute = false;
    let runmod = false
    for(let m in modules){
        for(let r in modules[m]){
            if(r==route){
                runmod=m
                runroute = true;
                break;
            }
        }
    }
    if(runroute){
        stashmodule = require(`./${runmod}.json`);
        try{return stashmodule[route].request[type]}
        catch(err){console.error(err);return false;} 
    }
}
let stashmodule = null;
const checker = ({
    module,
    route,
    type,
    response
})=>{
    //compare response to stash module reponse
    //deep equal?

    return true || false //result
}

const recorder = ({file,route,type,response})=>{
    if(type!='default'){//don't override default

    }
    stashmodule = null; //better way to clear
}

module.exports={
    selector,
    checker,
    recorder
}
