import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('despre-noi');
  this.route('cum-comand');
  this.route('contact');
  this.route('forum');
  this.route('cont');
  this.route('favorite');
  this.route('comenzile-mele');
  this.route('agenda');
  this.route('comanda-rapida');
  this.route('promotii');
  this.route('produse-noi');
  this.route('solduri');
  this.route('instalatori');
  this.route('constructori');
  this.route('electricieni');
  this.route('mecanici');
  this.route('electronisti');
  this.route('tamplari');
  this.route('agricultori');
  this.route('sudori');
  this.route('despre');
  this.route('despre');
  this.route('categorii');
  this.route('termeni-si-conditii');
  this.route('convertor');
  this.route('producatori');
  this.route('fidelizare');
  this.route('voucher');
  this.route('securitatea-tranzactiilor');
  this.route('protectia-consumatorilor');
  this.route('catalogs');
  this.resource('catalog', {path:'/c/:catalog_id'});
  this.resource('product', {path:'/p/:product_id'});
  this.route('login');
  this.route('application');
  this.route('test');
  this.route('test1');
  this.route('protected');
  this.route('contulMeu');
  this.route('passwordRecovery');
  this.route('recuperareParola');
  this.route('contNou');
  this.route('userData');
  this.route('cart',{path:'/cosul-meu'});
  this.route('recuperare-parola');
});


export default Router;
