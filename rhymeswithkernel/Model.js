(function(window) {

    function Entry(content, id, timestamp, tags) {
        this.content = content;
        this.id = id;
        this.timestamp = timestamp || Date.now();
        this.tags = tags || content.match(/#[a-zA-Z0-9_-]+/g) || [];
    }

    function Tag(name, entries, timestamp) {
        this.name = name;
        this.entries = entries || [];
        this.timestamp = timestamp || Date.now();
    }

    function Model(identity) {
        this.identity = identity;
        this.storage = new app.Storage(this.identity);
        this.entries = this.storage.queryEntries() || {};
        this.tags = this.storage.queryTags() || {};
    }

    Model.prototype.addEntry = function addEntry(content) {

        var entry = new Entry(content);
        if (this.storage.saveEntry(entry)) {
            this.entries[entry.id] = entry;

            for (let tag of entry.tags) {
                if (this.tags.hasOwnProperty(tag)) {
                    this.tags[tag].entries.push(entry.id);
                    this.tags[tag].timestamp = Date.now();
                } else {
                    this.tags[tag] = new Tag(tag, [entry.id]);
                }
            };
        }
        return entry;

    }

    Model.prototype.deleteEntry = function deleteEntry(id) {

        var entry;
        if (id in this.entries) {
            entry = this.entries[id];
            if (this.storage.deleteEntry(entry)) {
                delete this.entries[id];
            }

            for (let t of entry.tags) {
                var tag = this.tags[t];

                if (tag.entries.filter(x => x != entry.id).length == 0) {
                    delete this.tags[t];
                }
            }
        }
        return entry;

    }

    Model.prototype.queryEntriesByTags = function queryEntriesByTags(tags) {

        var queryEntries = {};
        for (const id in this.entries) {
            var entry = this.entries[id];
            if (Array.from(entry.tags).filter(x => tags.has(x)).length > 0) {
                queryEntries[id] = entry;
            }
        }
        return queryEntries;

    }

    window.app = window.app || {};
    window.app.Model = Model;
    window.app.Tag = Tag;
    window.app.Entry = Entry;

})(window);
