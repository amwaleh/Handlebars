$(function(){
//in handle bar the dom has to exist for it to run :0
var datamine = '' ;
var search ='new' ;
if (!page){
var page = 1
}


var syear 


$(document).on('click','.submit',function(){
 page = 1
 search = $("#search").val()
 syear= $("#year").val()
 if (search){}
 render(search);
});

$(document).on('click','.next',function(){
 page += 1
 render(search);
});

$(document).on('click','.back',function(){
 page -= 1
 render(search);
});

render(search);

function render(search){
$.ajax({
	method : "Get",
	url :"http://www.omdbapi.com/?s="+search+"&plot=full&page="+page+"&y="+syear,
	success:function(data){
			datamine = data
				console.log(data)

//first get the template 
var theTemplateScript = $("#address-template").html();
// compile the template
var theTemplate = Handlebars.compile(theTemplateScript);
var context = {
	"city": datamine,
	"street":"Baker Street",
	"number": "221B",
	"pages": datamine.totalResults + " matching " + search,
	"page": page,
	"total_pages": Math.ceil(datamine.totalResults /10),
	"page_nav":{
		"first" :(page >= 2),
		"last":(page <= this.total_pages)
	}

}
 var theCompileHtml = theTemplate(context);
 $('.content-placeholder').html(theCompileHtml);
 $("#search").val(search)
  $("#year").val(syear)


 }
})
}

var source =$('#sketch-template').html();
var template = Handlebars.compile(source);
var context ={
	pagee : "welive to be the greatest",
}
var compileHTML = template (context);
$('.sketch-temp').html(compileHTML);
})