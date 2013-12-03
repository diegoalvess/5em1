function Game4Interface(souce, tam_x, tam_y, pos_x, pos_y)
{
	//criando tela
	this.imagem = new Image();
	this.imagem.src = souce;
	
	this.visible = true;
	
	//propriedades
	this.tamanho_x_src = tam_x;
    this.tamanho_y_src = tam_y;
    this.posicao_x_src = 0;
    this.posicao_y_src = 0;
    this.posicao_x_dst = pos_x; //mudar posicao na tela aqui
    this.posicao_y_dst = pos_y; //mudar posicao na tela aqui
    this.tamanho_x_dst = this.tamanho_x_src;
    this.tamanho_y_dst = this.tamanho_y_src;
    
    this.escala_x = 1;
    this.escala_y = 1;

    this.update=function()
    {
    	   	
    };
    
    this.draw=function(max_energy_value, current_energy_value, life_value)
    {  	
		
		if(this.visible)
		{
        screen.drawImage(this.imagem,
        				 this.posicao_x_src,
        			 	 this.posicao_y_src,
        			 	 (this.tamanho_x_src*current_energy_value/max_energy_value), 
        			 	 this.tamanho_y_src, 
        			 	 this.posicao_x_dst, 
        			 	 this.posicao_y_dst, 
        			 	 (this.tamanho_x_dst*current_energy_value/max_energy_value)*this.escala_x,
        			 	 this.tamanho_y_dst*this.escala_y);
        			 	 
        //screen.font = "20px Comic Sans MS";
		//screen.fillStyle="#FFFFFF";
		//screen.fillText("x"+life_value, this.posicao_x_dst + this.tamanho_x_dst + 20, this.posicao_y_dst + 20 );
		
			for(var i = 0 ; i < life_value ; i++)
			{
			//screen.drawImage(game_4.level1.player.imagem, 0, 0, 100, 50, (this.posicao_x_dst + this.tamanho_x_dst) + (i * 50), this.posicao_y_dst, 50, 25);
			}
		}		
     };
}