function Game4ScenePerdeu()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/game_4/Fimperdeu.png"
	this.loaded = false;
    

    this.tamanho_x = 800;
    this.tamanho_y = 600;

    this.posicao_x = 0;
    this.posicao_y = 0;
    
    this.button_back = new Button("imgs/game_4/button_back.png", 160, 75);
    this.button_back.position_x = 500;
    this.button_back.position_y = 500;

    
    //Som
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_4/GameOver.mp3"
    this.efeito_sonoro.load();
    
    this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	this.efeito_sonoro.play();
    	game_4.level1.efeito_sonoro.pause();
    };
    
    this.draw=function()
    {  	
    	screen.drawImage(this.imagem, 0, 0);
    	
    	this.button_back.draw();
    };
    
    
    this.mouse_down=function(mouse)
    {   
    	this.efeito_sonoro.pause();
    	if(this.button_back.clicked(mouse))
    	{
    		currentScene = SCENE.INTRO;
    		game_4.currentScene = game_4.SCENE.INTRODUCAO;
    		//voltar a vida/energia
    		//zerar pontos
    		//limpar a lista de tiros (jogador e dos inimigos
    		//repocidfshnvionar os inimigos inicial
    		//zerar as listas e repopular a lista de inimigos
    		
	    	game_4.level1.reset();
    		
    	}
    	
    };
    
    this.mouse_up=function(mouse)
	{
		
	};
    
    this.key_down=function(key)
    {
		
    };
        
    this.key_up=function(key)
    {
		
    };
    
}