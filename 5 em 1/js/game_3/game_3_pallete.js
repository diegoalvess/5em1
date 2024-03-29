function Game3Player(player_tecla)
{
	//criando player
	this.imagem = new Image();
	this.imagem.src="imgs/game_3/nave.png";
	this.carregada = false;

	this.imagem.onload = function() 
	{
		carregada = true; 	
	}
	
	this.player_tecla = player_tecla;

	//propriedades
	this.tamanho_x = 60;
	this.tamanho_y = 40;
	this.posicao_x = tamanho_tela_x/2 - this.tamanho_y/2;
	this.posicao_y = 700;
	this.velocidade_x = 10;
	this.visible = true;

	//Teclas 
	this.esquerda = false;
	this.direita = false;
	this.soltou_espaco = true;
	this.apertou_espaco = false;
	
	//Conjunto de tiros
	this.tiros = new Array();

	this.update=function()
	{
		//Movendo paleta
		this.movendo();
		
		//Colidindo com as bordas
		this.saindodatela();   
		
		if(this.apertou_espaco)
    	{	
			//this.efeito_sonoro.play();
    		this.tiros.push(new Game3Tiro("imgs/game_3/tiro_player.png", this.posicao_x+ this.tamanho_x/2, this.posicao_y-this.tamanho_y, -1 ));
    	}
		
		this.apertou_espaco = false; 	
	};
		
	this.draw=function()
    {  	
		//desenhando player
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)
    };
	
    //movendo player
    this.movendo=function()
    {
		if(this.direita)
    	{
    		this.posicao_x += this.velocidade_x;
    	}
    	if(this.esquerda)
    	{
    		this.posicao_x -= this.velocidade_x;
    	}
    }
    
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
    	if(this.posicao_x > tamanho_tela_x - this.tamanho_x)
    	{
    		this.posicao_x = tamanho_tela_x - this.tamanho_x;
    	}
    	
    	//saida por baixo
    	if(this.posicao_y > tamanho_tela_y - this.tamanho_y)
    	{
    		this.posicao_y = tamanho_tela_y- this.tamanho_y;
    	}
    }
	
	//Tecla desceu
    this.key_down=function(key)
    {
    	if(this.player_tecla == "setas")
    	{
    		if(key.keyCode == 39) //seta direita
    		{
    			this.direita = true;
    		}
    		else if(key.keyCode == 37) //seta esquerda
    		{
    			this.esquerda = true;
    		}
    		
    		//Barra de espa�o
			if(key.keyCode == 32)
			{
				if(this.soltou_espaco)
				{
					//pro tiro n�o ficar descontrolado
					this.apertou_espaco = true;
					this.soltou_espaco = false;
				}
			}
   		}
    
    }
    
    //Tecla subiu
    this.key_up=function(key)
    {       
    	if(this.player_tecla == "setas")
    	{
    		if(key.keyCode == 39)
    		{
    			this.direita = false;
    		}
    		else if(key.keyCode == 37)
    		{
    			this.esquerda = false;
    		}
    		
    		//Barra de espa�o
			if(key.keyCode == 32 )
			{
				this.apertou_espaco = false;
				this.soltou_espaco = true;
			}
   		}	
    }
}