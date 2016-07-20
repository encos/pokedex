import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';

import Dropdown from 'metal-dropdown/src/Dropdown';
import Tooltip from 'metal-tooltip/src/Tooltip';

import templates from './PokedexView.soy';

class PokedexView extends Component {
	/**
	 * @inheritDoc
	 */
	constructor(opt_config) {
		super(opt_config);
	}
}

// Register component
Soy.register(PokedexView, templates);

export default PokedexView;