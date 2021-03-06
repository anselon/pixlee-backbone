define([
    'jquery',
    'underscore',
    'backbone',
    'collections/galleries/GalleryCollection',
    'views/gallery/GalleryMetaDataListView',
    'models/gallery/GalleryModel',
    'views/gallery/GalleryNewView'

    ], function($,_,Backbone, GalleryCollection, GalleryMetaDataListView, GalleryModel, GalleryNewView){
        var HomeView = Backbone.View.extend({

            initialize: function(){

            $('tbody').empty();
            $('#photo-row').empty();


            //List existing galleries
            var galleries = new GalleryCollection();
            var galleryMetaDataListView = new GalleryMetaDataListView({ collection: galleries, el: '#gallery-container' });

               
            },

            render: function(){


                return this;
                
            }




        });

        return HomeView;
    });