//ball.js
function Game1Bola()
{
	this.image = new Image();
	this.image.src="imgs/game_1/ball.png";
	this.loaded = false;

    this.tamanho_x = 40;
    this.tamanho_y = 40;
    this.posicao_x = 40
    this.posicao_y = 40
    this.velocidade_x = 5;
    this.velocidade_y = 5;
    
    this.reset=function()
	{   
   		//Pontos
   		this.pontosplayer = 0;
   		this.pontosinimigo = 0;
   	};
	
	this.reset();

	//Efeito Sonoro
	this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_1/borda.mp3"
    this.efeito_sonoro.load();
      
    this.update=function()
    {
    	//Movendo a bola
    	this.posicao_x += this.velocidade_x;
    	this.posicao_y += this.velocidade_y;

    	//Colidindo com as bordas
		this.ficandonatela();
		
		
		//Fazendo o player visualizar tela de ganhou
		if(this.pontosplayer >= 10)
		{
			game_1.currentScene = game_1.SCENE.FIMGANHOU;
			
			//Resetando o jogo zerando pontos
			this.reset();					
		}	
		
		//Fazendo o player visualizar tela de perdeu
		if(this.pontosinimigo >= 10)
		{
			game_1.currentScene = game_1.SCENE.FIMPERDEU;
			
			//Resetando o jogo zerando pontos
			this.reset();					
		}	
		
										
    };

    this.draw=function()
    {
    	screen.drawImage(this.image, this.posicao_x, this.posicao_y)
    	  	   		
   		//Pontos player
   		screen.font = "40px Arial";
		screen.fillStyle="#000000";
		screen.fillText("Pontos " + this.pontosplayer, 45, 52); //posicao x e y 
		
		//Pontos Inimigo
		screen.font = "40px Arial";
		screen.fillStyle="#000000";
		screen.fillText("Pontos " + this.pontosinimigo, 605, 52); //posicao x e y  	
    };

	//Colisão para não sair da tela
    this.ficandonatela=function()
    {
    	//saida pela direita
    	if(this.posicao_x < 0)
    	{
    		this.posicao_x = 0;
			//Fazendo bola bater e voltar
			this.velocidade_x *=-1;
			
			//Efeito de som
			this.efeito_sonoro.play();
			
			//Fazendo pontos do inimigo aumentar
			this.pontosinimigo++;
    	}

    	//saida por cima
    	if(this.posicao_y < 0)
    	{
    		this.posicao_y = 0;
			//Fazendo bola bater e voltar
			this.velocidade_y *=-1;
			this.efeito_sonoro.play();
    	}

    	//saida pela esquerda
    	if(this.posicao_x > tamanho_tela_x - this.tamanho_x)
    	{
    		this.posicao_x = tamanho_tela_x - this.tamanho_x;
			//Fazendo bola bater e voltar
			this.velocidade_x *=-1;
			
			//Efeito de som
			this.efeito_sonoro.play();
			
			//Fazendo pontos do player aumentar
			this.pontosplayer++;
    	}

    	//saida por baixo
    	if(this.posicao_y > tamanho_tela_y - this.tamanho_y)
    	{
    		this.posicao_y = tamanho_tela_y - this.tamanho_y;
			//Fazendo bola bater e voltar
			this.velocidade_y *=-1;
			this.efeito_sonoro.play();
    	}
    }

 }