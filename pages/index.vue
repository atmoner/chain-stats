<template>
  <v-item-group>
    <v-container>
    <Chart />
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
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="item in allValidators"
                    :key="item.name"
                  >
                    <td>{{ item.description.moniker }}</td>
                    <td>{{ (item.tokens / 1000000).toFixed(2) }} BCNA</td>
                    <td>{{ (((item.tokens / 1000000) * 100) / totalTokenBonded).toFixed(2) }} %</td>
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
import cosmosConfig from '~/cosmos.config'

export default {
  name: 'IndexPage',
  data: () => ({
    allValidators: '',
    totalTokenBonded: ''
  }),
  async mounted () {
    const allValidators = await axios(cosmosConfig[0].apiURL + `/staking/validators`)
    this.allValidators = allValidators.data.result

    var totalTokenBonded = 0;
    this.allValidators.forEach( async function(item){
      totalTokenBonded += Number(item.tokens)
      // Get all validator 1 by 1
      // const unDelegation = await axios(cosmosConfig[0].apiURL + `/cosmos/staking/v1beta1/validators/` + item.operator_address + '/unbonding_delegations')
      // console.log(unDelegation.data.unbonding_responses)
    });
    this.totalTokenBonded = totalTokenBonded / 1000000
  },
   methods: {

  },
}
</script>
