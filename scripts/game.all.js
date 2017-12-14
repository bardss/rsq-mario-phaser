var game = new Phaser.Game(260, 240, Phaser.AUTO, "game", { preload: preload, create: create, update: update, render: render });

function preload() {
    // W tej metodzie ładujemy wszystkie potrzebne assety
};

function create() {
    // Metoda create uruchamia się zaraz po uruchomieniu stanu, 
    // możemy w niej zdefiniować zmienne, które będziemy w trakcie gry wykorzystywać
    
};

function update() {
    // Główna pętla gry
    // Metoda uruchamiana jest z bardzo dużą częstotliwością (~60 fps)
};

function render() {
    // Metoda uruchamiana po metodzie update
};