var game = new Phaser.Game(260, 240, Phaser.AUTO, "game", {
    preload: preload,
    create: create,
    update: update,
    render: render
});

var mario;
var cursors;
var spacebar;

function preload() {
    // W tej metodzie ładujemy wszystkie potrzebne assety
    game.load.atlas('mario', 'assets/images/mario/mario.png', 'assets/images/mario/mario.json');

};

function create() {
    // Metoda create uruchamia się zaraz po uruchomieniu stanu,
    // możemy w niej zdefiniować zmienne, które będziemy w trakcie gry wykorzystywać
    game.physics.startSystem(Phaser.Physics.ARCADE);

    mario = game.add.sprite(100, 100, 'mario', 'idle');
    mario.anchor.setTo(0.5) // przesunięcie środka postaci w środek kwadratu
    mario.animations.add('walk', Phaser.Animation.generateFrameNames('walk_', 0, 3, '', 2), 30, true);

    game.physics.enable(mario, Phaser.Physics.ARCADE);

    // Przypisanie do zmiennej kursorów klawiatury jako kontrolera dla gry 
    cursors = game.input.keyboard.createCursorKeys();
    spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
};

function update() {
    // Główna pętla gry
    // Metoda uruchamiana jest z bardzo dużą częstotliwością (~60 fps)
    if (cursors.right.isDown) {
        mario.body.velocity.x = 150;
        mario.scale.x = 1;
        mario.animations.play('walk');
    }
    else if (cursors.left.isDown) {
        mario.body.velocity.x = -150;
        mario.scale.x = -1;
        mario.animations.play('walk');
    }
    else {
        mario.body.velocity.x = 0;
        mario.frameName = "idle";
    }

    if (spacebar.isDown) {
        mario.body.velocity.y = -300;
    }
};

function render() {
    // Metoda uruchamiana po metodzie update
};