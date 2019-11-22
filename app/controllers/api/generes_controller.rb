class Api::GeneresController < ApplicationController
  def index
    get_generes = Genere.select('name').all
    generes = get_generes.map{|gen| gen.name}
    
    render json: generes
  end
end