function Game1SceneIntroducao()
{
	//Imagem de fundo
	this.imagem = new Image();
	this.imagem.src = "imgs/game_1/Introducao.png"
	this.loaded = false;
    this.tamanho_x = 1500;
    this.tamanho_y = 1366;
    this.posicao_x = 0;
    this.posicao_y = 0;
	
	//Letra
	this.Letra = new Image();
	this.Letra.src = "imgs/game_1/LetraPong.png"
	this.loaded = false;
    this.Letratamanho_x = 434;
    this.Letratamanho_y = 135;
    this.Letraposicao_x = 0;
    this.Letraposicao_y = 35;
	this.Letravelocidade_x = 5;
	this.Letravelocidade_y = 5;
	
    //Imagem dos botoes							TAMANHO_X,TAMANHO_Y,POSICAO_X,POSICAO_Y
    this.botaoplay = new Game1Button("imgs/game_1/play.png", 248, 98, 590, 310 );
    this.botaoback = new Game1Button("imgs/game_1/back.png", 250, 97, 590, 440 ); 
	
    //Efeito Sonoro
	this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_1/Efeitomenu.wav"
    this.efeito_sonoro.load();
    
	
    this.imagem.onload = function()
	{
		loaded = true; 
	};
    
	this.Letra.onload = function()
	{
		loaded = true; 
	};
	
    this.update=function()
    {
    	//Movendo a letra
    	this.Letraposicao_x += this.Letravelocidade_x;
		this.Letraposicao_y += this.Letravelocidade_y;
		
		//Colidindo com as bordas
		this.ficandonatela();
    };
    
    this.draw=function()
    {  	
    	//Desenhando fundo da intro
    	screen.drawImage(this.imagem, 0, 0)
		
		//Letra
		screen.drawImage(this.Letra, this.Letraposicao_x,this.Letraposicao_y)
		
    	//Desenhando botoes
    	this.botaoplay.draw();
    	this.botaoback.draw();
    };
	
    //Colisão para nao sair da tela
    this.ficandonatela=function()
    {
    	//saida pela direita
    	if(this.Letraposicao_x < 5)
    	{
			//Fazendo bater e voltar
			this.Letravelocidade_x *=-1;
		}
		
		//saida pela esquerda
    	if(this.Letraposicao_x > 795 - this.Letratamanho_x)
    	{
			//Fazendo bater e voltar
			this.Letravelocidade_x *=-1;
		}
		
		//saida por cima
    	if(this.Letraposicao_y < 0)
    	{
    		this.Letraposicao_y = 0;
			//Fazendo bater e voltar
			this.Letravelocidade_y *=-1;
    	}
		
		//saida por baixo
    	if(this.Letraposicao_y > 245 - this.Letratamanho_y)
    	{
    		this.Letraposicao_y = 245 - this.Letratamanho_y;
			//Fazendo bater e voltar
			this.Letravelocidade_y *=-1;
    	}
	}
	
    this.mouse_down=function(mouse)
    {   
    	//para mudar da tela pra algum lugar coloque o comando aqui
    	
		//botaoplay clicado
		if(this.botaoplay.clicou (mouse))
    	{
    		game_1.currentScene = game_1.SCENE.LEVEL_1;
    		this.efeito_sonoro.play(); 		
    	}
    	//botaoback clicado
    	if(this.botaoback.clicou (mouse))
    	{
    		currentScene = SCENE.INTRO;
    		this.efeito_sonoro.play(); 
    	}	
    };
     
    this.key_down=function(key)
    {
		
    };
    
	this.key_up=function(key)
    {
		
    };
}