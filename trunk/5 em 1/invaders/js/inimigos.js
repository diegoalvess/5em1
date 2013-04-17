function Inimigo(source, hp)
{
		this.img = new Image();
		this.img.src=source;
		this.carregada = false;
		this.visible = true; //BLOCO FICA VISIVEL//
		this.hp = hp; //ENERGIA DO BLOCO//
		this.pontos = this.hp*2;
	

	
	this.img.onload = function() 
	{
		carregada = true; 
		console.log("carregada pela classe inimigos" + carregada);
	};
	
	this.tamanho_w = 50;
	this.tamanho_h = 50;
	this.posicao_x = 100;
	this.posicao_y = 60;
	this.velocidade_x = 5;
	this.velocidade_y = 0;
	
	this.update=function()
	{
		this.posicao_y += this.velocidade_y;
		this.posicao_x += this.velocidade_x;
		
		if(this.velocidade_y > 0)
		{
					
		}		
		
		if(this.velocidade_x > 5)
		{
					
		}
	};
}