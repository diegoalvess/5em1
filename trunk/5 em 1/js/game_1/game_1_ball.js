//ball.js
function Game1Bola()
{
	//Pontos
	var pontos_direita = 0;
	var pontos_esquerda = 0;

	this.image = new Image();
	this.image.src="imgs/game_1/ball.png";
	this.loaded = false;

    this.tamanho_x = 40;
    this.tamanho_y = 40;
    this.posicao_x = 40
    this.posicao_y = 40
    this.velocidade_x = 5;
    this.velocidade_y = 5;

    this.update=function()
    {
    	//Movendo a bola
    	this.posicao_x += this.velocidade_x;
    	this.posicao_y += this.velocidade_y;

    	//Colidindo com as bordas
		this.saindodatela();
    };

    this.draw=function()
    {
    	screen.drawImage(this.image, this.posicao_x, this.posicao_y)
    };

	//Colisão para não sair da tela
    this.saindodatela=function()
    {
    	//saida pela direita
    	if(this.posicao_x < 0)
    	{
    		this.posicao_x = 0;
			//Fazendo bola bater e voltar
			this.velocidade_x *=-1;
    	}

    	//saida por cima
    	if(this.posicao_y < 0)
    	{
    		this.posicao_y = 0;
			//Fazendo bola bater e voltar
			this.velocidade_y *=-1;
    	}

    	//saida pela esquerda
    	if(this.posicao_x > tamanho_tela_x - this.size_x)
    	{
    		this.posicao_x = tamanho_tela_x - this.size_x;
			//Fazendo bola bater e voltar
			this.velocidade_x *=-1;
    	}

    	//saida por baixo
    	if(this.posicao_y > tamanho_tela_y - this.tamanho_y)
    	{
    		this.posicao_y = tamanho_tela_y - this.tamanho_y;
			//Fazendo bola bater e voltar
			this.velocidade_y *=-1;
    	}
    }

 }