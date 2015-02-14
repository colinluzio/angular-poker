var myApp = angular.module('app', []);
myApp.controller('MainController', ['$scope', function($scope) {
  $scope.firstPlayer =[];
  $scope.secondPlayer =[];
  $scope.thirdPlayer =[];
  $scope.fourthPlayer =[];
  $scope.fifthPlayer =[];
  $scope.sixthPlayer =[];
  
  $scope.testArray = [{suit:'D',value:10},{suit:'H',value:9},{suit:'H',value:12},
                      {suit:'D',value:7},{suit:'D',value:6},{suit:'H',value:8},
                      {suit:'H',value:10}];
  
  var players = [$scope.firstPlayer,$scope.secondPlayer];
  $scope.initialCards = [{suit:'H',value:14},{suit:'H',value:13},{suit:'H',value:12},{suit:'H',value:11},
                         {suit:'H',value:10},{suit:'H',value:9},{suit:'H',value:8},{suit:'H',value:7},
                         {suit:'H',value:6},{suit:'H',value:5},{suit:'H',value:4},{suit:'H',value:3},
                         {suit:'H',value:2},{suit:'D',value:14},{suit:'D',value:13},{suit:'D',value:12},
                         {suit:'D',value:11},{suit:'D',value:10},{suit:'D',value:9},{suit:'D',value:8},
                         {suit:'D',value:7},{suit:'D',value:6},{suit:'D',value:5},{suit:'D',value:4},
                         {suit:'D',value:3},{suit:'D',value:2},{suit:'C',value:14},{suit:'C',value:13},
                         {suit:'C',value:12},{suit:'C',value:11},{suit:'c',value:10},{suit:'C',value:9},
                         {suit:'C',value:8},{suit:'C',value:7},{suit:'C',value:6}, {suit:'C',value:5},
                         {suit:'C',value:4},{suit:'C',value:3},{suit:'C',value:2},{suit:'S',value:14},
                         {suit:'S',value:13},{suit:'S',value:12},{suit:'S',value:11},{suit:'S',value:10},
                         {suit:'S',value:9},{suit:'S',value:8},{suit:'S',value:7},{suit:'S',value:6},
                         {suit:'S',value:5},{suit:'S',value:4},{suit:'S',value:3},{suit:'S',value:2}
                        ];
$scope.dealCards = function(){
    for(var i=0;i<2;i++){
        for(var x=0; x< players.length; x++){
            var index = Math.floor((Math.random() * ($scope.initialCards.length -1)));
            players[x].push($scope.initialCards[index]);
            $scope.initialCards.splice(index,1);
        }  
    }
    $scope.isPair($scope.testArray);
    console.log($scope.firstPlayer);
    //$scope.firstPlayer.sort($scope.compare);
    //$scope.isFlush($scope.testArray);
//    if($scope.isStraight($scope.testArray)){
//        console.log($scope.isStraight($scope.testArray));
//    }
};
//$scope.changeCards = function(){
//    var newcards = $scope.firstPlayer;
//    var lateCards = newcards.$new();
//    //newcards[0].value = 3
//    console.log(lateCards);
//}
$scope.compare=function(a,b) {
  if (a.value < b.value)
     return -1;
  if (a.value > b.value)
    return 1;
  return 0;
}
$scope.getWinner = function(){
       var playerOneBest ={};
       for(var i=0 ; i < players.length; i++){
           //players[i].sort(function(a, b){return b-a});  
           //console.log(players);
//           if($scope.royalFlush($scope.players)){
//               alert('yes we have');
//           } else if(1==2){
//               
//           }
       }
    };

$scope.royalFlush= function(object){
    return false;
} 
$scope.isFlush = function(object){
    object.sort($scope.compare);
    var heartHand = [];
    var diamondHand =[];
    var clubHand=[];
    var spadeHand=[];
    
    for(var x=0;x<object.length;x++){
        switch(object[x].suit){
            case 'H':
                heartHand.push(object[x]);
                break;
            case 'D':
                diamondHand.push(object[x]);
                break;
            case 'S':
                spadeHand.push(object[x]);
                break;
            case 'C':
                clubHand.push(object[x]);
                break;
            }
    }
    console.log(heartHand);
}
$scope.isStraight = function(object){
    object.sort($scope.compare);
    //console.log(object);
    var straightHand =[];
    for(var x=0;x<object.length;x++){
        var exists = false;
        for(var j=0;j<straightHand.length;j++){
            if(straightHand[j].value==object[x].value){
                exists = true;
                break;
            }
        }
        if(exists==false){
        straightHand.push(object[x]);
    }
    }
    //console.log(straightHand);
    var i = straightHand.length-1;
    for(i;i>=0;i--){
       if(i-4>=0){ 
            if(straightHand[i-1].value==straightHand[i].value-1){
                //console.log(straightHand[i].value);
                if(straightHand[i-2].value==straightHand[i].value-2){
                    if(straightHand[i-3].value==straightHand[i].value-3){
                        if(straightHand[i-4].value==straightHand[i].value-4){
                             return straightHand[i].value;   
                        } 
                    } 
                } 
            } 
            
        }
  
    }
}
$scope.isPair = function(objects){
    var hands = [];
    for(var x=2;x<15;x++){
        hands.push({value:x,total:0});
    }
    for(var i=0;i<objects.length;i++){
        for(var j=0;j<hands.length;j++){
            if(objects[i].value==hands[j].value){
                hands[j].total += 1;
            }
        }
    }
    console.log(hands);
}
}]);

