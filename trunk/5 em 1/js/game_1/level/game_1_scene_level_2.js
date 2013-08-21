function Game1SceneLevel2()
{
	this.reset=function()
	{
	
	//Pontos
   	pontosplayer = 0;
   	pontosinimigo = 0;
	
	//Player
	this.player = new Game1Paleta("setas");	
	
	//botão p/ voltar menu
	this.botaopmenu = new Button("imgs/game_1/backpmenu.png");
	this.botaopmenu.position_x = 745; 
    this.botaopmenu.position_y = 555;
	
	//Inimigo
	this.inimigo = new Game1PaletaInimigo();
	
	//Bola
	this.bola = new Game1Bola();
	
	//Pause
	this.paused = false;
   
    //Colocando a imagem de background
    this.background = new Game1Background("imgs/game_1/FundoBackgroundFase2.png");
	
    //Efeito sonoros 
    //Efeito sonoro de borda
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_1/paletascolisao.mp3"
    this.efeito_sonoro.load();
    this.efeito_sonoro.volume = 0.1   
    
    //Efeito sonoro de fundo
   	this.efeito_sonoro2 = new Audio();
    this.efeito_sonoro2.src = "sounds/game_1/Efeitodefundo.wav"
    this.efeito_sonoro2.load();
    
	//Array de blocos
	//Blocos1 - blocos do lado do player
	this.bloco1 = new Array();
	for(var i = 0 ; i < 2; i++) 
    {
    	this.bloco1[i] = new Game1Bloco("imgs/game_1/Bloco.png");
    	this.bloco1[i].posicao_x = 150;
    	this.bloco1[i].posicao_y = tamanho_tela_y/7 + (i * 300); //numero depois de * espacamento entre os inimigos
    }
	
	//Blocos2 - blocos do lado do inimigo
	this.bloco2 = new Array();
	for(var i = 0 ; i < 2; i++) 
    {
    	this.bloco2[i] = new Game1Bloco("imgs/game_1/Bloco.png");
    	this.bloco2[i].posicao_x = 630;
    	this.bloco2[i].posicao_y = tamanho_tela_y/7 + (i * 300); //numero depois de * espacamento entre os inimigos
    }
	
	//Variaveis das waves(para adicionar uma nova wave crie um novo Array(); e adicione aqui depois!)
	this.blocos = this.bloco1.concat(this.bloco2)	
		
	}//FIM DO RESET
	
	this.reset();	
	
    this.update=function()
    {
    	//Pause
    	if(paused)
    	{
    		return;	
    	}
		
		//Fazendo o player ganhar e ir para level 3
		if(pontosplayer >= 20)
		{
			game_1.currentScene = game_1.SCENE.LEVEL_3;
			
			//Parando fundo da fase2
			this.efeito_sonoro2.pause();
			
			//Parando som da bola da fase2
			this.efeito_sonoro.pause();
		}	
		
		//Fazendo o inimigo ganhar e mostrar tela de perdeu
		if(pontosinimigo >= 20)
		{
			game_1.currentScene = game_1.SCENE.FIMPERDEU;
			
			//Resetando o jogo zerando pontos
			this.reset();					
		}
    	
    	//Efeito sonoro de fundo
    	this.efeito_sonoro2.play();
    	
    	//Background se movendo
    	this.background.update();
    	
    	//Player
    	this.player.update();
    	
    	//Inimigo
    	this.inimigo.update();
    	
    	//Bola
    	this.bola.update();
		
		//Bloco
		for(var i = 0 ; i < this.blocos.length; i++)
    	{
    		this.blocos[i].update();
   		}
		
		//Paleta Inimigo Se movimentando de acordo com a bola
		if (this.bola.posicao_y > this.inimigo.posicao_y )
		{
			this.inimigo.posicao_y += this.inimigo.velocidade_y;
		}
		
		if (this.bola.posicao_y < this.inimigo.posicao_y+this.inimigo.tamanho_y )
		{
			this.inimigo.posicao_y -= this.inimigo.velocidade_y;
		}
		
		////////////////////////COLISAO PLAYER////////////////////////
			
		//Fazendo colisão da bola com a paleta player nas laterais
		if( Collide( this.bola.posicao_x,
					 this.bola.posicao_y,
					 this.bola.tamanho_x,
					 this.bola.tamanho_y,
					 this.player.posicao_x,
					 this.player.posicao_y+10,
					 this.player.tamanho_x,
					 this.player.tamanho_y-20 ) ) //se a bola colidiu com o player
		{
					//Aumentar velocidade ao bater na paleta? Se sim, retire o comentário abaixo
					//this.bola.velocidade_x ++;
					this.bola.velocidade_x *= -1;
					this.efeito_sonoro.play();
					
					//Colocanndo liminte na velocidade
					if(this.bola.velocidade_x >= 10)	
					{
						this.bola.velocidade_x = 10
					}
					
					if(this.bola.velocidade_y >= 10)	
					{
						this.bola.velocidade_y = 10
					}
					
		}
				
		//Fazendo colisão da bola com a paleta player em cima -------------------------------
		if( Collide( this.bola.posicao_x,
					 this.bola.posicao_y,
					 this.bola.tamanho_x,
					 this.bola.tamanho_y,
					 this.player.posicao_x,
					 this.player.posicao_y,
					 this.player.tamanho_x,
					 10 ) ) //se a bola colidiu com o player
		{
					//Invertendo velocidade da colisao de cima
					this.bola.velocidade_y++;
					
					this.bola.velocidade_y *= -1;
					this.efeito_sonoro.play();
					
					//Colocanndo liminte na velocidade
					if(this.bola.velocidade_x >= 10)	
					{
						this.bola.velocidade_x = 10
					}
					
					if(this.bola.velocidade_y >= 10)	
					{
						this.bola.velocidade_y = 10
					}
		}
		
		//Fazendo colisão da bola com a paleta player embaixo --------
		if( Collide( this.bola.posicao_x,
					 this.bola.posicao_y,
					 this.bola.tamanho_x,
					 this.bola.tamanho_y,
					 this.player.posicao_x,
					 this.player.posicao_y+this.player.tamanho_y-10,
					 this.player.tamanho_x,
					 10 ) ) //se a bola colidiu com o player
		{
					this.bola.velocidade_y--;
					
					this.bola.velocidade_y *= -1;
					this.efeito_sonoro.play();
					
					//Colocanndo liminte na velocidade
					if(this.bola.velocidade_x >= 10)	
					{
						this.bola.velocidade_x = 10
					}
					
					if(this.bola.velocidade_y >= 10)	
					{
						this.bola.velocidade_y = 10
					}
		}
		
		
		/////////////////////COLISAO INIMIGO/////////////////////
		
    	//Fazendo colisão da bola com a paleta Inimigo nas laterais
		if( Collide( this.bola.posicao_x,
					 this.bola.posicao_y,
					 this.bola.tamanho_x,
					 this.bola.tamanho_y,
					 this.inimigo.posicao_x,
					 this.inimigo.posicao_y+10,
					 this.inimigo.tamanho_x,
					 this.inimigo.tamanho_y-20 ) ) //se a bola colidiu com o inimigo
		{
					//Aumentar velocidade ao bater na paleta? Se sim, retire o comentário abaixo
					//this.bola.velocidade_x ++;
					this.bola.velocidade_x *= -1;
					this.efeito_sonoro.play();
					
					//Colocanndo liminte na velocidade
					if(this.bola.velocidade_x >= 10)	
					{
						this.bola.velocidade_x = 10
					}
					
					if(this.bola.velocidade_y >= 10)	
					{
						this.bola.velocidade_y = 10
					}
		}
		
		
		//Fazendo colisão da bola com a paleta Inimigo em cima -----------------------
		if( Collide( this.bola.posicao_x,
					 this.bola.posicao_y,
					 this.bola.tamanho_x,
					 this.bola.tamanho_y,
					 this.inimigo.posicao_x,
					 this.inimigo.posicao_y,
					 this.inimigo.tamanho_x,
					 10 ) ) //se a bola colidiu com o inimigo
		{
					//Invertendo velocidade da colisao de cima
					this.bola.velocidade_y ++;
					
					this.bola.velocidade_y *= -1;
					this.efeito_sonoro.play();
					
					//Colocanndo liminte na velocidade
					if(this.bola.velocidade_x >= 10)	
					{
						this.bola.velocidade_x = 10
					}
					
					if(this.bola.velocidade_y >= 10)	
					{
						this.bola.velocidade_y = 10
					}
		}
		
		//Fazendo colisão da bola com a paleta Inimigo embaixo ------
		if( Collide( this.bola.posicao_x,
					 this.bola.posicao_y,
					 this.bola.tamanho_x,
					 this.bola.tamanho_y,
					 this.inimigo.posicao_x,
					 this.inimigo.posicao_y+this.inimigo.tamanho_y-10,
					 this.inimigo.tamanho_x,
					 10 ) ) //se a bola colidiu com o inimigo
		{
					//Invertendo velocidade da colisao de baixo
					this.bola.velocidade_y--;
					
					this.bola.velocidade_y *= -1;
					this.efeito_sonoro.play();
					
					//Colocanndo liminte na velocidade
					if(this.bola.velocidade_x >= 10)	
					{
						this.bola.velocidade_x = 10
					}
					
					if(this.bola.velocidade_y >= 10)	
					{
						this.bola.velocidade_y = 10
					}
		}
		
		/////////////////////////////////COLISAO BLOCOS//////////////////////////////
		
		//Fazendo colisão da bola com os blocos nas laterais
		for(var i = 0 ; i < this.blocos.length; i++)
		{
			if( Collide( this.bola.posicao_x,
						 this.bola.posicao_y,
						 this.bola.tamanho_x,
						 this.bola.tamanho_y,
						 this.blocos[i].posicao_x,
						 this.blocos[i].posicao_y+10,
						 this.blocos[i].tamanho_x,
						 this.blocos[i].tamanho_y-20 ) ) //se a bola colidiu com o bloco
					{
						//Aumentar velocidade ao bater na paleta? Se sim, retire o comentário abaixo
						//bola.velocidade_x ++;
						this.bola.velocidade_x *= -1;
						this.efeito_sonoro.play();
						
						//Colocanndo liminte na velocidade
						if(this.bola.velocidade_x >= 10)	
						{
							this.bola.velocidade_x = 10
						}
					
						if(this.bola.velocidade_y >= 10)	
						{
							this.bola.velocidade_y = 10
						}

					}
		}
		
		//Fazendo colisão da bola com os blocos em cima
		for(var i = 0 ; i < this.blocos.length; i++)
		{
			if( Collide( this.bola.posicao_x,
						 this.bola.posicao_y,
						 this.bola.tamanho_x,
						 this.bola.tamanho_y,
						 this.blocos[i].posicao_x,
						 this.blocos[i].posicao_y,
						 this.blocos[i].tamanho_x,
						 10 ) ) //se a bola colidiu com o bloco
					{
						//Invertendo velocidade da colisao de cima
						this.bola.velocidade_y ++;
						
						this.bola.velocidade_y *= -1;
						this.efeito_sonoro.play();

						//Colocanndo liminte na velocidade
						if(this.bola.velocidade_x >= 10)	
						{
							this.bola.velocidade_x = 10
						}
					
						if(this.bola.velocidade_y >= 10)	
						{
							this.bola.velocidade_y = 10
						}
					}
		}
		
		//Fazendo colisão da bola com os blocos em embaixo
		for(var i = 0 ; i < this.blocos.length; i++)
		{
			if( Collide( this.bola.posicao_x,
						 this.bola.posicao_y,
						 this.bola.tamanho_x,
						 this.bola.tamanho_y,
						 this.blocos[i].posicao_x,
						 this.blocos[i].posicao_y+this.blocos[i].tamanho_y-10,
						 this.blocos[i].tamanho_x,
						 10 ) ) //se a bola colidiu com o bloco
					{
						//Invertendo velocidade da colisao de baixo
						this.bola.velocidade_y--;
						
						this.bola.velocidade_y *= -1;
						this.efeito_sonoro.play();
						
						//Colocanndo liminte na velocidade
						if(this.bola.velocidade_x >= 10)	
						{
							this.bola.velocidade_x = 10
						}
					
						if(this.bola.velocidade_y >= 10)	
						{
							this.bola.velocidade_y = 10
						}
					}
		}

    };
    
    this.draw=function()
    { 	
    	//Desenhando fundo
    	this.background.draw();
    	
		//Desenhando Botaopmenu
		this.botaopmenu.draw();
		
		//Pontos player
   		screen.font = "40px Arial";
		screen.fillStyle="#000000";
		screen.fillText("Pontos " + pontosplayer, 45, 52); //posicao x e y 
		
		//Pontos Inimigo
		screen.font = "40px Arial";
		screen.fillStyle="#000000";
		screen.fillText("Pontos " + pontosinimigo, 605, 52); //posicao x e y
		
    	//Desenhando player
    	this.player.draw();
    	
    	//Desenhando inimigo
    	this.inimigo.draw();
    	
    	//Desenhando bola
    	this.bola.draw();
		  	
		//Desenhando bloco
		for(var i = 0 ; i < this.blocos.length; i++)
    	{
    		this.blocos[i].draw();    		 
   		}  		
    };
    
    
    this.mouse_down=function(mouse)
    {
		if(this.botaopmenu.clicked(mouse))
    	{
			//Vai para menu
			currentScene = SCENE.INTRO;
			
			//Pausa musica do jogo
			this.efeito_sonoro2.pause();
			
			//Reset no jogo
			this.reset();
		}
    };
     
 	//Tecla desceu
    this.key_down=function(key)
    {
		this.player.key_down(key);
    };
    
    //Tecla subiu
    this.key_up=function(key)
    {
    	this.player.key_up(key);
	};	
	
	//Função de colisão
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
}