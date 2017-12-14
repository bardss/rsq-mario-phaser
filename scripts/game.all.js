var game = new Phaser.Game(260, 240, Phaser.AUTO, "game", { preload: preload, create: create, update: update, render: render });

var mario;

function preload() {
    // W tej metodzie ładujemy wszystkie potrzebne assety
    game.load.atlas('mario', 'assets/images/mario/mario.png', 'assets/images/mario/mario.json');

};

function create() {
    // Metoda create uruchamia się zaraz po uruchomieniu stanu,
    // możemy w niej zdefiniować zmienne, które będziemy w trakcie gry wykorzystywać
    game.physics.startSystem(Phaser.Physics.ARCADE);

    mario = game.add.sprite(100, 100, 'mario', 'idle');

    game.physics.enable(mario, Phaser.Physics.ARCADE);
};

function update() {
    // Główna pętla gry
    // Metoda uruchamiana jest z bardzo dużą częstotliwością (~60 fps)
    
};

function render() {
    // Metoda uruchamiana po metodzie update
};