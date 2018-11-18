/*
    Blackjack 21
    A simple game developed using Javascript, HTML and CSS

    @author Vladislav Borisov
    @version 0.99
    @date 18.11.2018
*/

//namespacing
var BlackjackJS = (function() {
    /**************
        Card class
    ***************/

    /*
        Constructor
        @param {String} rank
        @param {String} suit
    */
    function Card(rank, suit){
        this.rank = rank;
        this.suit = suit;
    }
    /*
        Gets the value or points of the card
        @param {Integer} currentTotal - The current total score of the
        player's hand
    */
    Card.prototype.getValue = function(currentTotal){
        var value = 0;

        if (this.rank == 'A' && currentTotal < 11){
            value = 11;
        } else if (this.rank == 'A'){
            value = 1;
        } else if (this.rank == 'J' || this.rank == 'Q' || this.rank == 'K'){
            value = 10;
        } else {
            value = parseInt(this.rank);
        }
        return value;
    }
    
}
