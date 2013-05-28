 function Game4SceneLevel1()
{		
	this.reset=function()
	{
		
	//Player
	this.player = new Game4Player("setas");	
	
	//Barra de energia player
	this.interface = new Game4Interface("imgs/game_4/barra de energia.png", 300, 25, 5, 5);
	
	this.hp_boss = new Game4Interface("imgs/game_4/barra de energia boss.png", 500, 25, (tamanho_tela_x - 500)/2, 570);
	this.hp_boss.visible = false;
	
	//Tiro
	this.Tiros_inimigos = new Array();
	
	//Pause
	this.paused = false;
	
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
    this.efeito_sonoro.volume = 1.0
	
	//Wave1
	this.wave1 = new Array();
	for(var i = 0 ; i < 10; i++) 
    {
    	this.wave1[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo1.png", 10);
    	this.wave1[i].posicao_x = 1400;
    	this.wave1[i].posicao_y = tamanho_tela_y/20 + (i * 55); //numero depois de * espacamento entre os inimigos
    }
	
	//Wave2
	this.wave2 = new Array();
	for(var i = 0 ; i < 5; i++) 
    {
    	this.wave2[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo2.png", 10);
    	this.wave2[i].posicao_x = 1400*2 + (i * 60);
    	this.wave2[i].posicao_y = (tamanho_tela_y/2) + (i * 55); //numero depois de * espacamento entre os inimigos
    }
    
	for(var i = 5 ; i < 9; i++) 
    {
    	this.wave2[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo2.png", 10);
    	this.wave2[i].posicao_x = (1400*2)-240 + (i * 60);
    	this.wave2[i].posicao_y = ((tamanho_tela_y/2)+240) - (i * 55); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave3
    this.wave3 = new Array();
	for(var i = 0 ; i < 5; i++) 
    {
    	this.wave3[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo4.png", 10);
    	this.wave3[i].posicao_x = (1400*3) - ( i * 120 );
    	this.wave3[i].posicao_y = tamanho_tela_y/20; //numero depois de * espacamento entre os inimigos
    }
    
	for(var i = 0 ; i < 5; i++) 
    {
    	this.wave3[i+5] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo4.png", 10);
    	this.wave3[i+5].posicao_x = (1500*3) - ( i * 120 );
    	this.wave3[i+5].posicao_y = tamanho_tela_y/10*9; //numero depois de * espacamento entre os inimigos
    	this.wave3[i+5].currentBehaviour = BEHAVIOUR.UPANDDOWN;

    }
    
	//Wave4
    this.wave4 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	this.wave4[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo4.png", 10);
    	this.wave4[i].posicao_x = 1400*4;
    	this.wave4[i].posicao_y = tamanho_tela_y/20 + (i * 50); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave5
    this.wave5 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	this.wave5[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo5.png", 10);
    	this.wave5[i].posicao_x = 1400*5;
    	this.wave5[i].posicao_y = tamanho_tela_y/20 + (i * 50); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave6
    this.wave6 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	this.wave6[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo6.png", 10);
    	this.wave6[i].posicao_x = 1400*6;
    	this.wave6[i].posicao_y = tamanho_tela_y/20 + (i * 50); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave7
    this.wave7 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	this.wave7[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo7.png", 10);
    	this.wave7[i].posicao_x = 1400*7;
    	this.wave7[i].posicao_y = tamanho_tela_y/20 + (i * 50); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave8
    this.wave8 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	this.wave8[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo8.png", 10);
    	this.wave8[i].posicao_x = 1400*8;
    	this.wave8[i].posicao_y = tamanho_tela_y/20 + (i * 50); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave9
    this.wave9 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	this.wave9[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo9.png", 10);
    	this.wave9[i].posicao_x = 1400*9;
    	this.wave9[i].posicao_y = tamanho_tela_y/20 + (i * 50); //numero depois de * espacamento entre os inimigos
    }
	
	//Wave10
    this.wave10 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	this.wave10[i] = new Game4Inimigo("imgs/game_4/inimigos/Inimigo10.png", 10);
    	this.wave10[i].posicao_x = 1400*10;
    	this.wave10[i].posicao_y = tamanho_tela_y/20 + (i * 50); //numero depois de * espacamento entre os inimigos
    }
	
	//Mestre
	this.wave11 = new Array();
    for(var i = 0 ; i < 1; i++) 
    {
    	this.wave11[i] = new Game4Inimigo("imgs/game_4/inimigos/Mestre.png", 10);
    	this.wave11[i].tamanho_x = 256;
    	this.wave11[i].tamanho_y = 256;
    	this.wave11[i].velocidade_x = -5;
    	this.wave11[i].velocidade_y = 0;
    	this.wave11[i].posicao_x = 1000;
    	this.wave11[i].posicao_y = tamanho_tela_y/2 - this.wave11[i].tamanho_y/2
    	this.wave11[i].currentBehaviour = BEHAVIOUR.BOSS;
    	this.wave11[i].chancetiro = 0;
    }
	
    //Variaveis das waves(para adicionar uma nova wave crie um novo Array(); e adicione aqui depois!)
    //this.waves = this.wave1.concat(this.wave2, this.wave3, this.wave4, this.wave5, this.wave6, this.wave7, this.wave8, this.wave9, this.wave10, this.wave11);
    this.waves = this.wave11.concat(this.wave11);
        
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
    	
    	//Background2 se movendo
    	this.background2.update();
    	
    	//Player
    	this.player.update();
    	
    	//Inimigo BOSS
    	for(var i = 0 ; i < this.waves.length; i++)
    	{
    		this.waves[i].update();
    		
			if(this.waves[i].posicao_x < tamanho_tela_x && this.waves[i].posicao_x > 0)
    		{
    			if(this.waves[i].visible)
    			{
    						if(Math.random()<  this.waves[i].chancetiro)
    						{
    							this.Tiros_inimigos.push(new Game4Tiro("imgs/game_4/Tiroinimigo.png",this.waves[i].posicao_x, this.waves[i].posicao_y + this.waves[i].tamanho_y/2, -15));
    						}
		
    						if(this.waves[i].currentBehaviour == BEHAVIOUR.BOSS)
    						{
    						
    						//tiro do meio
    						if(Math.random() < this.waves[i].chancetiroboss )
    						{
    						   this.Tiros_inimigos.push(new Game4Tiro("imgs/game_4/Tiroinimigo.png", this.waves[i].posicao_x, this.waves[i].posicao_y + this.waves[i].tamanho_y/2, -15));
    						}
    						
    						//tiro de 1/4 
    						if(Math.random() < this.waves[i].chancetiroboss )
    						{
    						this.Tiros_inimigos.push(new Game4Tiro("imgs/game_4/Tiroinimigo.png", this.waves[i].posicao_x, this.waves[i].posicao_y + this.waves[i].tamanho_y/4, -15));
    						}
    						
    						//tiro de cima
    						if(Math.random() < this.waves[i].chancetiroboss)
    						{
    						this.Tiros_inimigos.push(new Game4Tiro("imgs/game_4/Tiroinimigo.png", this.waves[i].posicao_x, this.waves[i].posicao_y, -15));
    						}
    						
    						
    						//tiro de baixo
    						if(Math.random() < this.waves[i].chancetiroboss )
    						{
    						this.Tiros_inimigos.push(new Game4Tiro("imgs/game_4/Tiroinimigo.png",this.waves[i].posicao_x, this.waves[i].posicao_y + this.waves[i].tamanho_y, -15));
    						}
    						
    						// tiro de 1/4 baixo 						
    						if(Math.random() < this.waves[i].chancetiroboss )
    						{
    						this.Tiros_inimigos.push(new Game4Tiro("imgs/game_4/Tiroinimigo.png", this.waves[i].posicao_x, this.waves[i].posicao_y + 190, -15));
    						}
    						 	
    						
    						}//fechando o quarto if
    			
      							
    					}//fechando o teceiro if 			
    	    	}//fechando o Primeiro if
    	}//fechando o for
   		   	
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
						
    					if(this.waves[i].currentBehaviour == BEHAVIOUR.BOSS)
    					{
    						game_4.level1.hp_boss.visible = true;
    						game_4.currentScene = game_4.SCENE.FIMGANHOU
    					}
					}
					//Removendo o tiro da lista
					if(this.player.Tiros[j].visible == false)
					{
						this.player.Tiros.splice(j, 1);
					}						
    			
        		}
			}
		}//Fecha o For do TIRO DO PLAYER COLIDINDO COM OS INIMIGOS
	
		
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
			
		}// fecha o fo PLAYER COLIDINDO COM OS INIMIGOS 	
		}//fecha o for do TIRO DO INIMIGO COLIDINDO COM PLAYER			
		
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
    	
    	this.hp_boss.draw(this.wave11[0].max_energy, this.wave11[0].current_energy, 0);
    	 
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