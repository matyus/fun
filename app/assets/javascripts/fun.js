var PHI = Backbone.View.extend({

  options: {
    colors: ['red','orange','yellow','green','blue','indigo','violet'],
    widths: ['height','width']
  },

  events : {
    'click .js-bloop' : 'bloop'
  },

  template: function(data){
    var classNames = 'js-bloop fill fill--'+_(this.options.colors).sample()+' fill--'+_(this.options.widths).sample();

    return $('<div/>').addClass(classNames);
  },

  initialize: function(){
    console.log('init');
    this.insert();
  },

  insert: function(){
    this.$el.html(this.template());
  },

  render: function(){
    console.log('render');
  },

  bloop: function(e){
    $(e.target).html(this.template());

  }
});



$(document).ready(function(){

  var App = new PHI({el:$('#app')});

});
