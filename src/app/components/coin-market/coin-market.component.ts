import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

@Component({
  selector: 'app-coin-market',
  templateUrl: './coin-market.component.html',
  styleUrls: ['./coin-market.component.css']
})
export class CoinMarketComponent implements OnInit {

  coins: Coin[] = [] 
  filteredCoins: Coin[] = []
  titles: string [] = [
    '#',
    'Icon',
    'Coin',
    'Precio',
    '24h Change',
    '24h Volume',
  ]
  searchText: string = ''

  constructor(private http: HttpClient) {}

  searchCoin() {

    this.filteredCoins = this.coins.filter(coin => 
      coin.name.toLowerCase().includes(this.searchText.toLowerCase()) || 
      coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );

  }

  ngOnInit(): void {
    this.http
      .get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
    .subscribe(
      (res) => {
        console.log(res)
        this.coins = res
        this.filteredCoins = res
      },
      (err) => console.log(err)
      );
  }

}
