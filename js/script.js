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
				getDados('pages/trabalhos.phtml');
				break;
			case "info": 
				getDados('pages/info.phtml');
				break;
			case "dc":
				getDados('pages/dc.phtml');
				break;
			case "interesse":
				getDados('pages/interesse.phtml');
				break;
		}
	
	});
	
});

$(document).scroll(function(){
	if($(document).scrollTop() < 135) $('.home_menu').css({'position': 'absolute', 'margin-top': 105, 'background-color': 'transparent'});
	else $('.home_menu').css({'position': 'fixed', 'margin-top': -25, 'background-color': '#999', 'border-radius': '5px'});
});

function getDados(link){
	var pedido = $.get(link, function(data){
		if(link == 'index.html') $('.conteudo').html($('.conteudo div', data));
		else $('.conteudo').html(data);
	});
	pedido.error(function(){
		setTimeout(getDados, 1000); 
	});
	
};