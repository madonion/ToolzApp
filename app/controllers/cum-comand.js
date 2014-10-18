import Ember from 'ember';

export default Ember.Controller.extend({
  	tabsMeta: Ember.A([
        Ember.Object.create({ title: 'Preturile ToolsZone.ro', template: 'cum-comand/preturi-tabpane', controller: 'CumComandController'}),
        Ember.Object.create({ title: 'Ghidul utilizatorului', template: 'cum-comand/ghid-tabpane'}),
        Ember.Object.create({ title: 'Protocol de cumparare', template: 'cum-comand/cumparare-tabpane'}),
        Ember.Object.create({ title: 'Protocol pentru returnari de produse', template: 'cum-comand/returnare-tabpane'}),
        Ember.Object.create({ title: 'Serviciul clienti', template: 'cum-comand/clienti-tabpane'})
]),
selectie:''
});
