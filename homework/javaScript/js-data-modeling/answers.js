//1
const emailAddresses = {
    id: Number,
    emailAddress: String,
    emailList: [ ],
}
//2
const RadioStations={
    id: Number,
    station: String,
    playlists: [],
    genre: String,
    popularity: Number,
}
//3
const concertTracker = {
    id: Number,
    band: String,
    tourDates: [],
    ticketPurchasing: String,
    nextShow: String,
}
//4
const coffeeShops={
    id:Number,
    shopList:[],
    drinks:[],
    order:[{
        shoppingCart: [],
        pastOrders:[],
    }

    ]
}
//5
const favTeam ={
    id: Number,
    team: String,
    playerStat:[],
    teamStats:[],
}
//final thoughts:
    //trying to find what they all would have in common. Also thinking about how they could be looked up. 