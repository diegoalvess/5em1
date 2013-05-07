function Bloco(source, hp)
{
	this.imagem = new Image();
	this.imagem.src= source;
	this.carregada = false;
	this.visible = true;
	this.hp = hp;
	this.pontos = this.hp*2;
		
	//Fazendo inimigos descerem na tela
    var godownandreversedirection = false;
	
	this.imagem.onload = function() 
	{
		carregada = true; 
	};
	
	this.tamanho_x = 50;
	this.tamanho_y = 50;
	this.posicao_x = 100;
	this.posicao_y = 60;
	this.velocidade_x = 5;
	this.velocidade_y = 0;
	
	this.update=function()
	{
		//Fazendo blocos andarem
		this.posicao_y += this.velocidade_y;
		this.posicao_x += this.velocidade_x;
		
		//Colidindo com as bordas
		this.saindodatela();		
	};
	
	this.draw=function()
    {  	
		if(this.visible)
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)
    };
    
    this.saindodatela=function()
    {
    	//saida pela esquerda
    	if(this.posicao_x < 0)
    	{
    		this.posicao_x = 0;
    		godownandreversedirection = true;
    	}
    	
    	//saida pela direita
    	if(this.posicao_x > tela_tamanho_x - this.tamanho_x)
    	{
    		this.posicao_x = tela_tamanho_x - this.tamanho_x;
    		godownandreversedirection = true;
    	}
    

	
	//dizendo o que a variavel de descer e inverter os inimigos vai fazer	
		if(godownandreversedirection == true)
		{					
				if(this.posicao_x > tela_tamanho_x)
				{
					this.velocidade_x+= 1;
				}
				
				
				if(this.posicao_y <= 0)
				{
					
					this.velocidade_x-= 1;
				}
								
				if(godownandreversedirection = true)
				{
					this.posicao_y += 20;
					this.velocidade_x *=-1;
				}	
			
				godownandreversedirection = false;
		}
	
  	};

  
}