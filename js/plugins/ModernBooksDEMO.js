/*:
 * @target MZ
 * @plugindesc Adds a new way to create and read books for your game!
 * @author  ⠀Undermax | Maxii1996
 * @url https://undermax.itch.io/
 * @help
 * ⠀ 
 *     ――― DETAILS ――――――――――――――――――――――――
 * 
 *    Plugin Edition:       ⦿ Release  ◯ Alternative
 *    Plugin Type:          ◯ Full  ⦿ Demo
 *    Plugin Name:          Modern Books
 *    Plugin Version:       1.0.0 
 *    Developed by:         Undermax | Maxii1996
 *   
 *     ――― SUPPORT ――――――――――――――――――――――――
 * 
 *    Itch.io Page:         https://undermax.itch.io
 *    Official Website:     https://undermax.online
 *    Plugins Support:      https://undermax.online/undermax/support.html
 *    Plugins Licence:      https://undermax.online/undermax/LicenceTerms.html
 * 
 *     ――― CHANGELOG ――――――――――――――――――――――――
 *
 *     ⦿ 1.0.0                     DEMO Version
 *        - No more updates for demo version.
 * 
 *     ――― DOCUMENTATION ――――――――――――――――――――――――
 * 
 * 
 *       With this plugin you'll be able to implement a new  
 *       system allowing your players to read books!
 * 
 *      Upgrade to the FULL version to unlock all features,  
 *      including the ability to use trigger actions when
 *      opening a book, and the option to encrypt your books!
 *      (ebk format).
 *  
 *       Notice:  
 *  
 *       This plugin requires our online tool: Undermax Book  
 *       Maker, which is free and exclusively designed for use  
 *       with this plugin. The same tool works for both DEMO  
 *       and FULL versions of the plugin. However, the DEMO  
 *       version doesn't support encrypted books. 
 * 
 *       You can access the tool here:  
 *    https://maxii1996.github.io/Undermax-Book-Editor-Manager/welcome.html  
 *  
 *       How to use this plugin?  
 *  
 *       We highly recommend watching the tutorial video, as  
 *       this is not a Plug & Play plugin. Some initial setup  
 *       steps are required before use.  
 *  
 *       1.0 Additional Libraries:  
 *       You must include the following libraries (copy and  
 *       paste these folders):  
 *  
 *       - "quill"  
 *       - "remixicon"  
 *  
 *       Place them inside your root project folders in the  
 *       appropriate location (inside js/libs/*).  
 *       You will find these folders included in the downloaded  
 *       file and in the demo project.  
 *  
 *       1.1 Library Reference:  
 *  
 *       If you're already familiar with the process, great!  
 *       If not, open the "index.html" file in your project  
 *       root using a code editor (Recommended: VSCODE or  
 *       Notepad++), and add the following lines:  
 *  
 *    <link rel="stylesheet" href="js/libs/quill/quill.snow.css">  
 *    <link rel="stylesheet" href="js/libs/remixicon/remixicon.css">  
 *    <script src="js/libs/quill/quill.min.js"></script>
 *  
 *       We recommend placing these lines right below:  
 *       <link rel="apple-touch-icon" href="icon/icon.png">  
 *  
 *       For more information, please refer to the Example Project  
 *       included with this plugin.  
 *  
 *       2- Plugin Installation:  
 *  
 *       Make sure your project contains a folder named  
 *       "books" at the root. If it doesn't exist, create it,  
 *       as we will store all books there.  
 *  
 *       Proceed with the plugin installation normally. We  
 *       recommend not changing settings unless you're sure  
 *       about what you're doing.  
 *  
 *       The main feature is the use of libraries, which you  
 *       will find at the top of the plugin parameters.  
 *  
 *       Here you can define the libraries however you like:  
 *  
 *       What is a book library?  
 *  
 *       A book library is a collection of books. However, it could  
 *       also be a single-book library if you prefer.  
 *       Essentially, it's a "book pack" that users can browse  
 *       and read from.  
 *  
 *       With this plugin, you can open individual books or  
 *       build full libraries. Use whichever method fits best.  
 *  
 *       To call a library, use the corresponding plugin  
 *       command along with its LIBRARY ID. This identifier  
 *       lets you reference the specific library you want to  
 *       open.  
 *  
 *       3. Book Configuration:  
 *  
 *       Managing books is relatively easy:  
 *  
 *       The content of each book is handled using our Online  
 *       Editor. Since we built this editor from scratch, it’s  
 *       quite basic. Don’t expect tools like Word or Google  
 *       Docs, but it does support simple formatting like size,  
 *       color, and alignment.  
 *  
 *       -> Differences between the online book editor and  
 *          what appears in-game.  
 *  
 *       What you see in the online editor (Preview) may not  
 *       look exactly the same in the game. This can happen  
 *       due to factors such as your project’s screen  
 *       resolution, scale, plugin settings, etc.  
 *  
 *       We recommend identifying the best page size for your  
 *       project and consistently working with that, to avoid  
 *       any content being cut off.  
 *  
 *       Once your book is ready, you can download it and  
 *       place it inside your project’s "books" folder.  
 *  
 *       Book actions are managed within the plugin itself.  
 *       By default, books have no preconfigured actions.  
 *  
 *       4. Compatibility & Functionality:  
 *  
 *       The plugin should work with virtual buttons, allowing  
 *       for mouse clicks, as well as keyboard or controller  
 *       inputs.  
 *  
 *       Navigation is simple: use arrow keys to move through  
 *       the library or flip pages. Press Enter to open a book,  
 *       and Esc to go back.  
 *  
 *       Due to the complexity of this plugin, some issues may  
 *       arise, which we’ll fix as users report them.  
 *       Don’t forget to follow Undermax on Itch.io, BlueSky,  
 *       and our official website.  
 *  
 *       Enjoy the plugin :)  
 *  
 * 
 * 
 *     ――― END OF DOCUMENTATION ―――――――――――――――――――
 *
 * @command OpenBook
 * @text Open Book
 * @desc Opens the specified book file.
 *
 * @arg FileName
 * @text Book File
 * @desc Name of the book JSON file in the "books" folder.
 * @default example.json
 * @type string
 *
 * @param Button Settings
 * @text Button Settings
 * @desc Parameters for the buttons in the UI.
 *
 * @param ButtonSize
 * @parent Button Settings
 * @text Button Size
 * @desc The size (width and height) of the buttons.
 * @default 48
 * @type number
 *
 * @param ButtonPositionX
 * @parent Button Settings
 * @text Button Position X
 * @desc The X offset for the button controls.
 * @default 20
 * @type number
 *
 * @param ButtonPositionY
 * @parent Button Settings
 * @text Button Position Y
 * @desc The Y offset for the button controls.
 * @default 20
 * @type number
 *
 * @param ButtonColorNormal
 * @parent Button Settings
 * @text Button Color (Normal)
 * @desc The normal state color for the buttons.
 * @default #000000
 *
 * @param ButtonColorHover
 * @parent Button Settings
 * @text Button Color (Hover)
 * @desc The hover state color for the buttons.
 * @default #333333
 *
 * @param ButtonGap
 * @parent Button Settings
 * @text Button Gap
 * @desc The gap between buttons.
 * @default 20
 * @type number
 *
 * @param CloseButtonText
 * @parent Button Settings
 * @text Close Button Text
 * @desc Text for the close button (default uses current icon).
 * @default auto
 *
 * @param NextPageText
 * @parent Button Settings
 * @text Next Page Text
 * @desc Text for the next page button (default uses current icon).
 * @default auto
 *
 * @param BackPageText
 * @parent Button Settings
 * @text Back Page Text
 * @desc Text for the back page button (default uses current icon).
 * @default auto
 *
 * @param Sound Settings
 * @text Sound Settings
 * @desc Parameters for sound effects.
 *
 * @param ChangePageSound
 * @parent Sound Settings
 * @text Change Page Sound
 * @desc Sound effect to play when changing pages.
 * @default Book1
 * @type file
 * @dir audio/se/
 *
 * @param ChangePageVolume
 * @parent Sound Settings
 * @text Change Page Volume
 * @desc The volume level for the page change sound.
 * @default 90
 * @type number
 *
 * @param ChangePagePitch
 * @parent Sound Settings
 * @text Change Page Pitch
 * @desc The pitch for the page change sound.
 * @default 100
 * @type number
 *
 */



