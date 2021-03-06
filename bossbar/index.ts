import * as environment from '@magikcraft/mct1/utils/environment'
import { color, IBossBar, style } from './bossbar'

let bar = (msg, player) => ({} as IBossBar)

if (environment.HAS_BOSSBAR_BUKKIT) {
    const Bukkit = require('./bossbar-bukkit') // tslint:disable-line - side-effects
    bar = Bukkit.bar
}

if (environment.HAS_BOSSBAR_NUKKIT) {
    const Nukkit = require('./bossbar-nukkit') // tslint:disable-line - side-effects
    bar = Nukkit.bar
}

export let BossBar = {
    bar,
    color,
    style,
}
