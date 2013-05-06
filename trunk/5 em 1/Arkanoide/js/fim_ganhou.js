function SceneGanhou()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/ganhouTeste.png"
	this.loaded = false;
    

    this.tamanho_x = 900;
    this.tamanho_y = 700;

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
    	currentScene = SCENE.MENU;
    }
    
    
    this.key_down=function(key)
    {
		
    };
    
}