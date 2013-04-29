function SceneLevel1()
{
	//Player
	var player = new Paleta("setas");	
	
	//Inimigo
	var inimigo = new PaletaInimigo();
	
	//Bola
	var bola = new Bola();
	
	//Pause
	var paused = true;
   
    //Colocando a imagem de background
    var background = new Background("Imagens/FundoBackground.png");
	
    //Efeito sonoro
    //this.efeito_sonoro = new Audio();
    //this.efeito_sonoro.src = "Sons/Som1.mp3"
    //this.efeito_sonoro.load();
    
	//Array de blocos
	//Blocos1 - blocos do lado do player
	var bloco1 = new Array();
	for(var i = 0 ; i < 2; i++) 
    {
    	bloco1[i] = new Bloco("Imagens/Bloco.png");
    	bloco1[i].posicao_x = 150;
    	bloco1[i].posicao_y = tela_tamanho_y/10 + (i * 500); //numero depois de * espacamento entre os inimigos
    }
	
	//Blocos2 - blocos do lado do inimigo
	var bloco2 = new Array();
	for(var i = 0 ; i < 2; i++) 
    {
    	bloco2[i] = new Bloco("Imagens/Bloco.png");
    	bloco2[i].posicao_x = 1000;
    	bloco2[i].posicao_y = tela_tamanho_y/10 + (i * 500); //numero depois de * espacamento entre os inimigos
    }
	
	//Bloco3 - blocos das laterais
	var bloco3 = new Array();
	for(var i = 0 ; i < 2; i++) 
    {
    	bloco3[i] = new Bloco("Imagens/Bloco.png");
    	bloco3[i].posicao_x = tela_tamanho_x/2;
    	bloco3[i].posicao_y = tela_tamanho_y/10 + (i * 500); //numero depois de * espacamento entre os inimigos
    }
	
	//Bloco4 - blocos centrais
	var bloco4 = new Array();
	for(var i = 0 ; i < 2; i++) 
    {
    	bloco4[i] = new Bloco("Imagens/Bloco.png");
    	bloco4[i].posicao_x = tela_tamanho_x/2;
    	bloco4[i].posicao_y = (tela_tamanho_y/2-50) + (i * 0); //numero depois de * espacamento entre os inimigos
    }
	
	//Variaveis das waves(para adicionar uma nova wave crie um novo Array(); e adicione aqui depois!)
	var blocos = bloco1.concat(bloco2, bloco3, bloco4);
	
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
    	inimigo.update();
    	
    	//Bola
    	bola.update();
		
		//Bloco
		for(var i = 0 ; i < blocos.length; i++)
    	{
    		blocos[i].update();
   		}
		
		//Paleta Inimigo Se movimentando de acordo com a bola
		if (bola.posicao_y > inimigo.posicao_y )
		{
			inimigo.posicao_y += inimigo.velocidade_y;
		}
		
		else	
		{
			inimigo.posicao_y -= inimigo.velocidade_y;
		}
		
		
		//Fazendo colis�o da bola com a paleta player
		if( Collide( bola.posicao_x,
					bola.posicao_y,
					bola.tamanho_x,
					bola.tamanho_y,
					player.posicao_x,
					player.posicao_y,
					player.tamanho_x,
					player.tamanho_y ) ) //se a bola colidiu com o player
				{
					//Aumentar velocidade ao bater na paleta? Se sim, retire o coment�rio abaixo
					//bola.velocidade_x ++;
					bola.velocidade_x *= -1;
				}
		
    	//Fazendo colis�o da bola com a paleta Inimigo
		if( Collide( bola.posicao_x,
					bola.posicao_y,
					bola.tamanho_x,
					bola.tamanho_y,
					inimigo.posicao_x,
					inimigo.posicao_y,
					inimigo.tamanho_x,
					inimigo.tamanho_y ) ) //se a bola colidiu com o inimigo
				{
					//Aumentar velocidade ao bater na paleta? Se sim, retire o coment�rio abaixo
					//bola.velocidade_x ++;
					bola.velocidade_x *= -1;
				}
		
		//Fazendo colis�o da bola com os blocos
		if(blocos[i])
		{
			if( Collide( bola.posicao_x,
						bola.posicao_y,
						bola.tamanho_x,
						bola.tamanho_y,
						blocos[i].posicao_x,
						blocos[i].posicao_y,
						blocos[i].tamanho_x,
						blocos[i].tamanho_y ) ) //se a bola colidiu com o bloco
					{
						//Aumentar velocidade ao bater na paleta? Se sim, retire o coment�rio abaixo
						//bola.velocidade_x ++;
						bola.velocidade_x *= -1;
					}
		}
    };
    
    this.draw=function()
    { 	
    	//Desenhando fundo
    	background.draw();
    	
    	//Desenhando player
    	player.draw();
    	
    	//Desenhando inimigo
    	inimigo.draw();
    	
    	//Desenhando bola
    	bola.draw();
		  	
		//Desenhando bloco
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
	
	//Fun��o de colis�o
	function Collide(x1, y1, w1, h1, x2, y2, w2, h2)
	{
		if((x1+w1<x2) //SE RECT1 ESQUERDO RECT2//
			||(x1>x2+w2) //SE RECT1 DIREITO RECT2//
			||(y1+h1<y2) //SE RECT1 CIMA RECT2//
			||(y1>y2+h2)) //SE RECT1 BAIXO RECT2//
		{
			return false; //N�O COLIDIU//
		}
		else	
		{
			return true; //COLIDIU//
		}
	}	
}