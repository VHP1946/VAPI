var VHPCoreServer = require('./bin/vapi-core.js');

/*
    STORE
    SERVICE
*/
const config = require('./data/vhp-config.json');
const PORT = config.port || 5000; //port for local host
let dev = config.dev!=undefined ?config.dev : false; //turn on and off depending if server being run without reverse proxy;

let core = new VHPCoreServer(config,'http');

core.server.on('request',(req,res)=>{//handle headers =>
	if(req.rawHeaders['Sec-Fetch-Site']!='same-origin'){
		if(dev){
			console.log('development')
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
			res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
		}
	}
});

core.server.on('request',(req,res)=>{

	let data = '';
	req.on('data',chunk=>{data+=chunk;});

	req.on('end',()=>{
		console.log("Data ",data);
		try{data=JSON.parse(data);}catch{data={};}
		console.log('INCOMING DATA>',data);
		if(Object.keys(data).length>0){
			console.log('Data ',data)
			console.log('URL ',req.url);
			core.runner({
				req:req,
				res:res,
				data:data
			}).then(answr=>{
				console.log('Runner is Back >',answr);
			});
		}else{//request had no data
			res.write(JSON.stringify({
				success:false,
				msg:'No data was passed to fill request.'
			}));
			res.end();
		}
	});
});

core.server.listen(PORT,()=>{console.log('VAPI Core Listening: ',PORT)});
