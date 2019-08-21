'use strict';
/* global store, cuid, Item */

// eslint-disable-next-line no-unused-vars

const store = (function () {
  const items = [];
  let hideCheckedItems = false;
  let searchTerm = '';

  const findByID = function(id) {
    return store.items.find(item => item.id === id);
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    } catch(e) {
      console.log(e.message);
    }
  };

  const findAndToggleChecked = function(id) {
    const toggleThis = this.findByID(id);
    toggleThis.checked = !toggleThis.checked;
  };

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      findByID(id).name = newName;
    } catch(e) {
      console.log(e.message);
    }
  };

  const findAndDelete = function(id) {
    const deleteThis = this.items.findIndex(item => item.id === id);
    this.items.splice(deleteThis, 1);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(newSearchTerm) {
    this.searchTerm = newSearchTerm;
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findByID,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };

}() );

