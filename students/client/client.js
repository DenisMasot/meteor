// Helpers
Template.eleves.helpers
(
	{
		all_eleves : function ()
		{
			return eleves.find();

		}
	}
);

// Events
Template.eleves.events
(
	{
		'click #submit_eleve' : function ( event, template )
		{
			event.preventDefault();
			var $name = template.find( "#name" );
			var $firstname = template.find( "#firstname" );
			var $age = template.find( "#age" );
			var $citie = template.find( "#citie" );

			eleve_id = eleves.insert( {name : $name.value, firstname : $firstname.value, age : parseInt($age.value), citie : $citie.value } );

		},
		'click #submit_delete' : function ( event )
		{
			event.preventDefault();
			eleves.remove( this._id );
		},
		'click #submit_update' : function ( event, template)
		{
			event.preventDefault();
			var $name = template.find( "#name" );
			var $firstname = template.find( "#firstname" );
			var $age = template.find( "#age" );
			var $citie = template.find( "#citie" );

			eleves.update(
				this._id,
				{
					$set : {name : $name.value, firstname : $firstname.value, age : $age.value, citie : $citie.value }
				}
			);
		}
	}
);
