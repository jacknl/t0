$(document).ready(function(){
	$(".home_menu #home").attr('class','selecionado');
	$(".home_menu div").click(function(){
		$(".home_menu div").attr('class', '');
		$(this).attr('class','selecionado');
		
		switch($(this).attr('id')){
			case "home": 
				getDados('index.html');
				break;
			case "trabalhos": 
				getDados('pages/trabalhos.html');
				break;
			case "info": 
				getDados('pages/info.html');
				break;
		}
	
	});
	
});

/*
$(document).scroll(function(){
	if($(document).scrollTop() < 80) $('.home').css({'position': 'absolute', 'margin-top': 0});
	else $('.home').css({'position': 'fixed', 'margin-top': -81});
});
*/

function getDados(link){
	var pedido = $.get(link, function(data){
		if(link == 'index.html') $('.conteudo').html($('.conteudo p', data));
		else $('.conteudo').html(data);
	});
	pedido.error(function(){
		setTimeout(getDados, 1000); 
	});
};