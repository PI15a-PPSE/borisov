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

    /*************************
        Deck - Singleton class
    *************************/
    var Deck = new function(){
        this.ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.suits = ['hearts', 'spades', 'diamonds','clubs'];
        this.deck;

        /*
            Fills up the deck array with cards
        */
        this.init = function(){
            this.deck = []; //empty the array
            for(var s = 3; s >= 0; s--){
                for(var r = 12; r >= 0; r--){
                    this.deck.push(new Card(this.ranks[r], this.suits[s]));
                }
            }
        }

        /*
            Shuffles the cards in the deck randomly
        */
        this.shuffle = function(){
            var j, x, i;
            for (i = this.deck.length; i; i--) {
                j = Math.floor(Math.random() * i);
                x = this.deck[i - 1];
                this.deck[i - 1] = this.deck[j];
                this.deck[j] = x;
            }
        }

    }
    /**************************** End of Deck class *******************************/
}
