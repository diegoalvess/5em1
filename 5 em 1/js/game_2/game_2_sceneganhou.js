function Game2SceneGanhou()
{
	//criando
	this.imagem = new Image();
	this.imagem.src = "imgs/game_2/Win.png"
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
    this.voce_ganhou = new Audio();
   	this.voce_ganhou.src = "sounds/game_2/Som_Venceu.mp3"
    this.voce_ganhou.load();
    
    //imagem dos botoes							
   	
	this.botao_para_o_menu_principal = new Game2Button("imgs/game_2/back.png", 251, 82, 250, 500);
	
	//imagem carregada
	this.imagem.onload = function()
	{
		loaded = true; 
	}
    
    this.update=function()
    {
    	completouJogo2 = true;	
    };
    
    this.draw=function()
    {  	
    	screen.drawImage(this.imagem, 0, 0);
    	
    	//desenho dos  botoes
		this.botao_para_o_menu_principal.draw();
		
		
    };
    
    
    this.mouse_down=function(mouse)
    {   	
       	//CLICANDO NO BOTAO PARA IR PARA CENA DE INSTRUCAO DO JOGO
       	
       	
    	if(this.botao_para_o_menu_principal.clicou(mouse))
    	{
    		this.efeito_sonoro.play();
    		currentScene = SCENE.INTRO;
    		game_2.currentScene = game_2.SCENE.INSTRUCOES;
    		this.voce_ganhou.pause();
    		game_2.level1.reset();
    	}
    	
    };
    
    
    this.key_down=function(key)
    {
		
    };
    
}