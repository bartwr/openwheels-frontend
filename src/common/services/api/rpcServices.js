'use strict';

angular.module('rpcServices', [])

.service('personService', function (api) {
  var m = function (name) { return api.createRpcMethod('person.' + name); };
  this.me                    = m('me');
  this.validateEmail         = m('validateEmail');
  this.alter                 = m('alter');
  this.get                   = m('get');
  this.search                = m('search');
  this.dropPhoneWithPhoneId  = m('dropPhoneWithPhoneId');
  this.alterPhoneWithPhoneId = m('alterPhoneWithPhoneId');
  this.addPhoneWithPersonId  = m('addPhoneWithPersonId');
  this.alterEmail            = m('alterEmail');
  this.sendResetPassword     = m('sendResetPassword');
  this.resetPassword         = m('resetPassword');
  this.addLicenseImages      = m('addLicenseImages');
  this.setProfileImage       = m('setProfileImage');
})

.service('contractService', function (api) {
  var m = function (name) { return api.createRpcMethod('contract.' + name); };
  this.get           = m('get');
  this.alter         = m('alter');
  this.create        = m('create');
  this.allTypes      = m('allTypes');
  this.forDriver     = m('forDriver');
  this.forContractor = m('forContractor');
  this.addPerson     = m('addPerson');
  this.removePerson  = m('removePerson');
  this.invitePerson  = m('invitePerson');
})

.service('chipcardService', function (api) {
  var m = function (name) { return api.createRpcMethod('chipcard.' + name); };
  this.forPerson  = m('forPerson');
  this.create     = m('create');
  this.alter      = m('alter');
  this.getFish    = m('getFish');
  this.createFish = m('createFish');
  this.deleteFish = m('deleteFish');
  this.block      = m('block');
  this.unblock    = m('unblock');
})

.service('resourceService', function (api) {
  var m = function (name, isAnonymous) { return api.createRpcMethod('resource.' + name, isAnonymous); };
  this.get               = m('get');
  this.alter             = m('alter');
  this.select            = m('select');
  this.forOwner          = m('forOwner');
  this.search            = m('searchV2');
  this.create            = m('create');
  this.getMembers        = m('getMembers');
  this.addMember         = m('addMember');
  this.removeMember      = m('removeMember');
  this.invitePerson      = m('invitePerson');
  this.addPicture        = m('addPicture');
  this.removePicture     = m('removePicture');
  this.alterPicture      = m('alterPicture');
  this.checkAvailability = m('checkAvalibility', true);
  this.getFavorites      = m('getFavorites');
  this.addFavorite       = m('addFavorite');
  this.removeFavorite    = m('removeFavorite');
  this.addProperty       = m('addProperty');
  this.removeProperty    = m('remProperty');
})

.service('bookingService', function (api) {
  var m = function (name) { return api.createRpcMethod('booking.' + name); };
  this.alterRequest   = m('alterRequest');
  this.acceptRequest  = m('acceptRequest');
  this.rejectRequest  = m('rejectRequest');
  this.create         = m('create');
  this.get            = m('get');
  this.alter          = m('alter');
  this.stop           = m('stop');
  this.cancel         = m('cancel');
  this.setTrip        = m('setTrip');
  this.forResource    = m('forResource');
  this.forOwner       = m('forOwner');
  this.getBookingList = m('getBookingList');
})

.service('boardcomputerService', function (api) {
  var m = function (name) { return api.createRpcMethod('boardcomputer.' + name); };
  this.control = m('control');
})

.service('invoiceService', function (api) {
  var m = function (name) { return api.createRpcMethod('invoice.' + name); };
  this.get       = m('get');
  this.allGroups = m('allGroups');
})

.service('invoice2Service', function (api) {
  var m = function (name) { return api.createRpcMethod('invoice2.' + name); };
  this.calculatePrice = m('calculatePrice');
  this.getSent        = m('getSent');
  this.getReceived    = m('getReceived'); // status = paid | unpaid | both
})

.service('accountService', function (api) {
  var m = function (name) { return api.createRpcMethod('account.' + name); };
  this.get   = m('get');
  this.alter = m('alter');
})

.service('actionService', function (api) {
  var m = function (name) { return api.createRpcMethod('actions.' + name); };
  this.all = m('all');
  this.delete = m('delete');
})

.service('idealService', function (api) {
  var m = function (name) { return api.createRpcMethod('ideal.' + name); };
  this.payInvoiceGroup = m('payInvoiceGroup');
})

.service('voucherService', function (api) {
  var m = function (name) { return api.createRpcMethod('voucher.' + name); };
  this.getVouchers = m('getVouchers');
})

.service('ratingService', function (api) {
  var m = function (name) { return api.createRpcMethod('rating.' + name); };
  this.getPrefill = m('getPrefill');
  this.create     = m('create');
})

.service('anwbService', function (api) {
  var m = function (name) { return api.createRpcMethod('anwb.' + name); };
  this.setAnwbNumber = m('setAnwbNumber');
})

.service('paymentService', function (api) {
  var m = function (name) { return api.createRpcMethod('payment.' + name); };
  this.pay              = m('pay');
  this.payBooking       = m('payBooking');
  this.payInvoiceGroup  = m('payInvoiceGroup');
  this.getInvoiceGroups = m('getInvoiceGroups');
})

.service('calendarService', function(api){
  var m = function (name) { return api.createRpcMethod('calender.' + name); };
  this.createBlock    = m('createBlock');
  this.alterBlock     = m('alterBlock');
  this.removeBlock    = m('removeBlock');
  this.createPeriodic = m('createPeriodic');
  this.alterPeriodic  = m('alterPeriodic');
  this.removePeriodic = m('removePeriodic');
  this.between        = m('between');
})

.service('messageService', function(api){
  var m = function (name) { return api.createRpcMethod('message.' + name); };
  this.sendMessageTo       = m('sendMessageTo');
  this.getMyConversations  = m('getMyConversations');
  this.getConversationWith = m('getConversationWith');
  this.getMessagesAfter    = m('getMessagesAfter');
  this.getMessagesBefore   = m('getMessagesBefore');
});