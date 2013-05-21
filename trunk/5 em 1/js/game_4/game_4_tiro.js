function Game4Tiro(posicao_x, posicao_y, velocidade_x)
{	
	this.imagem = new Image();
	this.imagem.src="imgs/game_4/Tiro.png";
	this.loaded = false;
	this.visible = true;
	
	this.imagem.onload = function()
	{
		loaded = true; 
	};
	
	this.tamanho_x = 10;
    this.tamanho_y = 20;
    this.posicao_x = posicao_x;
    this.posicao_y = posicao_y - this.tamanho_y/2;
    this.velocidade_x = velocidade_x;                    //Math.floor((Math.random()*10)+1);
    this.velocidade_y =  0;                  //-Math.floor((Math.random()*10)+1)
    
    this.dano = 10;
    
    this.update=function()
    {
    	//movendo o tiro
    	this.posicao_x += this.velocidade_x;	

    	this.posicao_y += this.velocidade_y;	
    	
		//Fazendo o tiro sumir ao sair da tela
    	if(this.posicao_x >= tamanho_tela_x)
		{
			this.visible = false;	
		}

    };
    
    this.draw=function()
    {  	
    	if(this.visible)
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)
    };
}