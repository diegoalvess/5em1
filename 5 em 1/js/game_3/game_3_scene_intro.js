function Game3SceneIntroducao()
{
	//criando cena
	this.imagem = new Image();
	this.imagem.src = "imgs/game_3/Introducao.png"
	this.loaded = false;
    this.tamanho_x = 800;
    this.tamanho_y = 600;
    this.posicao_x = 0;
    this.posicao_y = 0;
    
    //Imagem dos botoes							TAMANHO_X,TAMANHO_Y,POSICAO_X,POSICAO_Y
    this.botaoplay = new Game3Button("imgs/game_3/play.png", 147, 137, 450, 430 );
    this.botaoback = new Game3Button("imgs/game_3/back.png", 147, 137, 630, 430 ); 
    
    
    this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	
    };
    
    this.draw=function()
    {  	
    	//Desenhando fundo da intro
    	screen.drawImage(this.imagem, 0, 0)
    	
    	//Desenhando botoes
    	this.botaoplay.draw();
    	this.botaoback.draw();
    };
    
    
    this.mouse_down=function(mouse)
    {   
    	//para mudar da tela pra algum lugar coloque o comando aqui
    	if(this.botaoplay.clicou (mouse))
    	{
    		game_3.currentScene = game_1.SCENE.LEVEL_1;
    		//this.efeito_sonoro.play(); 		
    	}
    	
    	if(this.botaoback.clicou (mouse))
    	{
    		currentScene = SCENE.INTRO;
    		//this.efeito_sonoro.play(); 
    	}
    	//para mudar da tela pra algum lugar coloque o comando aqui
    	//game_3.currentScene = game_3.SCENE.INTRODUCAO;
    };
    
    
    this.key_down=function(key)
    {
		
    };
    
	this.key_up=function(key)
    {
		
    };
    
    this.mouse_move=function(mouse)
    {
		//mouse clique dando play ou voltando 
		
		if(this.botaoplay.clicou(mouse))
		{
			this.botaoplay.posicao_origem_x = 147;
		}
		else
		{
			this.botaoplay.posicao_origem_x = 0;
		}
		
		//this.botaoback.posicao_origem_x = 0;
		
		if(this.botaoback.clicou(mouse))
		{
			this.botaoback.posicao_origem_x = 148;
		}
		else
		{
			this.botaoback.posicao_origem_x = 0;
		}
		
    };

}