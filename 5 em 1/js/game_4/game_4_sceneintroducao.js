function Game4SceneIntroducao()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/game_4/Introducao.png"
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
    	game_4.currentScene = game_4.SCENE.LEVEL_1;    			
    	//para mudar da tela pra algum lugar coloque o comando aqui
    };
    
    
    this.key_down=function(key)
    {
		
    };
    
	this.key_up=function(key)
    {
		
    };
}