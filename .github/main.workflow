workflow "Push" {
  on = "push"
  resolves = ["Filters for GitHub Actions", "Build"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  args = "run build"
}

action "Filter master branch" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  needs = ["Build"]
  args = "branch master"
}

action "Deploy to GitHub Pages" {
  uses = "maxheld83/ghpages@v0.2.1"
  needs = ["Filter master branch"]
  env = {
    BUILD_DIR = "dest/"
  }
  secrets = ["GITHUB_TOKEN"]
}
