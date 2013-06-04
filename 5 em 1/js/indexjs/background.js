function Background(file)
{
	this.image = new Image();
	this.image.src = file;
	this.loaded = false;
	this.visible = true;
		
	this.imagem.onload = function()
	{
		loaded = true; 
	};
	
	this.size_x = 800;
    this.size_Y = 600;
    this.position_x = 0;
    this.position_Y = 0;
    this.velocity_x = 0;
    this.velocity_y = 0;
    
    this.update=function()
    {
     	
    };
    
    
    this.draw=function()
    {
    	if(this.visible)
    	screen.drawImage(this.image, this.position_x, this.position_y);
    };

 }