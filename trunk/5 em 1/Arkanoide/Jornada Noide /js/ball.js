//ball.js
function Ball()
{
	this.img = new Image();
	this.img.src="imgs/bola.png";
	this.loaded = false;
	
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe BALL " + loaded);
	};
	
    this.size_x = 40;
    this.size_y = 40;
    this.position_x = (tela_larg_W - this.size_x)/2;
    this.position_y = (tela_larg_H - this.size_y - 20);
    this.velocity_x = 5;
    this.velocity_y = -5;
    this.velocity_MAX = 6;
    
     this.update=function()
    {
    	//MOVENDO A BOLA
    	this.position_x += this.velocity_x;	

    	this.position_y += this.velocity_y;	
    	
    	//COLIDINDO A BOLA
    	if(this.position_x < 50)
		{
			this.velocity_x *=-1;	
		}
		
    	if(this.position_y > 45)
		{
			this.velocity_y *=-1;	
		}
				
    	if(this.position_x > 850 - this.size_x)//TO DO REFACTOR
		{
			this.velocity_x *=-1;	
		}
				
    	if(this.position_y > 0 - this.size_y)//TO DO REFACTOR
		{
			this.velocity_y *=-1;	
		}
	
    };
 
 }