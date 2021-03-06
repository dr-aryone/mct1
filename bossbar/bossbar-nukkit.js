"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment = require("@magikcraft/mct1/utils/environment");
var log_1 = require("@magikcraft/mct1/log");
var log = log_1.Logger('NukkitBossBar');
var PokkitPlayer;
var barID = environment.ENGINE_ID;
try {
    PokkitPlayer = Java.type('nl.rutgerkok.pokkit.player.PokkitPlayer');
}
catch (e) {
    console.log('No Pokkit Bar'); // tslint:disable-line
}
var toNukkitPlayer = function (player) { return PokkitPlayer.toNukkit(player); };
exports.bar = function (msg, player) {
    if (msg === void 0) { msg = ''; }
    return new NukkitBossBar(msg, player);
};
var NukkitBossBar = /** @class */ (function () {
    function NukkitBossBar(msg, player) {
        this.id = barID;
        barID++;
        this.bar = new NukkitBossBar.BossBar(player.getName() + this.id, msg, 0, 100);
        this.player = toNukkitPlayer(player);
        return this;
    }
    NukkitBossBar.prototype.render = function () {
        // For the Nukkit bar we render on any property update
        // this.bar.sendTo(this.player)
        return this;
    };
    NukkitBossBar.prototype.color = function (color) {
        // Nukkit has no bar color - it's always purple
        // We have a method for it, and it may work in a future update of the client
        this.bar.setColor(this.player, this.id, color);
        this.bar.sendTo(this.player);
        return this;
    };
    NukkitBossBar.prototype.style = function () {
        // Nukkit has no bar style
        this.bar.sendTo(this.player);
        return this;
    };
    NukkitBossBar.prototype.text = function (title) {
        this.bar.setTitle(title);
        this.bar.sendTo(this.player);
        return this;
    };
    NukkitBossBar.prototype.progress = function (percentage) {
        this.bar.setHealth(percentage);
        this.bar.sendTo(this.player);
        return this;
    };
    NukkitBossBar.prototype.remove = function () {
        this.bar.removeFrom(this.player);
        log("Removing bar " + this.id);
        return this;
    };
    NukkitBossBar.prototype.removeAllBars = function () {
        // @TODO
    };
    NukkitBossBar.BossBar = Java.type(environment.NUKKIT_BOSSBAR_TYPE);
    return NukkitBossBar;
}());
exports.NukkitBossBar = NukkitBossBar;
