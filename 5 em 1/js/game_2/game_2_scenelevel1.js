function Game2SceneLevel1()
{
	this.reset=function()
	{
	//Som
    this.musica_de_fundo = new Audio();
    this.musica_de_fundo.src = "sounds/game_2/Musica_de_Fundo.mp3";
    this.musica_de_fundo.load();
	//this.musica_de_fundo.play();
	
	//Player
	this.player = new Game2Paleta();	
	
	 //Colocando a imagem de background
    this.background = new Game2Background();
	
	//Bola
	 this.bola = new Game2Ball();
	
	//Blocos
	this.listablocos1 = new Array();
	
	this.listablocos2 = new Array();
	
	this.listablocos3 = new Array();
	
	this.listablocos4 = new Array();
	
	this.listablocos5 = new Array();
	
	this.listas;
	
	//Pause
	this.paused = false;
	
	//	PONTOS
	this.pontos = 0;
	
	// VIDAS
	this.vidas = 3;
	
		//criação dos blocos
		//BLOCOS CINZAS
		for(var i = 0; i < 10; i++)
		{	
			this.listablocos1[i] = new Game2Bloco("imgs/game_2/bloco5.png", 5);				
			this.listablocos1[i].psc_Y = 100
 			this.listablocos1[i].psc_X = 75 + (i * (this.listablocos1[i].tam_X + 5)); 			
		}		
		
		//BLOCO VERDE
		for(var i = 0; i < 10; i++)
		{
			this.listablocos2[i] = new Game2Bloco("imgs/game_2/bloco4.png", 4);
			this.listablocos2[i].psc_Y = 130
			this.listablocos2[i].psc_X = 75 + (i * (this.listablocos2[i].tam_X + 5)) 	
		}	
		
		//BLOCOS AZUIS
		for(var i = 0; i < 10; i++)
		{
			this.listablocos3[i] = new Game2Bloco("imgs/game_2/bloco3.png", 3);
			this.listablocos3[i].psc_Y = 160
			this.listablocos3[i].psc_X = 75 + (i * (this.listablocos3[i].tam_X + 5)) 
		}
		
		//BLOCOS AMARELOS
		for(var i = 0; i < 10; i++)
		{
			this.listablocos4[i] = new Game2Bloco("imgs/game_2/bloco2.png", 2);
			this.listablocos4[i].psc_Y = 190
			this.listablocos4[i].psc_X = 75 + (i * (this.listablocos4[i].tam_X + 5)) 
		}
		
		//BLOCOS VERMELHOS
		for(var i = 0; i < 10; i++)
		{
			this.listablocos5[i] = new Game2Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos5[i].psc_Y = 220
			this.listablocos5[i].psc_X = 75 + (i * (this.listablocos5[i].tam_X + 5)) 
		}
   
   		this.listas = this.listablocos1.concat(this.listablocos2,this.listablocos3,this.listablocos4,this.listablocos5);
   		   		
   		this.pontos = 0;
   		
   		this.vidas = 3;
   		
   		this.player.posicao_x = (tamanho_tela_x  - this.player.tamanho_x)/2;
    	this.player.posicao_y = (tamanho_tela_y - this.player.tamanho_y-2);
   		
	}//FIM DO RESET
	
	this.reset();
	
    this.update=function()
    {
    	 //Som
    	this.musica_de_fundo.play();
    	
    	//Pause
    	if(paused)
    	{
    		return;  	
    	}
		
		//Som
    	//this.efeito_sonoro.play();
    	
    	//Background se movendo
    	this.background.update();
    	
    	//Player
    	this.player.update();
    	
    	//Bola
    	//MOVENDO A BOLA 
    	//MANTENDO BOLA NO PLAYER
    	this.bola.update(this.player.posicao_x + this.player.tamanho_x/2);
    	
		//LISTA DOS BLOCOS
		for(var i = 0 ; i <this.listas.length; i++)
		{
			this.listas[i].update(); 
		}
		
		//Fazendo colis�o da bola com a paleta player parte de cima			
		
		if(Collide(
					this.bola.posicao_x,
					this.bola.posicao_y,
					this.bola.tamanho_x,
					this.bola.tamanho_y,
					this.player.posicao_x,
					this.player.posicao_y,
					this.player.tamanho_x,
					10))
			{

				this.bola.velocity_y *= -1;
			}

		//Fazendo colis�o da bola com a paleta player parte da esquerda			
		if(Collide(
					this.bola.posicao_x,
					this.bola.posicao_y,
					this.bola.tamanho_x,
					this.bola.tamanho_y,
					this.player.posicao_x,
					this.player.posicao_y+10,
					10,
					this.player.tamanho_y-10))
			{
				this.bola.posicao_x = this.player.posicao_x - this.bola.tamanho_x - 10;// + this.player.velocidade_x;
				this.bola.velocity_x *= -1;
			}
		
		
		//Fazendo colis�o da bola com a paleta player parte da direita			
		if(Collide(
					this.bola.posicao_x,
					this.bola.posicao_y,
					this.bola.tamanho_x,
					this.bola.tamanho_y,
					this.player.posicao_x+this.player.tamanho_x-10,
					this.player.posicao_y+10,
					10,
					this.player.tamanho_y-10))
			{				
				this.bola.posicao_x = this.player.posicao_x + this.player.tamanho_x + 10;// - this.player.velocidade_x;
				this.bola.velocity_x *= -1;
			}
		
		
		//COLISAO COM OS BLOCOS EM CIMA E EM BAIXO
		for(var i = 0 ; i < this.listas.length; i++)
			{
				if(this.listas[i].visible)
				{
					if(Collide(
								this.bola.posicao_x,
							   	this.bola.posicao_y,
							   	this.bola.tamanho_x,
						       	this.bola.tamanho_y,
						       	this.listas[i].psc_X,
							   	this.listas[i].psc_Y,
							   	this.listas[i].tam_X,
							   	this.listas[i].tam_Y))
						{
							this.listas[i].hp--;
							if(this.listas[i].hp <=0)
							{
								this.listas[i].visible = false;
								this.pontos++;
			
									//FAZENDO APARECER A TELA DE VENCEDOR
									if(this.pontos >= 50)
									{
										this.musica_de_fundo.pause();
										game_2.currentScene = game_2.SCENE.LEVEL_2;
										//game_2.fimganhou.voce_ganhou.play();
									}
							}
														
							this.bola.velocity_y *= -1;
														
						}
				}
			}
			
			//COLISAO COM OS BLOCOS NA ESQUERDA
			for(var i = 0 ; i < this.listas.length; i++)
			{
				if(this.listas[i].visible)
				{
					if(Collide(
								this.bola.posicao_x,
							   	this.bola.posicao_y,
							   	this.bola.tamanho_x,
						       	this.bola.tamanho_y,
						       	this.listas[i].psc_X,
							   	this.listas[i].psc_Y,
							   	this.listas[i].tam_X,
							   	this.listas[i].tam_Y-10))
						{
							this.listas[i].hp--;
							if(this.listas[i].hp <=0)
							{
								this.listas[i].visible = false;
								this.pontos++;
								
								//this.bola.posicao_x = this.player.posicao_x - this.bola.tamanho_x - 10;// + this.player.velocidade_x;
								this.bola.velocity_x *= -1;
								
									//FAZENDO APARECER A TELA DE VENCEDOR
									if(this.pontos >= 50)
									{
										this.musica_de_fundo.pause();
										game_2.currentScene = game_2.SCENE.LEVEL_2;
										//game_2.fimganhou.voce_ganhou.play();
									}
							}
														
							this.bola.velocity_y *= -1;
														
						}
				}
			}
			
			//COLISAO COM OS BLOCOS NA DIREITA
			for(var i = 0 ; i < this.listas.length; i++)
			{
				if(this.listas[i].visible)
				{
					if(Collide(
								this.bola.posicao_x,
							   	this.bola.posicao_y,
							   	this.bola.tamanho_x,
						       	this.bola.tamanho_y,
						       	this.listas[i].psc_X,
							   	this.listas[i].psc_Y,//+this.bola.posicao_y,
							   	this.listas[i].tam_X+this.bola.tamanho_x,
							   	this.listas[i].tam_Y-this.bola.posicao_y))//+this.bola.tamnho_x + 10))
						{
							this.listas[i].hp--;
							if(this.listas[i].hp <=0)
							{
								this.listas[i].visible = false;
								this.pontos++;
								
								//this.bola.posicao_x = this.player.posicao_x - this.bola.tamanho_x - 10;// + this.player.velocidade_x;
								this.bola.velocity_x *= 1;
								
									//FAZENDO APARECER A TELA DE VENCEDOR
									if(this.pontos >= 50)
									{
										this.musica_de_fundo.pause();
										game_2.currentScene = game_2.SCENE.LEVEL_2;
										//game_2.fimganhou.voce_ganhou.play();
									}
							}
														
							this.bola.velocity_y *= -1;
														
						}
				}
			}
			
			//FAZENDO A VIDA DIMINUIR E BOLA VOLTAR PARA A PALETA
			if(this.bola.posicao_y > tamanho_tela_y)
			{
				this.vidas--;
				this.bola.followplayer = true;

				//FAZENDO O A TELA DE PERDEDOR APARECER 0 
				if(this.vidas <= 0)
				{
					this.musica_de_fundo.pause();
					game_2.currentScene = game_2.SCENE.FIMPERDEU;
					game_2.fimperdeu.voce_Perdeu.play();
					this.reset();					
				}

			}

	}//FIM DO UPDATE
    
    this.draw=function()
    { 	
    	//Desenhando fundo
    	this.background.draw();
    	
    	//Desenhando player
    	this.player.draw();
    	
    	//Desenhando bola
    	this.bola.draw();
    	
    	//DESENHANDO TODOS OS BLOCOS
    	for(var i = 0 ; i <this.listas.length; i++)
		{
			this.listas[i].draw();		
 		}
 		
 		//DESENHANDO PONTOS NA TELA
 		//DESENHO DOS PONTOS NO CAMPO//
        screen.font = "45px Arial";
        screen.fillStyle="#FF0000";
        screen.fillText("Pontos " + this.pontos, 140, 35);
        
        screen.font = "45px Arial";
        screen.fillStyle="#FF0000";
        screen.fillText("Vidas " + this.vidas, 540, 35);

    }//FIM DO DRAW
    
    
    this.mouse_down=function(mouse)
    {
	
    };

    this.key_down=function(key)
    {
		this.player.key_down(key);
    	this.bola.key_down(key);
    };
    
    this.key_up=function(key)
    {
    	this.player.key_up(key);
	};	
	
	//COLISAO
	function Collide(x1, y1, w1, h1, x2, y2, w2, h2)
	{
		if((x1+w1<x2) //SE RECT1 ESQUERDO RECT2//
			||(x1>x2+w2) //SE RECT1 DIREITO RECT2//
			||(y1+h1<y2) //SE RECT1 CIMA RECT2//
			||(y1>y2+h2)) //SE RECT1 BAIXO RECT2//
		{
			return false; //N�O COLIDIU//
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
			console.log("APERTANDO PPPPPPPPPPPPPPPPPPPPPPPPPP")
			this.paused = paused;
		}
	}
}//FIM DA FASE1