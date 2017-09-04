
define([],function(){
	return{
		hello:function(){
			$("#a").click(function(){
					console.log("来自d1.js")
			})
		
		}
	}
})
function by() {
  console.log("hello, world~");
}
function byby() {
  console.log("byby, world~");
}