function Bloco(source)
{
	this.imagem = new Image();
	this.imagem.src= source;
	this.loaded = false;
	this.visible = true;
	
	//this.hp = hp;
	//this.pontos = this.hp*2
	
	this.tamanho_x = 50;
    this.tamanho_y = 100;
    this.posicao_x = 0
    this.posicao_y = 0
    this.velocidade_x = 0;
    this.velocidade_y = 0;
	
	this.imagem.onload = function()
	{
		loaded = true; 
	};
	
	this.update=function()
	{
	
	};
	
	this.draw=function()
    {  	
		if(this.visible)
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)
    };
}