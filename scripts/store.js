'use strict';

const store = (function () {
  const items = [];
  let hideCheckedItems = false;
  let searchTerm = '';

  return {
    items,
    hideCheckedItems,
    searchTerm
  };

}() );

