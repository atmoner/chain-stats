<template>
  <v-item-group>
    <v-container>

    <ChartChain
      :allValidatorsProp="allValidators"
    />
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-card>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Moniker
                    </th>
                    <th class="text-left">
                      Tokens delegated
                    </th>
                    <th class="text-left">
                      Voting Power
                    </th>
                    <th class="text-left">
                      Cumulative share
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="item in allValidators"
                    :key="item.name"
                  >
                    <td>{{ item.description.moniker }}</td>
                    <td>{{ formatNum((item.tokens / 1000000).toFixed(2)) }} {{ chainDenom }}</td>
                    <td>{{ item.votingPowerPc }} %</td>
                    <td>{{ item.votingPowerCumulative }} %</td>

                    <td>{{ item.tokens }} {{ item.test }}</td>
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
import { mapState } from 'vuex'
import axios from 'axios'
import cosmosConfig from '~/cosmos.config'
import cosmosConfigAllchains from '~/cosmos.allchains.config'

export default {
  name: 'IndexPage',
  data: () => ({
    allValidators: '',
    allValidatorsProps: [],
    chainDenom: ''
  }),
  computed: {
    ...mapState('data', ['chainId', 'chainValidator', 'finalChainValidator', 'totalTokenBonded']),
  },
  async mounted () {

    const foundChain = cosmosConfigAllchains.find(element => element.slug === this.$route.params.chain)
    this.chainDenom = foundChain.coinLookup.viewDenom

    await this.$store.dispatch('data/getValidatorByChain', foundChain)
    this.allValidators = this.chainValidator
    console.log(this.totalTokenBonded)

    var totalTokenBondedPc = this.totalTokenBonded
    var cumulativeShare = 0
    this.allValidators.forEach( async function(item){
      item.votingPowerPc = (((item.tokens / 1000000) * 100) / totalTokenBondedPc).toFixed(2)
      cumulativeShare += (item.tokens / 1000000)
      item.votingPowerCumulative = ((cumulativeShare + item.tokens) * 100 / totalTokenBondedPc).toFixed(2)
      //console.log(item.votingPowerCumulative)
    });

    // await this.$store.dispatch('data/getFinalValidatorData', this.allValidators)
    // console.log(this.finalChainValidator)

  },
   methods: {
    formatNum(nombre){
      return new Intl.NumberFormat().format(nombre)
    },
  },
}
</script>

