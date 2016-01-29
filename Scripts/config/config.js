var config;
(function (config) {
    // State Constants
    config.MENU_STATE = 0;
    config.PLAY_STATE = 1;
    config.OVER_STATE = 2;
    //screen constant
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    //game constant
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 120;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map