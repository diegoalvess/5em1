function Game_2()
{
	this.game2completo = false;
	
		//Pausa
		this.paused = false;
		
		//Introducao
		this.instrucoes = new Game2SceneInstrucoes();

		//Creditos
		//this.creditos = new SceneCreditos();

		//Level 1
		this.level1 = new Game2SceneLevel1();
		
		//Level 2
		this.level2 = new Game2SceneLevel2();
		
		//FimGanhou 
		this.fimganhou = new Game2SceneGanhou();
		
		//FimPerdeu
		this.fimperdeu = new Game2ScenePerdeu();
		
		//Menu
		//this.menu = new SceneMenu();
	
		//Fluxo das telas
		this.SCENE = { INSTRUCOES: 0, LEVEL_1: 1, LEVEL_2: 2, FIMGANHOU: 3, FIMPERDEU: 4}
				
		//Para mudar aonde o jogo comeca, ou seja qual cena, mude aqui
		this.currentScene = this.SCENE.INSTRUCOES;

		this.update=function()
		{	
			switch(this.currentScene)
			{
				//introducao
				case this.SCENE.INSTRUCOES:
				{
					
					this.instrucoes.update();		
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
				case this.SCENE.INSTRUCOES:
				{
					
					this.instrucoes.draw();
				}
				break;
						
				case this.SCENE.LEVEL_1:
				{
					
					this.level1.draw();
				}
				break;
				
				//level2
				case this.SCENE.LEVEL_2:
				{
					
					this.level2.draw();
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

		//Funcionando teclado e mouse.
		this.mouse_down = function(mouse)
		{
			
			
			switch(this.currentScene)
			{
				case this.SCENE.INSTRUCOES:
				{
					
					this.instrucoes.mouse_down(mouse);
				}
				break;
				
				case this.SCENE.LEVEL_1:
				{
					
					this.level1.mouse_down(mouse);
				}
				break;
				
				//level2
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
		
		this.mouse_up = function(mouse)
		{
			//
		};
		
		this.key_down = function(key)
		{
			switch(this.currentScene)
			{
				case this.SCENE.INSTRUCOES:
				{
					
					this.instrucoes.key_down(key);
				}
				break;
				
				case this.SCENE.LEVEL_1:
				{
					
					this.level1.key_down(key);
				}
				break;
				
				//level2
				case this.SCENE.LEVEL_2:
				{
					
					this.level2.key_down(key);
				}
				break;
				
				case SCENE.FIMGANHOU:
				{
					
					//this.fimganhou.key_down(key);
				}
				break;
				
				case this.SCENE.FIMPERDEU:
				{
					
					//this.fimperdeu.key_down(key);
				}
				break;
				
				
								
			}
		};
		
		this.key_up = function(key)
		{
				switch(this.currentScene)
			{
				case this.SCENE.INSTRUCOES:
				{
					
					this.instrucoes.key_up(key);
				}
				break;
				
				case this.SCENE.LEVEL_1:
				{
					
					this.level1.key_up(key);
				}
				break;
				
				//level2
				case this.SCENE.LEVEL_2:
				{
					
					this.level2.key_up(key);
				}
				break;
				
				case this.SCENE.FIMPERDEU:
				{
					
					//this.fimperdeu.key_up(key);
				}
				break;
				
				case SCENE.FIMGANHOU:
				{
					
					//this.fimganhou.key_up(key);
				}
				break;
								
			}
		};		
}