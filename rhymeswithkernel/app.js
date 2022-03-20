(function () {

    var model = new window.app.Model("journal");
    var view = new window.app.View();

    view.renderComposer();
    view.renderEntries(model.entries);
    view.renderTags(model.tags);

    view.bindTagHandler(function(id) {
        if (id) {
            var res = model.queryEntriesByTags(new Set([id]));
            view.renderEntries(res);
        } else {
            view.renderEntries(model.entries);
        }
    });

    view.bindDeleteEntryHandler(function(id) {
        model.deleteEntry(id);
        view.renderEntries(model.entries);
        view.renderTags(model.tags);
    });

    view.bindSaveComposerHandler(function(content) {
        if (content) {
            model.addEntry(content);
            view.renderComposer();
            view.renderEntries(model.entries);
            view.renderTags(model.tags);
        }
    });

})();
