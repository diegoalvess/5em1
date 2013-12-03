function Game2ScenePerdeu()
{
	//Criando cena
	this.imagem = new Image();
	this.imagem.src = "imgs/game_2/gameover.png"
	this.loaded = false;
    
	//propriedades
    this.tamanho_x = 800;
    this.tamanho_y = 600;
    this.posicao_x = 0;
    this.posicao_y = 0;
    
    //Som
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_2/click.mp3"
    this.efeito_sonoro.load();
    
    //Som
    this.voce_Perdeu = new Audio();
    this.voce_Perdeu.src = "sounds/game_2/Som_Perdeu.mp3"
    this.voce_Perdeu.load();
    
    //imagem dos botoes							TAMANHO_X,TAMANHO_Y,POSICAO_X, POSICAO_Y
    this.botao_para_o_menu_do_jogo = new Game2Button("imgs/game_2/back.png", 251, 82, 250,500);
    
	//imagem carregada
    this.imagem.onload = function()
  	{
		loaded = true; 
	}
    
    this.update=function()
    {
    	
    };
    
    this.draw=function()
    {  	
    	screen.drawImage(this.imagem, 0, 0)
    	
    	//desenho dos  botoes
		this.botao_para_o_menu_do_jogo.draw();
    
    }
    
    
    this.mouse_down=function(mouse)
    {   
    	//CLICANDO E INDO PARA O MENU PRINCIPAL	
    	if(this.botao_para_o_menu_do_jogo.clicou(mouse))
    		{
    			
    			this.efeito_sonoro.play();
    			game_2.currentScene = game_2.SCENE.INSTRUCOES;
    			this.voce_Perdeu.pause();
    			game_2.level1.reset();
    		}
    	
    	
    };
    
    
    this.key_down=function(key)
    {
		
    };
    
}