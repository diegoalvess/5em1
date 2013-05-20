function SceneCredit()
{
	this.background = new Image();
	this.background.src="imgs/menucreditos.png";
	this.loaded = false;		
	
    this.button_back = new Button("imgs/button_back.png", 70, 70);
    this.button_back.position_x = 500;
    this.button_back.position_y = 500;
    
	this.update=function()
   	{
   	
   	};
   
   	this.draw=function()
   	{
   		screen.drawImage(this.background, 0, 0);   		
   		this.button_back.draw();  				
		
   	};
   
   
   	this.mouse_down=function(mouse)
   	{
   		if(this.button_back.clicked(mouse))
    	{
    		currentScene = SCENE.INTRO;
    	}
   	};
   
   	this.key_down=function(key)
   
   	{
   		
   	};
   
}