function animacao(file, size_x, size_y, position_x, position_y)
{
	//criando imagem
	this.image = new Image();
	this.image.src=file;
	
	this.visible = true;
	
	//PROPRIEDADES
	this.posicao_x_dst = position_x; 
    this.posicao_y_dst = position_y;
    
    this.escala_x = 1;
    this.escala_y = 1;
    
	this.size_x_src = size_x;
	this.size_y_src = size_y;
	
	this.size_x_dst = this.size_x_src;
	this.size_y_dst = this.size_y_src;
	
	this.position_x_src = 0; 
    this.position_y_src = 0;
    
    this.velocity_x = 0;
    this.velocity_y = 0;
    
	//----------animacao do personagem----------
	
	// coloque aqui o numero de quadros da animacao
	var number_frames_animation = 5;
	//  ||      ||        ||     ||
	this.frames = number_frames_animation;	
	
	//animacao
    this.current_frame = 0;
	// frames por segundo
	this.fps = 12;	
	this.time_per_frame = 1000/this.fps;	
	this.setFPS=function(newFPS)
	{
		this.fps = newFPS;	
		this.time_per_frame = 1000/this.fps;	
	}
	
	this.delta_time = 0;
    this.acumulated_delta_time = 0;	
	this.last_draw_time = 0;	
}

  	this.update=function()
    {
    	 this.frames = number_frames_animation;   	
    };
    
    this.draw=function()
    {	
        if(this.visible)
        screen.drawImage(this.image,
        				 this.size_x_src*this.current_frame,
        			 	 this.position_y_src,
        			 	 this.size_x_src, 
        			 	 this.size_y_src, 
        			 	 this.position_x_dst, 
        			 	 this.position_y_dst, 
        			 	 this.size_x_dst*this.scale_x,
        			 	 this.size_y_dst*this.scale_y);
        			 	 
		
		this.delta_time = Date.now() - this.last_draw_time;
		
		if(this.acumulated_delta_time > this.time_per_frame)
		{
			this.acumulated_delta_time = 0;
			this.current_frame++;
			if(this.current_frame>=this.frames)
			{
				this.current_frame = 0;
			}
		}
		else
		{
			this.acumulated_delta_time += this.delta_time;
		}
		
		this.last_draw_time = Date.now();
		
		
		//desenhando tiro
    	for(var i = 0; i < this.shoots.length; i++)
    	{
    		this.shoots[i].draw();
    	}
		
		
    };

