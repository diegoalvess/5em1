function Tiro(posicao_x, posicao_y)
{
	this.imagem = new Image();
	this.imagem.src="Imagens/tiro.png";
	this.carregada = false;
	this.visible = true;
	
	this.imagem.onload = function()
	{
		loaded = true; 
	};
	
	this.tamanho_x = 3;
	this.tamanho_y = 15;
	this.posicao_x = posicao_x;
	this.posicao_y = posicao_y;
	this.velocidade_x = 0;
	this.velocidade_y = -10;

	this.update=function()
	{
		//Movendo o tiro
		this.posicao_x += this.velocidade_x;
		this.posicao_y += this.velocidade_y;
	
		if(this.posicao_y < 0)
		{
			this.visible = false;
		}
		
	};
	
	this.draw=function()
    {  	
    	if(this.visible)
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)
    };
	
}

