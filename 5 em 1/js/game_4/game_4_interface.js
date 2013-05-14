function Interface()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/game_4/barra de energia.png";
	//this.loaded = false;
	
	this.visible = true;
	
	this.tamanho_x_src = 300;
    this.tamanho_y_src = 25;
    this.posicao_x_src = 0;
    this.posicao_y_src = 0;
    this.posicao_x_dst = 5; //mudar posicao na tela aqui
    this.posicao_y_dst = 5; //mudar posicao na tela aqui
    this.tamanho_x_dst = this.tamanho_x_src;
    this.tamanho_y_dst = this.tamanho_y_src;
    
    this.escala_x = 1;
    this.escala_y = 1;

    this.update=function()
    {
    	   	
    };
    
    this.draw=function(max_energy_value, current_energy_value, life_value)
    {  	
		//screen.fillText("Energia: " + current_energy_value + "    Vidas: " + life_value, 20, 20);
		
		if(this.visible)
        screen.drawImage(this.imagem,
        				 this.posicao_x_src,
        			 	 this.posicao_y_src,
        			 	 (this.tamanho_x_src*current_energy_value/max_energy_value), 
        			 	 this.tamanho_y_src, 
        			 	 this.posicao_x_dst, 
        			 	 this.posicao_y_dst, 
        			 	 (this.tamanho_x_dst*current_energy_value/max_energy_value)*this.escala_x,
        			 	 this.tamanho_y_dst*this.escala_y);
		
		//screen.drawImage(this.imagem, this.posicao_x, this.posicao_y);
    };
}