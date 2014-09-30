//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
//>>description: Behavior mixin to mark first and last visible item with special classes.
//>>label: First & Last Classes
//>>group: Widgets

define( [ "jquery", "../helpers" ], function( jQuery ) {
//>>excludeEnd("jqmBuildExclude");
(function( $, undefined ) {
$.mobile.behaviors._optionsToClasses = {

	// BEGIN DEPRECATED CODE - TO BE REMOVED IN 1.6.0
	_updateClassesOption: function( defaultStyleOptions, currentOptions ) {
		var optionName,
			modifiedOptions = {};

		// Check against the original style options to see if any of them have changed for this
		// instance of the widget
		for ( optionName in defaultStyleOptions ) {
			if ( defaultStyleOptions[ optionName ] !== currentOptions[ optionName ] ) {
				modifiedOptions[ optionName ] = currentOptions[ optionName ];
			}
		}

		// Update classes option to reflect new style option values
		this._optionsToClasses( defaultStyleOptions, modifiedOptions );
	},

	_convertClassesToHash: function( classValue ) {
		var index,
			returnValue = {};

		classValue = classValue ? classValue.split( " " ) : [];
		for ( index in classValue ) {
			returnValue[ classValue[ index ] ] = true;
		}

		return returnValue;
	},

	_booleanOptionToClass: function( option, className, oldClasses, newClasses, condition ) {
		if ( option !== undefined ) {
			( ( condition === undefined ? option : condition ) ?
				newClasses : oldClasses )[ className ] = true;
			return true;
		}

		return false;
	},

	_calculateClassKeyValue: function( currentValue, classesToRemove, classesToAdd ) {
		var currentValueIndex, oneClass,
			newValue = [];

		currentValue = currentValue ? currentValue.split( " " ) : [];

		// Copy the classes from the current value to the new value, while examining each as to
		// whether it should be present in the new value
		for ( currentValueIndex in currentValue ) {
			oneClass = currentValue[ currentValueIndex ];

			// If this class was supposed to be added, well, it's already added
			if ( oneClass in classesToAdd ) {
				delete classesToAdd[ currentValue[ currentValueIndex ] ];
			}

			// If we're supposed to remove this class, don't add it to the result
			if ( oneClass in classesToRemove ) {
				continue;
			}
			newValue.push( oneClass );
		}

		// Add the classes which need to be added and which were not already present in the current
		// value
		for ( oneClass in classesToAdd ) {
			newValue.push( oneClass );
		}

		return newValue.join( " " );
	}
};

	// END DEPRECATED CODE
})( jQuery );
//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
});
//>>excludeEnd("jqmBuildExclude");
