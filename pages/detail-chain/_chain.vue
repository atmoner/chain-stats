<template>
  <v-item-group>
    <v-container>
    <v-breadcrumbs :items="breadcrumbsData"></v-breadcrumbs>
    <ChartChain
      :allValidatorsProp="allValidators"
    />
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-card>
            <v-simple-table fixed-header height="600px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Moniker
                    </th>
                    <th class="text-left">
                      APR
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
                    <th class="text-left">
                      Commissions
                    </th>
                    <th class="text-left">
                      Reward/Day
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="item in allValidators"
                    :key="item.name"
                  >
                    <td>
                    <!--<v-avatar>
                      <img
                        :src="item.logo"
                        alt="John"
                      >
                    </v-avatar>-->

                    {{ item.description.moniker }}
                    </td>
                    <td>{{ (item.valApr * 100).toFixed(2) }} %</td>
                    <td>{{ formatNum((item.tokens / 1000000).toFixed(2)) }} {{ chainDenom }}</td>
                    <td>{{ item.votingPowerPc }} %</td>
                    <td>{{ item.votingPowerCumulative }} %</td>
                    <td>{{ (item.commission.commission_rates.rate * 100).toFixed(2) }} %</td>
                    <td>{{ (item.rewardByDay).toFixed(2) }} {{ chainDenom }}</td>
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
    chainDenom: '',
    chainSlug: '',
    breadcrumbsData: [
      {
        text: 'Dashboard',
        disabled: false,
        href: '/',
      }
    ],
  }),
  computed: {
    ...mapState('data', ['chainId', 'chainValidator', 'finalChainValidator', 'totalTokenBonded', 'inflation', 'allSupply']),
  },
  async mounted () {

    const foundChain = cosmosConfigAllchains.find(element => element.slug === this.$route.params.chain)
    this.chainDenom = foundChain.coinLookup.viewDenom
    this.chainSlug = foundChain.slug

    console.log(foundChain)

    await this.$store.dispatch('data/getValidatorByChain', foundChain)
    await this.$store.dispatch('data/getInflation', foundChain)
    await this.$store.dispatch('data/getAllSupply', foundChain)

    this.allValidators = this.chainValidator

    console.log(this.inflation, this.allSupply)

    var totalTokenBondedPc = this.totalTokenBonded
    var cumulativeShare = 0
    var inflation = this.inflation
    var allSupply = this.allSupply
    this.allValidators.forEach( async function(item){
      try {
        item.votingPowerPc = (((item.tokens / 1000000) * 100) / totalTokenBondedPc).toFixed(2)
        cumulativeShare += (item.tokens / 1000000)
        item.votingPowerCumulative = ((cumulativeShare + item.tokens) * 100 / totalTokenBondedPc).toFixed(2)
        item.valApr = ((allSupply / 1000000 * inflation) * item.votingPowerPc / 100 * (1 - item.commission.commission_rates.rate)) / (item.tokens / 1000000)
        // console.log(item.commission.commission_rates.rate)
        item.rewardByDay = (allSupply / 1000000) * inflation * (item.votingPowerPc / 100) * (item.commission.commission_rates.rate / 1000)
      } catch (error) {
        console.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
      }
    });
    this.breadcrumbsData.push({
        text: this.chainSlug,
        disabled: true
    })


  },
   methods: {
    formatNum(nombre){
      return new Intl.NumberFormat().format(nombre)
    },
  },
}
</script>

