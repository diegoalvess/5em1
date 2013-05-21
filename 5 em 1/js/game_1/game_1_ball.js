//ball.js
function Game1Bola()
{
	//Pontos
	var pontos_direita = 0;
	var pontos_esquerda = 0;

	this.image = new Image();
	this.image.src="imgs/game_1/ball.png";
	this.loaded = false;

    this.size_x = 40;
    this.size_y = 40;
    this.position_x = 40
    this.position_y = 40
    this.velocity_x = 5;
    this.velocity_y = 5;

    this.update=function()
    {
    	//Movendo a bola
    	this.position_x += this.velocity_x;
    	this.position_y += this.velocity_y;

    	//Colidindo com as bordas
		this.saindodatela();
    };

    this.draw=function()
    {
    	screen.drawImage(this.image, this.position_x, this.position_y)
    };

	//Colisão para não sair da tela
    this.saindodatela=function()
    {
    	//saida pela direita
    	if(this.position_x < 0)
    	{
    		this.position_x = 0;
			//Fazendo bola bater e voltar
			this.velocity_x *=-1;
    	}

    	//saida por cima
    	if(this.position_y < 0)
    	{
    		this.position_y = 0;
			//Fazendo bola bater e voltar
			this.velocity_y *=-1;
    	}

    	//saida pela esquerda
    	if(this.position_x > tela_tamanho_x - this.tamanho_x)
    	{
    		this.position_x = tela_tamanho_x - this.tamanho_x;
			//Fazendo bola bater e voltar
			this.velocity_x *=-1;
    	}

    	//saida por baixo
    	if(this.position_y > tela_tamanho_y - this.tamanho_y)
    	{
    		this.position_y = tela_tamanho_y- this.tamanho_y;
			//Fazendo bola bater e voltar
			this.velocity_y *=-1;
    	}
    }

 }