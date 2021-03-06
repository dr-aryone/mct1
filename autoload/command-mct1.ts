import { Logger } from '../log'
import { commando } from '@magikcraft/mct1/utils/commando'

import { user } from '../user'

const log = Logger('plugins/magikcraft/command-mct1')
// import LightningSuperStrike = require('magikcraft/fx/lightning-super-strike')

commando('mct1', (args, player) => {
    const method = args[0] || 'start'
    const level = Number(args[1]) || 1

    echo(player, `MCT1 command: ${method}`)

    switch (method) {
        case 'start':
            // LightningSuperStrike.kaboom(player.location, 5, 20)
            user(player).mct1.start()
            break
        case 'stop':
            user(player).mct1.stop()
            break
        case 'inventory':
        case 'i':
            user(player).mct1.setDemoInventory()
            break
        case 'debug':
        case 'd':
            user(player).mct1.setDebugMode(true)
            break
        default:
            echo(player, `Unknown /mct1 arg "${args[0]}"`)
            break
    }
})
