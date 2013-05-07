function Cena_Intro()
{
	this.fundo = new Image();
	this.fundo.src="imgs/fundoindex.png";//IMAGEM DE FUNDO//
	this.loaded = false;
		
    
    this.botao_credito = new Botao("imgs/botaocredito.png", 196, 51);
    this.botao_credito.posicao_x = 512;
    this.botao_credito.posicao_y = 700;
    

    this.botao_shooter = new Botao("imgs/botaoshooter.png", 295, 82);
    this.botao_shooter.posicao_x = 512;
    this.botao_shooter = new Botao("imgs/botaoshooter.png", 295, 82);
    this.botao_shooter.posicao_x = 460;
    this.botao_shooter.posicao_y = 600;
    
    //this.botao_Pong = new Botao_Pong;
    
    this.botao_arkanoid = new Botao("imgs/botaoarkanoid.png", 295, 82);
    this.botao_arkanoid.posicao_x = 460;
    this.botao_arkanoid.posicao_y = 500;
    
    //this.botao_Invaders = new Botao
    //this.botao_Shooter = new Botao	
	
		
	
	
	this.update=function()
   	{
   	
   	};
   
   	this.draw=function()
	{
		//DESENHO DO MENU DO JOGO// 
		screen.drawImage(this.fundo, 0, 0);
		
		//screen.font = "20px Comic Sans MS";
		//screen.fillStyle="#FFFFFF";
		//screen.fillText("MENU", 20, 20);
		
		//DESENHO DOS BOTOES//
    	this.botao_credito.draw();
    	//this.botao_Pong.draw();
    	this.botao_arkanoid.draw();
    	//this.botao_Invaders.draw();
    	this.botao_shooter.draw();
		
		
		
	};
   
   	this.mouse_down=function(mouse)
   	{   		
    	
    	if(this.botao_credito.clicou(mouse))
    	{
    		console.log("AAAAAAAA")
    		cena_atual = CENAS.CREDITOS;		
    	}
    	
    	if(this.botao_arkanoid.clicou(mouse))
    	{
    		cena_atual = CENAS.ARKANOID;
    	}
    	
    	/*if(this.botao_pong.clicou(mouse))
    	{
    		Cena_atual = CENAS.PONG;
    	}
    		
    	if(this.botao_invaders.clicou(mouse))
    	{
    		Cena_atual = CENAS.INVADERS;
    	}*/
    	
    	if(this.botao_shooter.clicou(mouse))
    	{
    		console.log("AAAAAAAA")
    		cena_atual = CENAS.SHOOTER;
    	}
    	
    };
   
   	this.key_down=function(key)
   	{
   		
   	};
   	
   	this.mouse_up=function(mouse)
  	{
  		console.log("INTRO mouse X " + mouse.x + " mouse Y " + mouse.y );
  	};
  
  	this.key_up=function(key)
  	{
  		console.log("INTRO keyCode " + key.keyCode );
  	};
   
}