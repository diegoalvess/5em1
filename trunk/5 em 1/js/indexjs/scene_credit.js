function SceneCredit()
{
	this.background = new Image();
	this.background.src="imgs/menucreditos.png";
	this.loaded = false;		
	
	//Botão back
    this.button_back = new Button("imgs/button_back.png", 160, 75);
    this.button_back.position_x = 320;
    this.button_back.position_y = 520;
    
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