import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: 'Save',

  actions: {
    // body
    bottonClicked(param){
      this.sendAction('action', param);
    }
  }
});
