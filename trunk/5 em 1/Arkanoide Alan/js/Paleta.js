
function Paleta()
{
	this.img = new Image();
	this.img.src = "imagens/paleta.png";
		
	this.img.onload = function()
	{
		loaded = true;	
	}	
	
	
	this.posicao_x = 320;
	this.posicao_y = 1060;
	this.velocidade_x = 5;
	this.velocidade_y = 5;
	this.altura_h = 26;
	this.largura_w = 147;
	
	
	
	this.update = function()
	{
		console.log(direita);
		
		if(direita)
		{
			this.posicao_x += this.velocidade_x;	
		}
		
		if(esquerda)
		{
			this.posicao_x -= this.velocidade_x;	
		}
		
	//FAZENDO COLISÃO DA PALETA COM AS PAREDES LATERAIS//
		if(jogador.posicao_x < 42)
		{
			jogador.posicao_x = 42;
		}
		
		if (jogador.posicao_x > 764 - jogador.largura_w)
		{
			jogador.posicao_x = 764 - jogador.largura_w;
		}
		
		
	}
}
