import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// import css because Font Awesome
import '@fortawesome/fontawesome-svg-core/styles.css';
// add icon library
library.add(fab, fas);

// prevent flash of giant icons
export { default } from './App';
