# Ui



ambiente java


```

wget https://cdn.zoom.us/prod/5.7.26030.0627/zoom_amd64.deb
sudo dpkg -i zoom_amd64.deb


sudo tar -xzf Postman-linux-x64-*.tar.gz

sudo mv Postman /opt

sudo chmod +x Postman

cd /usr/share/applications

touch postman.desktop

[Desktop Entry]
Name=Postman
Exec=/opt/Postman/Postman
Icon=/opt/Postman/app/resources/app/assets/icon.png
Terminal=false
Type=Application

```
sudo apt update && sudo apt install maven
mvn --version
```
sudo add-apt-repository ppa:openjdk-r/ppa
sudo apt-get update
sudo apt-get install openjdk-11-jdk

javac -version
java -version

```


baixar jetbrains-toolbox for linux
```

sudo tar -xzf jetbrains-toolbox-1.20.8804.tar.gz -C /opt


```

git

```
git config --global user.name andretecnologia
git config --global user.email andre@andretecnologia.com.br

git add origin https://github.com/andretecnologia/repo.git


```



```
`ng new ui --routing=true --style=scss --skip-tests --verbose`

#### troubleshooting ng new issue
_devDependencies "jasmine-core" to 3.8.0 and "karma-jasmine-html-reporter" 1.7.0 and save it._
_or_
`npm install -g npm@6.14.12`

ng g c list
ng g c one
ng g c form
ng g c dash
ng g s clientes
ng g class clientes

npm install --save bootstrap
npm install --save jquery
ng add @fortawesome/angular-fontawesome


// index.html
// before </head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
// before </body>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>


// style.css
@import "~bootstrap/dist/css/bootstrap.css"


```

https://getbootstrap.com/docs/4.0/getting-started/introduction/
https://getbootstrap.com/docs/4.0/components/navbar/


```
// app.component.html

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Sistema</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" routerLink="/clientes/form" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Clientes
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" routerLink="/clientes/form">Formulário</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" routerLink="/clientes">Listagem</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/clientes/form">Dash</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
</nav>


<div class="container-fluid">
	<router-outlet></router-outlet>
</div>


<footer class="py-4 bg-light mt-auto" >
    <div class="container-fluid" >
        <div class="d-flex align-items-center justify-content-between small">
            <div class="text-muted"></div>
            <div>
                <a href="#"></a>
                &middot;
                <a href="#"></a>
            </div>
        </div>
    </div>
</footer>

```


```
// font-awesome
//first of all verify the app.module.ts

import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
  faCodeBranch=faCodeBranch;
```

https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=brand&m=free


## comunicação com o backend e funcionalidades nos componentes e paginas

app.module.ts
httpclient

criar a variavel baseUrl

criar a service com todos os metodos necessarios
  -criar a variavel baseClienteUrl


## dash
npm install angular-google-charts

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

import { GoogleChartsModule } from 'angular-google-charts';
    GoogleChartsModule.forRoot(),
    
import { GoogleChartsModule } from 'angular-google-charts';
GoogleChartsModule.forRoot(),


ambiente


```

sudo dpkg -i google-chrome-stable_current_amd64.deb

sudo snap install obs-studio

sudo apt-get update

sudo apt-get install curl

sudo apt update

curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -

sudo apt-get update

sudo apt-get install nodejs

node --version

sudo apt-get install npm

npm --version

sudo npm install -g @angular/cli

sudo apt install git

git config --global user.name andretecnologia

git config --global user.email andre@andretecnologia.com.br

sudo npm install -g npm@7.19.1

```

_se necessario desabilitar ppa in other software_

_se o node nao for instalado tentar abaixo_

```

sudo wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash

nvm install node

sudo apt update

sudo apt install python3-pip

sudo add-apt-repository universe

wget https://cdn.zoom.us/prod/5.7.26030.0627/zoom_amd64.deb

sudo dpkg -i zoom_amd64.deb

wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

sudo dpkg -i google-chrome-stable_current_amd64.deb

wget https://az764295.vo.msecnd.net/stable/507ce72a4466fbb27b715c3722558bb15afa9f48/code_1.57.1-1623937013_amd64.deb

sudo dpkg -i code_1.57.1-1623937013_amd64.deb
```


