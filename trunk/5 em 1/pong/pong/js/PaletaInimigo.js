//Inimigo.js
function PaletaInimigo()
{
	this.imagem = new Image();
	this.imagem.src="Imagens/paleta.png";
	this.loaded = false;
	
	this.posicao_x = 200;
    this.posicao_y = 20;
    this.posicao_x = (tela_larg_W - this.tamanho_x)/2;
    this.posicao_y = (tela_larg_H - this.tamanho_y - 2);
    this.velocidade_x = 3.5;
    this.velocidade_y = 3.5;
    
    this.update=function()
    {
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
    };
}