function Game2SceneInstrucoes()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/game_2/Menu.png"//FAZER IMAGEM PARA INSTRUCAO
	this.loaded = false;
	this.tamanho_x = 800;
    this.tamanho_y = 600;
    
    this.posicao_x = 0;
    this.posicao_y = 0;
    
    //Som
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_2/click.mp3";
    this.efeito_sonoro.load();
    
    
    //imagem dos botoes												TAMANHO_X,TAMANHO_Y,POSICAO_X,POSICAO_Y
   	this.botao_play = new Game2Button("imgs/game_2/play.png", 251, 82, 500, 300 );
   	
   	this.botao_back = new Game2Button("imgs/game_2/back.png", 251, 82, 500, 500 );
   	    
    
    this.imagem.onload = function()
	{
		loaded = true; 
	}
    
    this.update=function()
    {
    	console.log("aaaa")
    };
    
    this.draw=function()
    {
		screen.drawImage(this.imagem, 0, 0)
		
		//desenho dos  botoes
	 	this.botao_play.draw();
	 	
	 	this.botao_back.draw();
    }
    
    
    this.mouse_down=function(mouse)
    {
    	//para mudar da tela pra algum lugar coloque o comando aqui
    	//fun��o do clique para o bot�o mudar de cena
    	
    			
    		if(this.botao_play.clicou (mouse))
    		{
    			console.log("cena creditos mouse X " + mouse.x + " mouse Y " + mouse.y );
    			this.efeito_sonoro.play();
    			game_2.currentScene = game_2.SCENE.LEVEL_1;
    			
    		}
    		
    		
    		if(this.botao_back.clicou (mouse))
    		{
    			console.log("cena creditos mouse X " + mouse.x + " mouse Y " + mouse.y );
    			this.efeito_sonoro.play();
    			currentScene = SCENE.INTRO;
    		}
    			
    }
    
    
    this.key_down=function(key)
    {

    };
    
    
	this.key_up=function(key)
    {
		
    }; 
    
    
	
}