<template>
<div>
<!--reust {{ allValidatorsProp }}-->
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-card
            height="500"
          >
            <v-card-title>Statistic</v-card-title>
            <v-card-text>
              <highchart
                :options="chartOptionsDonuts"
                :modules="['exporting']"
                style="width:100%;"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-card
            height="238"
          >
            <v-card-title>Statistic</v-card-title>
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <tbody>
                    <tr>
                      <td>{{ chainDenom }} supply</td>
                      <td><b>{{ formatNum(allsupply) }}</b> {{ chainDenom }}</td>
                    </tr>
                    <tr>
                      <td>{{ chainDenom }} bonded</td>
                      <td><b>{{ formatNum(totalTokenBonded) }}</b> {{ chainDenom }}</td>
                    </tr>
                    <tr>
                      <td>Unbonded (+ Unbonding)</td>
                      <td><b>{{ formatNum(allsupply - totalTokenBonded) }}</b> {{ chainDenom }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
          <br />
          <v-card
            height="238"
          >
            <v-card-title>Coins details</v-card-title>
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <tbody>
                    <tr>
                      <td>Inflation</td>
                      <td><b>{{ formatNum(inflation) }}</b> %</td>
                    </tr>
                    <tr>
                      <td>Usd price</td>
                      <td>$ <b> {{ coingeckoData.usd }}</b></td>
                    </tr>
                    <tr>
                      <td>Price change</td>
                      <td>{{ coingeckoDataPrice24h }} %</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-card
            height="238"
          >
            <v-card-text>
            <highchart
              :options="chartPrice"
              :modules="['exporting']"
              :update="watchers"

            />
            </v-card-text>
          </v-card>
          <br />
          <v-card
            height="238"
          >

            <v-card-text>
            <highchart
              :options="chartVolume"
              :modules="['exporting']"
              :update="watchers"

            />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-card
            height="238"
          >

            <v-card-text>
            <highchart
              :options="chartCumulative"
              :modules="['exporting']"
              :update="watchers"

            />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

</div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import cosmosConfig from '~/cosmos.config'
import cosmosConfigAllchains from '~/cosmos.allchains.config'

export default {
  props: ['allValidatorsProp'],
  data(props) {
    return {
      symbol: 'BCNA',
      series: [],
      seriesDonut: [],
      allValidators: [],
      allsupply: '',
      coingeckoData: '',
      inflation: '',
      chainDenom: '',
      coingeckoDataPrice24h: '',
      seriesPrice: [],
      seriesVolume: [],
      seriesCumulative: [],
      watchers: [
        'options.title',
        'options.series'
      ],
    }
  },
  computed: {
    ...mapState('data', ['chainId', 'chainValidator', 'finalChainValidator', 'totalTokenBonded']),
    chartOptionsDonuts() {
      return {

        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: this.chainDenom + ' <br />Supply',
            align: 'center',
            verticalAlign: 'middle',
            y: 60
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: this.seriesDonut
        }]
      }
    },
    chartPrice () {
      const ctx = this
      return {
        chart: {
            height: (0.45 * 100) + '%' // 16:9 ratio
        },

        title: {
            text: this.chainDenom + ' price history'
        },

        subtitle: {
            text: 'Source: coingecko.com'
        },

        yAxis: {
            title: {
                text: 'Value'
            }
        },

        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%e %b %y',
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                // pointStart: 2010
            }
        },

        series: [{
            name: 'Price',
            data: this.seriesPrice,
        }/*, {
            name: 'Volume',
            data: this.seriesVolume
        }*/],
      }
    },
    chartVolume () {
      const ctx = this
      return {
        chart: {
            height: (0.45 * 100) + '%' // 16:9 ratio
        },

        title: {
            text: this.chainDenom + ' volume history'
        },

        subtitle: {
            text: 'Source: coingecko.com'
        },

        yAxis: {
            title: {
                text: 'Value'
            }
        },

        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%e %b %y',
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                // pointStart: 2010
            }
        },

        series: [{
            name: 'Volume',
            data: this.seriesVolume,
        }/*, {
            name: 'Volume',
            data: this.seriesVolume
        }*/],
      }
    },
    chartCumulative () {
      const ctx = this
      return {
        chart: {
            height: (0.45 * 100) + '%' // 16:9 ratio
        },

        title: {
            text: this.chainDenom + ' Cumulative chart'
        },

        subtitle: {
            text: ''
        },

        yAxis: {
            title: {
                text: 'Cumulative %'
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                // pointStart: 2010
            }
        },

        series: [{
            name: 'Percent',
            data: this.seriesCumulative,
        }/*, {
            name: 'Volume',
            data: this.seriesVolume
        }*/],
      }
    }
  },
  /* async fetch() {
    // this.fetchData('AAPL')
    // const chartData = await axios('https://api-osmosis.imperator.co/tokens/v2/historical/bcna/chart?tf=5')
    const chartData = await axios('https://api.coingecko.com/api/v3/coins/bitcanna/ohlc?vs_currency=usd&days=365')
    await this.series.push({
      name: 'BCNA',
      data: chartData.data.map((entry) => {
        return [
          entry[0],
          entry[1],
          entry[2],
          entry[3],
          entry[4],
        ]
      })
    })
    this.onloaded = true
  }, */

  async mounted() {
    // this.fetchData('AAPL')
    console.log(this.finalChainValidator)
    const foundChain = await cosmosConfigAllchains.find(element => element.slug === this.$route.params.chain)
    this.chainDenom = foundChain.coinLookup.viewDenom

    await this.$store.dispatch('data/getValidatorByChain', foundChain)
    this.allValidators = this.chainValidator
    console.log(this.totalTokenBonded)

    var totalTokenBondedPc = this.totalTokenBonded
    var seriesCumulative = this.seriesCumulative
    var cumulativeShare = 0
    this.allValidators.forEach( async function(item, index){
      item.votingPowerPc = (((item.tokens / 1000000) * 100) / totalTokenBondedPc).toFixed(2)
      cumulativeShare += (item.tokens / 1000000)
      item.votingPowerCumulative = ((cumulativeShare + item.tokens) * 100 / totalTokenBondedPc).toFixed(2)
      console.log([ item.operator_address, item.votingPowerCumulative ])

      seriesCumulative.push([ ' [' + (index + 1) + '] ' +item.description.moniker, Number(item.votingPowerCumulative) ])
    });


    const allsupply = await axios(foundChain.apiURL + `/cosmos/bank/v1beta1/supply/` + foundChain.coinLookup.chainDenom)
    // let chainSupply = allsupply.data.supply.find(element => element.denom === foundChain.coinLookup.chainDenom);

    this.allsupply = allsupply.data.amount.amount / 1000000

    this.seriesDonut.push([ 'Bounded', this.totalTokenBonded ])
    this.seriesDonut.push([ 'Unbounded', this.allsupply ])

    const coingeckoData = await axios('https://api.coingecko.com/api/v3/coins/' + foundChain.coingeckoId)
    this.coingeckoData = coingeckoData.data.market_data.current_price
    this.coingeckoDataPrice24h = coingeckoData.data.market_data.price_change_percentage_7d

    // Basic line part
    const chartDataAll = await axios('https://api.coingecko.com/api/v3/coins/' + foundChain.coingeckoId + '/market_chart?vs_currency=usd&days=14')
    // const chartDataVolume = await axios('https://api-osmosis.imperator.co/pools/v2/volume/571/chart')

    var seriesPrice = this.seriesPrice
    chartDataAll.data.prices.forEach(function (item) {
      seriesPrice.push([ item[0], item[1] ])
    })

    var seriesVolume = this.seriesVolume
    chartDataAll.data.total_volumes.forEach(function (item) {
      seriesVolume.push([ item[0], item[1] ])
    })


  },
  methods: {

    formatNum(nombre){
      return new Intl.NumberFormat().format(nombre)
    },
    /*async fetchData(symbol) {
    const chartData = await axios('https://api.coingecko.com/api/v3/coins/bitcanna/ohlc?vs_currency=usd&days=365')
    await this.series.push({
      name: 'BCNA',
      data: chartData.data.map((entry) => {
        return [
          entry[0],
          entry[1],
          entry[2],
          entry[3],
          entry[4],
        ]
      })
    })
    }*/
  }
}
</script>

