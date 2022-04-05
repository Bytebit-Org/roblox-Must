# Must
<p align="center">
  <a href="https://github.com/Bytebit-Org/roblox-Must/actions">
      <img src="https://github.com/Bytebit-Org/roblox-Must/workflows/CI/badge.svg" alt="CI status" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-blue.svg" alt="PRs Welcome" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
  </a>
  <a href="https://discord.gg/QEz3v8y">
    <img src="https://img.shields.io/badge/discord-join-7289DA.svg?logo=discord&longCache=true&style=flat" alt="Discord server" />
  </a>
</p>

Must is just a simple function that errors out if the argument is nil / undefined.

## Installation
### roblox-ts
Simply install to your [roblox-ts](https://roblox-ts.com/) project as follows:
```
npm i @rbxts/must
```

### Wally
[Wally](https://github.com/UpliftGames/wally/) users can install this package by adding the following line to their `Wally.toml` under `[dependencies]`:
```
Must = "bytebit/must@1.0.4"
```

Then just run `wally install`.

### From model file
Model files are uploaded to every release as `.rbxmx` files. You can download the file from the [Releases page](https://github.com/Bytebit-Org/roblox-Must/releases) and load it into your project however you see fit.

### From model asset
New versions of the asset are uploaded with every release. The asset can be added to your Roblox Inventory and then inserted into your Place via Toolbox by getting it [here.](https://www.roblox.com/library/9164403107/Warn-Function)

## Documentation
Documentation can be found [here](https://github.com/Bytebit-Org/roblox-Must/tree/master/docs), is included in the TypeScript files directly, and was generated using [TypeDoc](https://typedoc.org/).

## Example
Here's a simple example of a function that just wants to throw if the value it looks up is `nil` / `undefined`.

<details>
  <summary>roblox-ts example</summary>

  ```ts
  import { must } from "@rbxts/must";

  export class Foo {
    public bar() {
      const fetchedValue = must(fetchSomeValue());
      
      // more logic
    }
  }
  ```
</details>

<details>
  <summary>Luau example</summary>

  ```lua
  local must = require(path.to.modules["must"]).must

  local Foo = {}
  Foo.__index = Foo

  function new()
    local self = {}
    setmetatable(self, Foo)

    return self
  end

  function Foo:bar()
    local fetchedValue = must(fetchSomeValue())

    -- more logic
  end

  return {
    new = new
  }
  ```
</details>
