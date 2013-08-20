function SceneIntro()
{	
	//Background
	this.background = new Image();
	this.background.src="imgs/index/menuindex.png";
	this.loaded = false;		
    
    this.jogo5liberado = false;
    
    this.game5aparecer = false;
    
	//Criando botões
    this.button_game_1 = new Button("imgs/index/button_game_1.png", 159, 75);
    this.button_game_1.position_x = 100;
    this.button_game_1.position_y = 30;
    
    this.button_game_2 = new Button("imgs/index/button_game_2.png", 159, 75);
    this.button_game_2.position_x = 100;
    this.button_game_2.position_y = 120;
        
    this.button_game_3 = new Button("imgs/index/button_game_3.png", 159, 75);
    this.button_game_3.position_x = 100;
    this.button_game_3.position_y = 210;
    
    this.button_game_4 = new Button("imgs/index/button_game_4.png", 159, 75);
    this.button_game_4.position_x = 100;
    this.button_game_4.position_y = 300;
    
    this.button_game_5 = new Button("imgs/index/button_game_5.png", 159, 75);
    this.button_game_5.position_x = 100;
    this.button_game_5.position_y = 400;
    
    //botao 5 pronto pra jogar
    this.button_game_6 = new Button("imgs/index/button_game_5aberto.png", 159, 75);
    this.button_game_6.position_x = 100;
    this.button_game_6.position_y = 400;
            
    this.button_credit = new Button("imgs/index/button_credit.png", 159, 75);
    this.button_credit.position_x = 100;
    this.button_credit.position_y = 500;
    
    //Efeito de som dos botoes
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/index sounds/Efeitomenu.wav"
    this.efeito_sonoro.load();
    this.efeito_sonoro.volume = 1.0
	
	//Efeito de som Background
	this.efeito_sonoro2 = new Audio();
    this.efeito_sonoro2.src = "sounds/index sounds/Background.mp3"
    this.efeito_sonoro2.load();
    this.efeito_sonoro2.volume = 0.8
        
	this.update=function()
   	{
		this.efeito_sonoro2.play();
		
		if(game_1.game1completo == true && game_2.game2completo == true && game_3.game3completo == true && game_4.game4completo == true)
		{
			this.game5aparecer = true;
		}
   	};
   
   	this.draw=function()
	{	
		//Desenhando Fundo
		screen.drawImage(this.background, 0, 0);
			
		//Desenhando Botões
		this.button_credit.draw();
		this.button_game_1.draw();
		this.button_game_2.draw();
		this.button_game_3.draw();
		this.button_game_4.draw();
		this.button_game_6.draw();
		if(game_4.game4completo == false)
		{
		this.button_game_5.draw();
		}
	};
   
   	this.mouse_down=function(mouse)
   	{   		
    	if(this.button_credit.clicked(mouse))
    	{
    		currentScene = SCENE.CREDIT;
    		this.efeito_sonoro.play();		
    	}
    	
    	if(this.button_game_1.clicked(mouse))
    	{
    		currentScene = SCENE.GAME_1;
    		this.efeito_sonoro.play();
			this.efeito_sonoro2.pause();			
    	}

		if(this.button_game_2.clicked(mouse))
    	{
    		currentScene = SCENE.GAME_2;
    		this.efeito_sonoro.play();
			this.efeito_sonoro2.pause();
    	}
    	
    	if(this.button_game_3.clicked(mouse))
    	{
    		currentScene = SCENE.GAME_3;
    		this.efeito_sonoro.play();
			this.efeito_sonoro2.pause();			
    	}
    	
    	if(this.button_game_4.clicked(mouse))
    	{
    		currentScene = SCENE.GAME_4;
    		this.efeito_sonoro.play();
			this.efeito_sonoro2.pause();				
    	}
    	
    	if(this.button_game_5.clicked(mouse) && this.game5aparecer == false)
    	{
    		currentScene = SCENE.GAME_5;
    		this.efeito_sonoro.play();
			this.efeito_sonoro2.pause();				
    	}	
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