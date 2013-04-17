//VARIAVEIS DA NAVE//
function Tiro()
{
		this.img = new Image();
		this.img.src="imgs/tiro.png";
		this.carregada = false;
		this.visible = true;
			
	this.img.onload = function() 
	{
		carregada = true; 
		console.log("carregada pela classe tiro" + carregada);
	};
	
	this.tamanho_w = 3;
	this.tamanho_h = 15;
	this.posicao_x = nave.posicao_x + 30 - this.tamanho_w/2;
	this.posicao_y = nave.posicao_y - this.tamanho_h;
	this.velocidade_x = 0;
	this.velocidade_y = -10;

	this.update=function()
	{
		//TIRO MOVER//
		this.posicao_x += this.velocidade_x;
		this.posicao_y += this.velocidade_y;
	
		if(this.posicao_y < 0)
		{
			this.visible = false;
		}
		
	};
}

