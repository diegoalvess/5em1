function Game3ScenePerdeu()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/game_3/Fimperdeu.png"
	this.loaded = false;
    this.tamanho_x = 800;
    this.tamanho_y = 600;
    this.posicao_x = 0;
    this.posicao_y = 0;
    
    //Som
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_3/GameOver.mp3"
    this.efeito_sonoro.load();
    
    
    //Botao back                                TAMANHO_X,TAMANHO_Y,POSICAO_X,POSICAO_Y
    this.botaoback = new Game1Button("imgs/game_3/back_ligado.png", 248, 98, 340, 450 );
    
    this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	this.efeito_sonoro.play();
    };
    
    this.draw=function()
    {  	
    	//Desenho de fundo
    	screen.drawImage(this.imagem, 0, 0)
    	
    	//Desenho botoes
    	this.botaoback.draw();
    	
    };
    
    
    this.mouse_down=function(mouse)
    {   	
    	if(this.botaoback.clicou (mouse))
    	{
    		
    		currentScene = SCENE.INTRO;
    		game_3.level1.reset();
    	}
    	
    	this.efeito_sonoro.pause();
    };
    
    
    this.key_down=function(key)
    {
		
    };
    
}