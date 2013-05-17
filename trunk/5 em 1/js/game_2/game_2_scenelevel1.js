function SceneLevel1()
{
	//Player
	this.player = new Paleta();	
	
	 //Colocando a imagem de background
    this.background = new Background();
	
	//Bola
	this.bola = new Ball();
	
	//Blocos
	this.listablocos1 = new Array();
	
	this.listablocos2 = new Array();
	
	this.listablocos3 = new Array();
	
	this.listablocos4 = new Array();
	
	this.listablocos5 = new Array();
	
	this.listas;
	
	//Pause
	this.paused = true;
	
	//	PONTOS
	this.pontos = 0;
	
	// VIDAS
	this.vidas = 3;
	
	// TELA DE QUANDO GANHA
	this.tela_de_ganhou = new SceneGanhou();

	// TELA DE QUANDO PERDE
	this.tela_do_derrotado = new ScenePerdeu();
		
	this.reset=function()
	{
		//criação dos blocos
		for(var i = 0; i < 10; i++)
		{	
			this.listablocos1[i] = new Bloco("imgs/game_2/bloco5.png", 5);				
			this.listablocos1[i].psc_Y = 100
 			this.listablocos1[i].psc_X = 120 + (i * (this.listablocos1[i].tam_X + 5)); 			
		}		
		
		for(var i = 0; i < 10; i++)
		{
			this.listablocos2[i] = new Bloco("imgs/game_2/bloco4.png", 4);
			this.listablocos2[i].psc_Y = 120
			this.listablocos2[i].psc_X = 120 + (i * (this.listablocos2[i].tam_X + 5)) 	
		}	
		
		for(var i = 0; i < 10; i++)
		{
			this.listablocos3[i] = new Bloco("imgs/game_2/bloco3.png", 3);
			this.listablocos3[i].psc_Y = 140
			this.listablocos3[i].psc_X = 120 + (i * (this.listablocos3[i].tam_X + 5)) 
		}
		
		for(var i = 0; i < 10; i++)
		{
			this.listablocos4[i] = new Bloco("imgs/game_2/bloco2.png", 2);
			this.listablocos4[i].psc_Y = 160
			this.listablocos4[i].psc_X = 120 + (i * (this.listablocos4[i].tam_X + 5)) 
		}
		
		for(var i = 0; i < 10; i++)
		{
			this.listablocos5[i] = new Bloco("imgs/game_2/bloco1.png", 1);
			this.listablocos5[i].psc_Y = 180
			this.listablocos5[i].psc_X = 120 + (i * (listablocos5[i].tam_X + 5)) 
		}
   
   		this.listas = this.listablocos1.concat(this.listablocos2,this.listablocos3,this.listablocos4,this.listablocos5);
   		
   		this.bola;
   		
   		this.pontos = 0;
   		
   		this.vidas = 3;
   		
   		this.player;
	};
	
	this.reset();
	
    this.update=function()
    {
    	
    	
    	//Pause
    	if(!paused)
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
    	this.bola.update(this.player.posicao_x+this.player.tamanho_x/2);
    	
		//LISTA DOS BLOCOS
		for(var i = 0 ; i <this.listas.length; i++)
		{
			this.listas[i].update(); 
		}
		
		//Fazendo colis�o da bola com a paleta player
			
		if(Collide(
					this.bola.posicao_x,
					this.bola.posicao_y,
					this.bola.tamanho_x,
					this.bola.tamanho_y,
					this.player.posicao_x,
					this.player.posicao_y,
					this.player.tamanho_x,
					this.player.tamanho_y))
			{
				if(this.bola.velocity_y )//< bola.velocity_MAX)
				{
					this.bola.velocity_y += 1;
				}
				this.bola.velocity_y *= -1;
			}
			
		
		
		//COLISAO COM OS BLOCOS
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
										this.game_2.currentScene = this.game_2.SCENE.FIMGANHOU;
									}
							}
														
							this.bola.velocity_y *= -1;
														
						}
				}
			}
			
			//FAZENDO A VIDA DIMINUIR E VOLTAR PARA A PALETA
			if(this.bola.posicao_y > 700 - this.bola.tamanho_y)
			{
				this.vidas--;
				this.bola.followplayer = true;					
				
				//FAZENDO O A TELA DE PERDEDOR APARECER 0 
				if(this.vidas <= 0)
				{
					this.game_2.currentScene = this.game_2.SCENE.FIMPERDEU;
					this.reset();
										
				}
							
			}
			
			console.log("GAME 2 FASE 1 UPDATE")
    	
			
	}//FIM SO UPDATE
    
    this.draw=function()
    { 	
    	//Desenhando fundo
    	this.background.draw();
    	
    	//Desenhando player
    	this.player.draw();
    	
    	//Desenhando bola
    	this.bola.draw();
    	
    	//this.listas.draw();
    	
    	
    	//DESENHANDO TODOS OS BLOCOS
    	for(var i = 0 ; i <this.listas.length; i++)
		{
			this.listas[i].draw();		
 		}
 		
 		//DESENHANDO PONTOS NA TELA
 		 //DESENHO DOS PONTOS NO CAMPO//
        screen.font = "45px Arial";
        screen.fillStyle="#FF0000";
        screen.fillText("Pontos " + pontos, 140, 40);
        
        screen.font = "45px Arial";
        screen.fillStyle="#FF0000";
        screen.fillText("Vidas " + vidas, 540, 40);
        
        
		
		
		
		console.log("GAME 2 FASE 1 DRAW")
    	
		
    }//FIM DO DRAW
    
    
    this.mouse_down=function(mouse)
    {
    	//SE O JOGADOR GANHAR APARECERA A TELA DO JOGADOR VENCEDOR PARA VOLTAR PARA O MENU
    	//currentScene = SCENE.FIMGANHOU;
    	
    	//SE O JOGADOR PERDER APARECERA A TELA DE PERDEDOR PARA VOLTAR PARA O MENU
    	//currentScene = SCENE.FIMPERDEU;
    	//this.efeito_sonoro.pause();
    };
     
 	
    this.key_down=function(key)
    {
		this.player.key_down(key);
    
    
    	if(key.keyCode == "32")
		{
			this.bola.followplayer = false;
		}	
    
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
	
			
}//FIM DA FASE1