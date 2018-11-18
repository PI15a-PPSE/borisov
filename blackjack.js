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

    /*******************
        Renders the card
    *******************/
    Card.prototype.view = function(){
        var htmlEntities = {
            'hearts' : '&#9829;',
            'diamonds' : '&#9830;',
            'clubs' : '&#9827;',
            'spades' : '&#9824;'
        }
        return `
            <div class="card ` + this.suit + `">
                <div class="top rank">` + this.rank + `</div>
                <div class="suit">` + htmlEntities[this.suit] + `</div>
                <div class="bottom rank">` + this.rank + `</div>
            </div>
        `;
    }

    /***************
        Player class
    ***************/

    /*
        Constructor
        @param {String} element - The DOM element
        @param {Array} hand - the array which holds all the cards
    */
    function Player(element, hand){
        this.hand = hand;
        this.element = element;
    }

    /*
        Hit player with new card from the deck
        @param {Card} card - the card to deal to the player
    */
    Player.prototype.hit = function(card){
        this.hand.push(card);
    }
}
