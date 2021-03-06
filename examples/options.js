var printMessage = require('../');

printMessage([
    "You can set your own options for border"
], {
    border: true,
    borderColor: 'blue',
    borderSymbol: '│',
    sideSymbol: '│',
    leftTopSymbol: '└',
    leftBottomSymbol: '┌',
    rightTopSymbol: '┘',
    rightBottomSymbol: '┐',
    marginTop: 3,
    marginBottom: 3,
    paddingTop: 2,
    paddingBottom: 2,
    printFn: function (message) {
        process.stdout.write(message);
    }
});
