function Bloco(source, hp)
{
	this.imagem = new Image();
	this.imagem.src= source;
	this.carregada = false;
	this.visible = true;
	this.hp = hp;
	this.pontos = this.hp*2;
	
	this.chancetiro = 0.002;
	
	this.imagem.onload = function() 
	{
		carregada = true; 
	};
	
	this.tamanho_x = 50;
	this.tamanho_y = 50;
	this.posicao_x = 100;
	this.posicao_y = 60;
	this.velocidade_x = 5;
	this.velocidade_y = 0;
	
	this.update=function()
	{
		//Fazendo blocos andarem
		this.posicao_y += this.velocidade_y;
		this.posicao_x += this.velocidade_x;
		
				
	};
	
	this.draw=function()
    {  	
		if(this.visible)
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)
    };
    
    
	
    
}