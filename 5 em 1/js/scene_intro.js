function SceneIntro()
{	

	this.background = new Image();
	this.background.src="imgs/menuindex.png";
	this.loaded = false;		
    
    this.button_game_1 = new Button("imgs/button_game_1.png", 159, 75);
    this.button_game_1.position_x = 150;
    this.button_game_1.position_y = 30;
    
    this.button_game_2 = new Button("imgs/button_game_2.png", 159, 75);
    this.button_game_2.position_x = 150;
    this.button_game_2.position_y = 120;
        
    this.button_game_3 = new Button("imgs/button_game_3.png", 159, 75);
    this.button_game_3.position_x = 150;
    this.button_game_3.position_y = 210;
    
    this.button_game_4 = new Button("imgs/button_game_4.png", 159, 75);
    this.button_game_4.position_x = 150;
    this.button_game_4.position_y = 300;
    
    this.button_game_5 = new Button("imgs/button_game_5.png", 159, 75);
    this.button_game_5.position_x = 150;
    this.button_game_5.position_y = 400;
            
    this.button_credit = new Button("imgs/button_credit.png", 159, 75);
    this.button_credit.position_x = 150;
    this.button_credit.position_y = 500;
    
	this.update=function()
   	{

   	};
   
   	this.draw=function()
	{
		screen.drawImage(this.background, 0, 0);
			
		this.button_credit.draw();
		this.button_game_1.draw();
		this.button_game_2.draw();
		this.button_game_3.draw();
		this.button_game_4.draw();
		//this.button_game_5.draw();
	};
   
   	this.mouse_down=function(mouse)
   	{   		
    	
    	if(this.button_credit.clicked(mouse))
    	{
    		currentScene = SCENE.CREDIT;		
    	}
    	
    	if(this.button_game_1.clicked(mouse))
    	{
    		currentScene = SCENE.GAME_1;		
    	}

		if(this.button_game_2.clicked(mouse))
    	{
    		currentScene = SCENE.GAME_2;		
    	}
    	
    	if(this.button_game_3.clicked(mouse))
    	{
    		currentScene = SCENE.GAME_3;		
    	}
    	
    	if(this.button_game_4.clicked(mouse))
    	{
    		currentScene = SCENE.GAME_4;		
    	}
    	
    	/*if(this.button_game_5.clicked(mouse))
    	{
    		currentScene = SCENE.GAME_5;		
    	}*/
    	
    };
   
   	this.key_down=function(key)
   	{
   		
   	};
   	
   	this.mouse_up=function(mouse)
  	{

  	};
  
  	this.key_up=function(key)
  	{

  	};
  	
   
}