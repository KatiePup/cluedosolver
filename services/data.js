(function() {
  var app = angular.module('app');

  app.factory('data',
    ['$http', function($http) {

    var data = {};

    data.cardSets = [
      {
        name: "Standard UK",
        cards: [
          {name:"Miss Scarlett", group:"Suspect"},
          {name:"Colonel Mustard", group:"Suspect"},
          {name:"Mrs. White", group:"Suspect"},
          {name:"Reverend Green", group:"Suspect"},
          {name:"Mrs. Peacock", group:"Suspect"},
          {name:"Professor Plum", group:"Suspect"},
          {name:"Candlestick", group:"Weapon"},
          {name:"Dagger", group:"Weapon"},
          {name:"Lead pipe", group:"Weapon"},
          {name:"Revolver", group:"Weapon"},
          {name:"Rope", group:"Weapon"},
          {name:"Spanner", group:"Weapon"},
          {name:"Kitchen", group:"Location"},
          {name:"Ballroom", group:"Location"},
          {name:"Conservatory", group:"Location"},
          {name:"Billiard Room", group:"Location"},
          {name:"Library", group:"Location"},
          {name:"Study", group:"Location"},
          {name:"Hall", group:"Location"},
          {name:"Lounge", group:"Location"},
          {name:"Dining Room", group:"Location"}
        ]
      },
      {
        name: "Standard USA",
        cards: [
          {name:"Miss Scarlet", group:"Suspect"},
          {name:"Colonel Mustard", group:"Suspect"},
          {name:"Mrs. White", group:"Suspect"},
          {name:"Mr Green", group:"Suspect"},
          {name:"Mrs. Peacock", group:"Suspect"},
          {name:"Professor Plum", group:"Suspect"},
          {name:"Candlestick", group:"Weapon"},
          {name:"Knife", group:"Weapon"},
          {name:"Lead pipe", group:"Weapon"},
          {name:"Revolver", group:"Weapon"},
          {name:"Rope", group:"Weapon"},
          {name:"Wrench", group:"Weapon"},
          {name:"Kitchen", group:"Location"},
          {name:"Ballroom", group:"Location"},
          {name:"Conservatory", group:"Location"},
          {name:"Billiard Room", group:"Location"},
          {name:"Library", group:"Location"},
          {name:"Study", group:"Location"},
          {name:"Hall", group:"Location"},
          {name:"Lounge", group:"Location"},
          {name:"Dining Room", group:"Location"}
        ]
      },
      {
        name: "Sherlock Edition",
        cards: [
          {name:"Irene Adler", group:"Suspect"},
          {name:"John Watson", group:"Suspect"},
          {name:"Mrs. Hudson", group:"Suspect"},
          {name:"Detective Inspector Lestrade", group:"Suspect"},
          {name:"Mycroft Holmes", group:"Suspect"},
          {name:"Sherlock Holmes", group:"Suspect"},
          {name:"Candlestick", group:"Weapon"},
          {name:"Dagger", group:"Weapon"},
          {name:"Lead pipe", group:"Weapon"},
          {name:"Revolver", group:"Weapon"},
          {name:"Rope", group:"Weapon"},
          {name:"Spanner", group:"Weapon"},
          {name:"221B Baker Street", group:"Location"},
          {name:"Mrs. Hudson's Kitchen", group:"Location"},
          {name:"Molly's Lab", group:"Location"},
          {name:"The Swimming Pool", group:"Location"},
          {name:"Irene's Flat", group:"Location"},
          {name:"Baskerville", group:"Location"},
          {name:"Dartmoor", group:"Location"},
          {name:"Tower of London", group:"Location"},
          {name:"Battersea Power Station", group:"Location"}
        ]
      },
      {
        name: "Toms Version",
        cards: [
            {name:"Conservatory", group:"Location"},
            {name:"Courtyard", group:"Location"},
            {name:"Stables", group:"Location"},
            {name:"Kitchen", group:"Location"},
            {name:"Billiard Room", group:"Location"},
            {name:"Cloak Room", group:"Location"},
            {name:"Study", group:"Location"},
            {name:"Library", group:"Location"},
            {name:"Hall", group:"Location"},
            {name:"Lounge", group:"Location"},
            {name:"Cellar", group:"Location"},
            {name:"Gazebo", group:"Location"},
            {name:"Dining Room", group:"Location"},
            {name:"Miss Scarlett", group:"Suspect"},
            {name:"Col. Mustard", group:"Suspect"},
            {name:"Mrs White", group:"Suspect"},
            {name:"Rev. Green", group:"Suspect"},
            {name:"Mrs Peacock", group:"Suspect"},
            {name:"Prof. Plum", group:"Suspect"},
            {name:"Lady Lavender", group:"Suspect"},
            {name:"Capt. Olive", group:"Suspect"},
            {name:"Baron Gold", group:"Suspect"},
            {name:"Dagger", group:"Weapon"},
            {name:"Spanner", group:"Weapon"},
            {name:"Rope", group:"Weapon"},
            {name:"Candlestick", group:"Weapon"},
            {name:"Revolver ", group:"Weapon"},
            {name:"Lead Pipe", group:"Weapon"},
            {name:"Poker", group:"Weapon"},
            {name:"Horseshoe", group:"Weapon"},
            {name:"Rat Poison", group:"Weapon"} 
        ]
      }

    ];

    return data;
  }]);
})();
