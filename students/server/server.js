Meteor.startup
(
	function ()
	{
		// Populate once
		if ( !eleves.find().count() )
		{
			eleves.insert( { name : "Masot", firstname : "Denis", age : 25, citie: 'Drancy'} );
		}
	}
);
