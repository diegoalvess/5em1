function Game1PaletaInimigo()
{
	this.imagem = new Image();
	this.imagem.src="imgs/game_1/paletainimigo.png";
	this.loaded = false;
	
	this.tamanho_x = 40;
    this.tamanho_y = 120;
    this.posicao_x = 1150
    this.posicao_y = 400
    this.velocidade_x = 0;
    this.velocidade_y = 5;
    
    this.update=function()
    {
    	//Colidindo com as bordas
		this.saindodatela();
    };
    
	//Colisão para não sair da tela
    this.saindodatela=function()
    {
    	//saida pela direita
    	if(this.posicao_x < 0)
    	{
    		this.posicao_x = 0;
    	}
    	
    	//saida por cima
    	if(this.posicao_y < 0)
    	{
    		this.posicao_y = 0;
    	}
    	
    	//saida pela esquerda
    	if(this.posicao_x > tela_tamanho_x - this.tamanho_x)
    	{
    		this.posicao_x = tela_tamanho_x - this.tamanho_x;
    	}
    	
    	//saida por baixo
    	if(this.posicao_y > tela_tamanho_y - this.tamanho_y)
    	{
    		this.posicao_y = tela_tamanho_y- this.tamanho_y;
    	}
    }
	
    this.draw=function()
    {  	
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)
    };
    
}