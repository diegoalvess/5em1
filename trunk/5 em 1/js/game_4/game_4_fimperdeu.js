function Game4ScenePerdeu()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/game_4/Fimperdeu.png"
	this.loaded = false;
    

    this.tamanho_x = 800;
    this.tamanho_y = 600;

    this.posicao_x = 0;
    this.posicao_y = 0;
    
    //Som
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_4/GameOver.mp3"
    this.efeito_sonoro.load();
    
    this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	this.efeito_sonoro.play();
    };
    
    this.draw=function()
    {  	
    	screen.drawImage(this.imagem, 0, 0)
    };
    
    
    this.mouse_down=function(mouse)
    {   	
    	//para mudar da tela pra algum lugar coloque o comando aqui
    	//currentScene = SCENE.[adicionar tela aqui depois];
    	this.efeito_sonoro.pause();
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