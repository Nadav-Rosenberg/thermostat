require 'sinatra'

set :public_folder, proc { File.join(root) }

post '/temperature_change' do
  "Hello temperature_change"
end