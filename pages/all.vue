<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
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
              {{ item.chainName }}
            </td>
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
  </div>
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
      configData: ''
    }
  },
  computed: {

  },
  mounted() {
    /* var copieChain = [];

    cosmosConfig.forEach(function(item){
      copieChain.push(item);
    });

    this.configData = copieChain
    // console.log(this.configData) */
    this.fetchData('test')

  },
  methods: {
    formatNum(nombre){
      return new Intl.NumberFormat('en-US').format(nombre)
    },
    async fetchData(data) {

      var copieChain = [];

      cosmosConfig.forEach(function(item){
        // copieChain.push(item);
        // console.log(item.apiURL)
        var getAllData = Promise.all([
          fetch(item.apiURL + `/staking/validators`).then(resp => resp.json()),
          fetch(item.apiURL + `/cosmos/bank/v1beta1/supply/` + item.coinLookup.chainDenom).then(resp => resp.json()),
          fetch('https://api.coingecko.com/api/v3/simple/price?ids=' + item.coingeckoId + '&vs_currencies=usd').then(resp => resp.json()),
          fetch(item.apiURL + '/cosmos/mint/v1beta1/inflation').then(resp => resp.json()),

        ])
        getAllData.then((value) => {
          // Total Bounded
          var totalTokenBonded = 0
          var cumulativeShare = 0

          value[0].result.forEach( async function(itemVal){
            totalTokenBonded += Number(itemVal.tokens)
            // Get all validator 1 by 1
            // const unDelegation = await axios(cosmosConfig[0].apiURL + `/cosmos/staking/v1beta1/validators/` + item.operator_address + '/unbonding_delegations')
            // console.log(unDelegation.data.unbonding_responses)
          });
          if (item.name === 'BitCanna') {
            value[0].result.forEach( async function(itemVal){
              console.log(itemVal.description.moniker, (itemVal.tokens / totalTokenBonded) * 100)
            });
          }


          var price = ''
          if (typeof value[2][item.coingeckoId].usd === 'undefined') {
            price = 0 + ' (Unavailable)'
          } else
            price = value[2][item.coingeckoId].usd


          var finalDataValue = {
            chainName: item.name,
            chainToken: item.coinLookup.viewDenom,
            icon: item.coinLookup.icon,
            validators: value[0],
            totalTokenBonded: totalTokenBonded / 1000000,
            supply: value[1],
            price: price,
            inflation: Number(value[3].inflation * 100).toFixed(2),
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

