function Inimigo(source,hp)
{
	this.imagem = new Image();
	this.imagem.src = source;
	this.loaded = false;
	this.visible = true;
	
	this.tamanho_x = 64;
    this.tamanho_y = 64;
    this.posicao_x = 0;
    this.posicao_y = 0;
    this.velocidade_x = 10;
	this.velocidade_y = 5;
	
	
	this.max_energy = 10; 
	this.current_energy = this.max_energy;
	


	
	//this.pontos = this.hp*2;
		
	this.imagem.onload = function()
	{
		loaded = true; 
		
	};

    this.update=function()
    {
    	this.posicao_x -= this.velocidade_x;
    	//this.posicao_y += this.velocidade_y;    	    	
    };
    
    this.draw=function()
    {  	
   		if(this.visible)
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)
    };
    
    
    this.mouse_down=function(mouse)
    {   	
    	//para mudar da tela pra algum lugar coloque o comando aqui
    	//currentScene = SCENE.[adicionar tela aqui depois];
    };
    
    
    this.key_down=function(key)
    {
		
    };
}




