import Asset from './Asset.js'
import Grid from '@material-ui/core/Grid';

let assets = [
  {
    "ticker" : "F US",
    "companyName" : "Ford Motor Company Inc",
    "price" : 14.88,
  },
  {
    "ticker" : "AAPL US",
    "companyName" : "Apple Inc",
    "price" : 125.28,
  },
  {
    "ticker" : "NVDA US",
    "companyName" : "Nvidia Corp",
    "price" : 619.52,
  },
  {
    "ticker" : "WMT US",
    "companyName" : "Wal-Mart Stores",
    "price" : 141.69,
  },
  {
    "ticker" : "KO US",
    "companyName" : "Coca-Cola Company",
    "price" : 55.49,
  },
  {
    "ticker" : "QQQ US",
    "companyName" : "Nasdaq QQQ Invesco ETF",
    "price" : 332.88,
  },
  {
    "ticker" : "MMM US",
    "companyName" : "3M Company",
    "price" : 203.24,
  },
  {
    "ticker" : "CAT US",
    "companyName" : "Caterpillar Inc",
    "price" : 203.24,
  },
  {
    "ticker" : "IBM US",
    "companyName" : "International Business Machines",
    "price" : 143.82,
  },
  {
    "ticker" : "JPM US",
    "companyName" : "JPMorgan Chase & Co",
    "price" : 164.35,
  },
  {
    "ticker" : "JNJ US",
    "companyName" : "Johnson & Johnson",
    "price" : 168.81,
  },
  {
    "ticker" : "V US",
    "companyName" : "Visa Inc A Class",
    "price" : 226.86,
  },
];
assets.map(asset => {
  asset['multiplier'] = Math.max(1, Math.round(Math.random() * 5));
});

let assets2d = [];
while (assets.length) assets2d.push(assets.splice(0, 4));

function AssetGrid(){
  return (
    <Grid container spacing={3}>
      {
        assets2d.map(row => {
          return (
            <Grid container item xs={12} spacing={3}>
              {
                row.map(asset => {
                  return (
                    <Grid item xs={3}> 
                      <Asset {...asset} />
                    </Grid>
                  )
                })
              }
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default AssetGrid