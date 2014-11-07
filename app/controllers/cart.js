import Ember from 'ember';


export default Ember.ObjectController.extend({
	itemsCounter: 0,
	totalCounter: 0,
	addCartItem: function(attrs){
		var store = this.store;
		/*var cart = store.createRecord('cart',{id: 666});
		var cartItem = store.createRecord('cartItem',{id:6,name:"rotop"});
		cartItem.save();
		cart.get('cartItems').pushObject(cartItem);
		cart.save();*/
		
		
			store.find('cart','121243453543534').then(function(cart){
				var result = cart.get('cartItems');
				/*debugger;*/
				var flag = false;
				/*Ugly hack - bucla foreach e incompatibila cu promise-ul*/
				result.toArray().forEach(function(item){
					if (item.id ===attrs.item){flag = true}
				});

				if (flag){
						/*debugger;*/
						store.find('cartItem',attrs.item).then(function(item){
							/*debugger;*/
							var qty = item.get('qty') + attrs.qty;
							/*var cartItem = store.update('cartItem',{id:attrs.item,qty:qty});
							cartItem.save();*/
							item.set('qty',item.get('qty')+attrs.qty);
							item.save();
					});
					return;
				};
				
				
				Ember.Logger.info(result)
				
				var cartItem = store.createRecord('cartItem',{
					name: attrs.name,
					/*desc: attrs.desc,*/
					qty: attrs.qty,
					id: attrs.item,
					codUnic: attrs.code,
					price: attrs.price,
					img: '/lib/phpThumb/phpThumb.php?src=/poze/'+attrs.img+'&w=66&h=66&far=C',
					cart:cart});
				cartItem.save();
			})
			//var cartItem = store.createRecord('cartItem',{id:6,name:"rotop",cart:store.find('cart',1234)});
			//cartItem.save();

		/*cart.get('cartItems').addObject(this.store.createRecord('cartItem',{
            "id": 0,
            "unic": "7271:197.00",
            "codUnic": "brm1",
            "name": "bormasina",
            "desc": "descriere bormasina",
            "price": 20,
            "qty":  20,
            "cart": this.store.find('cart',1)
        }));

		//cart.save();
		/*cart.save();
		Ember.Logger.info(attrs);
		var cart1 = this.store.find('cart',1234);
		var parts = attrs.item.split(":");
		window.articol = this.store.find('product',parts[0]);*/
		//debugger;
	},
	initializeCart: function(){
		var counter = 0;
		var _this = this;
		var store = this.store;
		store.find('cart','121243453543534').then(function(cart){
			var result = cart.get('cartItems');
			if (result){
				result.toArray().forEach(function(item){
					/*debugger;*/
					counter += parseInt(item.get('qty'));
				});
			}
			_this.set('itemsCounter',counter);

		});

	},
	cartItemsCount: function(){
			
		var counter = 0;
		
		var items = this.get('model.cartItems');
		if (items){
			items.toArray().forEach(function(item){
				counter += parseInt(item.get('qty'));
			})
		this.set('itemsCounter',counter);
		Ember.Logger.info('run...')
		} else{
			this.initializeCart();
		}
	}.observes('model.cartItems.@each.qty'),
	cartTotalCount: function(){
			
		var total = 0;
		
		var items = this.get('model.cartItems');
		if (items){
			items.toArray().forEach(function(item){
				var qty = parseInt(item.get('qty'));
				total += qty * parseInt(item.get('price'));
			})
		this.set('totalCounter',total);
		Ember.Logger.info('run...')
		} else{
			this.initializeCart();
		}
	}.observes('model.cartItems.@each.qty'),
	actions:{
		update: function(){
			
			this.store.find('cart','121243453543534').then(function(cart){
				var result = cart.get('cartItems');
				/*debugger;*/
				result.toArray().forEach(function(item){
					if (item.get('isDirty')){item.save();}
				});		
			})
		},
		delete: function(toRemove){
			
//			Ember.Logger.info()
			this.store.find('cart','121243453543534').then(function(cart){
				var result = cart.get('cartItems');
				/*debugger;*/
				result.toArray().forEach(function(item){
					//foarte aiurea treaba aici cum stergem
					if (item.id === toRemove){
						item.set('qty',-1)
						item.save().then(function(){item.deleteRecord()})
						}
				});		
			})
		}
	}

});
