//Inimigo.js
function PaletaInimigo()
{
	this.imagem = new Image();
	this.imagem.src="Imagens/paletainimigo.png";
	this.loaded = false;
	
	this.tamanho_x = 120;
    this.tamanho_y = 40;
    this.posicao_x = 1150
    this.posicao_y = 400
    this.velocidade_x = 3.5;
    this.velocidade_y = 3.5;
    
    this.update=function()
    {
    	/*
    	//Indo para direita
    	if(direita)
    	{
    		this.posicao_x += this.velocidade_x;
    	}
    	
    	//Indo para esquerda
    	if(esquerda)
    	{
    		this.posicao_x -= this.velocidade_x;
    	}
    	
     	//MANTENDO PALETA PRETA NO CAMPO
      	if(this.posicao_x < 50) 
       	{
      		this.posicao_x = 50;
       	}
        
       	if(this.posicao_x > 850 - this.tamanho_x)
       	{
       		this.posicao_x = 850 - this.tamanho_x;
        }
        */
    };
    
    this.draw=function()
    {  	
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)
    };
    
}