function SceneLevel1()
{
	//Player
	var player = new Player("setas");	
		
	//Blocos
	var blocos1 = new Array();	
	for(var i = 0; i < 10; i++)
    {	
        blocos1[i] = new Bloco("imagens/bloco.png");
        blocos1[i].posicao_y = 100        	
        blocos1[i].posicao_x = 200 + (i * (blocos1[i].tamanho_w + 10 ));  	
    }
	
	var blocos2 = new Array();
	for(var i = 0; i < 10; i++)
    {	
        blocos2[i] = new Bloco("imagens/bloco.png");
        blocos2[i].posicao_y = 100        	
        blocos2[i].posicao_x = 200 + (i * (blocos2[i].tamanho_w + 10 ));  	
    }
	
	var blocos3 = new Array();
	for(var i = 0; i < 10; i++)
    {	
        blocos3[i] = new Bloco("imagens/bloco.png");
        blocos3[i].posicao_y = 100        	
        blocos3[i].posicao_x = 200 + (i * (blocos3[i].tamanho_w + 10 ));  	
    }
	
	//Variaveis das waves(para adicionar uma nova wave crie um novo Array(); e adicione aqui depois!)
    var blocos = blocos1.concat(blocos2, blocos3)//wave4, wave5, wave6, wave7, wave8, wave9, wave10);

	//Pause
	var paused = true;
   
    //Colocando a imagem de background
    var background = new Background("Imagens/FundoBackground.png");
	
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
		if((x1+w1<x2) //SE RECT1 ESQUERDO RECT2//
			||(x1>x2+w2) //SE RECT1 DIREITO RECT2//
			||(y1+h1<y2) //SE RECT1 CIMA RECT2//
			||(y1>y2+h2)) //SE RECT1 BAIXO RECT2//
		{
			return false; //NÃO COLIDIU//
		}
		else	
		{
			return true; //COLIDIU//
		}
	}	
}