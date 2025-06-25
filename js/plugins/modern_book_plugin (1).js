/*:
 * @target MZ
 * @plugindesc Modern-style interactive book viewer for RPG Maker MZ.
 * @author GPT
 *
 * @command OpenBook
 * @text Open Book
 * @desc Opens the specified book file from the books folder.
 *
 * @arg bookFile
 * @text Book JSON File
 * @desc Name of the JSON book file to open (e.g., \"mybook.json\").
 * @default mybook.json
 */

var Imported = Imported || {};
Imported.ModernBookPlugin = true;

(() => {
    var pluginName = \"ModernBookPlugin\";
    var parameters = PluginManager.parameters(pluginName);

    PluginManager.registerCommand(pluginName, \"OpenBook\", args => {
        const bookFile = args.bookFile;
        SceneManager.push(Scene_ModernBook);
        SceneManager.prepareNextScene(bookFile);
    });

    class Scene_ModernBook extends Scene_MenuBase {
        static prepare(bookFile) {
            this._bookFile = bookFile;
        }

        create() {
            super.create();
            this.loadBookData();
        }

        loadBookData() {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `books/${Scene_ModernBook._bookFile}`);
            xhr.overrideMimeType('application/json');
            xhr.onload = () => {
                if (xhr.status < 400) {
                    this._bookData = JSON.parse(xhr.responseText);
                    this.createBookWindow();
                } else {
                    console.error('Failed to load book file');
                    this.popScene();
                }
            };
            xhr.onerror = () => this.popScene();
            xhr.send();
        }

        createBookWindow() {
            const rect = new Rectangle(50, 50, Graphics.width - 100, Graphics.height - 100);
            this._bookWindow = new Window_BookViewer(rect, this._bookData);
            this.addChild(this._bookWindow);
        }

        update() {
            super.update();
            if (Input.isTriggered('cancel')) this.popScene();
        }
    }

    class Window_BookViewer extends Window_Base {
        constructor(rect, bookData) {
            super(rect);
            this._bookData = bookData;
            this._currentPage = 0;
            this.refresh();
        }

        refresh() {
            this.contents.clear();
            const pages = this._bookData.pages || [];
            const leftPage = pages[this._currentPage] || '';
            const rightPage = pages[this._currentPage + 1] || '';

            const midX = this.contentsWidth() / 2;
            const padding = 20;

            this.drawTextEx(leftPage, padding, padding, midX - padding * 2);
            this.drawTextEx(rightPage, midX + padding, padding, midX - padding * 2);
        }

        nextPage() {
            if (this._currentPage + 2 < this._bookData.pages.length) {
                this._currentPage += 2;
                this.refresh();
                SoundManager.playCursor();
            }
        }

        prevPage() {
            if (this._currentPage >= 2) {
                this._currentPage -= 2;
                this.refresh();
                SoundManager.playCursor();
            }
        }

        processHandling() {
            if (Input.isTriggered('right')) this.nextPage();
            if (Input.isTriggered('left')) this.prevPage();
        }

        update() {
            super.update();
            this.processHandling();
        }
    }

    SceneManager.prepareNextScene = function(bookFile) {
        Scene_ModernBook.prepare(bookFile);
    };
})();
