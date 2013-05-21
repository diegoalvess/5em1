function Game4Player(player_tecla)

{
	this.imagem = new Image();
	this.imagem.src="imgs/game_4/Player.png"
	
	this.loaded = false;
	this.visible = true;
		    
	this.player_tecla = player_tecla;
	
	//Conjunto de tiros
	this.Tiros = new Array();
	
	this.tamanho_x = 70;
    this.tamanho_y = 60;
    this.posicao_x = 30;
    this.posicao_y = 350;
	this.velocidade_x = 5;
	this.velocidade_y = 8;
	
	//Teclas 
	this.esquerda = false;
	this.direita = false;
	this.sobe = false;
	this.desce = false;
	this.soltou_espaco = true;
	this.apertou_espaco = false;
	
	//Sons do player
	this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_4/Tiro.mp3"
    this.efeito_sonoro.load();
     
    this.max_energy = 100; 
	this.current_energy = this.max_energy;
	
	this.lives = 3;
	
    this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	this.movendo();
    	this.saindodatela();
    	
    	if(this.apertou_espaco)
    	{
    		if(this.visible)
    		{
				this.efeito_sonoro.play();
    			this.Tiros.push(new Game4Tiro(this.posicao_x+this.tamanho_x, this.posicao_y+this.tamanho_y/2, 15));  
    		}
    	}
    	
    	this.apertou_espaco = false;
    };
    
    this.draw=function()
    {  	
    	if(this.visible)
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y);
    };
    
    
    this.mouse_down=function(mouse)
    {   	
    	//para mudar da tela pra algum lugar coloque o comando aqui
    	//currentScene = SCENE.[adicionar tela aqui depois];
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
    	if(this.sobe)
    	{
    		this.posicao_y -= this.velocidade_y;
    	}
    	if(this.desce)
    	{
    		this.posicao_y += this.velocidade_y;
    	}
    }
    
    this.saindodatela=function()
    {
    	//saida pela esquerda
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


		if(this.player_tecla)
    	{
    		if(key.keyCode == 39)
    		{
    			this.direita = true;
    		}
    		else if(key.keyCode == 37)
    		{
    			this.esquerda = true;
    		}
    	
    		if(key.keyCode == 38)
    		{
    			this.sobe = true;
    		}
    		else if(key.keyCode == 40)
    		{
    			this.desce = true;
    		}
    		
    		//Barra de espaço
			if(key.keyCode == 32)
			{
				if(this.soltou_espaco)
				{
					this.apertou_espaco = true;
					this.soltou_espaco = false;
				}
			}
    	} 
    };
    
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
    	
    		if(key.keyCode == 38)
    		{
    			this.sobe = false;
    		}
    		else if(key.keyCode == 40)
    		{
    			this.desce = false;
    		}
    		
    		//Barra de espaço
			if(key.keyCode == 32 )
			{
				this.apertou_espaco = false;
				this.soltou_espaco = true;
			}	
    	}  		
    }    
}