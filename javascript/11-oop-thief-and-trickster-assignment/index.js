const Player = require("../11-oop-steal-gold-cp/index");

class Thief extends Player {
  constructor(name) {
    super(name);
    this.job = "Thief";
  }
  
  robbedBlind() {
    // TODO: answer here
    if (this.gold < 10) {
      return "Aku terlalu miskin"
    } else {
      this.setGold(this.getGold() - 10);
      this.setStealChance(this.getStealChance() + 0.5);
      return this.getStealChance();
    }
  }

  steal(player) {
    // TODO: answer here

    if(player.getGold()<=5) {
      return "Lawan terlalu miskin";
    } else {
      if (this.randomizer() < this.getStealChance()) {
        player.setGold(player.getGold()-5);
        this.setGold(this.getGold()+5);

        if (player.job === "Trickster") {
          player.setHasBeenRobbed(false);
          return player.distractionPurse(this);
        } else {
          this.setHasBeenRobbed(true);
          return "Berhasil mencuri 5 gold"
        }
      }
      else {
        this.setHasBeenRobbed(false);
      }
    }

    if (this.getHasBeenRobbed() === true) {
        return `Berhasil mencuri 5 gold`;
      } 
    else {
        return "Gagal mencuri balik";
      }
  }
}

class Trickster extends Player {
  constructor(name) {
    super(name);
    this.distractionPurseChance = 0.25;
    this.job = "Trickster";
  }

  setDistractionPurseChance(chance) {
    // TODO: answer here
    this.distractionPurseChance = chance;
  }

  getDistractionPurseChance() {
    // TODO: answer here
    return this.distractionPurseChance;
  }

  distractionPurse(player) {
    const rng = this.randomizer();
    console.log(rng);
    console.log(this.getDistractionPurseChance());
    // TODO: answer here
    if (rng < this.getDistractionPurseChance()) {
      return this.steal(player);
    } else {
      return "Gagal mencuri balik";
    }
  }

  steal(player) {
    // TODO: answer here
    if (player.getGold() < 10) {
      this.setGold(this.getGold() + player.getGold());
      player.setGold(0);
      return "Berhasil mencuri balik semua uang lawan";
    } else {
      this.setGold(this.getGold() + 10);
      player.setGold(player.getGold() - 10);
      return "Berhasil mencuri balik 10 gold";
    }
  
  }
}
// const Bob = new Thief("Bob").robbedBlind();
// console.log(Bob);
// const Alice = new Trickster("Alice");

// console.log(Alice.distractionPurse(Bob));
// Dilarang menghapus code dibawah ini!!!
module.exports = {
  Thief,
  Trickster,
};
