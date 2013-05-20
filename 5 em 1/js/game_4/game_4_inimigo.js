function Game4Inimigo(source,hp)
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
	
	BEHAVIOUR = {MOVERIGHT: 0, UPANDDOWN: 1 }
	
	this.currentBehaviour = BEHAVIOUR.MOVERIGHT;
	
	//this.pontos = this.hp*2;
		
	this.imagem.onload = function()
	{
		loaded = true; 
		
	};

    this.update=function()
    {
    	switch(this.currentBehaviour)
    	{
    		case BEHAVIOUR.MOVERIGHT:
    			
    			this.move_right();
    			
    		break;
    		
    		case BEHAVIOUR.UPANDDOWN:
    			
    			this.up_down();
    			
    		break;
    	}
    	    	    	
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
    
    this.move_right=function()
    {
    	this.posicao_x -= this.velocidade_x;	
    };
    
     this.up_down=function()
    {
    	this.posicao_x -= this.velocidade_x;
    	
    	/*if (this.posicao_x -= tamanho_tela_x = 1000)    	
    	{
    		this.posicao_x == tamanho_tela_x/2
    	}*/
    
    }
    };


