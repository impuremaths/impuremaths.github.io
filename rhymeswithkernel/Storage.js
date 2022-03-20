(function(window) {

    function Storage(identity) {
        this.identity = identity;
    }

    Storage.prototype.saveEntry = function saveEntry(entry) {

        var store = this._getStore();

        entry.id = store.nextId;

        store.entries[entry.id] = entry;
        store.nextId++;

        this._setStore(store);

        return true
    }

    Storage.prototype.deleteEntry = function deleteEntry(entry) {

        var store = this._getStore();

        delete store.entries[entry.id];
        this._setStore(store);

        return true;
    }

    Storage.prototype.queryEntries = function queryEntries() {
        var store = this._getStore();

        return store.entries;
    }


    Storage.prototype.queryTags = function queryTags() {
        
        var store = this._getStore();
        var tags = {};

        for (const id in store.entries) {
            for (const tag of store.entries[id].tags) {
                if (!tags.hasOwnProperty(tag)) {
                    tags[tag] = new window.app.Tag(tag, []);
                }
                tags[tag].entries.push(id);
            }
        }

        return tags;
    }

    Storage.prototype._getStore = function _getStore() {
        var store = localStorage.getItem(this.identity);
        return store ? JSON.parse(store) : { entries: {}, nextId: 0 };
    }

    Storage.prototype._setStore = function _setStore(store) {
        localStorage.setItem(this.identity, JSON.stringify(store));
    }

    window.app = window.app || {};
    window.app.Storage = Storage;

})(window);
