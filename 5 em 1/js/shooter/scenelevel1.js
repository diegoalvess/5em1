;function SceneLevel1()
{
	//Player
	var player = new Player("setas");	
	
	//Barra de energia
	var interface = new Interface();
	
	//Tiro
	var Tiros_inimigos = new Array();
	
	//Pause
	var paused = true;
	
	//Sorteio do Tiros Inimigos
	var sorteio = 0.01
	
	var visible = true;
		
	//Wave1
	var wave1 = new Array();
	for(var i = 0 ; i < 10; i++) 
    {
    	wave1[i] = new Inimigo("Imagens/inimigos/Inimigo1.png");
    	wave1[i].posicao_x = 1400;
    	wave1[i].posicao_y = tamanho_tela_y/10 + (i * 60); //numero depois de * espacamento entre os inimigos
    	//wave1[i].currentBehaviour = BEHAVIOUR.UPANDDOWN;
    }
	
	//Wave2
	var wave2 = new Array();
	for(var i = 0 ; i < 5; i++) 
    {
    	wave2[i] = new Inimigo("Imagens/inimigos/Inimigo2.png");
    	wave2[i].posicao_x = 1400*2 + (i * 60);
    	wave2[i].posicao_y = (tamanho_tela_y/2) + (i * 60); //numero depois de * espacamento entre os inimigos
    }
    
	for(var i = 5 ; i < 9; i++) 
    {
    	wave2[i] = new Inimigo("Imagens/inimigos/Inimigo2.png");
    	wave2[i].posicao_x = (1400*2)-240 + (i * 60);
    	wave2[i].posicao_y = ((tamanho_tela_y/2)+240) - (i * 60); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave3
    var wave3 = new Array();
	for(var i = 0 ; i < 5; i++) 
    {
    	wave3[i] = new Inimigo("Imagens/inimigos/Inimigo4.png");
    	wave3[i].posicao_x = 1400 - ( i * 120 );
    	wave3[i].posicao_y = tamanho_tela_y/10; //numero depois de * espacamento entre os inimigos
    }
    
	for(var i = 0 ; i < 5; i++) 
    {
    	wave3[i+5] = new Inimigo("Imagens/inimigos/Inimigo4.png");
    	wave3[i+5].posicao_x = 1500 - ( i * 120 );
    	wave3[i+5].posicao_y = tamanho_tela_y/10*9; //numero depois de * espacamento entre os inimigos
    	wave3[i+5].currentBehaviour = BEHAVIOUR.UPANDDOWN;

    }
    
    
    
	//Wave4
    var wave4 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	wave4[i] = new Inimigo("Imagens/inimigos/Inimigo4.png");
    	wave4[i].posicao_x = 1400*4;
    	wave4[i].posicao_y = tamanho_tela_y/10 + (i * 60); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave5
    var wave5 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	wave5[i] = new Inimigo("Imagens/inimigos/Inimigo5.png");
    	wave5[i].posicao_x = 1400*5;
    	wave5[i].posicao_y = tamanho_tela_y/10 + (i * 60); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave6
    var wave6 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	wave6[i] = new Inimigo("Imagens/inimigos/Inimigo6.png");
    	wave6[i].posicao_x = 1400*6;
    	wave6[i].posicao_y = tamanho_tela_y/10 + (i * 60); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave7
    var wave7 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	wave7[i] = new Inimigo("Imagens/inimigos/Inimigo7.png");
    	wave7[i].posicao_x = 1400*7;
    	wave7[i].posicao_y = tamanho_tela_y/10 + (i * 60); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave8
    var wave8 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	wave8[i] = new Inimigo("Imagens/inimigos/Inimigo8.png");
    	wave8[i].posicao_x = 1400*8;
    	wave8[i].posicao_y = tamanho_tela_y/10 + (i * 60); //numero depois de * espacamento entre os inimigos
    }
    
	//Wave9
    var wave9 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	wave9[i] = new Inimigo("Imagens/inimigos/Inimigo9.png");
    	wave9[i].posicao_x = 1400*9;
    	wave9[i].posicao_y = tamanho_tela_y/10 + (i * 60); //numero depois de * espacamento entre os inimigos
    }
	
	//Wave10
    var wave10 = new Array();
    for(var i = 0 ; i < 10; i++) 
    {
    	wave10[i] = new Inimigo("Imagens/inimigos/Inimigo10.png");
    	wave10[i].posicao_x = 1400*10;
    	wave10[i].posicao_y = tamanho_tela_y/10 + (i * 60); //numero depois de * espacamento entre os inimigos
    }
	
    //Variaveis das waves(para adicionar uma nova wave crie um novo Array(); e adicione aqui depois!)
    //var waves = wave1.concat(wave2, wave3, wave4, wave5, wave6, wave7, wave8, wave9, wave10);
    
    var waves = wave3.concat();
    
    //Background
    var background = new Background("Imagens/FundoBackground.png");
    background.posicao_y = tamanho_tela_x - background.tamanho_y;
    
    var background2 = new Background2("Imagens/FundoBackground2.png");
    background2.posicao_y = tamanho_tela_x - background.tamanho_y;
    
    //Efeito sonoro
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "Sons/Som1.mp3"
    this.efeito_sonoro.load();
    
    this.update=function()
    {
    	if(!paused)
    	{
    		return    	
    	}

    	this.efeito_sonoro.play();
    	
    	//Background se movendo
    	background.update();
    	
    	//Background2 se movendo
    	background2.update();
    	
    	//Player
    	player.update();
    	
    	//Inimigo
    	for(var i = 0 ; i < waves.length; i++)
    	{
    		waves[i].update();
    		
			if(waves[i].posicao_x < tamanho_tela_x && waves[i].posicao_x > 0)
    		{
    			if(waves[i].visible)
    			{
    				if(Math.random()< sorteio)
    				{
    					Tiros_inimigos.push(new Tiro(waves[i].posicao_x, waves[i].posicao_y + waves[i].tamanho_y/2, -15));
    				}
    			}
    		}
    		
   		}
   		   	
    	//Tiros Player
    	for(var i = 0; i < player.Tiros.length ; i++)
    	{
    		player.Tiros[i].update();
    	}
    	
    	//Tiros inimigos
    	for(var i = 0; i < Tiros_inimigos.length ; i++)
    	{
    		Tiros_inimigos[i].update();
    	}
    	

    	
    //	PLAYER COLIDINDO COM OS INIMIGOS 	
    for(var i = 0; i < waves.length; i++)
	{
		if(waves[i].visible&&player.visible)
		{
				if(Collide(
					player.posicao_x,
        			player.posicao_y,
        			player.tamanho_x,
        			player.tamanho_y,
        			waves[i].posicao_x,
        			waves[i].posicao_y,
        			waves[i].tamanho_x,
        			waves[i].tamanho_y))
			{
				player.current_energy--;
				
				waves[i].visible = false;
				
				if(player.current_energy <= 0)
				{
					player.visible = false;
				}
		
			}
		}
	
		//TIRO DO PLAYER COLIDINDO COM OS INIMIGOS
		for(var j = 0; j < player.Tiros.length; j++)
		{
			if(waves[i].visible&&player.Tiros[j].visible)
			{	
				if(Collide(
        			player.Tiros[j].posicao_x,
        			player.Tiros[j].posicao_y,
        			player.Tiros[j].tamanho_x,
        			player.Tiros[j].tamanho_y,
        			waves[i].posicao_x,
        			waves[i].posicao_y,
        			waves[i].tamanho_x,
        			waves[i].tamanho_y))
        		{
        			player.Tiros[j].visible = false;
        			
        			waves[i].current_energy -= player.Tiros[j].dano;; 
        			
        			if(waves[i].current_energy <=0)		
					{
						waves[i].visible = false;
					}
					//Removendo o tiro da lista
					if(player.Tiros[j].visible == false)
					{
						player.Tiros.splice(j, 1);
					}
							
    			
        		}
			}
		}		
		
		//TIRO DO INIMIGO COLIDINDO COM PLAYER	
		for(var j = 0; j < Tiros_inimigos.length; j++)
		{
			if(player.visible&&Tiros_inimigos[j].visible)
			{	
				if(Collide(
        			Tiros_inimigos[j].posicao_x,
        			Tiros_inimigos[j].posicao_y,
        			Tiros_inimigos[j].tamanho_x,
        			Tiros_inimigos[j].tamanho_y,
        			player.posicao_x,
        			player.posicao_y,
        			player.tamanho_x,
        			player.tamanho_y))
        			
        		{
        			Tiros_inimigos[j].visible = false;
        
        			
        			player.current_energy -= Tiros_inimigos[j].dano; 
        			
        			if(player.current_energy <=0)		
					{
						player.visible = false;
					}
					
					//Removendo o tiro da lista
					if(Tiros_inimigos[j].visible == false)
					{
						Tiros_inimigos.splice(j, 1);
					}
					
				

        		}
			}
			
	
		}//fecha o for do Player
		
		
	}//Fecha o for dos inimigos

    };
    
    this.draw=function()
    { 	
    	//Desenhando fundo
    	background.draw();
    	
    	//Desenhando Fundo paralax
    	background2.draw();
    	
    	//Desenhando player
    	player.draw();
    	
    	//Desenhando inimigos
    	for(var i = 0 ; i < waves.length; i++)
    	{
    		waves[i].draw();    		 
   		}   	
   		
    	//Desenhando Tiros
		for(var i = 0; i < player.Tiros.length ; i++)
    	{
    		player.Tiros[i].draw();
    	}
    	
		//Desenhando Tiros dos inimigos
    	for(var i = 0; i < Tiros_inimigos.length ; i++)
    	{
    		Tiros_inimigos[i].draw();
    	}

		//Desenhando barra de energia
    	interface.draw(player.max_energy, player.current_energy, player.lives); 
    };
    
    
    this.mouse_down=function(mouse)
    {
    	//currentScene = SCENE.FIMGANHOU;
    	this.efeito_sonoro.pause();
    };
     
 	 //Tecla desceu
    this.key_down=function(key)
    {    	
		player.key_down(key);
    };
    
    //Tecla subiu
    this.key_up=function(key)
    {
    	player.key_up(key);
	};
	
	function Collide(x1, y1, w1, h1, x2, y2, w2, h2)
	{
		if((x1+w1<x2) //SE RECT1 ESQUERDO RECT2//
			||(x1>x2+w2) //SE RECT1 DIREITO RECT2//
			||(y1+h1<y2) //SE RECT1 CIMA RECT2//
			||(y1>y2+h2)) //SE RECT1 BAIXO RECT2//
		{
			return false; //NÃO COLIDIU//
		}
		else	
		{
			return true; //COLIDIU//
		}
	}

	window.addEventListener('keypress', key_press, true);
			


	function key_press(key)
	{
		if (key.keyCode == 112 )
		{
			paused = !paused;
		}
		
		//Teste do tiro do inimigo
		/*if (key.keyCode == 113 )
		{
			Tiros_inimigos.push(new Tiro(waves[0].posicao_x, waves[0].posicao_y + waves[0].tamanho_y/2, -15));		
		}*/
		
	}
	
}