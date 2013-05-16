function SceneMenu()
{
	this.imagem = new Image();//BACKGROUND
	this.imagem.src = "imgs/game_2/Menu_teste.png"
	this.loaded = false;
    
    this.tamanho_x = 900;
    this.tamanho_y = 700;

    this.posicao_x = 0;
    this.posicao_y = 0;
    
    //Som
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_2/click.mp3"
    this.efeito_sonoro.load();
    
    //variavel e imagem dos bot�es
   	this.botao_comecar = new Button("imgs/game_2/comecar_teste.png", 302, 82, 350, 300);
    //this.botao_creditos = new Button("Imagens/botaocredito.png", 302, 85, 630, 480);
    this.botao_instru = new Button("imgs/game_2/instrucao_teste.png", 235, 57, 350, 550);
    
    this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	
    };
    
    this.draw=function()
    {  	
    	screen.drawImage(this.imagem, 0, 0);
    	
    	//desenho dos bot�es
    	this.botao_comecar.draw();
    	this.botao_instru.draw(); 	
    };
    
    
    this.mouse_down=function(mouse)
    {   	
    		console.log("PASSE O MOUSE AQUI")
    		
    	//fun��o do clique para o bot�o mudar de cena
    	if(this.botao_comecar.clicou(mouse))
		{
			currentScene = SCENE.SCENELEVEL1;
    		this.efeito_sonoro.play();
    	}
    	
    	if(this.botao_instru.clicou(mouse))
    	{
    		currentScene = SCENE.SCENEINSTRU;
    		this.efeito_sonoro.play();
    	}
    	
    	
    };
    
    
    this.key_down=function(key)
    {
		
    };
    
    this.key_up=function(key)
    {
		
    };
    
}