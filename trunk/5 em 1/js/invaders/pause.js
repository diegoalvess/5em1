function Pause()
{
	this.img = new Image();
	this.img.src="imgs/pause.png";
	this.carregada = false;
	
	this.img.onload = function() 
	{
		carregada = true; 
		console.log("carregada pela classe cena" + carregada);
	};
	
	this.tamanho_w = 500;
	this.tamanho_h = 200;
	this.posicao_x = largura_tela_w/2 - this.tamanho_w/2;
	this.posicao_y = altura_tela_h/2 - this.tamanho_h/2;
    
    this.update=function()
    {
    	
    };
    
}