function Game1SceneGanhou()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/game_1/Fimganhou.png"
	this.loaded = false;
    

    this.tamanho_x = 1500;
    this.tamanho_y = 1366;

    this.posicao_x = 0;
    this.posicao_y = 0;
    
    this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	
    };
    
    this.draw=function()
    {  	
    	screen.drawImage(this.imagem, 0, 0)
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