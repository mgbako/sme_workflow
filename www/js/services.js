angular.module('starter.services', [])

.service('modalService', function($ionicModal){
  this.openModal = function(id){
    var _this = this;

    if(id == 1){
      $ionicModal.fromTemplateUrl('templates/addNotes.html', {
        scope: $scope,
        animation: 'slide-in-up',
        controller: 'NotesCtrl'
      }).then(function(modal){
        _this.modal = modal;
        _this.modal.show();
      });
    }

    if(id == 2){
      $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope,
        animation: 'slide-in-up',
        controller: 'AppCtrl'
      }).then(function(modal){
        _this.modal = modal;
        _this.modal.show();
      });
    }

    if(id == 3){
      $ionicModal.fromTemplateUrl('templates/register.html', {
        scope: null,
        animation: 'slide-in-up',
        controller: 'RegisterCtrl'
      }).then(function(modal){
        _this.modal = modal;
        _this.modal.show();
      });
    }    

  }

  this.closeModal = function(){
    var _this = this;
    if(!_this.modal) return;

    _this.modal.hide();
    _this.modal.remove();
  };
})