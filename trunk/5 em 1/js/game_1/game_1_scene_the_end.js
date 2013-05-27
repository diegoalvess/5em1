function Game1SceneGanhou()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/game_1/Fimganhou.png"
	this.loaded = false;
    this.tamanho_x = 800;
    this.tamanho_y = 600;
    this.posicao_x = 0;
    this.posicao_y = 0;
    
    this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    //Botao back                                TAMANHO_X,TAMANHO_Y,POSICAO_X,POSICAO_Y
    this.botaoback = new Game1Button("imgs/game_1/back.png", 248, 98, 10, 505 );
    
    this.update=function()
    {
    	
    };
    
    this.draw=function()
    {  	
    	//Desenhando fundo_the_end 
    	screen.drawImage(this.imagem, 0, 0)
    	
    	//Desenho botoes
    	this.botaoback.draw();
    };
    
    
    this.mouse_down=function(mouse)
    {   	
		if(this.botaoback.clicou (mouse))
    	{
    		console.log("cena intro mouse X " + mouse.x + " mouse Y " + mouse.y );
    		currentScene = SCENE.INTRO;
    		game_1.currentScene = game_1.SCENE.LEVEL_1;
    	}	
    };
    
    
    this.key_down=function(key)
    {
		
    };
    
}