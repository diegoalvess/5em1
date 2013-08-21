function Game4Inimigo(source,hp)
{
	this.imagem = new Image();
	this.imagem.src = source;
	this.loaded = false;
	this.visible = true;
	
	this.tamanho_x = 64;
    this.tamanho_y = 43;
    this.posicao_x = 0;
    this.posicao_y = 0;
    this.velocidade_x = 10;
	this.velocidade_y = 10;
	
	this.movendoCimaBaixo = false;
	
	this.chancetiroboss = 0.1;
	this.chancetiro = 0.01;
	
	this.max_energy = hp;
		 
	this.current_energy = this.max_energy;
	
	BEHAVIOUR = {MOVERIGHT: 0, UPANDDOWN: 1, BOSS:2 }
	
	this.currentBehaviour = BEHAVIOUR.MOVERIGHT;
	
	this.moveYActive = false;
	
	this.nome;
			
	this.imagem.onload = function()
	{
		loaded = true; 
		
	};

    this.update=function()
    {
    	//Ativando a posicado X somente quando chegar na tela 
    	if(this.posicao_x <= tamanho_tela_x)
    	{
    		this.moveYActive = true;
    	}
    	
    	switch(this.currentBehaviour)
    	{
    		case BEHAVIOUR.MOVERIGHT:
    			
    			this.move_right();
    			
    		break;
    		
    		case BEHAVIOUR.UPANDDOWN:
    			
    			this.up_down();
    			
    		break;
    		
    		case BEHAVIOUR.BOSS:
    			
    			this.boss();
 
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
    	
    	// Se active estiver true realize a operacao abaixo
    	if(this.moveYActive)
    	{
    		//movendo o inimigo a parti de cima tamanho_y = 0
    		this.posicao_y += this.velocidade_y;
    	} 
    	
    }
    
    this.boss = function()
    {
    		
    	this.posicao_x += this.velocidade_x;
    	
    	if(this.moveYActive)
    	{
    		//movendo o inimigo a parti de cima tamanho_y = 0
    		this.posicao_y += this.velocidade_y;
    	} 
    	
    	if(this.posicao_x <= 550 && !this.movendoCimaBaixo)
    	{
    		this.movendoCimaBaixo = true;
    		
    		game_4.level1.hp_boss.visible = true;
    		
    		this.velocidade_x = 0;
			this.velocidade_y = 5;
    	}
    	
    	/*
    	//Boss batendo em baixo
    	if(this.posicao_y >= tamanho_tela_y - this.tamanho_y)
		{
			this.velocidade_y *= -1;
		}
		//Boss batendo em cima
		if(this.posicao_y >= 0)
		{
			this.velocidade_y *= -1;
		}
    	*/
		
    	this.chancetiroboss = 0.02;
    		
	}
    
};