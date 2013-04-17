function Nave()
{
		this.img = new Image();
		this.img.src="imgs/nave.png";
		this.carregada = false;
		
		

	this.img.onload = function() 
	{
		carregada = true; 
		console.log("carregada pela classe nave" + carregada);
	}
	
	this.tamanho_w = 60;
	this.tamanho_h = 40;
	this.posicao_x = largura_tela_w/2 - this.tamanho_w/2;
	this.posicao_y = 700;
	this.velocidade_x = 5;
	this.visible = true;

	this.update=function()
	{
		//PLATAFORMA MOVER//
		if(direita == true)
		{
			this.posicao_x +=5;
		}
	
		if(esquerda == true)
		{
			this.posicao_x -=5;
		}
		
		if(direita)
		{
			this.posicao_x += this.velocidade_x;
		}
		if(esquerda)
		{
			this.posicao_x -= this.velocidade_x;
		}			
	
		if(this.posicao_x > largura_tela_w - this.tamanho_w)
    	{
			this.posicao_x = largura_tela_w - this.tamanho_w;
    	}
    	
    	if(this.posicao_x < 0)
    	{
			this.posicao_x = 0;
    	}
    	
	};
}