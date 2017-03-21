//Grape DB - Created by @felipecbarelli - Please don't remove this line.
function grape () {
  var database = {};
  var storage;

  this.loadDatabase = function (storage) {
    if (localStorage.getItem(storage) === null) {
      localStorage.setItem(storage, '{"records":[]}');
    }
    var data = localStorage.getItem(storage);
    data = JSON.parse(data);
    this.setRecords(data);
    this.setFile(storage);
  }

  this.setFile = function (storage) {
    this.storage = storage;
  }

  this.setRecords = function (data) {
    this.database = data;
  }

  this.getRecords = function () {
    return this.database;
  }

  this.insertRecord = function (object) {
    this.database.records.push(object);
  }

  this.deleteRecord = function (idRecord) {
    this.database.records = this.database.records.filter(function(record) {
      return record.id != idRecord;
    });
  }

  this.getRecord = function (idRecord) {
    var data = this.database.records.filter(function(record) {
      return record.id === idRecord;
    });
    return data[0];
  }

  this.save = function () {
    var data = JSON.stringify(this.getRecords());
    localStorage.setItem(this.storage, data);
  }

  this.orderBy = function (attribute, asc) {
    this.database.records = this.database.records.sort(function(a, b) {
      if (asc) return (a[attribute] > b[attribute]) ? 1 : ((a[attribute] < b[attribute]) ? -1 : 0);
      else return (b[attribute] > a[attribute]) ? 1 : ((b[attribute] < a[attribute]) ? -1 : 0);
    });
  }

  this.generateID = function () {
    var id = Date.now() + Math.floor(Math.random() * 8999);
    return id;
  }
}

var db = new grape();

db.loadDatabase('vinho');
db.insertRecord({"id":"1","nome":"Espumante La Chamiza Brut","tipo":"Espumante"});
db.insertRecord({"id":"2","nome":"Urmeneta Merlot","tipo":"Tinto"});
db.insertRecord({"id":"3","nome":"Altivo Classic Malbec","tipo":"Tinto"});

db.deleteRecord('2');
db.orderBy('nome', true);

db.save();

console.log(db.getRecord('3'));
console.log(db.getRecords());
