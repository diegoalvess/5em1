function Game_1()
{	
	//Pausa
	//this.paused = false;
	
	this.game1completo = false;
	
	//Introducao
	this.introducao = new Game1SceneIntroducao();

	//Level1
	this.level1 = new Game1SceneLevel1();
	
	//Level2
	this.level2 = new Game1SceneLevel2();
	
	//Level3
	this.level3 = new Game1SceneLevel3();
		
	//FimGanhou 
	this.fimganhou = new Game1SceneGanhou();
		
	//FimPerdeu
	this.fimperdeu = new Game1ScenePerdeu();
	
	//Fluxo das telas
	this.SCENE = { INTRODUCAO: 0, LEVEL_1: 1, LEVEL_2: 2, LEVEL_3: 3, FIMGANHOU: 4, FIMPERDEU: 5}
				
	//Para mudar aonde o jogo comeca, ou seja qual cena, mude aqui
	this.currentScene = this.SCENE.INTRODUCAO;

	this.update=function()
	{	
		switch(this.currentScene)
		{
			//introducao
			case this.SCENE.INTRODUCAO:
			{
				this.introducao.update();		
			}
			break;
		
			//level1
			case this.SCENE.LEVEL_1:
			{
				this.level1.update();
			}
			break;
			
			//level2
			case this.SCENE.LEVEL_2:
			{
				this.level2.update();
			}
			break;
			
			//level3
			case this.SCENE.LEVEL_3:
			{
				this.level3.update();
			}
			break;
			
			//FimGanhou
			case this.SCENE.FIMGANHOU:
			{
				this.fimganhou.update();
			}
			break;
			
			//FimPerdeu
			case this.SCENE.FIMPERDEU:
			{
				this.fimperdeu.update();
			}
			break;
				
				
		}//fechar switch
			
	}//fechar update

	this.draw=function()
	{
		switch(this.currentScene)
		{
			case this.SCENE.INTRODUCAO:
			{
				this.introducao.draw();
			}
			break;
				
			case this.SCENE.LEVEL_1:
			{
				this.level1.draw();
			}
			break;
			
			case this.SCENE.LEVEL_2:
			{
				this.level2.draw();
			}
			break;
			
			case this.SCENE.LEVEL_3:
			{
				this.level3.draw();
			}
			break;
				
			case this.SCENE.FIMGANHOU:
			{
				this.fimganhou.draw();
			}
			break;
				
			case this.SCENE.FIMPERDEU:
			{
				this.fimperdeu.draw();
			}
			break;
				
		}
			
	}
	
	this.mouse_down = function(mouse)
	{	
		switch(this.currentScene)
		{
			case this.SCENE.INTRODUCAO:
			{
				this.introducao.mouse_down(mouse);
			}
			break;
				
			case this.SCENE.LEVEL_1:
			{	
				this.level1.mouse_down(mouse);
			}
			break;
			
			case this.SCENE.LEVEL_2:
			{
				this.level2.mouse_down(mouse);
			}
			break;
				
			case this.SCENE.FIMGANHOU:
			{
				this.fimganhou.mouse_down(mouse);
			}
			break;
				
			case this.SCENE.FIMPERDEU:
			{	
				this.fimperdeu.mouse_down(mouse);
			}
			break;
		}
	}
	
	
	//Tecla desceu level2
	this.key_down=function(key)
	{
		this.level1.key_down(key);
	}
	
	//Tecla subiu level1
	this.key_up=function(key)
	{
		this.level1.key_up(key);
	}
	
	//Tecla subiu level2
	this.key_down=function(key)
	{
		this.level2.key_down(key);
	}

	//Tecla subiu level2
	this.key_up=function(key)
	{
		this.level2.key_up(key);
	}
}