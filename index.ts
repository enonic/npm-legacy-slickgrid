// These are peerDependencies, aka expected to exist the in global scope.
// import 'jquery'; // slick.grid has code that checks for jQuery
// import 'jquery-ui/ui/widgets/sortable'; // slick.grid has code that checks for $.fn.sortable

// The newest version on npmjs.com is 2.2.2, 10 years ago, so I suspect we have a custom version of this
// https://www.npmjs.com/package/jquery.event.drag?activeTab=versions
import './lib/jquery.event.drag-2.3.js'; // slick.grid has code that checks for jQuery.fn.drag

// The newest version on npmjs.com is 2.2.2, 7 years ago, so I suspect we have a custom version of this
// https://www.npmjs.com/package/jquery.event.drop?activeTab=versions
import './lib/jquery.event.drop-2.3.js';

import './slick.core.js'; // slick.grid has code that checks for Slick
import './slick.grid.js'; // NOTE: Requires jquery-ui/ui/widgets/sortable
import './slick.dataview.js';
import './slick.remotemodel.js';
import './slick.rowselectionmodel.js';
import './slick.checkboxselectcolumn.js';
import './slick.rowmovemanager.js';