(function(_0x2592d0,_0x147683){const _0x533c1f=_0x598f,_0x58dc39=_0x2592d0();while(!![]){try{const _0x365749=-parseInt(_0x533c1f(0x27c))/0x1*(parseInt(_0x533c1f(0x21b))/0x2)+-parseInt(_0x533c1f(0x20f))/0x3*(parseInt(_0x533c1f(0x210))/0x4)+-parseInt(_0x533c1f(0x281))/0x5*(-parseInt(_0x533c1f(0x29b))/0x6)+parseInt(_0x533c1f(0x23f))/0x7+-parseInt(_0x533c1f(0x250))/0x8+-parseInt(_0x533c1f(0x290))/0x9*(parseInt(_0x533c1f(0x231))/0xa)+parseInt(_0x533c1f(0x22e))/0xb;if(_0x365749===_0x147683)break;else _0x58dc39['push'](_0x58dc39['shift']());}catch(_0x3241e8){_0x58dc39['push'](_0x58dc39['shift']());}}}(_0x1481,0xea604));const _0x278d7f=(function(){let _0x12c059=!![];return function(_0x59263b,_0xc7c292){const _0x1c0d01=_0x12c059?function(){const _0x17e2f1=_0x598f;if(_0xc7c292){const _0x3ec40e=_0xc7c292[_0x17e2f1(0x24a)](_0x59263b,arguments);return _0xc7c292=null,_0x3ec40e;}}:function(){};return _0x12c059=![],_0x1c0d01;};}()),_0x4e8c05=_0x278d7f(this,function(){const _0x17da1b=_0x598f;return _0x4e8c05['toString']()[_0x17da1b(0x1ff)](_0x17da1b(0x1ef))['toString']()['constructor'](_0x4e8c05)[_0x17da1b(0x1ff)](_0x17da1b(0x1ef));});_0x4e8c05();function _0x1481(){const _0x47a49b=['handleInput','isTriggered','ButtonColorHover','357aIcyPe','60124FnFkIR','_contextMenuHandler','innerHTML','_lastHeight','createElement','min','link','page-content\x20ql-editor','cover-back','contentHtml','info','172erAlht','stylesheet','backCoverColor','_resizeHandler','querySelector','updateBookState','head','transformOrigin','createFrontCover','setupPages','table','updateBookContainerPosition','position','ChangePageVolume','getBoundingClientRect','updateColorFilter','auto','application/json','createBackCover','43713692HGlDBf','Book1','getComputedStyle','290lfKVLO','log','prototype','RemixIcon\x20CSS\x20loaded\x20locally','style','coverColor','RemixIcon','_lastWidth','textAlign','createHTMLOverlay','update','px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20','transparent','_remixIconAdded','10816015rHqSXz','flex','pop','_colorFilter','blockGameControl','removeChild','_bookContainer','className','createDisplayObjects','flip-book','resize','apply','body','_flipInProgress','left','center','backgroundColor','4720432UiVIEc','right','.page','#222222','createWindowLayer','flipbook-html-overlay','#FFFFFF','escape','_currentPageIndex','Error\x20loading\x20book\x20data:\x20','removeEventListener','initialize','boxWidth','link[href*=\x22quill.snow.css\x22]','CloseButtonText','onload','width','bookWidth','#333333','book-controls','FileName','button','textContent','cover','ButtonPositionY','px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x20','terminate','rotateY(-180deg)','top','<i\x20class=\x22ri-arrow-left-line\x22></i>','bind','minWidth','toLowerCase','edge-shading','height','playSe','createSpriteset','remixicon','px)','top\x20left','cancel','forEach','transform','back-cover','18508DaqTEF','toString','{}.constructor(\x22return\x20this\x22)(\x20)','constructor','playCancel','26285FvMiLp','OpenBook','hidden','contextmenu','parse','backgroundImage','loadQuillCSS','_backCover','pointerEvents','zIndex','call','error','loadExternalResources','overflow','display','553041lCbLAM','_mapDisabled','_realScale','href','querySelectorAll','ChangePageSound','_lastScale','_htmlContainer','alignment','front-page','push','1362ngmYpF','_frontPage','div','_bookData','alignItems','length','ButtonColorNormal','open','px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20','buildPagesHTML','addEventListener','font-family','prevPage','appendChild','translateX(','ButtonGap','ButtonPositionX','rel','_wrapper','absolute','warn','_loading','send','nextPage','ModernBooksDEMO','background','(((.+)+)+)+$','updateBookDimensions','overrideMimeType','prepareNextScene','return\x20(function()\x20','scale(','#000000','prepare','ri-arrow-left-line','create','status','_fileName','_spriteset','rotateY(0deg)','filters','_pages','search',';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.book-controls\x20button:focus\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.book-controls\x20button:active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.book-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.37);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backdrop-filter:\x20blur(1px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20transform\x202s,\x20width\x200.9s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform-origin:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20','100%','shift','onclick','bookHeight','link[href*=\x22remixicon.css\x22]','justifyContent','loadBookData','exception','BackPageText','_quillCssAdded','_frontCover'];_0x1481=function(){return _0x47a49b;};return _0x1481();}const _0x4477ed=(function(){let _0x122c3e=!![];return function(_0x196f05,_0xbc950f){const _0x1a7de6=_0x122c3e?function(){const _0x35b26c=_0x598f;if(_0xbc950f){const _0x281f2d=_0xbc950f[_0x35b26c(0x24a)](_0x196f05,arguments);return _0xbc950f=null,_0x281f2d;}}:function(){};return _0x122c3e=![],_0x1a7de6;};}()),_0x4d6c1d=_0x4477ed(this,function(){const _0x2d6e9a=_0x598f;let _0xec9098;try{const _0x11f2d8=Function(_0x2d6e9a(0x1f3)+_0x2d6e9a(0x27e)+');');_0xec9098=_0x11f2d8();}catch(_0x2fd545){_0xec9098=window;}const _0x3761c0=_0xec9098['console']=_0xec9098['console']||{},_0x1cda09=[_0x2d6e9a(0x232),_0x2d6e9a(0x2af),_0x2d6e9a(0x21a),_0x2d6e9a(0x28c),_0x2d6e9a(0x208),_0x2d6e9a(0x225),'trace'];for(let _0x59c077=0x0;_0x59c077<_0x1cda09['length'];_0x59c077++){const _0x31ef68=_0x4477ed[_0x2d6e9a(0x27f)][_0x2d6e9a(0x233)]['bind'](_0x4477ed),_0x897129=_0x1cda09[_0x59c077],_0x22e5a7=_0x3761c0[_0x897129]||_0x31ef68;_0x31ef68['__proto__']=_0x4477ed['bind'](_0x4477ed),_0x31ef68[_0x2d6e9a(0x27d)]=_0x22e5a7[_0x2d6e9a(0x27d)]['bind'](_0x22e5a7),_0x3761c0[_0x897129]=_0x31ef68;}});function _0x598f(_0x95a29b,_0xc4827d){const _0x2e3c39=_0x1481();return _0x598f=function(_0x4d6c1d,_0x4477ed){_0x4d6c1d=_0x4d6c1d-0x1ee;let _0x2f5423=_0x2e3c39[_0x4d6c1d];return _0x2f5423;},_0x598f(_0x95a29b,_0xc4827d);}_0x4d6c1d(),((()=>{const _0x15e5c6=_0x598f,_0x22a442=_0x15e5c6(0x2b3),_0x38335c=PluginManager['parameters'](_0x22a442),_0x2fee14=Number(_0x38335c['ButtonSize']||0x30),_0xb1ee5e=Number(_0x38335c[_0x15e5c6(0x2ab)]||0x14),_0x9794f3=Number(_0x38335c[_0x15e5c6(0x268)]||0x14),_0x366671=_0x38335c[_0x15e5c6(0x2a1)]||_0x15e5c6(0x1f5),_0x2aa540=_0x38335c[_0x15e5c6(0x20e)]||_0x15e5c6(0x262),_0x4de1cb=Number(_0x38335c[_0x15e5c6(0x2aa)]||0x14),_0x3d639a=_0x38335c[_0x15e5c6(0x25e)]||_0x15e5c6(0x22b),_0xe240ff=_0x38335c['NextPageText']||'auto',_0x5b4758=_0x38335c[_0x15e5c6(0x209)]||_0x15e5c6(0x22b),_0x3d5661=_0x38335c[_0x15e5c6(0x295)]||_0x15e5c6(0x22f),_0x43c056=Number(_0x38335c[_0x15e5c6(0x228)]||0x5a),_0x10a11f=Number(_0x38335c['ChangePagePitch']||0x64);PluginManager['registerCommand'](_0x22a442,_0x15e5c6(0x282),_0x431807=>{const _0x2c80df=_0x15e5c6,_0x3fb0c9=_0x431807[_0x2c80df(0x264)]||'';SceneManager[_0x2c80df(0x29a)](_0x20e6fe),SceneManager[_0x2c80df(0x1f2)](_0x3fb0c9);});function _0x20e6fe(){this['initialize'](...arguments);}_0x20e6fe['prototype']=Object[_0x15e5c6(0x1f8)](Scene_Base[_0x15e5c6(0x233)]),_0x20e6fe['prototype']['constructor']=_0x20e6fe,_0x20e6fe[_0x15e5c6(0x233)][_0x15e5c6(0x25b)]=function(){const _0x53a3e2=_0x15e5c6;Scene_Base[_0x53a3e2(0x233)][_0x53a3e2(0x25b)][_0x53a3e2(0x28b)](this),this['_fileName']='',this[_0x53a3e2(0x29e)]=null,this['_pages']=[],this[_0x53a3e2(0x29c)]=null,this[_0x53a3e2(0x258)]=0x0,this[_0x53a3e2(0x2b0)]=!![],this[_0x53a3e2(0x24c)]=![],this[_0x53a3e2(0x297)]=null,this[_0x53a3e2(0x2ad)]=null,this[_0x53a3e2(0x245)]=null,this[_0x53a3e2(0x20b)]=null,this['_backCover']=null,this['_quillCssAdded']=![],this['_remixIconAdded']=![],this['_resizeHandler']=null,this[_0x53a3e2(0x242)]=null,this[_0x53a3e2(0x211)]=null,this[_0x53a3e2(0x1fd)]=[];},_0x20e6fe[_0x15e5c6(0x233)][_0x15e5c6(0x1f6)]=function(_0x4464d2){const _0x504bbf=_0x15e5c6;this[_0x504bbf(0x1fa)]=_0x4464d2;},_0x20e6fe['prototype']['createColorFilter']=function(){},_0x20e6fe['prototype'][_0x15e5c6(0x22a)]=function(){},_0x20e6fe[_0x15e5c6(0x233)][_0x15e5c6(0x1f8)]=function(){const _0x4d1d1e=_0x15e5c6;Scene_Base[_0x4d1d1e(0x233)]['create'][_0x4d1d1e(0x28b)](this),this[_0x4d1d1e(0x247)](),this[_0x4d1d1e(0x28d)](),this['loadBookData']();},_0x20e6fe[_0x15e5c6(0x233)][_0x15e5c6(0x247)]=function(){const _0x3c470e=_0x15e5c6;this[_0x3c470e(0x274)](),this[_0x3c470e(0x254)]();},_0x20e6fe['prototype'][_0x15e5c6(0x274)]=function(){const _0x833d47=_0x15e5c6;this[_0x833d47(0x1fb)]=new Spriteset_Map(),this['addChild'](this[_0x833d47(0x1fb)]);},_0x20e6fe[_0x15e5c6(0x233)]['loadExternalResources']=function(){const _0x2fbf14=_0x15e5c6;this[_0x2fbf14(0x287)](),this['loadRemixIcon']();},_0x20e6fe[_0x15e5c6(0x233)]['loadQuillCSS']=function(){const _0x5dc3b3=_0x15e5c6;if(this['_quillCssAdded'])return;if(document[_0x5dc3b3(0x21f)](_0x5dc3b3(0x25d))){this[_0x5dc3b3(0x20a)]=!![];return;}const _0x54077c=document[_0x5dc3b3(0x214)](_0x5dc3b3(0x216));_0x54077c[_0x5dc3b3(0x2ac)]=_0x5dc3b3(0x21c),_0x54077c['href']='/js/libs/quill/quill.snow.css',document['head'][_0x5dc3b3(0x2a8)](_0x54077c),console[_0x5dc3b3(0x232)]('Quill\x20CSS\x20loaded\x20from:',_0x54077c['href']),this['_quillCssAdded']=!![];},_0x20e6fe[_0x15e5c6(0x233)]['loadRemixIcon']=function(){const _0x3f0477=_0x15e5c6;if(this['_remixIconAdded'])return;if(document[_0x3f0477(0x21f)](_0x3f0477(0x205))){const _0x10cc2f=document[_0x3f0477(0x214)]('i');_0x10cc2f[_0x3f0477(0x246)]=_0x3f0477(0x1f7),_0x10cc2f[_0x3f0477(0x235)][_0x3f0477(0x227)]='absolute',_0x10cc2f[_0x3f0477(0x235)]['opacity']='0',document['body'][_0x3f0477(0x2a8)](_0x10cc2f);const _0x2c45bd=window[_0x3f0477(0x230)](_0x10cc2f),_0x3de20a=_0x2c45bd['getPropertyValue'](_0x3f0477(0x2a6));document['body'][_0x3f0477(0x244)](_0x10cc2f);if(_0x3de20a['includes'](_0x3f0477(0x275))||_0x3de20a['includes'](_0x3f0477(0x237))){this[_0x3f0477(0x23e)]=!![];return;}}const _0x24ce43=document[_0x3f0477(0x214)](_0x3f0477(0x216));_0x24ce43['rel']=_0x3f0477(0x21c),_0x24ce43[_0x3f0477(0x293)]='js/libs/remixicon/remixicon.css',document[_0x3f0477(0x221)][_0x3f0477(0x2a8)](_0x24ce43),console[_0x3f0477(0x232)](_0x3f0477(0x234)),this[_0x3f0477(0x23e)]=!![];},_0x20e6fe[_0x15e5c6(0x233)][_0x15e5c6(0x207)]=function(){const _0x5a4402=_0x15e5c6,_0x844223='books/'+this['_fileName'],_0x179cf5=new XMLHttpRequest();_0x179cf5[_0x5a4402(0x2a2)]('GET',_0x844223),_0x179cf5[_0x5a4402(0x1f1)](_0x5a4402(0x22c)),_0x179cf5[_0x5a4402(0x25f)]=()=>{const _0x30a341=_0x5a4402;_0x179cf5[_0x30a341(0x1f9)]<0x190?(this[_0x30a341(0x29e)]=JSON[_0x30a341(0x285)](_0x179cf5['responseText']),this[_0x30a341(0x224)](),this['_loading']=![],this[_0x30a341(0x23a)]()):(this['_loading']=![],console[_0x30a341(0x28c)]('Failed\x20to\x20load\x20book\x20data:\x20'+_0x844223));},_0x179cf5['onerror']=()=>{const _0x43a545=_0x5a4402;this[_0x43a545(0x2b0)]=![],console[_0x43a545(0x28c)](_0x43a545(0x259)+_0x844223);},_0x179cf5[_0x5a4402(0x2b1)]();},_0x20e6fe[_0x15e5c6(0x233)]['setupPages']=function(){const _0x168ce5=_0x15e5c6;this[_0x168ce5(0x1fe)]=this[_0x168ce5(0x29e)]['pages']||[],this[_0x168ce5(0x1fe)][_0x168ce5(0x2a0)]>0x0&&(this[_0x168ce5(0x29c)]=this[_0x168ce5(0x1fe)][_0x168ce5(0x202)]()),this[_0x168ce5(0x1fe)][_0x168ce5(0x2a0)]>0x3&&(this[_0x168ce5(0x1fe)][_0x168ce5(0x2a0)]-0x2)%0x2!==0x0&&this[_0x168ce5(0x1fe)]['splice'](this['_pages'][_0x168ce5(0x2a0)]-0x1,0x0,{'backgroundColor':_0x168ce5(0x256),'backgroundImage':'','alignment':_0x168ce5(0x24d),'contentHtml':''});},_0x20e6fe['prototype'][_0x15e5c6(0x23a)]=function(){const _0x20b886=_0x15e5c6;if(this[_0x20b886(0x297)])return;this[_0x20b886(0x297)]=document[_0x20b886(0x214)]('div'),this[_0x20b886(0x297)]['id']=_0x20b886(0x255),this[_0x20b886(0x297)][_0x20b886(0x235)][_0x20b886(0x227)]=_0x20b886(0x2ae),this[_0x20b886(0x297)][_0x20b886(0x235)][_0x20b886(0x24d)]='0',this[_0x20b886(0x297)][_0x20b886(0x235)]['top']='0',this[_0x20b886(0x297)][_0x20b886(0x235)]['width']=_0x20b886(0x201),this[_0x20b886(0x297)][_0x20b886(0x235)]['height']=_0x20b886(0x201),this[_0x20b886(0x297)][_0x20b886(0x235)][_0x20b886(0x28a)]=0x2710,this[_0x20b886(0x297)][_0x20b886(0x235)]['backgroundColor']=_0x20b886(0x23d),this[_0x20b886(0x297)][_0x20b886(0x235)][_0x20b886(0x28e)]=_0x20b886(0x283),this['_htmlContainer']['style'][_0x20b886(0x289)]=_0x20b886(0x22b),this[_0x20b886(0x297)]['style'][_0x20b886(0x28f)]=_0x20b886(0x240),this['_htmlContainer']['style'][_0x20b886(0x206)]=_0x20b886(0x24e),this[_0x20b886(0x297)]['style'][_0x20b886(0x29f)]='center';const _0xb72b4a=document[_0x20b886(0x214)](_0x20b886(0x235));_0xb72b4a[_0x20b886(0x212)]='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x20{\x20cursor:\x20default\x20!important;\x20user-select:\x20none;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.flip-book\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition-duration:\x201s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20perspective:\x202000px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.cover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform-origin:\x20center\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20transform\x200.5s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x20200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform-style:\x20preserve-3d;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backface-visibility:\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x2015px\x202px\x20rgba(0,\x200,\x200,\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.cover-front\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backface-visibility:\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.cover-back\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20rotateY(180deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backface-visibility:\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.page\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform-origin:\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform-style:\x20preserve-3d;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20transform\x200.5s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x208px\x20rgba(0,0,0,0.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.front-page\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backface-visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.back-page\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backface-visibility:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20rotateY(180deg);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x20100;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.page-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-position:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-size:\x20cover;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.edge-shading\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2098;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-image:\x20linear-gradient(to\x20right,\x20rgba(0,0,0,0.1),\x20transparent\x2010%,\x20transparent\x2090%,\x20rgba(0,0,0,0.1));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.ql-editor\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20inherit;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x20inherit;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.book-controls\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x20'+_0xb1ee5e+'px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x20'+_0x9794f3+_0x20b886(0x269)+_0x4de1cb+'px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.book-controls\x20button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20'+_0x2fee14+_0x20b886(0x23c)+_0x2fee14+_0x20b886(0x2a3)+_0x366671+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20default;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background\x200.3s;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x204px\x20rgba(0,0,0,0.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#flipbook-html-overlay\x20.book-controls\x20button:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x2aa540+_0x20b886(0x200),this[_0x20b886(0x297)]['appendChild'](_0xb72b4a);const _0x39e1df=document[_0x20b886(0x214)](_0x20b886(0x29d));_0x39e1df[_0x20b886(0x246)]='book-container',this[_0x20b886(0x297)][_0x20b886(0x2a8)](_0x39e1df),this[_0x20b886(0x245)]=_0x39e1df,this[_0x20b886(0x2ad)]=document[_0x20b886(0x214)](_0x20b886(0x29d)),this[_0x20b886(0x2ad)][_0x20b886(0x246)]=_0x20b886(0x248),_0x39e1df[_0x20b886(0x2a8)](this['_wrapper']);const _0x429784=document[_0x20b886(0x214)](_0x20b886(0x29d));_0x429784['className']=_0x20b886(0x263);const _0x296607=document['createElement']('button');_0x5b4758[_0x20b886(0x270)]()===_0x20b886(0x22b)?_0x296607['innerHTML']=_0x20b886(0x26d):_0x296607['textContent']=_0x5b4758;_0x296607['onclick']=()=>this['prevPage']();const _0x1e30f1=document[_0x20b886(0x214)](_0x20b886(0x265));_0x3d639a[_0x20b886(0x270)]()===_0x20b886(0x22b)?_0x1e30f1[_0x20b886(0x212)]='<i\x20class=\x22ri-close-line\x22></i>':_0x1e30f1[_0x20b886(0x266)]=_0x3d639a;_0x1e30f1['onclick']=()=>{const _0x5ecdfe=_0x20b886;SoundManager[_0x5ecdfe(0x280)](),SceneManager[_0x5ecdfe(0x241)]();};const _0x5ccc5d=document['createElement'](_0x20b886(0x265));_0xe240ff[_0x20b886(0x270)]()==='auto'?_0x5ccc5d['innerHTML']='<i\x20class=\x22ri-arrow-right-line\x22></i>':_0x5ccc5d['textContent']=_0xe240ff,_0x5ccc5d[_0x20b886(0x203)]=()=>this[_0x20b886(0x2b2)](),_0x429784[_0x20b886(0x2a8)](_0x296607),_0x429784[_0x20b886(0x2a8)](_0x1e30f1),_0x429784[_0x20b886(0x2a8)](_0x5ccc5d),this[_0x20b886(0x297)][_0x20b886(0x2a8)](_0x429784),document['body'][_0x20b886(0x2a8)](this[_0x20b886(0x297)]),this['_contextMenuHandler']=_0x268b0f=>{_0x268b0f['preventDefault']();},document[_0x20b886(0x2a5)](_0x20b886(0x284),this[_0x20b886(0x211)]),this['createFrontCover'](),this[_0x20b886(0x2a4)](),this[_0x20b886(0x22d)](),this['updateBookState'](),this[_0x20b886(0x21e)]=this['updateBookDimensions'][_0x20b886(0x26e)](this),window['addEventListener'](_0x20b886(0x249),this['_resizeHandler']),this[_0x20b886(0x1f0)]();},_0x20e6fe[_0x15e5c6(0x233)]['updateBookDimensions']=function(){const _0x38da62=_0x15e5c6;this[_0x38da62(0x297)][_0x38da62(0x235)][_0x38da62(0x260)]=Graphics[_0x38da62(0x260)]+'px',this['_htmlContainer'][_0x38da62(0x235)][_0x38da62(0x272)]=Graphics[_0x38da62(0x272)]+'px';const _0xa1c05c=document['getElementById']('gameCanvas')[_0x38da62(0x229)]();this['_htmlContainer'][_0x38da62(0x235)][_0x38da62(0x24d)]=_0xa1c05c['left']+'px',this[_0x38da62(0x297)][_0x38da62(0x235)][_0x38da62(0x26c)]=_0xa1c05c[_0x38da62(0x26c)]+'px';const _0x1f3189=Math[_0x38da62(0x215)](Graphics[_0x38da62(0x25c)]*0.6/(this[_0x38da62(0x29e)][_0x38da62(0x261)]||0x190),Graphics['boxHeight']*0.7/(this[_0x38da62(0x29e)][_0x38da62(0x204)]||0x1f4)),_0x1ab2fc=(this['_bookData'][_0x38da62(0x261)]||0x190)*_0x1f3189,_0x4359e3=(this[_0x38da62(0x29e)]['bookHeight']||0x1f4)*_0x1f3189;this['_htmlContainer'][_0x38da62(0x235)][_0x38da62(0x27a)]=_0x38da62(0x1f4)+Graphics['_realScale']+')',this['_htmlContainer']['style'][_0x38da62(0x222)]=_0x38da62(0x277),this[_0x38da62(0x2ad)][_0x38da62(0x235)][_0x38da62(0x260)]=_0x1ab2fc+'px',this['_wrapper'][_0x38da62(0x235)][_0x38da62(0x272)]=_0x4359e3+'px';this[_0x38da62(0x20b)]&&(this[_0x38da62(0x20b)][_0x38da62(0x235)]['width']=_0x1ab2fc+'px',this[_0x38da62(0x20b)][_0x38da62(0x235)][_0x38da62(0x272)]=_0x4359e3+'px');this[_0x38da62(0x288)]&&(this[_0x38da62(0x288)][_0x38da62(0x235)]['width']=_0x1ab2fc+'px',this['_backCover'][_0x38da62(0x235)][_0x38da62(0x272)]=_0x4359e3+'px');const _0x916784=this[_0x38da62(0x2ad)]['querySelectorAll'](_0x38da62(0x252));_0x916784[_0x38da62(0x279)](_0x5c9a44=>{const _0x178046=_0x38da62;_0x5c9a44[_0x178046(0x235)][_0x178046(0x260)]=_0x1ab2fc+'px',_0x5c9a44[_0x178046(0x235)][_0x178046(0x272)]=_0x4359e3+'px';}),this['_bookContainer']['style'][_0x38da62(0x26f)]=_0x1ab2fc+0x28+'px',this['_bookContainer']['style']['minHeight']=_0x4359e3+0x28+'px',this[_0x38da62(0x226)](_0x1ab2fc);},_0x20e6fe['prototype']['updateBookContainerPosition']=function(_0x584b14){const _0x4028fd=_0x15e5c6;if(this[_0x4028fd(0x258)]>0x0){const _0x1bd1a3=_0x584b14/0x2;this[_0x4028fd(0x2ad)][_0x4028fd(0x235)]['transform']=_0x4028fd(0x2a9)+_0x1bd1a3+_0x4028fd(0x276);const _0x5a49d9=_0x584b14*1.5*1.7;this['_bookContainer'][_0x4028fd(0x235)]['width']=_0x5a49d9+'px';}else this['_wrapper'][_0x4028fd(0x235)]['transform']='translateX(0)',this[_0x4028fd(0x245)]['style'][_0x4028fd(0x260)]=_0x584b14+0x28+'px';},_0x20e6fe['prototype'][_0x15e5c6(0x223)]=function(){const _0x13f247=_0x15e5c6,_0x5e9f52=document['createElement'](_0x13f247(0x29d));_0x5e9f52[_0x13f247(0x246)]=_0x13f247(0x267);const _0x2643e7=document[_0x13f247(0x214)](_0x13f247(0x29d));_0x2643e7[_0x13f247(0x246)]='cover-front';const _0x12d044=document['createElement']('div');_0x12d044[_0x13f247(0x246)]=_0x13f247(0x218);if(this[_0x13f247(0x29c)]){const _0x316eac=document[_0x13f247(0x214)]('div');_0x316eac[_0x13f247(0x246)]='page-content\x20ql-editor',_0x316eac[_0x13f247(0x212)]=this['_frontPage'][_0x13f247(0x219)]||'',_0x316eac[_0x13f247(0x235)][_0x13f247(0x24f)]=this[_0x13f247(0x29c)][_0x13f247(0x24f)]||_0x13f247(0x256),this[_0x13f247(0x29c)][_0x13f247(0x286)]&&(_0x316eac[_0x13f247(0x235)][_0x13f247(0x286)]='url(\x22'+this[_0x13f247(0x29c)]['backgroundImage']+'\x22)'),_0x316eac[_0x13f247(0x235)]['textAlign']=this['_frontPage']['alignment']||_0x13f247(0x24d),_0x2643e7[_0x13f247(0x2a8)](_0x316eac);}else _0x2643e7[_0x13f247(0x235)][_0x13f247(0x1ee)]=this['_bookData'][_0x13f247(0x236)]||'#222222';_0x12d044[_0x13f247(0x235)][_0x13f247(0x1ee)]=this[_0x13f247(0x29e)][_0x13f247(0x236)]||_0x13f247(0x253),_0x5e9f52[_0x13f247(0x2a8)](_0x2643e7),_0x5e9f52['appendChild'](_0x12d044),this[_0x13f247(0x20b)]=_0x5e9f52,this[_0x13f247(0x2ad)]['appendChild'](_0x5e9f52);},_0x20e6fe[_0x15e5c6(0x233)][_0x15e5c6(0x2a4)]=function(){const _0x5f2673=_0x15e5c6;for(let _0x5974e4=0x0;_0x5974e4<this[_0x5f2673(0x1fe)][_0x5f2673(0x2a0)];_0x5974e4+=0x2){const _0x4406af=document[_0x5f2673(0x214)](_0x5f2673(0x29d));_0x4406af[_0x5f2673(0x246)]='page',_0x4406af[_0x5f2673(0x235)][_0x5f2673(0x26c)]='0',_0x4406af[_0x5f2673(0x235)][_0x5f2673(0x24d)]='0',_0x4406af[_0x5f2673(0x235)][_0x5f2673(0x28a)]=0x64-_0x5974e4;const _0x559cf4=document[_0x5f2673(0x214)]('div');_0x559cf4[_0x5f2673(0x246)]=_0x5f2673(0x299);const _0x402656=document[_0x5f2673(0x214)]('div');_0x402656[_0x5f2673(0x246)]=_0x5f2673(0x271),_0x559cf4[_0x5f2673(0x2a8)](_0x402656);const _0x15845b=this[_0x5f2673(0x1fe)][_0x5974e4],_0x1c1305=document[_0x5f2673(0x214)](_0x5f2673(0x29d));_0x1c1305[_0x5f2673(0x246)]=_0x5f2673(0x217),_0x1c1305[_0x5f2673(0x212)]=_0x15845b?_0x15845b[_0x5f2673(0x219)]||'':'';_0x15845b&&(_0x1c1305[_0x5f2673(0x235)][_0x5f2673(0x24f)]=_0x15845b[_0x5f2673(0x24f)]||_0x5f2673(0x256),_0x15845b[_0x5f2673(0x286)]&&(_0x1c1305[_0x5f2673(0x235)][_0x5f2673(0x286)]='url(\x22'+_0x15845b[_0x5f2673(0x286)]+'\x22)'),_0x1c1305['style'][_0x5f2673(0x239)]=_0x15845b[_0x5f2673(0x298)]||'left');_0x559cf4[_0x5f2673(0x2a8)](_0x1c1305);const _0x593f32=document['createElement'](_0x5f2673(0x29d));_0x593f32['className']='back-page';const _0x834649=document['createElement']('div');_0x834649['className']=_0x5f2673(0x271),_0x593f32[_0x5f2673(0x2a8)](_0x834649);const _0x557364=this[_0x5f2673(0x1fe)][_0x5974e4+0x1];if(_0x557364){const _0x3729a8=document[_0x5f2673(0x214)](_0x5f2673(0x29d));_0x3729a8[_0x5f2673(0x246)]=_0x5f2673(0x217),_0x3729a8[_0x5f2673(0x212)]=_0x557364[_0x5f2673(0x219)]||'',_0x3729a8[_0x5f2673(0x235)][_0x5f2673(0x24f)]=_0x557364['backgroundColor']||_0x5f2673(0x256),_0x557364[_0x5f2673(0x286)]&&(_0x3729a8[_0x5f2673(0x235)][_0x5f2673(0x286)]='url(\x22'+_0x557364[_0x5f2673(0x286)]+'\x22)'),_0x3729a8[_0x5f2673(0x235)][_0x5f2673(0x239)]=_0x557364[_0x5f2673(0x298)]||_0x5f2673(0x24d),_0x593f32['appendChild'](_0x3729a8);}_0x4406af[_0x5f2673(0x2a8)](_0x559cf4),_0x4406af[_0x5f2673(0x2a8)](_0x593f32),this[_0x5f2673(0x2ad)][_0x5f2673(0x2a8)](_0x4406af);}},_0x20e6fe[_0x15e5c6(0x233)][_0x15e5c6(0x22d)]=function(){const _0x3d9c84=_0x15e5c6,_0x4d50f6=document[_0x3d9c84(0x214)]('div');_0x4d50f6[_0x3d9c84(0x246)]=_0x3d9c84(0x27b),_0x4d50f6[_0x3d9c84(0x235)]['backfaceVisibility']=_0x3d9c84(0x283),_0x4d50f6[_0x3d9c84(0x235)][_0x3d9c84(0x24f)]=this['_bookData'][_0x3d9c84(0x21d)]||'#444444',_0x4d50f6['style']['zIndex']=-0x5;const _0x3b8987=document[_0x3d9c84(0x214)](_0x3d9c84(0x29d));_0x3b8987['className']='page-content\x20ql-editor',_0x3b8987[_0x3d9c84(0x212)]='',_0x3b8987[_0x3d9c84(0x235)][_0x3d9c84(0x239)]=_0x3d9c84(0x24e),_0x4d50f6[_0x3d9c84(0x2a8)](_0x3b8987),this[_0x3d9c84(0x288)]=_0x4d50f6,this['_wrapper'][_0x3d9c84(0x2a8)](_0x4d50f6);},_0x20e6fe[_0x15e5c6(0x233)]['updateBookState']=function(){const _0x1ac4ab=_0x15e5c6,_0x37702d=this['_wrapper'][_0x1ac4ab(0x294)](_0x1ac4ab(0x252)),_0x11ece0=parseFloat(this[_0x1ac4ab(0x2ad)]['style']['width']);this['_frontCover']&&(this['_currentPageIndex']>0x0?(this[_0x1ac4ab(0x20b)][_0x1ac4ab(0x235)][_0x1ac4ab(0x27a)]=_0x1ac4ab(0x26b),this[_0x1ac4ab(0x20b)][_0x1ac4ab(0x235)][_0x1ac4ab(0x28a)]='50'):(this[_0x1ac4ab(0x20b)][_0x1ac4ab(0x235)]['transform']=_0x1ac4ab(0x1fc),this[_0x1ac4ab(0x20b)][_0x1ac4ab(0x235)][_0x1ac4ab(0x28a)]='200'));this['updateBookContainerPosition'](_0x11ece0),_0x37702d[_0x1ac4ab(0x279)]((_0x4ea429,_0x2a0cde)=>{const _0x4b18b8=_0x1ac4ab,_0x32e5c=_0x2a0cde+0x1;_0x32e5c<this[_0x4b18b8(0x258)]?(_0x4ea429[_0x4b18b8(0x235)]['transform']=_0x4b18b8(0x26b),_0x4ea429[_0x4b18b8(0x235)]['zIndex']=0x5a+_0x2a0cde):(_0x4ea429['style'][_0x4b18b8(0x27a)]=_0x4b18b8(0x1fc),_0x4ea429['style']['zIndex']=0x5a-_0x2a0cde);});if(this['_backCover']){const _0x2e7588=_0x37702d['length'];this['_currentPageIndex']>=_0x2e7588+0x1?(this[_0x1ac4ab(0x288)][_0x1ac4ab(0x235)]['visibility']='visible',this['_backCover'][_0x1ac4ab(0x235)]['zIndex']='95'):(this[_0x1ac4ab(0x288)]['style']['visibility']='visible',this['_backCover']['style']['zIndex']='-5');}},_0x20e6fe['prototype'][_0x15e5c6(0x23b)]=function(){const _0x3e1849=_0x15e5c6;Scene_Base[_0x3e1849(0x233)][_0x3e1849(0x23b)][_0x3e1849(0x28b)](this),this['updateChildren']();if(this[_0x3e1849(0x2b0)])return;this[_0x3e1849(0x297)]&&(this[_0x3e1849(0x238)]!==Graphics[_0x3e1849(0x260)]||this[_0x3e1849(0x213)]!==Graphics[_0x3e1849(0x272)]||this[_0x3e1849(0x296)]!==Graphics['_realScale'])&&(this[_0x3e1849(0x238)]=Graphics[_0x3e1849(0x260)],this[_0x3e1849(0x213)]=Graphics['height'],this[_0x3e1849(0x296)]=Graphics[_0x3e1849(0x292)],this[_0x3e1849(0x1f0)]()),this[_0x3e1849(0x20c)](),$gameMap&&($gameMap[_0x3e1849(0x23b)](![]),$gamePlayer[_0x3e1849(0x23b)](![]));},_0x20e6fe[_0x15e5c6(0x233)]['handleInput']=function(){const _0x10151d=_0x15e5c6;if(this[_0x10151d(0x24c)])return;if(Input[_0x10151d(0x20d)](_0x10151d(0x278))||Input[_0x10151d(0x20d)](_0x10151d(0x257))){SoundManager[_0x10151d(0x280)](),SceneManager[_0x10151d(0x241)]();return;}if(Input[_0x10151d(0x20d)](_0x10151d(0x251)))this[_0x10151d(0x2b2)]();else Input[_0x10151d(0x20d)](_0x10151d(0x24d))&&this[_0x10151d(0x2a7)]();},_0x20e6fe['prototype'][_0x15e5c6(0x2b2)]=function(){const _0x43aed8=_0x15e5c6;if(this[_0x43aed8(0x24c)])return;const _0x51da57=0x2,_0x1dc51e=this[_0x43aed8(0x258)]*_0x51da57-0x2,_0x540bbf=_0x1dc51e===this[_0x43aed8(0x1fe)]['length']-0x1;if(_0x540bbf)return;const _0x5835df=this[_0x43aed8(0x2ad)][_0x43aed8(0x294)]('.page')['length'];let _0x37ed5d=_0x5835df+0x1;this[_0x43aed8(0x1fe)]['length']<=0x1&&(_0x37ed5d=_0x5835df),this[_0x43aed8(0x258)]<_0x37ed5d&&(this['_flipInProgress']=!![],AudioManager[_0x43aed8(0x273)]({'name':_0x3d5661,'volume':_0x43c056,'pitch':_0x10a11f,'pan':0x0}),this['_currentPageIndex']++,this['updateBookState'](),setTimeout(()=>{const _0x5a6ee9=_0x43aed8;this[_0x5a6ee9(0x24c)]=![];},0x1f4));},_0x20e6fe[_0x15e5c6(0x233)][_0x15e5c6(0x2a7)]=function(){const _0x287a16=_0x15e5c6;if(this[_0x287a16(0x24c)])return;this[_0x287a16(0x258)]>0x0&&(this[_0x287a16(0x24c)]=!![],AudioManager[_0x287a16(0x273)]({'name':_0x3d5661,'volume':_0x43c056,'pitch':_0x10a11f,'pan':0x0}),this[_0x287a16(0x258)]--,this[_0x287a16(0x220)](),setTimeout(()=>{this['_flipInProgress']=![];},0x1f4));},_0x20e6fe[_0x15e5c6(0x233)]['stop']=function(){const _0x2f082e=_0x15e5c6;Scene_Base[_0x2f082e(0x233)]['stop'][_0x2f082e(0x28b)](this);},_0x20e6fe[_0x15e5c6(0x233)][_0x15e5c6(0x26a)]=function(){const _0x122c16=_0x15e5c6;Scene_Base[_0x122c16(0x233)]['terminate'][_0x122c16(0x28b)](this),this['_resizeHandler']&&(window[_0x122c16(0x25a)](_0x122c16(0x249),this[_0x122c16(0x21e)]),this[_0x122c16(0x21e)]=null),this[_0x122c16(0x297)]&&(document[_0x122c16(0x24b)]['removeChild'](this[_0x122c16(0x297)]),this['_htmlContainer']=null),this[_0x122c16(0x211)]&&(document[_0x122c16(0x25a)](_0x122c16(0x284),this[_0x122c16(0x211)]),this['_contextMenuHandler']=null),this[_0x122c16(0x243)](![]);},_0x20e6fe[_0x15e5c6(0x233)]['blockGameControl']=function(_0x27aae2){const _0x22a748=_0x15e5c6;_0x27aae2?$gameTemp[_0x22a748(0x291)]=!![]:$gameTemp['_mapDisabled']=![];};})());