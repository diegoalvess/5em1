function Game1SceneIntroducao()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/game_1/Introducao.png"
	this.loaded = false;
    this.tamanho_x = 1500;
    this.tamanho_y = 1366;
    this.posicao_x = 0;
    this.posicao_y = 0;
    
    //Imagem dos botoes							TAMANHO_X,TAMANHO_Y,POSICAO_X,POSICAO_Y
    this.botaoplay = new Game1Button("imgs/game_1/play.png", 248, 98, 550, 300 );
    this.botaoback = new Game1Button("imgs/game_1/back.png", 248, 98, 550, 430 ); 
    
    //Efeito Sonoro
	this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_1/Efeitomenu.wav"
    this.efeito_sonoro.load();
    
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
    		game_1.currentScene = game_1.SCENE.LEVEL_1;
    		this.efeito_sonoro.play(); 		
    	}
    	
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