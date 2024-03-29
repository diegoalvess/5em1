//paleta.js
function Game1Paleta (player_tecla)
{
	this.player_tecla = player_tecla;

	//criando player
	this.imagem = new Image();
	this.imagem.src="imgs/game_1/paleta.png";
	this.loaded = false;
	
	//propriedades da paleta
	this.tamanho_x = 40;
    this.tamanho_y = 120;
    this.posicao_x = 10
    this.posicao_y = 400
    this.velocidade_x = 0;
    this.velocidade_y = 7;
	
	//Teclas
	this.sobe = false;
	this.desce = false;
    	
    this.update=function()
    {
		//Movendo paleta
		this.movendo();
		
		//Colidindo com as bordas
		this.ficandonatela();
	}
	
	this.draw=function()
    {  	
		//desenhando paleta
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)
    };
	
    //movendo player
    this.movendo=function()
    {
    	if(this.sobe)
    	{
    		this.posicao_y -= this.velocidade_y;
    	}
    	if(this.desce)
    	{
    		this.posicao_y += this.velocidade_y;
    	}
    }
    
	//Colisão para não sair da tela
    this.ficandonatela=function()
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
    	if(this.posicao_x > tamanho_tela_x - this.tamanho_x)
    	{
    		this.posicao_x = tamanho_tela_x - this.tamanho_x;
    	}
    	
    	//saida por baixo
    	if(this.posicao_y > tamanho_tela_y - this.tamanho_y)
    	{
    		this.posicao_y = tamanho_tela_y - this.tamanho_y;
    	}
    }
    
    //Tecla desceu
    this.key_down=function(key)
    {
		if(this.player_tecla == "setas")
    	{
    		if(key.keyCode == 38) //seta pra cima
    		{
    			
    			this.sobe = true; 
    		}
    		else if(key.keyCode == 40) //seta pra baixo
    		{
    			
    			this.desce = true;
    		}	
    	} 
    };
    
    //Tecla subiu
    this.key_up=function(key)
    {
    	if(this.player_tecla == "setas")
    	{
    		if(key.keyCode == 38) //seta pra cima
    		{
    			this.sobe = false;
    		}
    		else if(key.keyCode == 40) //seta pra baixo
    		{
    			this.desce = false;
    		}   			
    	}  		
    }	
}