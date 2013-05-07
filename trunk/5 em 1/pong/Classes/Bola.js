//ball.js
function Bola()
{
	//Pontos
	var pontos_direita = 0;
	var pontos_esquerda = 0;

	this.imagem = new Image();
	this.imagem.src="Imagens/bola.png";
	this.loaded = false;

    this.tamanho_x = 40;
    this.tamanho_y = 40;
    this.posicao_x = tela_tamanho_x/2
    this.posicao_y = tela_tamanho_y/2
    this.velocidade_x = 5;
    this.velocidade_y = 5;

	//Som de colisão
	this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "Sons/borda.mp3"
    this.efeito_sonoro.load();
	
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
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)
    };

	//Colisão para não sair da tela
    this.saindodatela=function()
    {
    	//saida pela direita
    	if(this.posicao_x < 0)
    	{
    		this.posicao_x = 0;
			
			//Efeito de som
			this.efeito_sonoro.play();
			
			//Fazendo bola bater e voltar
			this.velocidade_x *=-1;
    	}

    	//saida por cima
    	if(this.posicao_y < 0)
    	{
    		this.posicao_y = 0;
			
			//Efeito de som
			this.efeito_sonoro.play();
			
			//Fazendo bola bater e voltar
			this.velocidade_y *=-1;
    	}

    	//saida pela esquerda
    	if(this.posicao_x > tela_tamanho_x - this.tamanho_x)
    	{
    		this.posicao_x = tela_tamanho_x - this.tamanho_x;
			
			//Efeito de som
			this.efeito_sonoro.play();
			
			//Fazendo bola bater e voltar
			this.velocidade_x *=-1;
    	}

    	//saida por baixo
    	if(this.posicao_y > tela_tamanho_y - this.tamanho_y)
    	{
    		this.posicao_y = tela_tamanho_y- this.tamanho_y;
			
			//Efeito de som
			this.efeito_sonoro.play();
			
			//Fazendo bola bater e voltar
			this.velocidade_y *=-1;
    	}
    }

 }