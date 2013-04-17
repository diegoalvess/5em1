//ball.js
function Bola()
{
	this.imagem = new Image();
	this.imagem.src="Imagens/bola.png";
	this.loaded = false;
	
    this.tamanho_x = 40;
    this.tamanho_y = 40;
    this.posicao_x = (tela_larg_W - this.size_x)/2;
    this.position_y = (tela_larg_H - this.size_y - 20);
    this.velocidade_x = 5;
    this.velocidade_y = -5;
    
     this.update=function()
    {
    	//MOVENDO A BOLA
    	this.posicao_x += this.velocidade_x;	

    	this.posicao_y += this.velocidade_y;	
    	
    	//COLIDINDO A BOLA
    	if(this.posicao_x < 50)
		{
			this.velocidade_x *=-1;	
		}
		
    	if(this.position_y > 45)
		{
			this.velocidade_y *=-1;	
		}
				
    	if(this.posicao_x > 850 - this.tamanho_x)//TO DO REFACTOR
		{
			this.velocidade_x *=-1;	
		}
				
    	if(this.posicao_y > 0 - this.tamanho_y)//TO DO REFACTOR
		{
			this.velocidade_y *=-1;	
		}
    };
 }