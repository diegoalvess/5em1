function Game4SceneGanhou()
{
	//criando cena
	this.imagem = new Image();
	this.imagem.src = "imgs/game_4/Fimganhou.png"
	this.loaded = false;
    
	//propriedades
    this.tamanho_x = 800;
    this.tamanho_y = 600;
    this.posicao_x = 0;
    this.posicao_y = 0;
    
	//criando botao voltar
    this.button_back = new Button("imgs/game_4/button_back.png", 246, 108);
    this.button_back.position_x = 270;
    this.button_back.position_y = 450;
    
    this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	completouJogo4 = true;
    };
    
    this.draw=function()
    {  	
		//desenhando botao
    	screen.drawImage(this.imagem, 0, 0);
    	
    	this.button_back.draw();

    };
    
    
    this.mouse_down=function(mouse)
    {   	
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