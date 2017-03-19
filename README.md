# Grape NoSQL DB

Criei este pequeno banco de dados NoSQL, para utilizá-lo em alguns aplicativos mobile que desenvolvi com Cordova.  
Estou compartilhando aqui no GitHub, para que possamos juntos, aprimorá-lo e torná-lo ainda mais completo.  
Segue abaixo um pequeno tutorial de como utilizá-lo.

## Importando para o seu projeto

Basta importar o arquivo JS no final do seu HTML.

```html
<script type="text/javascript" src="js/grape.min.js"></script>
```

## Carregando ou criando um banco

Defina o nome do banco a ser carregado, se ele ainda não existir, será criado.  
Neste exemplo, estamos criando um chamado "vinho".

```javascript
var db = new grape();
db.loadDatabase('vinho');
```

## Inserindo registros no banco criado

Insira registros utilizando o método `insertRecord`. 
Passe o objeto como parâmetro.

```javascript
var db = new grape();
db.loadDatabase('vinho');
db.insertRecord({"id":"1","nome":"Espumante La Chamiza Brut","tipo":"Espumante"});
db.insertRecord({"id":"2","nome":"Urmeneta Merlot","tipo":"Tinto"});
db.insertRecord({"id":"3","nome":"Altivo Classic Malbec","tipo":"Tinto"});
db.save();
```

## Gerar ID automaticamente

Gere IDs automaticamente com o método `generateID`.

```javascript
var db = new grape();
console.log(db.generateID());
```

## Removendo um registro do banco

Remova registros passando o ID como parâmetro no método `deleteRecord`.

```javascript
var db = new grape();
db.loadDatabase('vinho');
db.deleteRecord('2');
db.save();
```

## Ordenando registros do banco

Ordene a base de dados alfabeticamente, indicando o atributo no método `orderBy`.

```javascript
var db = new grape();
db.loadDatabase('vinho');
db.orderBy('nome', true);
db.save();
```

## Obtendo um único registro do banco

Obtenha os dados de um único registro no banco, informando o ID no `método getRecord`.

```javascript
var db = new grape();
db.loadDatabase('vinho');
console.log(db.getRecord('3'));
```

## Obtendo todos os registros do banco

Obtenha os dados de todos os registros no banco com o método `getRecords()`.

```javascript
var db = new grape();
db.loadDatabase('vinho');
console.log(db.getRecords());
```

## Implementações futuras

1.  Método para ordernar por dadas.
2.  Método para retornar registro entre duas datas.
3.  Método para converter formatação de datas.

## Créditos e Licença

Não precisa de licença, você já é de casa. =)  
Só não remova a linha:

```javascript
//Grape DB - Created by @felipecbarelli - Please don't remove this line.
```

Desenvolvido por: [@felipecbarelli](https://github.com/felipecbarelli)