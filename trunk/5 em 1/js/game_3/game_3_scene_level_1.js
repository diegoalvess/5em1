function Game3SceneLevel1()
{
	//Player
	this.player = new Player("setas");	
	
	//Pause
	this.paused = true;
   
    //Colocando a imagem de background
    this.background = new Background("imgs/game_3/FundoBackground.png");
    
    //Fazendo inimigos descerem na tela
    this.godownandreversedirection = false;
	
	//Blocos1
	this.blocos1 = new Array();	
	for(var i = 0; i < 10; i++)
    {	
        this.blocos1[i] = new Bloco("imgs/game_3/bloco1.png");
        this.blocos1[i].posicao_y = 100        	
        this.blocos1[i].posicao_x = 200 + (i * (this.blocos1[i].tamanho_x + 10 ));  	
    }
	
	//Blocos2
	this.blocos2 = new Array();
	for(var i = 0; i < 10; i++)
    {	
        this.blocos2[i] = new Bloco("imgs/game_3/bloco2.png");
        this.blocos2[i].posicao_y = 160       	
        this.blocos2[i].posicao_x = 200 + (i * (this.blocos2[i].tamanho_x + 10 ));  	
    }
	
	//Blocos3
	this.blocos3 = new Array();
	for(var i = 0; i < 10; i++)
    {	
        this.blocos3[i] = new Bloco("imgs/game_3/bloco3.png");
        this.blocos3[i].posicao_y = 220     	
        this.blocos3[i].posicao_x = 200 + (i * (this.blocos3[i].tamanho_x + 10 ));  	
    }
    
    //Blocos4
	this.blocos4 = new Array();
	for(var i = 0; i < 10; i++)
    {	
        this.blocos4[i] = new Bloco("imgs/game_3/bloco4.png");
        this.blocos4[i].posicao_y = 280      	
        this.blocos4[i].posicao_x = 200 + (i * (this.blocos4[i].tamanho_x + 10 ));  	
    }
     
    //Blocos5
	this.blocos5 = new Array();
	for(var i = 0; i < 10; i++)
    {	
        this.blocos5[i] = new Bloco("imgs/game_3/bloco5.png");
        this.blocos5[i].posicao_y = 340 	
        this.blocos5[i].posicao_x = 200 + (i * (this.blocos5[i].tamanho_x + 10 ));  	
    }
	
	//Variaveis das waves(para adicionar uma nova wave crie um novo Array(); e adicione aqui depois!)
    var blocos = this.blocos1.concat(this.blocos2, this.blocos3, this.blocos4, this.blocos5)

	
    //Efeito sonoro
    //this.efeito_sonoro = new Audio();
    //this.efeito_sonoro.src = "Sons/Som1.mp3"
    //this.efeito_sonoro.load();
    
    this.update=function()
    {
    	//Pause
    	if(paused)
    	{
    		return;  	
    	}
    	
    	for(var u = 0; u < blocos.length; u++)
    	{
    		
    		if(blocos[u].visible)
    		{   		
    			if(Collide(
    				blocos[u].posicao_x,
    				blocos[u].posicao_y,
    				blocos[u].tamanho_x,
    				blocos[u].tamanho_y,
    				this.player.Tiros.posicao_x,
    				this.player.Tiros.posicao_y,
    				this.player.Tiros.tamanho_x,
    				this.player.Tiros.tamanho_y));
    				{
    					console.log("idsivdsv")
    					blocos[u].visible = false;
    					this.player.Tiros.visible = false
    				}
    	
    		}
    	}
    	//Colidindo com as bordas
		this.batendonatela();
		
		//Som
    	//this.efeito_sonoro.play();
    	
    	//Background se movendo
    	this.background.update();
    	
    	//Player
    	this.player.update();
    	
		//Inimigo
    	for(var i = 0 ; i < blocos.length; i++)
    	{
    		blocos[i].update();
   		}
   		
   		//Tiro
		for(var i = 0; i < this.player.Tiros.length ; i++)
    	{
    		this.player.Tiros[i].update();
    	}
    }
    
    this.draw=function()
    { 	
    	//Desenhando fundo
    	this.background.draw();
    	
    	//Desenhando player
    	this.player.draw();
    	
		//Desenhando inimigos
    	for(var i = 0 ; i < blocos.length; i++)
    	{
    		blocos[i].draw();    		 
   		} 
   		
   		//Tiro
   		for(var i = 0; i < this.player.Tiros.length ; i++)
    	{
    		this.player.Tiros[i].draw();
    	}
		
    }
    
    this.batendonatela=function()
	{
    	for(var i = 0 ; i < blocos.length; i++)
    	{
    		//saida pela esquerda
    		if(blocos[i].posicao_x < 0)
    		{
    		
    			this.godownandreversedirection = true;
    		}
    	
    		//saida pela direita
    		if(blocos[i].posicao_x > tamanho_tela_x - blocos[i].tamanho_x)
    		{
    			
    			this.godownandreversedirection = true;
    		}
    
    	}
    	
    	
			//dizendo o que a variavel de descer e inverter os inimigos vai fazer	
			if(this.godownandreversedirection == true)
			{
				for(var j = 0 ; j < blocos.length; j++)
    			{		
					blocos[j].posicao_y += 8;
			
					if(blocos[j].velocidade_x > 0)
					{   
						//blocos[j].velocidade_x++;
					}
					else
					{
						//blocos[j].velocidade_x--;	
					}
			
					blocos[j].velocidade_x *= -1;
			
					this.godownandreversedirection = false;
    			}

			}    	
	}

    
    this.mouse_down=function(mouse)
    {
    	//currentScene = SCENE.FIMGANHOU;
    	//this.efeito_sonoro.pause();
    };
     
 	 //Tecla desceu
    this.key_down=function(key)
    {    	
		this.player.key_down(key);
    };
    
    //Tecla subiu
    this.key_up=function(key)
    {
    	this.player.key_up(key);
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