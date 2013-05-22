function Game1SceneLevel1()
{
	//Player
	this.player = new Game1Paleta("setas");	
	
	//Inimigo
	this.inimigo = new Game1PaletaInimigo();
	
	//Bola
	this.bola = new Game1Bola();
	
	//Pause
	this.paused = false;
   
    //Colocando a imagem de background
    this.background = new Game1Background("imgs/game_1/FundoBackground.png");
	
    //Efeito sonoro da borda
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_1/paletascolisao.mp3"
    this.efeito_sonoro.load();
    
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
		
    this.update=function()
    {
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
		
		else	
		{
			this.inimigo.posicao_y -= this.inimigo.velocidade_y;
		}
		
		
		//Fazendo colisão da bola com a paleta player
		if( Collide( this.bola.posicao_x,
					 this.bola.posicao_y,
					 this.bola.tamanho_x,
					 this.bola.tamanho_y,
					 this.player.posicao_x,
					 this.player.posicao_y,
					 this.player.tamanho_x,
					 this.player.tamanho_y ) ) //se a bola colidiu com o player
				{
					//Aumentar velocidade ao bater na paleta? Se sim, retire o comentário abaixo
					//this.bola.velocidade_x ++;
					this.bola.velocidade_x *= -1;
					this.efeito_sonoro.play();
				}
		
    	//Fazendo colisão da bola com a paleta Inimigo
		if( Collide( this.bola.posicao_x,
					 this.bola.posicao_y,
					 this.bola.tamanho_x,
					 this.bola.tamanho_y,
					 this.inimigo.posicao_x,
					 this.inimigo.posicao_y,
					 this.inimigo.tamanho_x,
					 this.inimigo.tamanho_y ) ) //se a bola colidiu com o inimigo
				{
					//Aumentar velocidade ao bater na paleta? Se sim, retire o comentário abaixo
					//this.bola.velocidade_x ++;
					this.bola.velocidade_x *= -1;
					this.efeito_sonoro.play();
				}
		
		//Fazendo colisão da bola com os blocos USE SEMPRE FOR for(var i = 0 ; i < this.blocos.length; i++) !p
		for(var i = 0 ; i < this.blocos.length; i++)
		{
			if( Collide( this.bola.posicao_x,
						 this.bola.posicao_y,
						 this.bola.tamanho_x,
						 this.bola.tamanho_y,
						 this.blocos[i].posicao_x,
						 this.blocos[i].posicao_y,
						 this.blocos[i].tamanho_x,
						 this.blocos[i].tamanho_y ) ) //se a bola colidiu com o bloco
					{
						//Aumentar velocidade ao bater na paleta? Se sim, retire o comentário abaixo
						//bola.velocidade_x ++;
						this.bola.velocidade_x *= -1;
						this.efeito_sonoro.play();
					}
		}
    };
    
    this.draw=function()
    { 	
    	//Desenhando fundo
    	this.background.draw();
    	
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
    	//currentScene = SCENE.FIMGANHOU;
    	//this.efeito_sonoro.pause();
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