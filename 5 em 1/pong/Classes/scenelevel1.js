function SceneLevel1()
{
	//Player
	var player = new Paleta("setas");	
	
	//Inimigo
	var inimigo = new PaletaInimigo();
	
	//Bola
	var bola = new Bola();
	
	//Blocos
	var bloco = new Bloco();
	
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
    	inimigo.update();
    	
    	//Bola
    	bola.update();
		
		//Bloco
		bloco.update();
		
		//Paleta Inimigo Se movimentando de acordo com a bola
		if (bola.posicao_y > inimigo.posicao_y )
		{
			inimigo.posicao_y += inimigo.velocidade_y;
		}
		
		else	
		{
			inimigo.posicao_y -= inimigo.velocidade_y;
		}
		
		
		//Fazendo colisão da bola com a paleta player
		if( Collide( bola.posicao_x,
					bola.posicao_y,
					bola.tamanho_x,
					bola.tamanho_y,
					player.posicao_x,
					player.posicao_y,
					player.tamanho_x,
					player.tamanho_y ) ) //se a bola colidiu com o player
				{
					//Aumentar velocidade ao bater na paleta? Se sim, retire o comentário abaixo
					//bola.velocidade_x ++;
					bola.velocidade_x *= -1;
				}
		
    	//Fazendo colisão da bola com a paleta Inimigo
		if( Collide( bola.posicao_x,
					bola.posicao_y,
					bola.tamanho_x,
					bola.tamanho_y,
					inimigo.posicao_x,
					inimigo.posicao_y,
					inimigo.tamanho_x,
					inimigo.tamanho_y ) ) //se a bola colidiu com o inimigo
				{
					//Aumentar velocidade ao bater na paleta? Se sim, retire o comentário abaixo
					//bola.velocidade_x ++;
					bola.velocidade_x *= -1;
				}
		
		//Fazendo colisão da bola com os blocos
		if( Collide( bola.posicao_x,
					bola.posicao_y,
					bola.tamanho_x,
					bola.tamanho_y,
					bloco.posicao_x,
					bloco.posicao_y,
					bloco.tamanho_x,
					bloco.tamanho_y ) ) //se a bola colidiu com o bloco
				{
					//Aumentar velocidade ao bater na paleta? Se sim, retire o comentário abaixo
					//bola.velocidade_x ++;
					bola.velocidade_x *= -1;
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
		bloco.draw();
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