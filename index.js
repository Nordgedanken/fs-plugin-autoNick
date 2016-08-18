/* -------------------------------------- */
// Author: MTRNord <info@nordgedanken.de>
// Date: 17.08.2016
// Version: 0.0.1
/* -------------------------------------- */
var util = require('util');
var Moniker = require('moniker');


module.exports.player = function(player, serv) { // Player is a type of entity (entity inject is called first) with added properties and functions
  player.commands.add({
    base: 'nickme',
    info: 'Change the Nick of your self',
    usage: '/nickme',
    action({search, page}) {
      var names = Moniker.generator([Moniker.noun]);
      serv._writeAll('player_info',{
        action: 3,
        data: [{
          UUID: player._client.uuid,
          displayName: names.choose()
        }]
      });
      serv.log("Nick changed")
      player.chat('Nick changed')
      function simpleStringify (object){
        var simpleObject = {};
        for (var prop in object ){
        if (!object.hasOwnProperty(prop)){
            continue;
        }
        if (typeof(object[prop]) == 'object'){
            continue;
        }
        if (typeof(object[prop]) == 'function'){
            continue;
        }
        simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
};
      serv.log('New Username: ' + serv.players)
      }
  });
}
