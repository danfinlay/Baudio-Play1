var baudio = require('baudio');

var root = 1000;
var beat = 9;
var changeFrequency = 5000;

var components = [
	function(t){
		return Math.sin(t*root) + Math.sin(t*(root+beat));
	},
	function(t){
		return Math.sin(t*root * 3);
	},
	function(t){
		if(t % (root*beat) < (root*beat/2)){
			return 1;
		}else{
			return 0;
		}
	},
	function(t){
		if(t/20>10){
			return Math.cos(t*500)
		}
		return 0;
	},
	function(t){
		return Math.sin(t*root/10);
	},
	function(t){
		return Math.sin(t*root/20);
	}
]

function componentSum(t){

	var result = 0;
	components.forEach(function(component){
		result+=component(t);
	})
    return result;
}
	
var b = baudio(function (t) {
    return componentSum(t);
});

b.play();
//b.record('./result')
