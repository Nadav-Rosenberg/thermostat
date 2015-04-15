require 'sinatra'

set :public_folder, proc { File.join(root) }

get '/temperature_change' do
  "<div ='displayTemperature'>21</div>"
end