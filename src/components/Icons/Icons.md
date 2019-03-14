Icon Edit

```js
const Edit = require('./Edit').default;
const Delete = require('./Delete').default;
const Setting = require('./Setting').default;
const EPayRoll = require('./EPayRoll').default;
const ETime = require('./ETime').default;
const ArrowDown = require('./ArrowDown').default;
const ArrowLeft = require('./ArrowLeft').default;
const ArrowRight = require('./ArrowRight').default;
const ArrowUp = require('./ArrowUp').default;

<div className="icon-list">
  <div>
    <Edit />
  </div>
  <div>
    <Delete />
  </div>
  <div>
    <Setting />
  </div>
  <div>
    <Setting active={true} />
  </div>
  <div>
    <EPayRoll />
  </div>
  <div>
    <EPayRoll active={true} />
  </div>
  <div>
    <ETime />
  </div>
  <div>
    <ETime active={true} />
  </div>
</div>;
```
