const app= {
	pages: [],
	show: new Event('show'),
	init: function(){
		app.pages = document.querySelectorAll('.info');
		document.querySelectorAll('test').forEach((link)=>{
			link.addEventListener('click', app.nav)
		})
	},
	nav: function(ev) {
		console.log("Hello")
		ev.preventDefault();
	},
	pageShown: function(ev){

	},
	poppin: function(ev){

	}
}
