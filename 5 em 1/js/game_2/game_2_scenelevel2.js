function Game2SceneLevel2()
{
	this.reset=function()
	{
	//Som
    this.musica_de_fundo = new Audio();
    this.musica_de_fundo.src = "sounds/game_2/Musica_de_Fundo.mp3";
    this.musica_de_fundo.load();
	
	
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
	
	this.listablocos6 = new Array();
	
	this.listablocos7 = new Array();
	
	this.listablocos8 = new Array();
	
	this.listablocos9 = new Array();
	
	this.listablocos10 = new Array();
	
	this.listablocos11 = new Array();
	
	this.listablocos12 = new Array();
	
	this.listablocos13 = new Array();
	
	this.listablocos14 = new Array();
	
	this.listablocos15 = new Array();
	
	this.listablocos16 = new Array();
	
	this.listablocos17 = new Array();
	
	this.listablocos18 = new Array();
	
	this.listablocos19 = new Array();
	
	this.listablocos20 = new Array();
	
	this.listablocos21 = new Array();
	
	this.listablocos22 = new Array();
	
	this.listablocos23 = new Array();
	
	this.listablocos24 = new Array();
	
	this.listablocos25 = new Array();
	
	this.listablocos26 = new Array();
	
	this.listablocos27 = new Array();
	
	this.listablocos28 = new Array();
	
	this.listas;
	
	//Pause
	this.paused = false;
	
	//	PONTOS
	this.pontos = 0;
	
	// VIDAS
	this.vidas = 3;
	
		//BLOCO VERMELHO
		for(var i = 0; i < 4; i++)
		{
			this.listablocos1[i] = new Game2Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos1[i].psc_Y = 100
			this.listablocos1[i].psc_X = 130 + (i * (this.listablocos1[i].tam_X + 100)) 
		}
		
		//BLOCO VERMELHO
		for(var i = 0; i < 1; i++)
		{
			this.listablocos2[i] = new Game2Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos2[i].psc_Y = 130
			this.listablocos2[i].psc_X = 370 //+ (i * (this.listablocos2[i].tam_X + 100)) 
		}
		
		//BLOCO VERMELHO
		for(var i = 0; i < 2; i++)
		{
			this.listablocos3[i] = new Game2Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos3[i].psc_Y = 160
			this.listablocos3[i].psc_X = 110 + (i * (this.listablocos3[i].tam_X + 460)) 
		}

		//BLOCO VERMELHO
		for(var i = 0; i < 2; i++)
		{
			this.listablocos4[i] = new Game2Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos4[i].psc_Y = 190
			this.listablocos4[i].psc_X = 100 + (i * (this.listablocos4[i].tam_X + 480)) 
		}
		
		//BLOCO VERMELHO
		for(var i = 0; i < 2; i++)
		{
			this.listablocos5[i] = new Game2Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos5[i].psc_Y = 230
			this.listablocos5[i].psc_X = 100 + (i * (this.listablocos5[i].tam_X + 480)) 
		}
		
		//BLOCO VERMELHO
		for(var i = 0; i < 2; i++)
		{
			this.listablocos6[i] = new Game2Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos6[i].psc_Y = 260
			this.listablocos6[i].psc_X = 130 + (i * (this.listablocos6[i].tam_X + 430)) 
		}
		
		//BLOCO VERMELHO
		for(var i = 0; i < 2; i++)
		{
			this.listablocos7[i] = new Game2Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos7[i].psc_Y = 290
			this.listablocos7[i].psc_X = 150 + (i * (this.listablocos7[i].tam_X + 390)) 
		}
		
		//BLOCO VERMELHO
		for(var i = 0; i < 2; i++)
		{
			this.listablocos8[i] = new Game2Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos8[i].psc_Y = 320
			this.listablocos8[i].psc_X = 170 + (i * (this.listablocos8[i].tam_X + 350)) 
		}
		
		//BLOCO VERMELHO
		for(var i = 0; i < 2; i++)
		{
			this.listablocos9[i] = new Game2Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos9[i].psc_Y = 350
			this.listablocos9[i].psc_X = 190 + (i * (this.listablocos9[i].tam_X + 300)) 
		}
		
		//BLOCO VERMELHO
		for(var i = 0; i < 2; i++)
		{
			this.listablocos10[i] = new Game2Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos10[i].psc_Y = 380
			this.listablocos10[i].psc_X = 210 + (i * (this.listablocos10[i].tam_X + 260)) 
		}
		
		//BLOCO VERMELHO
		for(var i = 0; i < 2; i++)
		{
			this.listablocos11[i] = new Game2Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos11[i].psc_Y = 410
			this.listablocos11[i].psc_X = 230 + (i * (this.listablocos11[i].tam_X + 220)) 
		}
		
		//BLOCO VERMELHO
		for(var i = 0; i < 2; i++)
		{
			this.listablocos12[i] = new Game2Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos12[i].psc_Y = 440
			this.listablocos12[i].psc_X = 250 + (i * (this.listablocos12[i].tam_X + 180)) 
		}
		
		//BLOCO VERMELHO
		for(var i = 0; i < 2; i++)
		{
			this.listablocos13[i] = new Game2Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos13[i].psc_Y = 470
			this.listablocos13[i].psc_X = 270 + (i * (this.listablocos13[i].tam_X + 140)) 
		}
		
		//BLOCO VERMELHO
		for(var i = 0; i < 3; i++)
		{
			this.listablocos14[i] = new Game2Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos14[i].psc_Y = 500
			this.listablocos14[i].psc_X = 300 + (i * (this.listablocos14[i].tam_X + 10)) 
		}
		
		//BLOCO VERDE
		for(var i = 0; i < 6; i++)
		{
			this.listablocos15[i] = new Game2Bloco("imgs/game_2/bloco4.png", 4);
			this.listablocos15[i].psc_Y = 160
			this.listablocos15[i].psc_X = 190  + (i * (this.listablocos15[i].tam_X + 14)) 	
		}
		
		//BLOCO VERDE
		for(var i = 0; i < 6; i++)
		{
			this.listablocos16[i] = new Game2Bloco("imgs/game_2/bloco4.png", 4);
			this.listablocos16[i].psc_Y = 190
			this.listablocos16[i].psc_X = 170  + (i * (this.listablocos16[i].tam_X + 20)) 	
		}
		
		//BLOCO VERDE
		for(var i = 0; i < 6; i++)
		{
			this.listablocos17[i] = new Game2Bloco("imgs/game_2/bloco4.png", 4);
			this.listablocos17[i].psc_Y = 220
			this.listablocos17[i].psc_X = 190  + (i * (this.listablocos17[i].tam_X + 15)) 	
		}	
		
		//BLOCO VERDE
		for(var i = 0; i < 5; i++)
		{
			this.listablocos18[i] = new Game2Bloco("imgs/game_2/bloco4.png", 4);
			this.listablocos18[i].psc_Y = 250
			this.listablocos18[i].psc_X = 210  + (i * (this.listablocos18[i].tam_X + 25)) 	
		}	
		
		//BLOCO VERDE
		for(var i = 0; i < 5; i++)
		{
			this.listablocos19[i] = new Game2Bloco("imgs/game_2/bloco4.png", 4);
			this.listablocos19[i].psc_Y = 280
			this.listablocos19[i].psc_X = 220  + (i * (this.listablocos19[i].tam_X + 15)) 	
		}
		
		//BLOCO VERDE
		for(var i = 0; i < 5; i++)
		{
			this.listablocos20[i] = new Game2Bloco("imgs/game_2/bloco4.png", 4);
			this.listablocos20[i].psc_Y = 310
			this.listablocos20[i].psc_X = 240  + (i * (this.listablocos20[i].tam_X + 7)) 	
		}
		
			//BLOCO VERDE
		for(var i = 0; i < 4; i++)
		{
			this.listablocos21[i] = new Game2Bloco("imgs/game_2/bloco4.png", 4);
			this.listablocos21[i].psc_Y = 340
			this.listablocos21[i].psc_X = 260  + (i * (this.listablocos21[i].tam_X + 10)) 	
		}
		
		//BLOCO VERDE
		for(var i = 0; i < 3; i++)
		{
			this.listablocos22[i] = new Game2Bloco("imgs/game_2/bloco4.png", 4);
			this.listablocos22[i].psc_Y = 370
			this.listablocos22[i].psc_X = 300  + (i * (this.listablocos22[i].tam_X + 15)) 	
		}
		
		//BLOCO VERDE
		for(var i = 0; i < 3; i++)
		{
			this.listablocos23[i] = new Game2Bloco("imgs/game_2/bloco4.png", 4);
			this.listablocos23[i].psc_Y = 400
			this.listablocos23[i].psc_X = 300  + (i * (this.listablocos23[i].tam_X + 5)) 	
		}
		
		//BLOCO VERDE
		for(var i = 0; i < 2; i++)
		{
			this.listablocos24[i] = new Game2Bloco("imgs/game_2/bloco4.png", 4);
			this.listablocos24[i].psc_Y = 430
			this.listablocos24[i].psc_X = 330  + (i * (this.listablocos24[i].tam_X + 15)) 	
		}
		
		//BLOCO VERDE
		for(var i = 0; i < 2; i++)
		{
			this.listablocos25[i] = new Game2Bloco("imgs/game_2/bloco4.png", 4);
			this.listablocos25[i].psc_Y = 460
			this.listablocos25[i].psc_X = 340  + (i * (this.listablocos25[i].tam_X + 5)) 	
		}
		
		/*
		//BLOCO AMARELO
		for(var i = 0; i < 2; i++)
		{
			this.listablocos26[i] = new Game2Bloco("imgs/game_2/bloco2.png", 4);
			this.listablocos26[i].psc_Y = 221
			this.listablocos26[i].psc_X = 190  + (i * (this.listablocos26[i].tam_X + 315)) 	
		}
		
		//BLOCO AMARELO
		for(var i = 0; i < 1; i++)
		{
			this.listablocos27[i] = new Game2Bloco("imgs/game_2/bloco2.png", 4);
			this.listablocos27[i].psc_Y = 311
			this.listablocos27[i].psc_X = 375  //+ (i * (this.listablocos27[i].tam_X + 7)) 	
		}
		
			//BLOCO AMARELO
		for(var i = 0; i < 3; i++)
		{
			this.listablocos28[i] = new Game2Bloco("imgs/game_2/bloco2.png", 4);
			this.listablocos28[i].psc_Y = 371
			this.listablocos28[i].psc_X = 300  + (i * (this.listablocos28[i].tam_X + 15)) 	
		}*/
		
		
   		this.listas = this.listablocos1.concat(this.listablocos2,this.listablocos3,this.listablocos4,this.listablocos5,this.listablocos6,this.listablocos7,
   					  this.listablocos8,this.listablocos9,this.listablocos10,this.listablocos11,this.listablocos12,this.listablocos13,this.listablocos14,
   					  this.listablocos15,this.listablocos16, this.listablocos17, this.listablocos18,this.listablocos19,this.listablocos20,this.listablocos21,
   					  this.listablocos22,this.listablocos23,this.listablocos24,this.listablocos25);//,this.listablocos26,this.listablocos27,this.listablocos28);
   		   		
   		this.pontos = 0;
   		
   		this.vidas = 3;
   		
   		this.player.posicao_x = (tamanho_tela_x  - this.player.tamanho_x)/2;
    	this.player.posicao_y = (tamanho_tela_y - this.player.tamanho_y-2);
   		
	}//FIM DO RESET
	
	this.reset();
	
	this.update = function ()
	{
		 //Som
    	this.musica_de_fundo.play();
    	
    	//Pause
    	if(paused)
    	{
    		return;  	
    	}
		
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
									if(this.pontos >= 77)
									{
										this.musica_de_fundo.pause();
										game_2.currentScene = game_2.SCENE.FIMGANHOU;
										game_2.fimganhou.voce_ganhou.play();
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
									if(this.pontos >= 77)
									{
										this.musica_de_fundo.pause();
										game_2.currentScene = game_2.SCENE.FIMGANHOU;
										game_2.fimganhou.voce_ganhou.play();
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
									if(this.pontos >= 77)
									{
										this.musica_de_fundo.pause();
										game_2.currentScene = game_2.SCENE.FIMGANHOU;
										game_2.fimganhou.voce_ganhou.play();
									}
							}
														
							this.bola.velocity_y *= -1;
														
						}
				}
			}
			
			//FAZENDO A VIDA DIMINUIR E VOLTAR PARA A PALETA
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
	
	this.draw = function ()
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
	}
	
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
			this.paused = !paused;
		}
	}
}//FIM DA FASE 2
