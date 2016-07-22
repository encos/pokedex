import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';

import Dropdown from 'metal-dropdown/src/Dropdown';
import Tooltip from 'metal-tooltip/src/Tooltip';

import templates from './PokedexListPokemon.soy';
import pokemonViewTemplates from './PokemonListItem.soy';
import PokemonFilter from './PokemonFilter.es';

class PokedexListPokemon extends Component {
	/**
	 * @inheritDoc
	 */
	constructor(opt_config) {
		opt_config.listPokemons = opt_config.pokemons.slice();
		super(opt_config);
	}

	updatePokemons(pokemons) {
		this.pokemons = pokemons;
	}
}

PokedexListPokemon.STATE = {
	action: {
		// The default value will be: `true`.
		value: 'list'
	}
};


// Register component
Soy.register(PokedexListPokemon, templates);

export default PokedexListPokemon;