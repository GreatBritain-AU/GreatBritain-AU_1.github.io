var app = new Vue({
    el:"#cl_ban",
    data:{
        products:[
            {id:1, title:"TAG 500 (TAG 230)", short_text: 'Red Banana', image:'images/Red_b.jpg', color:'Red', fr_s1:' Sweet flavor with hints of raspberry and mango.', fr_c2:'Reddish-purple peel that darkens when ripe.', fr_c3:'Soft, creamy flesh, light pink or orange in color.'},
            {id:2, title:"TAG 501 (TAG 254)", short_text: 'Blue Banana (Blue Java)', image:'images/Blue_b.jpg', color:'Light blue', fr_s1:'Bluish-silver peel before full ripening.', fr_c2:'Tastes like vanilla ice cream.', fr_c3:'Cold-tolerant, can grow in cooler climates.'},
            {id:3, title:"TAG 502 (TAG 211)", short_text: 'Señorita (the smallest banana)', image:'images/lit_b.jpg', color:'Yellow', fr_s1:'Tiny size – only 5–7 cm (2–3 inches) long.', fr_c2:'Very sweet and soft, with a strong banana aroma.', fr_c3:' Thin peel, easy to remove.'},
            {id:4, title:"TAG 503 (TAG 287)", short_text: 'Velvet bananas (Musa velutina)', image:'images/barhat_b.jpg', color:'Violet', fr_s1:'Fuzzy pink peel, highly decorative.', fr_c2:'Edible but full of seeds.', fr_c3:'Fast-growing, can bear fruit within a year.'},
            {id:5, title:"TAG 504 (TAG 201)", short_text: 'Striped bananas (Musa Ae Ae)', image:'images/polos_b.jpg', color:'Pale green', fr_s1:'Green-and-white striped peel, extremely rare.', fr_c2:'Delicate creamy taste, less sweet than regular bananas.', fr_c3:'Requires warm climate and special care.'},
        ],

        product:{},

        btnVisible:false
    },

    methods:{
        getProduct:function() {
            if(window.location.hash){
                var id = window.location.hash.replace('#', '');
                if(this.products && this.products.length>0) {
                    for(var i in this.products) {
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        },     
        
        addToCart:function(id){
            var cart = [];
            if(window.localStorage.getItem('cart')){
                cart = window.localStorage.getItem('cart').split(',');
            }

            if(cart.indexOf(String(id))==-1){
                cart.push(String(id));
                window.localStorage.setItem('cart', cart.join());
                this.btnVisible=1;
            }
        },

        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
        },
    },

    mounted:function(){
        this.getProduct();
        this.checkInCart();
    },
});
