function Game4SceneGanhou()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/game_4/Fimganhou.png"
	this.loaded = false;
    

    this.tamanho_x = 800;
    this.tamanho_y = 600;

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
    	//para mudar da tela pra algum lugar coloque o comando aqui
    	//currentScene = SCENE.[adicionar tela aqui depois];
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