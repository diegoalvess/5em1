function Game1ScenePerdeu()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/game_1/Fimperdeu.png"
	this.loaded = false;
    
    this.tamanho_x = 1500;
    this.tamanho_y = 1366;
    this.posicao_x = 0;
    this.posicao_y = 0;
    
    //Som
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_1/GameOver.mp3"
    this.efeito_sonoro.load();
    
    //Botao back                                TAMANHO_X,TAMANHO_Y,POSICAO_X,POSICAO_Y
    this.botaoback = new Game1Button("imgs/game_1/back.png", 148, 137, 340, 500 );
    
    this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	//Game over (som)
    	this.efeito_sonoro.play();
    };
    
    this.draw=function()
    {  	
    	//Desenhando fundo game_over
    	screen.drawImage(this.imagem, 0, 0)
    	
    	//Desenho botoes
    	this.botaoback.draw();  	
    };
    
    
    this.mouse_down=function(mouse)
    {
		if(this.botaoback.clicou (mouse))
    	{
    		
    		game_1.currentScene = game_1.SCENE.INTRODUCAO;
    		
    		game_1.level1.reset();
    	}
    	
    	console.log("cena introgameover mouse X " + mouse.x + " mouse Y " + mouse.y );	
    };
    
    
    this.key_down=function(key)
    {
		
    };
    
}