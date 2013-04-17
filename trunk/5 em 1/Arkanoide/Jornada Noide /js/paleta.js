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
	
	this.size_x = 200;
    this.size_y = 20;
    this.position_x = (tela_larg_W - this.size_x)/2;
    this.position_y = (tela_larg_H - this.size_y - 2);
    this.velocity_x = 3.5;
    this.velocity_y = 3.5;
    this.velocity_MAX = 15;
    
    this.update=function()
    {
    	if(direita)
    	{
    		this.position_x += this.velocity_x;
    	}
    	if(esquerda)
    	{
    		this.position_x -= this.velocity_x;
    	}
    
     //MANTENDO PALETA PRETA NO CAMPO
      	if(this.position_x < 50) 
       	{
      		this.position_x = 50;
       	}
             	
  
       	if(this.position_x > 850 - this.size_x)
       	{
       		this.position_x = 850 - this.size_x;
        }
    
       
    };
 
 }
 
 