import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';

import Ajax from 'metal-ajax/src/Ajax';
import Dropdown from 'metal-dropdown/src/Dropdown';
import MultiMap from 'metal-multimap/src/MultiMap';

import templates from './PokedexAddPokemon.soy';
import pokemonViewTemplates from './PokemonListItem.soy';
import PokemonFilter from './PokemonFilter.es';

class PokedexAddPokemon extends Component {
	/**
	 * @inheritDoc
	 */
	constructor(opt_config) {
		opt_config.originalPokemonList = opt_config.pokemons.slice();

		super(opt_config);

		this.getPokemonsURL = opt_config.getPokemonsURL;

		this.start = 0;
		this.end = 8;

		//temporal
		this.getPokemons();
	}

	getPokemons() {
		this.loading = true;

		let body = new MultiMap();

		body.add(this.portletNamespace + 'start', this.start);
		body.add(this.portletNamespace + 'end', this.end);

		Ajax.request(
			this.getPokemonsURL,
			'GET',
			null,
			null,
			body
		)
		.then((response) => {
			this.pokemons = this.pokemons.concat(JSON.parse(response.response));
			this.originalPokemonList = this.originalPokemonList.concat(JSON.parse(response.response));

			this.start += 8;
			this.end += 8;

			this.loading = false;
		});
	}

	updatePokemons(pokemons) {
		this.pokemons = pokemons;
	}
}

PokedexAddPokemon.STATE = {
	loading: {
		value: false
	},

	pokemons: {
		value: []
	}
};

// Register component
Soy.register(PokedexAddPokemon, templates);

export default PokedexAddPokemon;