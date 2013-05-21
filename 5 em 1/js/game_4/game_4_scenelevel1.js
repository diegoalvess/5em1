function Game4SceneLevel1()
{		
	
	    
	this.reset=function()
	{
		
		//Player
	this.player = new Game4Player("setas");	
	
	//Barra de energia
	this.interface = new Game4Interface();
	
	//Tiro
	this.Tiros_inimigos = new Array();
	
	//Pause
	this.paused = false;
	
	//Sorteio do Tiros Inimigos
	this.sorteio = 0.01;
	
	//
	this.visible = true;	
		    
    //Background
    this.background = new Game4Background("imgs/game_4/FundoBackground.png", 1600, 600, -15);
    this.background.posicao_x = tamanho_tela_x - this.background.tamanho_x;
    
    this.background2 = new Game4Background("imgs/game_4/FundoBackground2.png", 4098, 768, -10);
    this.background2.posicao_x = tamanho_tela_x - this.background2.tamanho_x;
    
    //Efeito sonoro
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_4/Som1.mp3"
    this.efeito_sonoro.load();
	
	//Wave1
	this.wave1 = new Array();
	for(var i = 0 ; i < 10; i++) 
    {
    	this.wave1[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo1.png");
    	this.wave1[i].posicao_x = 1400;
    	this.wave1[i].posicao_y = tamanho_tela_y/10 + (i * 50); //numero depois de * espacamento entre os inimigos
    	//wave1[i].currentBehaviour = BEHAVIOUR.UPANDDOWN;
    }
	
	//Wave2
	this.wave2 = new Array();
	for(var i = 0 ; i < 5; i++) 
    {
    	this.wave2[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo2.png");
    	this.wave2[i].posicao_x = 1400*2 + (i * 60);
    	this.wave2[i].posicao_y = (tamanho_tela_y/2) + (i * 50); //numero depois de * espacamento entre os inimigos
    }
    
	for(var i = 5 ; i < 9; i++) 
    {
    	this.wave2[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo2.png");
    	this.wave2[i].posicao_x = (1400*2)-240 + (i * 60);
    	this.wave2[i].posicao_y = ((tamanho_tela_y/2)+240) - (i * 50); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave3
    this.wave3 = new Array();
	for(var i = 0 ; i < 5; i++) 
    {
    	this.wave3[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo4.png");
    	this.wave3[i].posicao_x = (1400*3) - ( i * 120 );
    	this.wave3[i].posicao_y = tamanho_tela_y/10; //numero depois de * espacamento entre os inimigos
    }
    
	for(var i = 0 ; i < 5; i++) 
    {
    	this.wave3[i+5] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo4.png");
    	this.wave3[i+5].posicao_x = (1500*3) - ( i * 120 );
    	this.wave3[i+5].posicao_y = tamanho_tela_y/10*9; //numero depois de * espacamento entre os inimigos
    	this.wave3[i+5].currentBehaviour = BEHAVIOUR.UPANDDOWN;

    }
    
	//Wave4
    this.wave4 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	this.wave4[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo4.png");
    	this.wave4[i].posicao_x = 1400*4;
    	this.wave4[i].posicao_y = tamanho_tela_y/10 + (i * 50); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave5
    this.wave5 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	this.wave5[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo5.png");
    	this.wave5[i].posicao_x = 1400*5;
    	this.wave5[i].posicao_y = tamanho_tela_y/10 + (i * 50); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave6
    this.wave6 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	this.wave6[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo6.png");
    	this.wave6[i].posicao_x = 1400*6;
    	this.wave6[i].posicao_y = tamanho_tela_y/10 + (i * 50); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave7
    this.wave7 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	this.wave7[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo7.png");
    	this.wave7[i].posicao_x = 1400*7;
    	this.wave7[i].posicao_y = tamanho_tela_y/10 + (i * 50); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave8
    this.wave8 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	this.wave8[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo8.png");
    	this.wave8[i].posicao_x = 1400*8;
    	this.wave8[i].posicao_y = tamanho_tela_y/10 + (i * 50); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave9
    this.wave9 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	this.wave9[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo9.png");
    	this.wave9[i].posicao_x = 1400*9;
    	this.wave9[i].posicao_y = tamanho_tela_y/10 + (i * 50); //numero depois de * espacamento entre os inimigos
    }
	
	//Wave10
    this.wave10 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	this.wave10[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo10.png");
    	this.wave10[i].posicao_x = 1400*10;
    	this.wave10[i].posicao_y = tamanho_tela_y/10 + (i * 50); //numero depois de * espacamento entre os inimigos
    }
	
    //Variaveis das waves(para adicionar uma nova wave crie um novo Array(); e adicione aqui depois!)
    this.waves = this.wave1.concat(this.wave2, this.wave3, this.wave4, this.wave5, this.wave6, this.wave7, this.wave8, this.wave9, this.wave10);
        
    };//Reset
	
	this.reset();
	
    this.update=function()
    {

    	if(this.paused)
    	{
    		return; 	
    	}
		
				
    	this.efeito_sonoro.play();
    	
    	//Background se movendo
    	this.background.update();
    	
<<<<<<< .mine
    	//Background2 se movendo
    	this.background2.update();
    	
=======
>>>>>>> .r69
    	//Player
    	this.player.update();
    	
    	//Inimigo
    	for(var i = 0 ; i < this.waves.length; i++)
    	{
    		this.waves[i].update();
    		
			if(this.waves[i].posicao_x < tamanho_tela_x && this.waves[i].posicao_x > 0)
    		{
    			if(this.waves[i].visible)
    			{
    				if(Math.random()< this.sorteio)
    				{
    					this.Tiros_inimigos.push(new Game4Tiro(this.waves[i].posicao_x, this.waves[i].posicao_y + this.waves[i].tamanho_y/2, -15));
    				}
    			}
    		}
    		
   		}
   		   	
    	//Tiros Player
    	for(var i = 0; i < this.player.Tiros.length ; i++)
    	{
    		this.player.Tiros[i].update();
    	}
    	
    	//Tiros inimigos
    	for(var i = 0; i < this.Tiros_inimigos.length ; i++)
    	{
    		this.Tiros_inimigos[i].update();
    	}
    	

    	
    //	PLAYER COLIDINDO COM OS INIMIGOS 	
    for(var i = 0; i < this.waves.length; i++)
	{
		if(this.waves[i].visible&&this.player.visible)
		{
				if(Collide(
					this.player.posicao_x,
        			this.player.posicao_y,
        			this.player.tamanho_x,
        			this.player.tamanho_y,
        			this.waves[i].posicao_x,
        			this.waves[i].posicao_y,
        			this.waves[i].tamanho_x,
        			this.waves[i].tamanho_y))
			{
				this.player.current_energy--;
				
				this.waves[i].visible = false;
				
				if(this.player.current_energy <= 0)
				{
					game_4.currentScene = game_4.SCENE.FIMPERDEU
					this.player.visible = false;
				}
		
			}
		}
	
		//TIRO DO PLAYER COLIDINDO COM OS INIMIGOS
		for(var j = 0; j < this.player.Tiros.length; j++)
		{
			if(this.waves[i].visible&&this.player.Tiros[j].visible)
			{	
				if(Collide(
        			this.player.Tiros[j].posicao_x,
        			this.player.Tiros[j].posicao_y,
        			this.player.Tiros[j].tamanho_x,
        			this.player.Tiros[j].tamanho_y,
        			this.waves[i].posicao_x,
        			this.waves[i].posicao_y,
        			this.waves[i].tamanho_x,
        			this.waves[i].tamanho_y))
        		{
        			this.player.Tiros[j].visible = false;
        			
        			this.waves[i].current_energy -= this.player.Tiros[j].dano;; 
        			
        			if(this.waves[i].current_energy <=0)		
					{
						this.waves[i].visible = false;
					}
					//Removendo o tiro da lista
					if(this.player.Tiros[j].visible == false)
					{
						this.player.Tiros.splice(j, 1);
					}
							
    			
        		}
			}
		}		
		
		//TIRO DO INIMIGO COLIDINDO COM PLAYER	
		for(var j = 0; j < this.Tiros_inimigos.length; j++)
		{
			if(this.player.visible&&this.Tiros_inimigos[j].visible)
			{	
				if(Collide(
        			this.Tiros_inimigos[j].posicao_x,
        			this.Tiros_inimigos[j].posicao_y,
        			this.Tiros_inimigos[j].tamanho_x,
        			this.Tiros_inimigos[j].tamanho_y,
        			this.player.posicao_x,
        			this.player.posicao_y,
        			this.player.tamanho_x,
        			this.player.tamanho_y))
        			
        		{
        			this.Tiros_inimigos[j].visible = false;
                			
        			this.player.current_energy -= this.Tiros_inimigos[j].dano; 
        			
        			if(this.player.current_energy <=0)		
					{
						this.player.visible = false;
						game_4.currentScene = game_4.SCENE.FIMPERDEU
					}
					
					//Removendo o tiro da lista
					if(this.Tiros_inimigos[j].visible == false)
					{
						this.Tiros_inimigos.splice(j, 1);
					}
        		}
			}
			
	
		}//fecha o for do Player
		
		
	}//Fecha o for dos inimigos

    };
    
    this.draw=function()
    { 	
    	//Desenhando fundo
    	this.background.draw();
    	
    	//Desenhando player
    	this.player.draw();
    	
    	//Desenhando inimigos
    	for(var i = 0 ; i < this.waves.length; i++)
    	{
    		this.waves[i].draw();    		 
   		}   	
   		
    	//Desenhando Tiros
		for(var i = 0; i < this.player.Tiros.length ; i++)
    	{
    		this.player.Tiros[i].draw();
    	}
    	
		//Desenhando Tiros dos inimigos
    	for(var i = 0; i < this.Tiros_inimigos.length ; i++)
    	{
    		this.Tiros_inimigos[i].draw();
    	}

		//Desenhando barra de energia
    	this.interface.draw(this.player.max_energy, this.player.current_energy, this.player.lives); 
    };
    
    
    this.mouse_down=function(mouse)
    {
    	//currentScene = SCENE.FIMGANHOU;
    	this.efeito_sonoro.pause();
    };
     
 	 //Tecla desceu
    this.key_down=function(key)
    {    	
    	if (key.keyCode == 80)
		{
			this.paused = !this.paused;
		}
		
		this.player.key_down(key);
    };
    
    //Tecla subiu
    this.key_up=function(key)
    {
    	this.player.key_up(key);
	};
}