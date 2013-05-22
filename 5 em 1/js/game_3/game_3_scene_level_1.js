function SceneLevel1()
{
	//Player
	var player = new Player("setas");	
	
	//Pause
	var paused = true;
   
    //Colocando a imagem de background
    var background = new Background("Imagens/FundoBackground.png");
	
	//Blocos1
	var blocos1 = new Array();	
	for(var i = 0; i < 10; i++)
    {	
        blocos1[i] = new Bloco("Imagens/bloco1.png");
        blocos1[i].posicao_y = 100        	
        blocos1[i].posicao_x = 200 + (i * (blocos1[i].tamanho_x + 10 ));  	
    }
	
	//Blocos2
	var blocos2 = new Array();
	for(var i = 0; i < 10; i++)
    {	
        blocos2[i] = new Bloco("Imagens/bloco2.png");
        blocos2[i].posicao_y = 160       	
        blocos2[i].posicao_x = 200 + (i * (blocos2[i].tamanho_x + 10 ));  	
    }
	
	//Blocos3
	var blocos3 = new Array();
	for(var i = 0; i < 10; i++)
    {	
        blocos3[i] = new Bloco("Imagens/bloco3.png");
        blocos3[i].posicao_y = 220     	
        blocos3[i].posicao_x = 200 + (i * (blocos3[i].tamanho_x + 10 ));  	
    }
    
    //Blocos4
	var blocos4 = new Array();
	for(var i = 0; i < 10; i++)
    {	
        blocos4[i] = new Bloco("Imagens/bloco4.png");
        blocos4[i].posicao_y = 280      	
        blocos4[i].posicao_x = 200 + (i * (blocos4[i].tamanho_x + 10 ));  	
    }
     
    //Blocos5
	var blocos5 = new Array();
	for(var i = 0; i < 10; i++)
    {	
        blocos5[i] = new Bloco("Imagens/bloco5.png");
        blocos5[i].posicao_y = 340 	
        blocos5[i].posicao_x = 200 + (i * (blocos5[i].tamanho_x + 10 ));  	
    }
	
	//Variaveis das waves(para adicionar uma nova wave crie um novo Array(); e adicione aqui depois!)
    var blocos = blocos1.concat(blocos2, blocos3, blocos4, blocos5)

	
    //Efeito sonoro
    //this.efeito_sonoro = new Audio();
    //this.efeito_sonoro.src = "Sons/Som1.mp3"
    //this.efeito_sonoro.load();
    
    this.update=function()
    {
    	//Pause
    	if(!paused)
    	{
    		return;  	
    	}
		
		//Som
    	//this.efeito_sonoro.play();
    	
    	//Background se movendo
    	background.update();
    	
    	//Player
    	player.update();
    	
		//Inimigo
    	for(var i = 0 ; i < blocos.length; i++)
    	{
    		blocos[i].update();
   		}
   		
   		//Tiro
		for(var i = 0; i < player.Tiros.length ; i++)
    	{
    		player.Tiros[i].update();
    	}
    };
    
    this.draw=function()
    { 	
    	//Desenhando fundo
    	background.draw();
    	
    	//Desenhando player
    	player.draw();
    	
		//Desenhando inimigos
    	for(var i = 0 ; i < blocos.length; i++)
    	{
    		blocos[i].draw();    		 
   		} 
   		
   		//Tiro
   		for(var i = 0; i < player.Tiros.length ; i++)
    	{
    		player.Tiros[i].draw();
    	}
		
    };
    
    this.mouse_down=function(mouse)
    {
    	//currentScene = SCENE.FIMGANHOU;
    	//this.efeito_sonoro.pause();
    };
     
 	 //Tecla desceu
    this.key_down=function(key)
    {    	
		player.key_down(key);
    };
    
    //Tecla subiu
    this.key_up=function(key)
    {
    	player.key_up(key);
	};	
	
	//Função de colisão
	function Collide(x1, y1, w1, h1, x2, y2, w2, h2)
	{
		if((x1+w1<x2) 
			||(x1>x2+w2) 
			||(y1+h1<y2) 
			||(y1>y2+h2)) 
		{
			return false; 
		}
		else	
		{
			return true; 
		}
	}	
}