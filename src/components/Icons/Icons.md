```js
const {
  Edit,
  Delete,
  Setting,
  EPayRoll,
  ETime,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Notification,
  Account,
} = require('./');

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
  <div>
    <ArrowDown />
  </div>
  <div>
    <ArrowLeft />
  </div>
  <div>
    <ArrowUp />
  </div>
  <div>
    <ArrowRight />
  </div>
  <div>
    <Notification />
  </div>
  <div>
    <Account />
  </div>
</div>;
```
