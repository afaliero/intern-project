import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StocksComponent } from './stocks/stocks.component';
import { StockInfoComponent } from './stock-info/stock-info.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { StockDataService } from './stock-data.service';
import { NewStocksComponent } from './new-stocks/new-stocks.component';

@NgModule({

  declarations: [
    AppComponent,
    StocksComponent,
    StockInfoComponent,
    SearchBoxComponent,
    NewStocksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [StockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }