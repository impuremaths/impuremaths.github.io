(function(window) {

    function View() {
        this.composerDiv = window.document.querySelector("#composer");
        this.entriesDiv = window.document.querySelector("#entries");
        this.tagsDiv = window.document.querySelector("#tags");
    }

    View.prototype.renderComposer = function renderComposer(content) {
        this.composerDiv.innerHTML = `
            <div>
                <h2>Add an entry</h2>
                <textarea id="composer-input" rows="10" placeholder="Write an entry here. Add a tag with #your_tag.">${content || ""}</textarea><br />
                <button type="button" id="composer-save">Save</button>
            </div>
        `;
    }

    View.prototype.renderEntries = function renderEntries(entries) {
        var htmlSnippet = "<h2>Entries</h2>";
        for (const id in entries) {
            var entryTime = new Date(entries[id].timestamp);
            htmlSnippet += `
                <p class="entry" id="${id}">
                    <span class="entry-date">${entryTime.toLocaleString()}</span>
                    <span class="entry-delete">x</span><br />
                    ${entries[id].content}
                </p>
            `
        }
        this.entriesDiv.innerHTML = htmlSnippet;
    }

    View.prototype.renderTags = function renderTags(tags) {
        var htmlSnippet = `
            <h2>Tags</h2>
            <span class="tag" id="">display all</span>
        `;
        for (const tag in tags) {
            htmlSnippet += `
                <span class="tag" id="${tag}">${tag} (${tags[tag].entries.length})</span>
            `
        }
        this.tagsDiv.innerHTML = htmlSnippet;
    }

    View.prototype.bindSaveComposerHandler = function bindSaveComposerHandler(handler) {
        var self = this;
        this.composerDiv.addEventListener("click", function(event) {
            if (event.target.id == "composer-save") {
                handler(self.composerDiv.querySelector("#composer-input").value);
            }
        });
    }

    View.prototype.bindDeleteEntryHandler = function bindDeleteEntryHandler(handler) {
        this.entriesDiv.addEventListener("click", function(event) {
            if (event.target.className == "entry-delete") {
                handler(event.target.parentNode.id);
            }
        });
    }

    View.prototype.bindTagHandler = function bindTagHandler(handler) {
        this.tagsDiv.addEventListener("click", function(event) {
            handler(event.target.id);
        });
    }

    window.app = window.app || {};
    window.app.View = View;

})(window);
