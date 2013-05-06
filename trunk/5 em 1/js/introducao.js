function Cena_Intro()
{
	this.fundo = new Image();
	this.fundo.src="imgs/Menu.png";//IMAGEM DE FUNDO//
	this.loaded = false;
	
	this.tamanho_x = 1336;
    this.tamanho_y = 768;
    this.posicao_x = 0;
    this.posicao_y = 0;
	
    this.botao_Pong = new Botao_Pong;
    this.botao_credito = new Botao_Creditos;
    this.botao_Arkanoid = new Botao_Arkanoid;
    this.botao_Invaders = new Botao_Invaders;
    this.botao_Shooter = new Botao_Shooter;
	
	
		
	this.onload = function()
	{
		loaded = true; 
	};
	
	this.update=function()
   	{
   	
   	};
   
   	this.draw=function()
	{
		//DESENHO DO MENU DO JOGO// 
		screen.drawImage(this.fundo, 0, 0);
		screen.font = "20px Comic Sans MS";
		screen.fillStyle="#FFFFFF";
		screen.fillText("MENU", 20, 20);
		
		//DESENHO DOS BOTOES//
    	this.botao_Pong.draw();
    	this.botao_credito.draw();
    	this.botao_Arkanoid.draw();
    	this.botao_Invaders.draw();
    	this.botao_Shooter.draw();
		
		
		
	};
   
   	this.mouse_down=function(mouse)
   	{
   		if(this.botao_Pong.clicou(mouse))
    	{
    		Cena_atual = CENAS.JOGO;
    	}
    	
    	if(this.botao_credito.clicou(mouse))
    	{
    		Cena_atual = CENAS.CREDITOS;		
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