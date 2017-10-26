console.log("模块加载完成");
require.config({
	//baseUrl:'',
	paths:{
		dem1:"d1",
		dem2:"d2",
		dem3:"jquery-1.8.3"
	},
	shim:{
		by:{exports:"by"},
		byby:{exports:"byby"}
	},
	shim:{
		haha:{
			init:function(){
				return{
					by:"by",
					byby:"byby"
				}
			}
		}
	}
});

require(["dem3","dem1","dem2"],function($,d1,d2){

	d1.hello();
	d2.hello();
	by()
	byby()

})
require(["dem1"],function(ha){
	
	ha.by;
	ha.byby;
})