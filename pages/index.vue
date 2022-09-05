<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <!--<v-expansion-panels>
            <v-expansion-panel
              v-for="item in configData"
              :key="item.name"
            >
              <v-expansion-panel-header>
                Item
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>-->
    <v-card>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Mode
            </th>
            <th class="text-left">
              Token
            </th>
            <th class="text-left">
              Token value
            </th>
            <th class="text-left">
              Total value
            </th>
            <th class="text-left">
              Token bounded
            </th>
            <th class="text-left">
              % bounded
            </th>
            <th class="text-left">
              Inflation
            </th>
            <th class="text-left">
             Active validators
            </th>
            <th class="text-left">
              Validator 33%
            </th>
            <th class="text-left">
              Validator 66%
            </th>
          </tr>
        </thead>
        <tbody>

          <tr
            v-for="item in configData"
            :key="item.name"

          >
            <td>
              <v-avatar size="36">
                <img
                  :src="item.icon"
                  :alt="item.chainName"
                >
              </v-avatar>
              <NuxtLink :to="'detail-chain/' + item.chainSlug">{{ item.chainName }}</NuxtLink>
            </td>
            <td><span :class="item.chainMode === 'testnet' ? 'orange--text' : 'green--text'">{{ item.chainMode }}</span></td>
            <td>{{ item.chainToken }}</td>
            <td>${{ item.price }}</td>
            <td>{{ formatNum(item.supply.amount.amount / 1000000) }} {{ item.chainToken }}</td>
            <td>{{ formatNum(item.totalTokenBonded) }} {{ item.chainToken }}</td>
            <td>{{ ((item.totalTokenBonded * 100) / (item.supply.amount.amount / 1000000)).toFixed(2) }}%</td>
            <td>{{ item.inflation }}%</td>
            <td>{{ item.valNumber }}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import axios from 'axios'
import cosmosConfig from '~/cosmos.allchains.config'

export default {
  data() {
    return {
      symbol: 'AAPL',
      watchers: ['options.series'],
      series: [],
      config: cosmosConfig,
      configData: '',
      coinGeekoData: []
    }
  },
  computed: {

  },
  async mounted() {
    await this.fetchCoinGeeko()
    this.fetchData()
  },
  methods: {
    formatNum(nombre){
      return new Intl.NumberFormat('en-US').format(nombre)
    },
    async fetchCoinGeeko(){
      var coingeckoFinal = ''
      cosmosConfig.forEach(function(item) {
        coingeckoFinal += item.coingeckoId + ','
      })
      // Make a request for a user with a given ID
      var coinGeekoData = this.coinGeekoData
      var coinGeekoData = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=' + coingeckoFinal + '&vs_currencies=usd')
      this.coinGeekoData = coinGeekoData.data

      return true
    },
    async fetchData(data) {

      var copieChain = []
      var coinGeekoData = this.coinGeekoData

      cosmosConfig.forEach(function(item){
        var getAllData = Promise.all([
          fetch(item.apiURL + `/staking/validators`).then(resp => resp.json()),
          fetch(item.apiURL + `/cosmos/bank/v1beta1/supply/` + item.coinLookup.chainDenom).then(resp => resp.json()),
          fetch(item.apiURL + '/cosmos/mint/v1beta1/inflation').then(resp => resp.json()),

        ])
        getAllData.then((value) => {
          // Total Bounded
          var totalTokenBonded = 0
          var cumulativeShare = 0

          value[0].result.forEach( async function(itemVal){
            totalTokenBonded += Number(itemVal.tokens)
          })

          var price = ''
          if (typeof coinGeekoData[item.coingeckoId].usd === 'undefined') {
            price = 0 + ' (Unavailable)'
          } else
            price = coinGeekoData[item.coingeckoId].usd


          var finalDataValue = {
            chainName: item.name,
            chainSlug: item.slug,
            chainMode: item.mode,
            chainToken: item.coinLookup.viewDenom,
            icon: item.coinLookup.icon,
            validators: value[0],
            totalTokenBonded: totalTokenBonded / 1000000,
            supply: value[1],
            price: price,
            inflation: Number(value[2].inflation * 100).toFixed(2),
            valNumber: value[0].result.length,
          }

          copieChain.push(finalDataValue);

        })

      });
      // console.log(copieChain)
      this.configData = copieChain
      // console.log(this.configData)

    }
  }
}
</script>

