function SceneInstrucoes()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/game_2/Intro.png"//FAZER IMAGEM PARA INSTRUCAO
	this.loaded = false;
	this.tamanho_x = 1024;
    this.tamanho_y = 768;
    
    this.posicao_x = 0;
    this.posicao_y = 0;
    
    //Som
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_2/click.mp3"
    this.efeito_sonoro.load();
    
    
    //imagem dos botoes												TAMANHO_X,TAMANHO_Y,POSICAO_X,POSICAO_Y
   	this.botao_play = new Button("imgs/game_2/botao_passado_pelo_mouse.png", 251, 82, 200, 500 );
   	    
    
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
    }
    
    
    this.mouse_down=function(mouse)
    {
    	//para mudar da tela pra algum lugar coloque o comando aqui
    	//fun��o do clique para o bot�o mudar de cena
    	
    		game_2.currentScene = game_2.SCENE.LEVEL1;
    	
    	    	
    }
    
    
    this.key_down=function(key)
    {

    };
    
    
	this.key_up=function(key)
    {
		
    }; 
    
	
}