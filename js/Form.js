class Form{
    constructor(){}
    display(){
        var title=createElement('h1');
        title.html("Shodow Car Racing Game")
        title.position(550,0)
        var input = createInput("")
        input.position(600,200)
        var Button=createButton("Play")
        Button.position(650,250)
        var greeting=createElement("h2")
        Button.mousePressed(function(){
            input.hide()
            Button.hide()
            var name=input.value()
            playerCount=playerCount+1;
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("Hello "+name)
            greeting.position(650,200)
        })
    }
}