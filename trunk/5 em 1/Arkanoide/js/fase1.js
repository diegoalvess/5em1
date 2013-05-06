function SceneLevel1()
{
	//Player
	var player = new Paleta();	
	
	 //Colocando a imagem de background
    var background = new Background();
	
	//Bola
	var bola = new Ball();
	
	//Blocos
	var listablocos1 = new Array();
	
	var listablocos2 = new Array();
	
	var listablocos3 = new Array();
	
	var listablocos4 = new Array();
	
	var listablocos5 = new Array();
	
	//Pause
	var paused = true;
	
	//	PONTOS
	var pontos = 0;
	
	// VIDAS
	var vidas = 3;
	
	// TELA DE QUANDO GANHA
	var tela_de_ganhou = new SceneGanhou();

	// TELA DE QUANDO PERDE
	var tela_do_derrotado = new ScenePerdeu();
	
	//criação dos blocos
		for(var i = 0; i < 10; i++)
		{				
			
			listablocos1[i] = new Bloco("imgs/bloco5.png", 5);				
			listablocos1[i].psc_Y = 100
 			listablocos1[i].psc_X = 120 + (i * (listablocos1[i].tam_X + 5)); 			
		}		
		
		for(var i = 0; i < 10; i++)
		{
		
			listablocos2[i] = new Bloco("imgs/bloco4.png", 4);
			listablocos2[i].psc_Y = 120
			listablocos2[i].psc_X = 120 + (i * (listablocos2[i].tam_X + 5)) 
			
		}	
		
		for(var i = 0; i < 10; i++)
		{
		
			listablocos3[i] = new Bloco("imgs/bloco3.png", 3);
			listablocos3[i].psc_Y = 140
			listablocos3[i].psc_X = 120 + (i * (listablocos3[i].tam_X + 5)) 
			
		}
		
		for(var i = 0; i < 10; i++)
		{
		
			listablocos4[i] = new Bloco("imgs/bloco2.png", 2);
			listablocos4[i].psc_Y = 160
			listablocos4[i].psc_X = 120 + (i * (listablocos4[i].tam_X + 5)) 
			
		}
		
		for(var i = 0; i < 10; i++)
		{
		
			listablocos5[i] = new Bloco("imgs/bloco1.png", 1);
			listablocos5[i].psc_Y = 180
			listablocos5[i].psc_X = 120 + (i * (listablocos5[i].tam_X + 5)) 
			
		}
   
   		var listas = listablocos1.concat(listablocos2,listablocos3,listablocos4,listablocos5);
	

    //Efeito sonoro
    //this.efeito_sonoro = new Audio();
    //this.efeito_sonoro.src = "Sons/Som1.mp3"
    //this.efeito_sonoro.load();
    
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
    	background.update();
    	
    	//Player
    	player.update();
    	
    	//Bola
    	//MOVENDO A BOLA 
    	//MANTENDO BOLA NO PLAYER
    	bola.update(player.posicao_x+player.tamanho_x/2);
    	
		//LISTA DOS BLOCOS
		for(var i = 0 ; i <listas.length; i++)
		{
			listas[i].update(); 
		}
		
		//Fazendo colis�o da bola com a paleta player
			
		if(Collide(
				bola.posicao_x,
				bola.posicao_y,
				bola.tamanho_x,
				bola.tamanho_y,
				player.posicao_x,
				player.posicao_y,
				player.tamanho_x,
				player.tamanho_y))
			{
				if(bola.velocity_y )//< bola.velocity_MAX)
				{
					bola.velocity_y += 1;
				}
				bola.velocity_y *= -1;
			}
			
		
		
		//COLISAO COM OS BLOCOS
		for(var i = 0 ; i < listas.length; i++)
			{
				if(listas[i].visible)
				{
					if(Collide(bola.posicao_x,
							   bola.posicao_y,
							   bola.tamanho_x,
						       bola.tamanho_y,
						       listas[i].psc_X,
							   listas[i].psc_Y,
							   listas[i].tam_X,
							   listas[i].tam_Y))
						{
							listas[i].hp--;
							if(listas[i].hp <=0)
							{
								listas[i].visible = false;
								pontos++;
			
									//FAZENDO APARECER A TELA DE VENCEDOR
									if(pontos >= 50)
										{
											tela_de_ganhou.update();
										}
							}
														
							bola.velocity_y *= -1;
														
						}
				}
			}
			
			//FAZENDO A VIDA DIMINUIR E VOLTAR PARA A PALETA
			if(bola.posicao_y > 700 - bola.tamanho_y)
			{
				vidas--;
				bola.followplayer = true;					
				
				//FAZENDO O JOGO REINICIAR QUANDO A VIDA CHEGAR A 0 
				if(vidas <= 0)
				{
					tela_do_derrotado.update();
					{
						
					}
				}
			
			
			}
			
			
			
	}//FIM SO UPDATE
    
    this.draw=function()
    { 	
    	//TELA DE VENCEDOR
    	tela_de_ganhou.draw();
    	
    	//Desenhando fundo
    	background.draw();
    	
    	//Desenhando player
    	player.draw();
    	
    	//Desenhando bola
    	bola.draw();
    	
    	//listas.draw();
    	
    	
    	//DESENHANDO TODOS OS BLOCOS
    	for(var i = 0 ; i <listas.length; i++)
		{
			listas[i].draw();		
 		}
 		
 		//DESENHANDO PONTOS NA TELA
 		 //DESENHO DOS PONTOS NO CAMPO//
        screen.font = "45px Arial";
        screen.fillStyle="#FF0000";
        screen.fillText("Pontos " + pontos, 140, 40);
        
        screen.font = "45px Arial";
        screen.fillStyle="#FF0000";
        screen.fillText("Vidas " + vidas, 540, 40);
        
        
		//FAZENDO APARECER A TELA DE VENCEDOR
		if(pontos >= 50)
			{
				tela_de_ganhou.draw();
			}
			
		//FAZENDO O JOGO REINICIAR QUANDO A VIDA CHEGAR A 0 
		if(vidas <= 0)
			{
				tela_do_derrotado.draw();
			}
		
		//DESENHANDO NA TELA
       //screen.drawImage(background.imagem, background.tamanho_W, background.tamanho_H);
  		
  		//screen.drawImage(player.img, player.posicao_x, player.posicao_y);
     	
     	//screen.drawImage(bola.img, bola.posicao_x, bola.posicao_y);

		
    }//FIM DO DRAW
    
    
    this.mouse_down=function(mouse)
    {
    	//SE O JOGADOR GANHAR APARECERA A TELA DO JOGADOR VENCEDOR PARA VOLTAR PARA O MENU
    	currentScene = SCENE.GANHOU;
    	
    	//SE O JOGADOR PERDER APARECERA A TELA DE PERDEDOR PARA VOLTAR PARA O MENU
    	currentScene = SCENE.PERDEU;
    	//this.efeito_sonoro.pause();
    };
     
 	
    this.key_down=function(key)
    {
		player.key_down(key);
    
    
    	if(key.keyCode == "32")
		{
			bola.followplayer = false;
		}	
    
    };
    
    this.key_up=function(key)
    {
    	player.key_up(key);
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
			paused = !paused;
		}
	}
	

		
}//FIM DA FASE1