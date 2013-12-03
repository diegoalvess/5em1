//ball.js
function Game1Bola()
{
	//Criando bola
	this.image = new Image();
	this.image.src="imgs/game_1/ball.png";
	this.loaded = false;

	//Propriedades
    this.tamanho_x = 40;
    this.tamanho_y = 40;
    this.posicao_x = 450
    this.posicao_y = 350
    this.velocidade_x = 7;
    this.velocidade_y = 7;
    
    this.reset=function()
	{   
   		
   	};
	
	this.reset();

	//Efeito Sonoro
	this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_1/borda.mp3"
    this.efeito_sonoro.load();
    this.efeito_sonoro.volume = 0.1
    
    this.update=function()
    {
    	//Movendo a bola
    	this.posicao_x += this.velocidade_x;
    	this.posicao_y += this.velocidade_y;

    	//Colidindo com as bordas
		this.ficandonatela();	
    };

    this.draw=function()
    {
    	//desenhando bola
		screen.drawImage(this.image, this.posicao_x, this.posicao_y)
    };

	//Colisão para nao sair da tela
    this.ficandonatela=function()
    {
    	//saida pela direita
    	if(this.posicao_x < 0)
    	{
			//pontos do inimigo
			pontosinimigo++;
			
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
			//pontos do player
			pontosplayer++;
			
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