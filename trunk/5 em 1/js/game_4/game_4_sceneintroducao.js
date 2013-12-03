function Game4SceneIntroducao()
{
	//criando cena
	this.imagem = new Image();
	this.imagem.src = "imgs/game_4/Introducao.png"
	this.loaded = false;
    this.tamanho_x = 800;
    this.tamanho_y = 600;
    this.posicao_x = 0;
    this.posicao_y = 0;
	
	//Imagem dos botoes							TAMANHO_X,TAMANHO_Y,POSICAO_X,POSICAO_Y
    this.botaoplay = new Game4Button("imgs/game_4/play.png", 246, 108, 150, 420 );
    this.botaoback = new Game4Button("imgs/game_4/back.png", 246, 108, 420, 420 ); 
	
    //Efeito Sonoro
	this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_4/Efeitomenu.wav"
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
		//Desenho da imagem de fundo
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
			game_4.currentScene = game_4.SCENE.LEVEL_1;
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