function Cena_Intro()
{
	this.fundo = new Image();
	this.fundo.src="imgs/fundo.png";//IMAGEM DE FUNDO//
	this.loaded = false;
		
    
    this.botao_credito = new Botao("imgs/botaocredito.png", 196, 51);
    this.botao_credito.posicao_x = 512;
    this.botao_credito.posicao_y = 700;
    
    //this.botao_Pong = new Botao_Pong;
    //this.botao_Arkanoid = new Botao_Arkanoid;
    //this.botao_Invaders = new Botao_Invaders;
    //this.botao_Shooter = new Botao_Shooter;	
	
		
	
	
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
    	//this.botao_Arkanoid.draw();
    	//this.botao_Invaders.draw();
    	//this.botao_Shooter.draw();
		
		
		
	};
   
   	this.mouse_down=function(mouse)
   	{   		
    	
    	if(this.botao_credito.clicou(mouse))
    	{
    		cena_atual = CENAS.CREDITOS;		
    	}
    	
    	/*if(this.botao_Pong.clicou(mouse))
    	{
    		Cena_atual = CENAS.JOGO;
    	}
    	
    	if(this.botao_Arkanoid.clicou(mouse))
    	{
    		Cena_atual = CENAS.JOGO1;
    	}
    	
    	if(this.botao_Invaders.clicou(mouse))
    	{
    		Cena_atual = CENAS.JOGO2;
    	}
    	
    	if(this.botao_Shooter.clicou(mouse))
    	{
    		Cena_atual = CENAS.JOGO3;
    	}*/
    	
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