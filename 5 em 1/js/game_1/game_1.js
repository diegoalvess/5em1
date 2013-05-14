function Game_1()
{	
	
	this.ball = new Game1Ball();
	this.pallete = new Game1Pallete();
	
	this.update=function()
	{
	
		
	
	}

	this.draw=function()
	{
		screen.font = "20px Comic Sans MS";
		screen.fillStyle="#000000";
		screen.fillText("GAME_1", 20, 20);
		
		this.ball.draw();
		this.pallete.draw();

	}

}