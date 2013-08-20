function Game3ScenePerdeu()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/game_3/Fimperdeu.png"
	this.loaded = false;
    this.tamanho_x = 800;
    this.tamanho_y = 600;
    this.posicao_x = 0;
    this.posicao_y = 0;
    
    //Botao back                                TAMANHO_X,TAMANHO_Y,POSICAO_X,POSICAO_Y
    this.botaoback = new Game3Button("imgs/game_3/back.png", 147, 137, 340, 450 );
    
    this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	game_3.game3completo = true;
    };
    
    this.draw=function()
    {  	
    	//desenhando fundo
    	screen.drawImage(this.imagem, 0, 0)
    	
    	//Desenho botoes
    	this.botaoback.draw();
    };
    
    
    this.mouse_down=function(mouse)
    {   	
    	console.log("BBBBBBB");
    	if(this.botaoback.clicou(mouse))
    	{
    		console.log("AAAAAA");
    		game_3.currentScene = game_3.SCENE.INTRODUCAO;
    		game_3.level1.reset();
    	}
    	
    };
	
	this.mouse_move=function(mouse)
	{
		if(this.botaoback.clicou(mouse))
		{
			this.botaoback.posicao_origem_x = 148;
		}
		else
		{
			this.botaoback.posicao_origem_x = 0;
		}
	}
    
    
    this.key_down=function(key)
    {
		
    };
    
}