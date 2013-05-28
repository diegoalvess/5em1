function Game3SceneLevel1()
{
	this.reset=function()
 	{
 		
	//Player
	this.player = new Game3Player("setas");	
	
	//Pause
	this.paused = true;
   
    //Colocando a imagem de background
    this.background = new Game3Background("imgs/game_3/FundoBackground.png");
    
    //Fazendo inimigos descerem na tela
    this.godownandreversedirection = false;
    
    this.pontos = 0;
    
    this.vidas = 3;
    
    this.Tiros_inimigos = new Array();
	
	//Blocos1
	this.blocos1 = new Array();	
	for(var i = 0; i < 10; i++)
    {	
        this.blocos1[i] = new Bloco("imgs/game_3/bloco1.png",5 );
        this.blocos1[i].posicao_y = 100        	
        this.blocos1[i].posicao_x = 200 + (i * (this.blocos1[i].tamanho_x + 10 ));  	
    }
	
	//Blocos2
	this.blocos2 = new Array();
	for(var i = 0; i < 10; i++)
    {	
        this.blocos2[i] = new Bloco("imgs/game_3/bloco2.png",4);
        this.blocos2[i].posicao_y = 160       	
        this.blocos2[i].posicao_x = 200 + (i * (this.blocos2[i].tamanho_x + 10 ));  	
    }
	
	//Blocos3
	this.blocos3 = new Array();
	for(var i = 0; i < 10; i++)
    {	
        this.blocos3[i] = new Bloco("imgs/game_3/bloco3.png",3);
        this.blocos3[i].posicao_y = 220     	
        this.blocos3[i].posicao_x = 200 + (i * (this.blocos3[i].tamanho_x + 10 ));  	
    }
    
    //Blocos4
	this.blocos4 = new Array();
	for(var i = 0; i < 10; i++)
    {	
        this.blocos4[i] = new Bloco("imgs/game_3/bloco4.png",2);
        this.blocos4[i].posicao_y = 280      	
        this.blocos4[i].posicao_x = 200 + (i * (this.blocos4[i].tamanho_x + 10 ));  	
    }
     
    //Blocos5
	this.blocos5 = new Array();
	for(var i = 0; i < 10; i++)
    {	
        this.blocos5[i] = new Bloco("imgs/game_3/bloco5.png",1);
        this.blocos5[i].posicao_y = 340 	
        this.blocos5[i].posicao_x = 200 + (i * (this.blocos5[i].tamanho_x + 10 ));  	
    }
	
	//Variaveis das waves(para adicionar uma nova wave crie um novo Array(); e adicione aqui depois!)
      this.blocos = this.blocos1.concat(this.blocos2, this.blocos3, this.blocos4, this.blocos5)

	};
    
 	
 	this.reset();
 	
    this.update=function()
    {
    	//Pause
    	if(paused)
    	{
    		return;  	
    	}
    	
    	for(var i = 0; i < this.blocos.length ; i++)
    	{
    		if(Math.random()<  this.blocos[i].chancetiro)
    		{
    			this.Tiros_inimigos.push(new Game3Tiro("imgs/game_3/tiroup.png", this.blocos[i].posicao_x +  + this.blocos[i].tamanho_x/2, this.blocos[i].posicao_y, 1));
    		}

    	}
	
	
		//Tiros inimigos
    	for(var i = 0; i < this.Tiros_inimigos.length ; i++)
    	{
    		this.Tiros_inimigos[i].update();
    	}
		//tiros do player
		for(var i = 0; i < this.player.tiros.length ; i++)
    	{
    		this.player.tiros[i].update();
    	}

		//colisao dos tiros com os blocos
    	for(var u = 0; u < this.blocos.length; u++)
    	{    		
    		for(var a = 0; a < this.player.tiros.length ; a++)
			{
			    		
     		if(this.blocos[u].visible&&this.player.tiros[a].visible)
    		{   		
    			if(Collide(		
    				this.player.tiros[a].posicao_x,
    				this.player.tiros[a].posicao_y,
    				this.player.tiros[a].tamanho_x,
    				this.player.tiros[a].tamanho_y,
    				this.blocos[u].posicao_x,
    				this.blocos[u].posicao_y,
    				this.blocos[u].tamanho_x,
    				this.blocos[u].tamanho_y
    				))
    				{	//bloco perdendo hp e sumindo
    					this.blocos[u].hp--;
    					if(this.blocos[u].hp <= 0)
    					{
    						this.blocos[u].visible = false;
    						this.pontos++ ;
    					}
    					
 						
    					this.player.tiros[a].visible = false
    					   					  
    				}
    	
    			}
    		
			}
    	}
    	//tiro do inimigo coledindo com o player
    	for(var j = 0; j < this.Tiros_inimigos.length; j++)
		{
			if(this.player.visible&&this.Tiros_inimigos[j].visible)
			{	
				if(Collide(
        			this.Tiros_inimigos[j].posicao_x,
        			this.Tiros_inimigos[j].posicao_y,
        			this.Tiros_inimigos[j].tamanho_x,
        			this.Tiros_inimigos[j].tamanho_y,
        			this.player.posicao_x,
        			this.player.posicao_y,
        			this.player.tamanho_x,
        			this.player.tamanho_y))
        			{
        				this.Tiros_inimigos[j].visible = false;
        				this.vidas--;
        				if(this.vidas == 0)
        				{
        					game_3.currentScene = game_3.SCENE.FIMPERDEU;
        				}
        			}

    	
    	
			}
		}
		
		if(this.pontos == 50)
		{
			game_3.currentScene = game_3.SCENE.FIMGANHOU;
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
    	for(var i = 0 ; i < this.blocos.length; i++)
    	{
    		this.blocos[i].update();
   		}
    }
    
    this.draw=function()
    { 	
    	//Desenhando fundo
    	this.background.draw();
    	
    	//Desenhando player
    	this.player.draw();
    	
		//Desenhando inimigos
    	for(var i = 0 ; i < this.blocos.length; i++)
    	{
    		this.blocos[i].draw();    		 
   		} 
   		
		//Desenhando Tiros dos inimigos
    	for(var i = 0; i < this.Tiros_inimigos.length ; i++)
    	{
    		this.Tiros_inimigos[i].draw();
    	}
   		
   		//Tiro
   		for(var i = 0; i < this.player.tiros.length ; i++)
    	{
    		this.player.tiros[i].draw();
    	}
		
		
		 screen.font = "45px Arial";
        screen.fillStyle="#FFFFFF";
        screen.fillText(" 0000" + this.pontos, 120, 40);
        
         screen.font = "25px Arial";
        screen.fillStyle="#FFFFFF";
        screen.fillText("" + this.vidas, 767.5, 26);
    
    }
    
    this.batendonatela=function()
	{
    	for(var i = 0 ; i < this.blocos.length; i++)
    	{
    		//saida pela esquerda
    		if(this.blocos[i].posicao_x < 0&& this.blocos[i].visible)
    		{
    		
    			this.godownandreversedirection = true;
    		}
    	
    		//saida pela direita
    		if(this.blocos[i].posicao_x > tamanho_tela_x - this.blocos[i].tamanho_x&&this.blocos[i].visible)
    		{
    			
    			this.godownandreversedirection = true;
    		}
    
    	}
    	
			//dizendo o que a variavel de descer e inverter os inimigos vai fazer	
			if(this.godownandreversedirection == true)
			{
				for(var j = 0 ; j < this.blocos.length; j++)
    			{		
					this.blocos[j].posicao_y += 20;
			
					if(this.blocos[j].velocidade_x > 0)
					{   
						//blocos[j].velocidade_x++;
					}
					else
					{
						//blocos[j].velocidade_x--;	
					}
			
					this.blocos[j].velocidade_x *= -1;
			
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
}