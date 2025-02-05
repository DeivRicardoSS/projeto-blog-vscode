# Projeto Blog

## Introdução

O projeto se trata de um sistema de blog, onde criadores de conteúdo podem postar seus assuntos, como também podem fazer suas próprias publicidades nas suas páginas.

## Tecnologias
![Draw.io](https://img.shields.io/badge/draw.io-16141f?style=for-the-badge&logo=diagrams.net) 
![HTML5](https://img.shields.io/badge/HTML5-16141f?style=for-the-badge&logo=html5) 
![CSS3](https://img.shields.io/badge/CSS3-16141f?style=for-the-badge&logo=css3) 
![JavaScript](https://img.shields.io/badge/JavaScript-16141f?style=for-the-badge&logo=javascript) 
![NodeJs](https://img.shields.io/badge/NodeJs-16141f?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-16141f?style=for-the-badge&logo=express)  
![MongoDB](https://img.shields.io/badge/MongoDB-16141f?style=for-the-badge&logo=mongodb) 
![mongoose](https://img.shields.io/badge/mongoose-16141f?style=for-the-badge&logo=mongoose) 
![Axios](https://img.shields.io/badge/Axios-16141f?style=for-the-badge&logo=axios) 
![TypeScript](https://img.shields.io/badge/typescript-16141f?style=for-the-badge&logo=typescript) 

## Ligar Servidores

#### Servidor Back-End
Dentro do CMD, digite o seguinte comando:
```
    npm run start-back
```

#### Servidor Front-End
Dentro do CMD, digite o seguinte comando:
```
    npm run start-front
```

#### Conectar Banco de dados

Vá até o arquivo back_end/src/server.ts e no parâmetro de conexão substitua pelo link de seu mongodb

```
11    // Conectando ao banco de dados
12    mongoose.connect('mongodb://seumongodbaqui/blog');
```
