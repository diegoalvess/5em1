//paleta.js
function Paleta()
{
	this.img = new Image();
	this.img.src="imgs/paleta.png";
	this.loaded = false;
		
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe PALETA" + loaded);
	};
	
	this.tamanho_x = 200;
    this.tamanho_y = 20;
    this.posicao_x = (tela_larg_W - this.tamanho_x)/2;
    this.posicao_y = (tela_larg_H - this.tamanho_y - 2);
    this.velocity_x = 3.5;
    this.velocity_y = 3.5;
    this.velocity_MAX = 15;
    
    this.update=function()
    {
    	if(direita)
    	{
    		this.posicao_x += this.velocity_x;
    	}
    	if(esquerda)
    	{
    		this.posicao_x -= this.velocity_x;
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
 
 